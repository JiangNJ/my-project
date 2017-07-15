<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>流量分析</h2>
      <p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
    </div>
    <div class="sales-board-form">
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                    购买数量：
              </div>
              <div class="sales-board-line-right">
                  <v-counter @on-change="onParamChange('buyNum',$event)"></v-counter>     <!-- onParamChange函数需要俩个参数，组件通过$event将变量传递给事件  -->
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  产品类型：
              </div>
              <div class="sales-board-line-right">
                  <v-selection :selections="productTypes"
                               @on-change="onParamChange('buyType',$event)"></v-selection>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                    有效时间：
              </div>
              <div class="sales-board-line-right">
                  <v-selection :selections="periodList"
                                @on-change="onParamChange('period',$event)"></v-selection>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  产品版本：
              </div>
              <div class="sales-board-line-right">
                  <v-selection :selections="versionList"
                                @on-change="onParamChange('version',$event)"></v-selection>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  总价：
              </div>
              <div class="sales-board-line-right">
                 500元
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">&nbsp;</div>
              <div class="sales-board-line-right">
                  <div class="button" @click="showPayDialog">
                    立即购买
                  </div>
              </div>
          </div>
          </div>
      <div class="sales-board-des">
        <h2>产品说明</h2>
        <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

        <h3>用户行为指标</h3>
        <ul>
          <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
          <li>用户在网站的停留时间；</li>
          <li>用户来源网站（也叫“引导网站”）；</li>
          <li>用户所使用的搜索引擎及其关键词；</li>
          <li>在不同时段的用户访问量情况等。</li>
        </ul>

        <h3>浏览网站方式</h3>
        <ul>
          <li>用户上网设备类型</li>
          <li>用户浏览器的名称和版本</li>
          <li>访问者电脑分辨率显示模式</li>
          <li>用户所使用的操作系统名称和版本</li>
          <li>用户所在地理区域分布状况等</li>
        </ul>
      </div>
      <my-dialog :is-show="isShowPayDialog" @on-close="hidePaydialog">
        <table class="buy-dialog-table">
          <tr>
            <th>购买数量</th>
            <th>产品类型</th>
            <th>有效时间</th>
            <th>产品版本</th>
            <th>总价</th>
          </tr>
          <tr>
            <td>{{ buyNum }}</td>
            <td>{{ buyType.label }}</td>
            <td>{{ period.label }}</td>
            <td>{{ version.label }}</td>
            <td>500元</td>
          </tr>
        </table>
        <h3 class="buy-dialog-title">请选择银行</h3>
        <bank-chooser @on-change="onchangeBanks"></bank-chooser>
        <div class="button buy-dialog-btn" @click="toggleDrop">       <!-- confirmBuy -->
          确认购买
        </div>
      </my-dialog>
      <check-order :isShowCheckDialog="isShowCheckOrder" @on-close-check-dialog="hideCheckOrder"> 
        
      </check-order>
      
  </div>
