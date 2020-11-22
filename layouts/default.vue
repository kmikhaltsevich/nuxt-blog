<template lang='pug'>
  v-app
    main-header
    v-main
      v-container
        nuxt
    main-footer
    snack-bar
</template>

<script>
import Base from '@/modules/Base'
import { Component } from 'vue-property-decorator'

import MainHeader from '@/components/header/MainHeader'
import MainFooter from '@/components/footer/MainFooter'
import SnackBar from '@/components/main/SnackBar'


@Component({
  components: {
    SnackBar,
    MainHeader,
    MainFooter
  }
})
export default class Default extends Base {
}
</script>
