<template>
  <div class="sales-board">
      <div class="sales-board-intro">
        <h2>数据预测</h2>
        <p>未来，大数据会变得越来越重要，其核心应用预测也会成为互联网行业以及产业变革的重要力量，我们很有必要对数据预测及其分析方法进行全面且深入的了解。在这一点上，《大数据预测》是本很好的读物，适合大数据所有相关行业的人阅读。</p>
      </div>
      <div class="sales-board-form">
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  购买数量：
              </div>
              <div class="sales-board-line-right">
                  <v-counter></v-counter>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  媒介：
              </div>
              <div class="sales-board-line-right">
                  <v-selection :selections="versionList"></v-selection>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  有效时间：
              </div>
              <div class="sales-board-line-right">
                  一年
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  总价：
              </div>
              <div class="sales-board-line-right">
                  500 元
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">&nbsp;</div>
              <div class="sales-board-line-right">
                  <div class="button"  @click="showPayDialog">
                    立即购买
                  </div>
              </div>
          </div>
      </div>
      <div class="sales-board-des">
        <h2>产品说明</h2>
        <p>2020年的一天，在你驱车前往公司的路上，导航系统通过预测交通流量，会自动帮你选择一条最合适的交通路线；车内推荐系统会根据你的饮食习惯预测你可能会喜欢吃什么，并推荐沿途的早餐店；你的电子社交助理已经为你自动选择了你可能感兴趣的社交网信息；当车内系统预测到你驾车有些分心时，座椅会自动震动进行提醒……
以上这些情景不是科幻大片独有的，它们有的已经或会在未来的某一天成为现实。而这一切所倚靠的就是预测分析技术。
大数据时代下，作为其核心，预测分析已在商业和社会中得到广泛应用。随着越来越多的数据被记录和整理，未来预测分析必定会成为所有领域的关键技术。
作为预测分析领域的专家，埃里克·西格尔博士深谙预测分析界已经实现和正在发生的事情、面临的问题和将来可能的前景。在《大数据预测》一书中，他结合预测分析的应用实例，对其进行了深入、细致且全面的解读。
关于预测分析，你想了解的全部，你的生活以及这个世界会因为预测分析改变到什么程度，《大数据预测》都会告诉你。</p>
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
      return {
        buyNum: 1,          //购买数量
          buyType: {},        //产品类型
          version: {},        //产品版本
          period: {},         //购买时间
          price: 0,

        versionList: [
            {
              label: '纸质报告',
              value: 0
            },
            {
              label: 'pdf',
              value: 1
            },
            {
              label: '页面报告',
              value: 2
            },
            {
              label: '邮件',
              value: 3
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
.selection-show{
  width: 100px
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