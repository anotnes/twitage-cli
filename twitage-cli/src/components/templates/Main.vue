<template>
<div class="main">
  <div class="menu">
    <Menu></Menu>
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import store from '@/store'
import router from '@/router/index'
import Menu from '@/components/organisms/Menu'

export default {
  name: 'Main',
  components: {
    Menu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* SP対応 */
@media screen and (max-width: 500px){
}

/* PC対応 */
@media screen and (min-width: 501px){
  .main {
    display:flex;
  }
  .menu {
    width:20%;
    height:600px;
  }
  .content {
    width:80%;
  }
}

</style>
