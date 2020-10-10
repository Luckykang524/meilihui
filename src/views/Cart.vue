<template>
  <div>
    <van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div v-if="checkToken" class="login">
      亲！登录后可同步到购物车中的商品~~<br>
      <van-button round type="info" @click="handleLogin">立即登录</van-button>
    </div>

    <div v-else>欢迎来到购物车^.^</div>
  </div>
</template>
<script>
import Vue from 'vue'
import { NavBar } from 'vant'
import { Button } from 'vant';

Vue.use(Button)
Vue.use(NavBar)
export default {
  data(){
    return {

    }
  },
  mounted(){
    this.$store.commit('hide')

  },
  beforeDestroy(){
    this.$store.commit('show')
  },
  methods:{
    onClickLeft() {
      this.$router.push('/recommend')
    },
    handleLogin(){
      this.$router.push('/login')
    }
  },
  computed:{
    checkToken(){
      // if(!localStorage.getItem('token')){
      //   return true
      // } else {
      //   return false
      // }
      return !localStorage.getItem('token')
    }
  }
}
</script>
<style lang="scss" scoped>
.login{
  text-align: center;
  margin-top: 50px;
  .van-button{
    margin-top: 50px;
  }
}
</style>
