<template>
	<div class="count-component">
		<div class="counter-btn" @click="minus"> - </div>
		<div class="counter-show">
			<input type="text" v-model="number"  @keyup="fixNumber">
		</div>
		<div class="counter-btn" @click="add"> + </div>
	</div>
</template>

<script>
	export default{
		props: {
			max: {
				type: Number,
				default: 50
			},
			min: {
				type: Number,
				default:1
			}
		},
		data(){
			return {
				number: this.min
			}
		},
		watch:{											//监听number事件，当number改变时触发，向父组件传递this.number
			number(){
				this.$emit('on-change',this.number)
			}
		},
		methods:{
			minus(){
				if(this.number <= this.min){
					return
				}else{
					this.number --
				}
			},
			add(){
				if(this.number >= this.max){
					return
				}else{
					this.number ++
				}
			},
			fixNumber(){							//1.先判断传入数据是否为数字，不是数字则删去，是数字则将数字赋值给fix
				let fix 										
				if(typeof this.number === 'string'){
					fix = Number(this.number.replace(/\D/g, ''))
				}else{
					fix = this.number
				}
				if(fix>this.max || fix< this.min){			//fix如果大于Max或者小于Min,则返回fix
					fix = this.min
				}
				this.number = fix 						
			}
		}
	}
</script>
<style scoped>
.counter-component {
  position: absolute;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.counter-show {
  float: left;
}
.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 25px;
  line-height: 23px;
  width: 30px;
  text-indent: 4px;
	
}
.counter-btn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}
.counter-btn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>