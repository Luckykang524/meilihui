<template>
    <div>
        <ul>
            <li v-for="data in goodsList" :key="data.productId" @click=handleClick(data.productId)>
                <img :src="data.imageUrl" alt="">
                <div>{{data.brandName}}</div>
                <div class="product">{{data.productName}}</div>
                <div>{{data.itemPriceDto | dataFilter}}</div>
            </li>
        </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.filter('dataFilter', function (data) {
  return '￥' + data.price
})

export default {
  data () {
    return {
      goodsList: []
    }
  },

  mounted () {
    axios.get('http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=2040204090000008732&key=&sort=&timestamp=1602208148483&summary=479eeb7db1f37dc71885086b81d1ddaf&platform_code=H5').then(res => {
      // console.log(res.data.products)
      this.goodsList = res.data.products
    })
  },
  methods: {
    handleClick (id) {
      this.$router.push(`/detail/${id}`)
    }
  }
}

</script>

<style lang="scss" scoped>
ul{
  width: 100%;
  li{
    width: 50%;
    float: left;
    height: 320px;
    img{
      width: 100%;;
    }
    .product{
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }
  }
}

</style>
