<template>
	<div class="chooser-component">
		<ul class="choose-list">
			<li v-for="(item,index) in selections"
				@click="chooseSlection(index)"
				:title="item.label"
				:class="{active: index === nowIndex}">{{ item.label }}</li>
		</ul>
	</div>
</template>
<script>
export default{
	props: {
		selections: {
			type: Array,
			default: [{
				label: '',
				value: 0
			}]
		}
	},
	data () {
		return {
			nowIndex: 0
		}
	},
	methods: {
		chooseSlection(index){
			this.nowIndex = index,
			this.$emit('on-change',this.selections[index])
		}
	}
}
</script>
<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
  height: 0
}
.choose-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
  color: black;
  position: relative;
  left: 170px;
  top: 30px;
  font-size: 1em;
  border-radius: 10px
}
.choose-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
  box-shadow: 1px 1px 6px #080808
}
.selection-list{
  height: 100px
}
</style>