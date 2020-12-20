import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const snackBar = namespace('snackBar')
@Component
export default class Base extends Vue {
  rules = {
    required: value => !!value || 'Поле обязательно для заполнения.',
    counter: value => value.length <= 20 || 'Max 20 characters',
    email: value => {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return pattern.test(value) || 'Invalid e-mail.'
    }
  }

  @snackBar.Action openNotification
}
