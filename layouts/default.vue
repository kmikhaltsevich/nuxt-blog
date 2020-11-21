<template lang='pug'>
  v-app
    main-header
    v-main
      v-container
        nuxt
    main-footer
    v-snackbar(:value='getSnackBar.active' @input='closeSnackBar()' shaped timeout='6000' top multi-line) {{ getSnackBar.text }}
      template(v-slot:action="{ attrs }")
        v-btn.mx-2(
          @click='closeSnackBar'
          v-bind='attrs'
          small outlined icon
        )
          v-icon mdi-close
</template>

<script>
import { Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import MainHeader from '@/components/header/MainHeader'
import MainFooter from '@/components/footer/MainFooter'
import Base from '@/modules/Base'

const snackBar = namespace('snackBar')

@Component({
  components: {
    MainHeader,
    MainFooter
  }
})
export default class Default extends Base {
  @snackBar.Getter getSnackBar
  @snackBar.Mutation closeSnackBar

}
</script>
