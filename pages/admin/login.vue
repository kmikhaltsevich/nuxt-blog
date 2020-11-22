<template lang='pug'>
  .admin-login.d-flex.justify-center.align-center
    v-card.pa-4.rounded-lg(outlined)
      v-card-title.pa-2 Авторизация
      v-card-subtitle.px-2 в панель администратора
      v-card-text.px-4.pt-4.pb-0
        v-form(
          ref='form'
          v-model='valid'
          lazy-validation
        )
          v-text-field(
            v-model='login'
            :rules='[rules.required, rules.email]'
            required
            label='Логин'
            rounded full-width filled clearable
          )
          v-text-field(
            v-model='password'
            :rules='[rules.required]'
            required
            type='password'
            label='Пароль'
            rounded full-width filled clearable
          )
      v-card-actions
        v-btn(@click='submitLogin' depressed rounded block large :loading='loading' color='info') Войти
</template>

<script>
import BasePage from '@/modules/BasePage'
import { Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const auth = namespace('auth')
const snackBar = namespace('snackBar')

@Component({
  layout: 'empty'
})
export default class LoginAdminPanel extends BasePage {
  valid = null
  loading = false

  login = ''
  password = ''

  @auth.Action onLogin
  @snackBar.Action openNotification

  async submitLogin () {
    await this.$refs.form.validate()
    if ( !this.valid) return console.error('Заполните форму')

    this.loading = true
    try {
      await this.onLogin({ login: this.login, pass: this.password })
      await this.$router.push('/admin')
      this.loading = false
    } catch (e) {
      this.loading = false
    }
  }

  async mounted () {
    const { message } = this.$route.query
    if (message) {
      await this.openNotification({
        active: true,
        text: 'Необходимо авторизоваться!'
      })
    }
  }
}
</script>

<style lang='sass' scoped>
.admin-login
  height: 100%
  width: 100%
</style>
