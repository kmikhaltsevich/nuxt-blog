<template lang='pug'>
  div
    .text-h6.mb-4 Добавить комментарий
    v-form(
      ref='form'
      v-model='valid'
      lazy-validation
    )
      v-text-field(
        v-model='name'
        :rules='[rules.required]'
        required
        label='Ваше имя'
        rounded full-width filled clearable
      )
      v-textarea(
        v-model='comment'
        :rules='[rules.required]'
        required
        label='Текст комментария'
        rounded full-width filled clearable
      )
      v-btn(@click='submitComment' depressed rounded block large :loading='loading' color='info') Отправить
</template>

<script>
import BaseComponent from '@/modules/BaseComponent'
import { Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const snackBar = namespace('snackBar')

@Component
export default class CommentForm extends BaseComponent {
  valid = null

  loading = false

  name = ''
  comment = ''

  @snackBar.Action openNotification

  async submitComment () {
    await this.$refs.form.validate()
    if (!this.valid) return console.error('Заполните форму')

    this.loading = true
    const formData = {
      name: this.name,
      comment: this.comment,
      postId: ''
    }

    try {
      await this.openNotification({
        active: true,
        text: 'Комментарий отправлен!'
      })
      this.$emit('create')
    } catch (e) {
      this.loading = false
    }
  }
}
</script>
