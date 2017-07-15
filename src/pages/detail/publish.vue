<template>
  <div class="sales-board">
      <div class="sales-board-intro">
        <h2>广告发布</h2>
        <p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
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
                  行业：
              </div>
              <div class="sales-board-line-right">
                  <v-selection :selections="tradeList"></v-selection>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  产品版本：
              </div>
              <div class="sales-board-line-right">
                  <v-selection :selections="versionList"
                              ></v-selection>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  有效时间：
              </div>
              <div class="sales-board-line-right">
                  半年
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
        <p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>

        <table class="sales-board-table">
          <tbody>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>安全安保</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>办公文教</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>彩票</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>车辆物流</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>成人用品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>出版传媒</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>电脑硬件</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>电子电工</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>房地产建筑装修</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>分类平台</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>服装鞋帽</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>箱包饰品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>化工原料制品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>机械设备</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>家庭日用品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>家用电器</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>教育培训</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>节能环保</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>金融服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>礼品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>旅游住宿</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>美容化妆</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>母婴护理</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>农林牧渔</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>软件</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>商务服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>生活服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>食品保健品</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>手机数码</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>通讯服务设备</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>网络服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>医疗服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>游戏</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>运动休闲娱乐</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>招商加盟</label>
                      </div>
                  </td>
              </tr>
          </tbody>
      </table>
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
          data () {
            return {
              buyNum: 1,          //购买数量
              buyType: {},        //产品类型
              version: {},        //产品版本
              period: {},         //购买时间
              price: 0,
              tradeList: [
                {
                  label: '出版业',
                  value: 0
                },
                {
                  label: '媒体',
                  value: 1
                },
                {
                  label: '金融',
                  value: 2
                },
                {
                  label: '互联网',
                  value: 3
                },
                {
                  label: '游戏',
                  value: 4
                }
              ],
              versionList: [
                {
                  label: '初级版',
                  value: 0
                },
                {
                  label: '中级版',
                  value: 1
                },
                {
                  label: '高级版',
                  value: 2
                },
                {
                  label: '专家版',
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
  height: 400px;
  margin: 0 0 10px 0;
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
  border-collapse: collapse;
  line-height: 1px
}
.sales-board-table th {
  background: #4fc08d;
  color: #fff;
}
.sales-board-table td {
    border: 1px solid #f0f2f5;
    padding: 15px;
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