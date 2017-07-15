<template>
	<div>
		<div class="dialog-wrap" v-if="isShow"></div>
			<div class="dialog-cover" v-if="isShow">
				<div class="dialong-content">
					<p class="dialog-close" @click="closed">X</p>
					<slot></slot>			<!-- 与layout里的my-dialog标签相对应，my-dialog里的数据会被传入layout -->
				</div>
			</div>

	</div>
</template>
<script>
	export default{
		props:{
			isShow: {
				type: Boolean,
				default: false
			}
		},
		methods: {					
			closed(){			//关闭一个事件用$emit对父组件进行事件传递
				this.$emit('on-close')
			}
		}

	}
</script>
<style scoped>
.dialog-wrap{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #000;
	opacity: 0.5;
}
.dialog-cover {
  background-color: #f7f7f7;
  opacity: 1;
  position: relative;
  z-index: 5;
  top: -600px;
  left: 40%;
  max-width: 410px;
  max-height: 200px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 40px;
  box-shadow: 2px 2px 50px black;
  margin: -50px;
}
.dialog-content {
  width: 50%;
  position: fixed;
  max-height: 50%;
  overflow: auto;
  background: white;
  top: 20%;
  left: 50%;
  margin-left: -25%;
  z-index: 10;
  opacity: 1;
  border: 2px solid #464068;
  line-height: 1.6;
  border-radius: 5px
}
.dialog-close {
	position: absolute;
	right: 10px;
	top: 5px;
	width: 17px;
	height: 17px;
	text-align: center;
	cursor: pointer;
	border-radius: 5px;
	font-size: 10px;
  	border-radius: 10px;
	background-color: #aaaaaa;
	box-shadow: 1px 1px 6px black
}
.dialog-close:link{
	background-color: #080808
}
.dialog-close:hover{
	background-color: #ee3b3b
}
</style>