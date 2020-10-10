<template>
  <div>
    <navbar v-show="$store.state.isNavbarShow"></navbar>
    <router-view></router-view>
  </div>
</template>
<script>
import navbar from './components/Navbar'
export default {
  data () {
    return {

    }
  },
  components: {
    navbar
  }
}
</script>

<style>
  *{margin: 0; padding: 0;}
  ul{list-style: none;}
  html,body{
    height: 100%;
  }
</style>
