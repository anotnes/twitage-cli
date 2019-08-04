<template>
  <transition name="basic" appear>
    <div id="app">
        <div class="contents">
          <router-view/>
        </div>
      <div id="modals">
        <component v-for="(modal, i) in modals" :is="modal.component" :key="i" v-bind:params="modal.params"></component>
      </div>
    </div>
  </transition>
</template>

<script>
import store from '@/store'
import router from '@/router/index'
export default {
  name: 'App',
  computed: {
    modals() {
      return store.getters.modals;
    }
  }
}
</script>
