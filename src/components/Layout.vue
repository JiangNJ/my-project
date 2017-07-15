<template>
	<div class="app-wrap">
		<div class="app-header">
			<div class="app-header-inner">
				<router-link :to="{path: '/'}">
					<img src="../assets/logo.png">
				</router-link>
					<div class="head-nav">
						<ul class="nav-list">
							<li @click="regClick">登陆</li>
							<li class="nav-pile"></li>
							<li @click="logClick">注册</li>
							<li class="nav-pile"></li>
							<li @click="aboutClick">关于</li>				<!-- 设置一个about的点击自定义事件（自定事件要在methods定义，父组件监听触发） -->
						</ul>
					</div>
				</div>
		</div>
			
		<div class="app-content">
			<keep-alive>						<!-- 设置一个缓存，对访问过的组件进行缓存 -->
				<router-view></router-view>
			</keep-alive>
		</div>
		<div class="app-footer">
			<p>jiangheng</p>
		</div>
		<my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">			<!-- isshowdialog被触发时，传入子组件 -->
			<p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>												<!-- 监听on-close事件，当子组件向父组件报告时，触发closed的事件 -->
		</my-dialog>

		<my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">			
					<reg-form>  </reg-form>							
		</my-dialog>

		<my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">	
					<log-form>	</log-form>			
											
		</my-dialog>
	</div>
</template>
<script>
import Dialog from './dialog'
import LogForm from './LogForm'
import RegForm from './RegForm'
	export default{
		components: {
			MyDialog: Dialog,
			LogForm,
			RegForm
		},
		data () {
			return{
				isShowAboutDialog: false,
				isShowLogDialog: false,
				isShowRegDialog: false,
			}
		},
		methods: {
			aboutClick(){
				this.isShowAboutDialog = true
			},
			logClick(){
				this.isShowLogDialog = true
			},
			regClick(){
				this.isShowRegDialog = true
			},
			closeDialog(attr){
				this[attr]= false
			}
		}
	}
</script>
<style>
	*{
		margin: 0;
		padding: 0

	}
	.aoo-wrap{
		width: 100%;
		height: 100%
	}
	.app-header{
		width: 100%;
		height: 90px;
		background-color: #454545;
	}
	img{
		width: 80px;
		margin-top: 0.5%; 
		margin-left: 8%; 
	}
	ul{
		position: relative;
		left: -200px;
		top: -58px;
		color: #fff;
		float: right;
	}
	li{
		margin: 10px;
		display: inline;
		font-size: 20px;	
	}
	li:hover{
		cursor:pointer
	}
	.nav-pile{
		width: 30px;
		height: 25px;
	}
	.app-footer{
		width: 100%;
		text-align: center;
		position: absolute;
		top:1030px;
		background-color: #d4d4d4
	}
	.app-content{
		background-color: #e8e8e8;
		height: 950px
	}
</style>