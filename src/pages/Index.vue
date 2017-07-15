<template>
<div class="index-wrap">
    <div class="index-left">
      	<div class="index-left-block">
	        <h1>全部产品</h1>
	        <template v-for='product in productList'>			<!-- 运用v-for的方法将productList的遍历出来渲染 -->
	        	<h2>{{ product.title }}</h2>					<!-- 将productList里的title渲染出来 -->
	        	<ul>
	        		<li v-for="item in product.list">
	        			<router-link :to="{path: 'detail/'+ item.toke}">{{ item.name }}</router-link>
	        		</li>
	        	</ul>
        	<div v-if="!product.last" class="hr"></div>			
        	<!-- 此div原本是用作分隔，pc会先进行渲染，所以设置v-if,当v-if为flase时，则不进行渲染 -->
	        </template>
     	</div>
     	<div class="index-left-block lastest-news news">
     		<h1>最新消息</h1>
		        <ul>
		        	<li v-for="item in newsList">
		        		<a :href="item.url">{{ item.title }}</a>
		        	</li>
		        </ul>
			</transition>	

     	</div>
    </div>

    <div class="index-right">
    	<slide-show :slides="slides" ></slide-show>	
      	<div class="index-board-list">
       		<div class="index-board-item" 
       			 v-for="item in boardList"
       			 :class="'index-board-'+ item.id">					<!-- 在script中给每个图标设置id，在css中设置样式，再用v:bind方法给遍历出来的div,绑定class值-->
       			<div class="index-board-item-inner">
       				<h2>{{ item.title }}</h2>
       				<p>{{ item.description }}</p>
       				<div class="index-board-button">
       					<router-link :to="{path: 'detail/'+ item.toKey}" class="button">立即购买</router-link>
       				</div>
       			</div>
        	</div>
     	 </div>
    </div>
</div>

</div>
</template>
<script>
	import slideShow from '../components/slideShow'
	export default{
		components:{
			slideShow
		},
		created: function(){
			this.$http.get('getList')
			.then(function(data){
				console.log(data)
			},function(err){
				console.log(err)
			})
		},
		data (){
			return {
				slides: [
			        {
			          src: require('../assets/slideShow/pic1.jpg'),
			          title: 'react.js',
			          href: 'detail/analysis'
			        },
			        {
			          src: require('../assets/slideShow/pic2.jpg'),
			          title: 'android',
			          href: 'detail/count'
			        },
			        {
			          src: require('../assets/slideShow/pic3.jpg'),
			          title: 'number',
			          href: 'detail/publish'
			        },
			        {
			          src: require('../assets/slideShow/pic4.jpg'),
			          title: 'git',
			          href: 'detail/forecast'
			        }
			      ],
				boardList: [
			        {
			          title: '开放产品',
			          description: '开放产品是一款开放产品',
			          id: 'car',
			          toKey: 'analysis'
			        },
			        {
			          title: '品牌营销',
			          description: '品牌营销帮助你的产品更好地找到定位',
			          id: 'earth',
			          toKey: 'count'
			        },
			        {
			          title: '使命必达',
			          description: '使命必达快速迭代永远保持最前端的速度',
			          id: 'loud',
			          toKey: 'forecast'
			        },
			        {
			          title: '勇攀高峰',
			          description: '帮你勇闯高峰，到达事业的顶峰',
			          id: 'mouten',
			          toKey: 'publish'
			        }
			      ],
				newsList: [
				{
			      "id": 1,
			      "title": "新闻条目1",
			      "url": "http://starcraft.com"
			    },
			    {
			      "id": 2,
			      "title": "新闻条目2",
			      "url": "http://warcraft.com"
			    },
			    {
			      "id": 3,
			      "title": "新闻条目3",
			      "url": "http://overwatch.com"
			    },
			    {
			      "id": 4,
			      "title": "新闻条目4",
			      "url": "http://hearstone.com"
			    }
			    ],
				productList: {
					pc: {
						'title': 'PC产品',
						list: [
							{
				              name: '数据统计',
				              toke: 'count'
				            },
				            {
				              name: '数据预测',
				              toke: 'forecast'
				            },
				            {
				              name: '流量分析',
				              toke: 'analysis',
				            },
				            {
				              name: '广告发布',
				              toke: 'publish'
				            }
						]
					},
					app: {
						'title': 'APP',
						last: true,     //不是
						list: [
							{
				              name: '91助手',
				              url: 'http://weixin.com'
				            },
				            {
				              name: '产品助手',
				              url: 'http://twitter.com',
				            },
				            {
				              name: '智能地图',
				              url: 'http://maps.com'
				            },
				            {
				              name: '团队语音',
				              url: 'http://phone.com'
				            }
						]
					},
				}
			}
		}
	}
</script>
<style scoped>
.index-right {
  float: right;
  width: 900px;
}
.imgplayed{
	border: 1px solid;
	position: absolute;
	left: 450px;
	top: 100px;
}
.index-board-list {
  overflow: hidden;
  height: 400px;
  width: 1000px;
  position: absolute;
  left: 29%;
  top: 60%;
  padding-left: 25px;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  padding: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  box-shadow: 1px 1px 6px #080808;
  border-radius: 10px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;

}
.index-board-car .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-mouten .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: -100px;
  padding-top: 0
}
.index-board-item p{
	height: 30px
}
.index-board-button {
	margin-top: 20px;
	margin-left:  150px;
	background-color: #7ccd7c; 
	box-shadow: 1px 1px 6px #080808;
	cursor: pointer;
	border-radius: 1px;
	width: 70px;
	height: 25px;
	padding: 2px
}

.button{
	text-decoration: none;
	padding: 2px;
}
.button:hover {
	color: red;
}
.index-wrap{
	width: 270px;
	height: 500px;
	margin-left: 80px;
	font-family:STFangsong
}
.index-left-block{
	height: 385px;
	width: 250px;
	padding-top: 10px;
	background-color: #fff;
	box-shadow: 1px 1px 6px #080808;
	position: absolute;
	top: 100px;
	left: 10%;
	border-radius: 5px
}
.hr{
	border: 1px solid #c9c9c9;
	position: absolute;
	top: 215px;
	left: 25px;
	width: 80%;
}
h1{
	width: 100%;
	background-color: #7ccd7c;
	font-size: 30px;
	box-shadow: 1px 1px 6px #080808;
	position: absolute;
	top: 1px;
	border-radius: 5px
}
h2{
	padding-top: 40px;
	padding-left: 10px;
	height: 130px;
}
ul{
	width: 110px;
	left: -100px;
	top: -90px;
}
li{
	font-size: 20px;
	text-decoration: none
}
.index-left a{
	color: #b3b3b3;
	text-decoration: none;

}
a:hover {
	color: #080808;
}

.lastest-news{
	height: 440px;
	position: absolute;
	top: 500px
}
.lastest-news h1{
	position: absolute;
	top: 1px;
}

.news ul{
	width: 160px;
	height: 340px;
	position: relative;
	top: 30px;
	left: -50px
}
.news li{
	display: block;
	width: 100px;
	height: 20px
}

</style>