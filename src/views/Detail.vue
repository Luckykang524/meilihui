<template>
  <div>
    <span>{{dataList.brand}}</span>
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
    <detail-bar class="detailBar"></detail-bar>
  </div>
</template>
<script>
import detailSwiper from './detail/DetailSwiper'
import detailBar from './detail/DetailBar'
import http from '../util/http'
export default {
  data () {
    return {
      dataList: [],
      descriptionList: []
    }
  },
  components: {
    detailSwiper,
    detailBar
  },
  computed: {

  },
  mounted () {
  // console.log(this.$route)
    http(`/product/detail/v3?categoryId=${this.$route.params.categoryid}&productId=${this.$route.params.goodsid}&platform_code=H5&timestamp=1602214037777&summary=1c23078e00aacd7780232d5a13b2688c`).then(res => {
    //  console.log(res.data.infos)
      this.dataList = res.data.infos
      // console.log(this.dataList.description.attributesList)
      this.descriptionList = this.dataList.description.attributesList
    })
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
