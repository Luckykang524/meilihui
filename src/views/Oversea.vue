<template>
  <div>
    <banner>
        <div class="swiper-slide" v-for="data in imgList" :key="data.id">
          <div :style=" {backgroundImage:'url('+data.main_image+')'} "
            style="height:450px;background-size:cover;"
          ></div>
        </div>
    </banner>
    海外
  </div>
</template>

<script>
import banner from '../components/Banner'
import axios from 'axios'
export default {
  data () {
    return {
      imgList: []
    }
  },
  components: {
    banner
  },
  mounted () {
    axios.get('http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000011&platform_code=PLATEFORM_H5').then(res => {
      this.imgList = res.data.banners
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
