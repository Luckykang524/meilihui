<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper/bundle' // 引入swiper.js
import 'swiper/swiper-bundle.min.css'
export default {
  updated () {
    new Swiper('.swiper-container', {
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>
