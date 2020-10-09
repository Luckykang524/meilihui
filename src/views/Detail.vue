<template>
  <div>
    <span>{{dataList.brand}}</span>
    <detail-swiper>
      <div class="swiper-slide" v-for="(data,index) in dataList.images" :key="index">
        <div :style="{backgroundImage:'url('+data.smallImgUrl+')'}" style="height:440px;background-size:cover;background-position:center;"></div>
      </div>
    </detail-swiper>
    <h3>{{dataList.name}}</h3>
    <span>{{dataList.price}}</span>
    <p>闪购</p>
    <p>服务</p>
    <h3>产品参数</h3>
    <ul>
      <li v-for="data in dataList.description" :key="data.brandId">
        <span>{{data.name}}</span>
        <span>{{data.value}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
import detailSwiper from './detail/DetailSwiper'

export default {
  data () {
    return {
      dataList: [],
      productList: []
    }
  },
  components: {
    detailSwiper
  },
  mounted () {
  // console.log(this.$route)
    axios.get(`http://www.mei.com/appapi/product/detail/v3?categoryId=${this.$route.params.categoryid}&productId=${this.$route.params.goodsid}&platform_code=H5&timestamp=1602214037777&summary=1c23078e00aacd7780232d5a13b2688c`).then(res => {
    //  console.log(res.data.infos)
      this.dataList = res.data.infos
      console.log(this.dataList.images.length)
    })
  }

}
</script>
