<template lang='pug'>
  div.pa-4
    .text-h4.mb-4 Создание пользователя
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
    v-btn(@click='submitNewUser' depressed rounded block large :loading='loading' color='info') Создать
</template>

<script>
import BasePage from '@/modules/BasePage'
import { Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const user = namespace('user')

@Component({
  layout: 'admin'
})
export default class UserSetting extends BasePage {
  valid = null
  loading = false

  login = ''
  password = ''

  @user.Action createUser

  async submitNewUser () {
    await this.$refs.form.validate()
    if ( !this.valid) return this.openNotification({ active: true, text: 'Заполните форму' })

    this.loading = true
    try {
      await this.createUser({ login: this.login, pass: this.password })
      await this.openNotification({ active: true, text: 'Пользователь добавлен' })
      this.login = ''
      this.password = ''
      this.loading = false
    } catch (e) {
      this.loading = false
    }
  }
}
</script>
