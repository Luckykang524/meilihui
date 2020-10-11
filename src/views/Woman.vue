<template>
  <div>
    <banner>
        <div class="swiper-slide" v-for="data in imgList" :key="data.id">
          <div :style=" {backgroundImage:'url('+data.main_image+')'} "
            style="height:450px;background-size:cover;"
          ></div>
        </div>
    </banner>
    女士
  </div>
</template>

<script>
import banner from '../components/Banner'
import http from '../util/http'
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
    http('/home/mktBannerApp/v3?silo_id=2013000100000000003&platform_code=PLATEFORM_H5').then(res => {
      this.imgList = res.data.banners
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
