<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <slot></slot>
        <!-- <div class="swiper-slide">11111</div>
        <div class="swiper-slide">11111</div>
        <div class="swiper-slide">11111</div> -->
    </div>
    <div class="swiper-pagination"></div>

  </div>
</template>
<script>
import Swiper from 'swiper/bundle' // 引入swiper.js
import 'swiper/swiper-bundle.min.css' // 引入swiper.css

export default {
  updated () {
    new Swiper('.swiper-container', {
      // loop:true,
      pagination: {
        el: '.swiper-pagination'
      },
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .swiper-wrapper{
    height: 450px;
  }
</style>
