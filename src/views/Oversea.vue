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
          <div :style="{backgroundImage:'url('+data.imageUrl+')'}"
            style="height:207px;background-size:100% 100%;" class="bgImages">
            <div class="wrap">
                <div>{{data.englishName}}</div>
                <div>{{data.chineseName}}</div>
                <div>{{data.discountText}}</div>
            </div>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import Vue from 'vue'
import banner from '../components/Banner'
import http from '../util/http'
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
    http('/home/mktBannerApp/v3?silo_id=2013000100000000011&platform_code=PLATEFORM_H5').then(res => {
      this.imgList = res.data.banners
    })
    http('/silo/eventForH5?categoryId=crossborder&pageIndex=1&timestamp=1602221676422&summary=8468bc26459a2ac227fe816c950faedc&platform_code=H5').then(res => {
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
    width: 90%;
    margin:18px;
    .bgImages{
      position: relative;
      .wrap{
        width: calc(100% - 10px);
        height: 80px;
        padding-left: 10px;
        color: white;
        // font-weight: bolder;
        position: absolute;
        bottom: 0;
        background:-webkit-gradient(linear, 0 0, 0 100%, from(transparent), to(rgba(0,0,0,.55)));
    }
    }
  }
}

</style>
