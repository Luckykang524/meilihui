<template>
    <div>

    </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{

    }
  },
  mounted(){
    axios.get(`http://www.mei.com/appapi/search/searchKey/v3?pageIndex=1&q=${this.$route.params.name}&sort=&key=&brandNameEn=${this.$route.params.name}&brandNameZh=&type=brand`).then(res => {
      console.log(res.data.products)
    })
 }
}
</script>
