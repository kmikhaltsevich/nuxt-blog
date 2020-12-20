<template lang='pug'>
  div(v-if='mounting')
    .text-h4.mb-2 Создать пост
    v-form(
      ref='form'
      v-model='valid'
      lazy-validation
    )
      v-text-field(
        v-model='postData.title'
        outlined
        :rules='[rules.required]'
        required
        clearable
        rounded
        label='Заголовок'
      )
      v-file-input(
        v-model='postData.image'
        :rules='[rules.required]'
        required
        show-size
        counter
        outlined
        rounded
        chips
        label='Загрузка изображения'
      )
      v-textarea(
        v-model='postData.text'
        outlined
        row-height='10'
        :rules='[rules.required]'
        required
        clearable
        rounded
        label='Обычный текст или в формате .html'
      )
      v-btn.mb-4(color='warning' @click='checkPreview' depressed rounded) Предварительный просмотр
      .d-flex.justify-space-between.align-center
        v-btn(outlined @click='$router.push("/admin/list")' rounded) Закрыть
        v-btn.ml-2(outlined color='success' @click='createdPost' rounded) Создать
      v-divider.my-6
      div(v-if='preview' v-html='postData.text')
</template>

<script>
import BasePage from '@/modules/BasePage'
import { Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const posts = namespace('posts')

@Component({
  layout: 'admin'
})
export default class CreatePost extends BasePage {
  mounting = false
  valid = null
  preview = false
  postData = {
    title: '',
    image: null,
    text: ''
  }

  @posts.Action createPost

  checkPreview () {
    if (!this.postData.text.length) return this.openNotification({ active: true, text: 'Заполните поле контента' })
    this.preview = true
  }

  async createdPost () {
    await this.$refs.form.validate()
    if (!this.valid) return this.openNotification({ active: true, text: 'Заполните поля' })
    this.createPost(this.postData)
    this.openNotification({ active: true, text: 'Пост создан' })
  }
  mounted () {
    this.mounting = true
  }
}
</script>

<style lang='sass' scoped>

</style>
