<template>
  <div>
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"

    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import Vue from 'vue'
import { Form } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
import { NavBar } from 'vant';
Vue.use(Form).use(Field).use(Button).use(NavBar);
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    onClickLeft() {
      this.$router.push('/recommend')
    },
  },
  mounted(){
    this.$store.commit('hide')
  },
  beforeDestroy(){
    this.$store.commit('show')
  },
  // methods:{
  //   backhome(){
  //     this.$router.push('/recommend')
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.van-nav-bar{
  margin-bottom: 20px;
}
</style>