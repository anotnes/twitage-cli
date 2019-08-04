<template>
  <transition name="basic" appear>
    <div class="main">
      <div class="area-menu">
        <Menu></Menu>
      </div>
      <div class="area-content">
        <router-view></router-view>
      </div>
    </div>
  </transition>
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
