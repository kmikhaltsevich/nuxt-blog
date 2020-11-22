<template lang='pug'>
  v-app
    main-header
    v-main
      nuxt
      snack-bar
</template>

<script>
import Base from '@/modules/Base'
import { Component } from 'vue-property-decorator'

import SnackBar from '@/components/main/SnackBar'
import MainHeader from '@/components/header/MainHeader'

@Component({
  components: { MainHeader, SnackBar }
})
export default class Empty extends Base {
}
</script>
