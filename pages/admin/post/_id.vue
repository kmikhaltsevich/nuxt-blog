<template lang='pug'>
  div(v-if='post')
    .text-h4 Пост {{ post._id }}
    v-form(
      ref='form'
      v-model='valid'
      lazy-validation
    )
      v-textarea(
        v-model='textPost'
        outlined
        row-height='10'
        :rules='[rules.required]'
        required
      )
      v-btn(outlined @click='$router.push("/admin/list")') Закрыть
      v-btn.ml-2(outlined color='success' @click='submitEditedPost') Обновить
  v-progress-linear(v-else color='success')
</template>

<script>
import BasePage from '@/modules/BasePage'
import { Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const posts = namespace('posts')

@Component({
  layout: 'admin'
})
export default class ListPost extends BasePage {
  valid = null
  post = null
  textPost = ''

  @posts.Action fetchAdminPostById

  async submitEditedPost () {
    await this.$refs.form.validate()
    if (!this.valid) return this.openNotification({ active: true, text: 'Заполните поле' })
    this.openNotification({ active: true, text: 'Пост обновлен' })
  }

  async created () {
    this.post = await this.fetchAdminPostById(this.$route.params)
  }
}
</script>

<style lang='sass' scoped>

</style>
