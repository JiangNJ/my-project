<template>
  <div class="detail-wrap">
    <div class="detail-left">
      <div class="product-board">
        <img src="../assets/images/1.png">
        <ul>
<!--         	<li v-for="item in products">{{ item.name }}</li> -->
          <router-link  v-for="item in products" 
          				:to="{ path: item.path }" 
          				tag="li" 
          				active-class="active">
            {{ item.name }}
          </router-link>
        </ul>
      </div>
    </div>
    <div class="detail-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [
        {
          name: '数据统计',
          path: 'count',
          icon: require('../assets/images/1.png'),
          active: false
        },
        {
          name: '数据预测',
          path: 'forecast',
          active: false
        },
        {
          name: '流量分析',
          path: 'analysis',
          active: false
        },
        {
          name: '广告发布',
          path: 'publish',
          active: false
        }
      ],
      imgMap: {
        '/detail/count': require("../assets/images/1.png"),
        '/detail/forecast': require("../assets/images/2.png"),
        '/detail/analysis': require("../assets/images/3.png"),
        '/detail/publish': require("../assets/images/4.png")
      }
    }
  },
  computed: {
    productIcon () {
      return this.imgMap[this.$route.path]
    }
  }
}
</script>

<style scoped>
.detail-wrap{
	width: 1200px;
	margin: 0 auto;
	overflow: hidden;
	padding-right: 120px ;
  height: 850px
}
.detail-left {
  float: left;
  width: 190px;
  height: 320px;
  text-align: center;
  margin-top: 30px;
  background-color: white;
  padding-right: 10px
}
.product-board img{
	height: 150px;
	width: 150px
}
.detail-right {
  float: right;
  width: 980px;
  height: 10px;
  margin: 30px -50px 0 0;
}
.product-board li{
	position: relative;
	left: 170px;
	top: 50px;
	display: block;
	color: black;
	padding: 0 10px 0 10px;
}

.product-board li.active,
.product-board li:hover {
  background-color: #7ccd7c;
  border-radius: 10px;
  box-shadow: 1px 1px 10px #080808
}
.selection-component {
  position: relative;
  display: inline-block;
}
.selection-show {
  border: 1px solid #e3e3e3;
  padding: 0 20px 0 10px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 25px;
  line-height: 25px;
  border-radius: 3px;
  background: #fff;
}
.selection-show .arrow {
  display: inline-block;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #e3e3e3;
  width: 0;
  height: 0;
  margin-top: -1px;
  margin-left: 6px;
  margin-right: -14px;
  vertical-align: middle;
}
.selection-list {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 25px;
  width: 100%;
  background: #fff;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  z-index: 5;
}
.selection-list li {
  padding: 5px 15px 5px 10px;
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
  cursor: pointer;
  background: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}
.selection-list li:hover {
  background: #e3e3e3;
}
</style>