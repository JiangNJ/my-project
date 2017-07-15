<template>
  <div class="slide-show">
  	<div class="slide-img">
  		<a :href="slides[nowIndex].href">
			<transition name="slide-trans">
				<img v-if="isshow"
					:src="slides[nowIndex].src">
			</transition>
			<transition name="slide-trans-old">
				<img v-if="!isshow" 
				:src="slides[nowIndex].src">
			</transition>
  		</a>
  	</div>
  	<h2>{{ slides[nowIndex].title }}</h2>
  	<ul class="slide-pages">
  		<li @click="goto(prevIndex)">&lt;</li>
  		<li v-for="(item, index) in slides" @click="goto(index)">
  			<a :class="{show1: index === nowIndex}">{{ index+1 }}</a>
  		</li>
  		<li @click="goto(nextIndex)">&gt;</li>
  	</ul>
  </div>
</template>

<script>
export default {
	props: {
		slides: {
			type: Array,
			default: [],
		},
		inv: {
			type: Number,
			default: 5000
		}
	},
	data (){
		return {
			nowIndex: 0,
			isshow: true
		}
	},

	computed: {
		prevIndex () {
			if(this.nowIndex === 0){
				return this.slides.length -1
			}else{
				return this.nowIndex - 1
			}
		},
		nextIndex () {
			if(this.nowIndex === this.slides.length-1){
				return 0
			}else{
				return this.nowIndex + 1
			}
		},
	},

	methods: {
		goto(index){
			this.isshow = false
			setTimeout(()=>{
				this.isshow = true
				this.nowIndex = index   
			},10)                  
		},

		runInv() {
			this.invId = setInterval(() => {
				this.goto(this.nextIndex)
			},this.inv)
				
		}
	},
	mounted(){
		this.runInv()
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-show {
	position: absolute;
	left: 30%;
	top: 10.5%;
	width: 900px;
	height: 460px;
	overflow: hidden;
	border-radius: 10px;
	box-shadow: 1px 1px 6px #080808
}

img {
  width: 900px;
  height: 500px;
  margin: 0;
  position: absolute;
}
a{
	text-decoration: none;
	color: #fff
}

a:hover {
	color: #080808;
}
h2{
	position: absolute;
	top: 427px;
	left: 0;
	width: 900px;
	background-color: #bebebe;
	opacity: 0.7;
	border-radius: 0 0 10px 10px
}
.show1{
	color: black
}
ul{
	position: relative;
	left: 0;
	top: 430px
}
li:hover {
	color: #080808;
}
.slide-trans-enter-active {
  transition: all .5s;
  opacity: 1
}
.slide-trans-enter {
  transform: translateX(900px);
  opacity: 0
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
  opacity: 0
}
</style>
