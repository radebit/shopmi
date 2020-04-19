<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  // import storage from './storage/index'
  export default {
    name:'app',
    components:{
    },
    mounted() {
      // storage.setItem('a','1')
      // storage.setItem('user',{a:1})
      // storage.setItem('abc',{a:1},'user')
      // storage.clear('abc','user')
    }
  }
</script>

<style lang="scss">

</style>