</template>
<script>
  import VSelection from '../../components/selection'
  import VCounter from '../../components/counter'
  import Dialog from '../../components/dialog'
  import BankChooser from '../../components/bankchooser'
  import CheckOrder from '../../components/checkorder'
  export default {
      components: {
        VSelection,
        VCounter,
        MyDialog: Dialog,
        BankChooser,
        CheckOrder
      },
      data(){
        return{
          buyNum: 1,          //购买数量
          buyType: {},        //产品类型
          version: {},        //产品版本
          period: {},         //购买时间
          price: 0,

          versionList: [
              {
                label: '客户版',
                value: 500,
              },
              {
                label: '代理商版',
                value: 300,
              },
              {
                label: '专家版',
                value: 1000,
              }
            ],
          periodList: [
              {
                label: '半年',
                value: 0.5,
              },
              {
                label: '一年',
                value: 1,
              },
              {
                label: '三年',
                value: 3,
              }
            ],
          productTypes: [
              {
                label: '入门版',
                value: 1,
              },
              {
                label: '中级版',
                value: 2,
              },
              {
                label: '高级版',
                value: 3,
              }
            ],
          isShowPayDialog: false,
          bankId: null,
          isShowCheckOrder: false,
          isShowErrDialog: false
          }
        },
      methods:{
        onParamChange(attr, val){
          this[attr] = val
          console.log(attr,this[attr])
          // getPrice()
        },
        showPayDialog(){
          this.isShowPayDialog = true
        },
        hidePaydialog(){
          this.isShowPayDialog = false
        },
        onchangeBanks(bankObj){
          this.bankId = bankObj.id
          console.log(this.bankId)
        },
        hideCheckOrder () {
          this.isShowCheckOrder = false
        },
        toggleDrop(){
          this.isShowCheckOrder = !this.isShowCheckOrder
          this.isShowPayDialog =!this.isShowPayDialog
        },
        // confirmBuy () {                         //后端交互，若是交易成功，则弹出成功交易弹窗，不成功则弹出交易不成功弹窗
        //       let reqParams = {                     
        //         buyNumber: this.buyNum,
        //         buyType: this.buyType.value,
        //         period: this.period.value,
        //         version: this.version.value,
        //         bankId: this.bankId
        //       }
        //       this.$http.post('/api/createOrder', reqParams)
        //       .then((res) => {
        //         this.orderId = res.data.orderId
        //         this.isShowCheckOrder = true
        //         this.isShowPayDialog = false
        //       }, (err) => {
        //         this.isShowBuyDialog = false
        //         this.isShowErrDialog = true
        //       })
        //     }
      //   getPrice (){                             //与后端进行交互，将数据全部赋值给reqParams,用vue-resource发送AJAX
      //     let reqParams = {                      //请求，获得价格
      //       buyNumber: this.buyNum,
      //       buyType: this.buyType.value,
      //       period: this.period.value,
      //       version: this.version.value,
      //       bankId: this.bankId
      //     }
      //     this.$http.post('/api/getPrice',reqParams)
      //     .then((res) => {
      //       this.price = res.data.amount 
      //     },(err)=>{
      // })
      //   }
      },
      mounted(){
        this.buyNum = 1 
        this.buyType = this.productTypes[0]
        this.version = this.versionList[0]
        this.period = this.periodList[0]
      },    
    }      
</script>
<style scoped>
.sales-board {
  background: #fff;
}
.sales-board-intro h2 {
  font-size: 20px;
  padding: 20px;
}
.sales-board-intro p {
  background: #f7fcff;
  padding: 10px 20px;
  color: #999;
  line-height: 1.8;
}
.sales-board-form {
  padding: 30px 20px;
  font-size: 14px;
}
.sales-board-line {
  clear: both;
  padding-bottom: 20px;
}
.sales-board-line-left {
    display: inline-block;
    width: 100px;
}
.sales-board-line-right {
    display: inline-block;
    width: 75%;
}
.sales-board-line-right .button{
  width: 56px;
  padding: 10px;
  position: relative;
  left: 620px;
  top: 10px;
  border-radius: 10px;
  background-color: #7ccd7c;
  cursor: pointer;
  box-shadow: 1px 1px 6px #080808;
}
.sales-board-line-right .button:hover{ 
  color: red
}
.sales-board-des {
  border-top: 20px solid #f0f2f5;
  padding: 15px 20px;
  height: 400px
}
.sales-board-des p {
  line-height: 1.6;
}
.sales-board-des h2 {
  font-size: 20px;
  padding-bottom: 15px;
}
.sales-board-des h3 {
  font-size: 18px;
  font-weight: bold;
  padding: 20px 0 10px 0;
}
.sales-board-des li {
  padding: 10px 0;
  color: #080808;
  font-size: 15px;
  position: relative;
  left: 210px;
  top: 50px;
}
.sales-board-table {
  width: 100%;
  margin-top: 20px;
}
.sales-board-table th {
  background: #4fc08d;
  color: #fff;
}
.sales-board-table td {
    border: 1px solid #f0f2f5;
    padding: 15px;
}
.product-board li{
  position: relative;
  left: 170px;
  top: 50px;
  display: block;
  color: black;
  padding: 0 10px 0 10px;
}

.buy-dialog-table{
  border-collapse:collapse;
  opacity: relative;
}
.buy-dialog-table th,td{
  border: 1px solid;
  padding: 5px 10px 5px 10px;
  
}
.buy-dialog-table th{
  background-color: #7ccd7c;
  font-size: 1em;
}
.button{
  width: 67px;
  box-shadow: 1px 1px 6px #080808;
  border-radius: 10px;
  padding: 5px;
  background-color: #7ccd7c;
  margin: 20px;
  position: relative;
  left: 300px;
  top: -70px;
}
.button:hover{
  color: red;
  cursor: pointer;
}
</style>
