<template>
  <div>
    <van-search
      v-model="value"
      show-action
      @cancel="onCancel"
      @input='searchValue'
      @focus="searchValue"
    />
    <ul>
      <li v-for="(data,index) in infoList" :key="index" @click="toSearchGoods(data.name)">
        {{data.name}} <span>约{{data.productCount}}件商品</span>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios'
import { Search } from 'vant';

Vue.use(Search);
export default {
  data(){
    return {
      value:'VERSACE',
      infoList:[]
    }
  },
  mounted(){
    this.$store.commit('hide')
   

  },
  beforeDestroy(){
    this.$store.commit('show')
  },
  methods: {
    onCancel() {
      this.$router.push('/recommend')
    },
    searchValue(){
      axios.get(`http://www.mei.com/appapi/search/searchSuggest/v3?text=${this.value}`).then(res => {
      this.infoList = res.data.result
      })
    },
    toSearchGoods(name){
      this.$router.push(`/searchgoods/${encodeURI(name)}`)
      console.log(encodeURI(name))
    }
  },
  // computed:{
  //   computedValue(){
  //     return this.value.encode()
  //   }
  // }
}
</script>
<style lang="scss" scoped>
li{
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  span{
    float: right;
    font-size: 12px;
    color:#aaa
  }
}
</style>
