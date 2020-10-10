<template>
  <div>
    <van-nav-bar
      :title="dataList.brand"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
      style="z-index:3"
    />
    <detail-swiper>
      <div class="swiper-slide" v-for="(data,index) in dataList.images" :key="index">
        <div :style="{backgroundImage:'url('+data.smallImgUrl+')'}" style="height:440px;background-size:cover;background-position:center;"></div>
      </div>
    </detail-swiper>
    <div class="productTitle">
      <h3>{{dataList.name}}</h3>
      <span>￥{{dataList.price}}</span>
    </div>
    <p>服务</p>
    <div class="productParams">
      <h3>产品参数</h3>
      <ul>
        <li v-for="data in descriptionList" :key="data.brandId">
          <span class="productName">{{data.name}}</span>
          <span class="productValue">{{data.value}}</span>
        </li>
      </ul>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="2" />
       <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>
<script>
import detailSwiper from './detail/DetailSwiper'
import http from '../util/http'
import { NavBar, GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant'
import Vue from 'vue'
Vue.use(NavBar).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton)
export default {
  data () {
    return {
      dataList: [],
      descriptionList: []
    }
  },
  components: {
    detailSwiper
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  },
  mounted () {
    this.$store.commit('hide')
    // console.log(this.$route)
    http(`/product/detail/v3?categoryId=${this.$route.params.categoryid}&productId=${this.$route.params.goodsid}&platform_code=H5&timestamp=1602214037777&summary=1c23078e00aacd7780232d5a13b2688c`).then(res => {
    //  console.log(res.data.infos)
      this.dataList = res.data.infos
      // console.log(this.dataList.description.attributesList)
      this.descriptionList = this.dataList.description.attributesList
    })
  },
  beforeDestroy () {
    this.$store.commit('show')
  }
}
</script>
<style lang="scss" scoped>
.productTitle{
  padding: 0 10px;
  span{
    display: inline-block;
    color: red;
    font-weight: bold;
    margin: 5px 0;
  }
}
.productParams{
  padding: 0 10px;
  li{
    margin-top: 10px;
    font-size: 14px;
    .productName{
    display: inline-block;
    width: 90px;
    color: #999;
    vertical-align: top;
    }
    .productValue{
      display: inline-block;
      width: calc(100% - 90px);
    }
  }
}
.detailBar{
  height: 40px;
}
</style>
