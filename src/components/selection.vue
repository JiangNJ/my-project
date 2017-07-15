<template>
    <div class="selection-component">
      <div class="selection-show" @click="toggleDrop">
        <span>{{ selections[nowIndex].label }}</span>
        <div class="arrow"></div>
      </div>
      <div class="selection-list" v-if="isDrop">
        <ul>
          <li v-for="(item,index) in selections" @click="changeSelection(index)">{{ item.label }}</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default{
	props: {
		selections: {
			type: Array,
			default: [{
				label: 'test',
				value: 0
			}]
		}
	},
	data(){
		return {
			nowIndex: 0,
			isDrop: false
		}
	},
	methods: {
		toggleDrop(){
			this.isDrop = !this.isDrop
		},
    changeSelection(index){
      this.nowIndex = index,
      this.isDrop = false,
      this.$emit('on-change',this.selections[this.nowIndex])
    }
	}
}
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
	color: black;
	font-size: 1em
}
.selection-component{
	max-width: 100px;
	height: 27px;
	position: relative;
	display: inline-block;
}
.selection-show {
  border: 1px solid #a3a3a3;
  padding: 0 20px 0 10px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  line-height: 25px;
  border-radius: 3px;
  background: #fff;
  width: 56px;
}
.selection-show .arrow {
  display: inline-block;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #a3a3a3;
  width: 0;
  height: 0;

  vertical-align: middle;
  position: absolute;
  left: 70px;
  top: 12px;
}
.selection-list {
  display: inline-block;
  position: absolute;
  left: 0;
  padding: 1px 0 5px 9px;
  top: 25px;
  width: 78px;
  background: #fff;
  border: 1px solid #a3a3a3;
  z-index: 5;
}
.selection-list li {
  padding: 0 0 0 1px;
  cursor: pointer;
  background: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  left: 170px;
  top: 60px;
  display: block;
}
.selection-list li:hover {
  background: #a3a3a3;
}
</style>
