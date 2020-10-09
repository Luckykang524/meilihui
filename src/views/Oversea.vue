<template>
  <div>
    <banner>
        <div class="swiper-slide" v-for="data in imgList" :key="data.id">
          <div :style=" {backgroundImage:'url('+data.main_image+')'} "
            style="height:450px;background-size:cover;"
          ></div>
        </div>
    </banner>
    <ul>
      <li v-for="data in goodsList" :key="data.categoryId" @click=handleClick(data.categoryId)>
          <img :src="data.imageUrl" alt="">
          <div>
              <div>{{data.englishName}}</div>
              <div>{{data.chineseName}}</div>
              <div>{{data.discountText}}</div>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import Vue from 'vue'
import banner from '../components/Banner'
import axios from 'axios'
/* Vue.filter('dataFilter',function(data){
  return '￥'+ data.price
}) */

export default {
  data () {
    return {
      imgList: [],
      goodsList: []
    }
  },
  components: {
    banner
  },
  mounted () {
    axios.get('http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000011&platform_code=PLATEFORM_H5').then(res => {
      this.imgList = res.data.banners
    })
    axios.get('http://www.mei.com/appapi/silo/eventForH5?categoryId=crossborder&pageIndex=1&timestamp=1602221676422&summary=8468bc26459a2ac227fe816c950faedc&platform_code=H5').then(res => {
      console.log(res.data.eventList)
      this.goodsList = res.data.eventList
    })
  },
  methods: {
    handleClick (myid) {
      this.$router.push(`/goods/${myid}`)
    }
  }
}

// https://cdn13.mei.com/product/TRO-401-00026/fbd90b4e0316cbcda6f7dac4ffedb974a7e75fc2f010082c.jpg@300w_400h_2e_75q
</script>

<style lang="scss" scoped>
ul{
  width: 100%;
  li{
    width: 100%;
    img{
      width: 100%;;
    }
    div{
      height: 50px;
    }
  }
}

</style>
