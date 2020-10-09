<template>
  <nav v-top>
    <div>
      <span @click="handleLogin">登录</span>
      <div href="" class="search" @click="handleSearch()"><span></span>McQ</div>
      <span class="iconfont icon-bags" @click="handleCart()"></span>
    </div>
    <ul>
      <router-link to="/recommend" tag="li" active-class="clickactive">推荐</router-link>
      <router-link to="/oversea" tag="li" active-class="clickactive">海外</router-link>
      <router-link to="/man" tag="li" active-class="clickactive">男士</router-link>
      <router-link to="/woman" tag="li" active-class="clickactive">女士</router-link>
    </ul>
  </nav>
</template>
<script>
import Vue from 'vue'
Vue.directive('top', {
  inserted (el) {
    window.onscroll = () => {
      // console.log('11111111111111111')
      if ((document.body.scrollTop || document.documentElement.scrollTop) > 0) {
        el.className = 'change'
      } else {
        el.className = ''
      }
    }
  },
  unbind () {
    window.onscroll = null
  }
})

export default {
  methods: {
    handleSearch () {
      this.$router.push('/search')
    },
    handleLogin () {
      this.$router.push('/login')
    },
    handleCart () {
      this.$router.push('/cart')
    }
  }
}
</script>

<style scoped lang="scss">
  nav{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    color: white;
  }
  ul{
    display:flex;
    height:34px;
    line-height: 34px;
    li{
      flex: 1;
      text-align: center;
    }
  }
  .clickactive{
    border-bottom: 3px solid white;
  }
  div{
    display: flex;
    justify-content: space-around;
    height: 40px;
    line-height: 40px;
    font-weight: bold;
    .icon-bags{
      font-size: 20px;
    }
    .search{
      display: block;
      width: 260px;
      height: 34px;
      background: rgba($color: #888, $alpha: 0.3);
      margin-top: 3px;
      text-align: center;
      line-height: 34px;
    }
  }
  .change{
    background: white;
    color: black;
    .clickactive{
      border-bottom: 3px solid black;
    }
  }
</style>
