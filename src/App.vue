<template>
    <div id="app" class="page-body" direction="vertical">
      <page-top :isLogin = "isLogin"></page-top>
      <page-header v-show="isLogin"></page-header>
      <div class="page-main">
        <div class="page-main__wrapper">
          <router-view/>
        </div>     
      </div>     
      <page-footer></page-footer>
    </div>
</template>

<script>
import PageTop from './components/PageTop'
import PageHeader from './components/PageHeader'
import PageFooter from './components/PageFooter'
export default {
  name: 'App',
  data() {
    return {
        isLogin: false
    }   
  },
  components: {
    PageTop,
    PageHeader,
    PageFooter
  }
}
</script>

<style lang="less">
@import './assets/css/layout.less';

</style>

