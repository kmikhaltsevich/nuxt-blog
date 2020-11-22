<template lang='pug'>
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
import BaseComponent from '@/modules/BaseComponent'
import { Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const snackBar = namespace('snackBar')

@Component
export default class Empty extends BaseComponent {
  @snackBar.Getter getSnackBar
  @snackBar.Mutation closeSnackBar
}
</script>
