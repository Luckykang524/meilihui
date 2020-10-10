<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="到头啦"
      @load="onLoad"
      :immediate-check="false"
      :offset="0"
      class="wrap"
    >
      <van-cell
        v-for="data in goodsList"
        :key="data.productId"
        @click="handleDetailClick(data.productId)"
        class="goodsListStyle"
      >
        <img :src="data.imageUrl" alt="" />
        <div>{{ data.brandName }}</div>
        <div class="product">{{ data.productName }}</div>
        <div>{{ data.itemPriceDto | dataFilter }}</div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import Vue from 'vue'
import http from '../util/http'
import { List, Cell } from 'vant'

Vue.use(List).use(Cell)
Vue.filter('dataFilter', function (data) {
  return '￥' + data.price
})

export default {
  data () {
    return {
      goodsList: [],
      loading: false,
      finished: false,
      current: 1,
      totalPage: 0
    }
  },

  mounted () {
    /* axios
      .get(
        `http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${this.$route.params.categoryid}&key=&sort=&timestamp=1602222914880&summary=6c92263af328aefd62f992e94977b214&platform_code=H5`
      )
      .then((res) => {
        this.goodsList = res.data.products;
        this.totalPage = res.data.totalPages;
      }); */
    http(`/event/product/v3?pageIndex=1&categoryId=${this.$route.params.categoryid}&key=&sort=&timestamp=1602222914880&summary=6c92263af328aefd62f992e94977b214&platform_code=H5`).then((res) => {
      this.goodsList = res.data.products
      this.totalPage = res.data.totalPages
    })
  },
  methods: {
    handleDetailClick (id) {
      // 第二个只能写id不然会报错
      this.$router.push(`/goods/${this.$route.params.categoryid}/${id}`)
      // 第二种办法--不常用
      // this.$router.push({path:"/detail",query:{myid:this.$route.params.myid,id:id}})
    },
    onLoad () {
      console.log(this.current, this.totalPage)
      if (this.current === this.totalPage) {
        this.finished = true
        console.log('我触发了')
        return
      }
      this.current++

      /* axios
        .get(
          `http://www.mei.com/appapi/event/product/v3?pageIndex=${this.current}&categoryId=${this.$route.params.categoryid}&key=&sort=&timestamp=1602222914880&summary=6c92263af328aefd62f992e94977b214&platform_code=H5`
        )
        .then((res) => {
          this.goodsList = [...this.goodsList, ...res.data.products];
          this.loading = false;
        }); */
      http(`/event/product/v3?pageIndex=${this.current}&categoryId=${this.$route.params.categoryid}&key=&sort=&timestamp=1602222914880&summary=6c92263af328aefd62f992e94977b214&platform_code=H5`).then((res) => {
        this.goodsList = [...this.goodsList, ...res.data.products]
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-wrap: wrap;//是否允许子元素换行，nowrap为不换行，wrap放不下后换行
}
.goodsListStyle {
  width: 50%;
  img {
    width: 100%;
  }
  .product {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
