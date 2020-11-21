<template lang='pug'>
  div.post
    .d-flex.justify-space-between.align-center
      .text-h5.font-weight-bold POST TITLE
      v-btn(rounded depressed nuxt to='/' color='info')
        v-icon.mr-2 mdi-arrow-left
        | Назад
    v-divider.my-4
    .d-flex.justify-space-between.align-center.mb-4
      .font-weight-bold 20.02.2020
      .d-flex.align-center
        v-icon.mr-2 mdi-eye
        | 560
    v-card.mb-8(outlined tile)
      v-row.pa-4
        v-col.align-start(cols='12' md='4')
          v-img(
            src='https://i.pinimg.com/originals/26/5e/6b/265e6b853f8d502b2001334b8c037e99.jpg'
            width='100%'
            contain
          )
        v-col(cols='12' md='8')
          p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

    .text-h5.font-weight-bold Комментарии
    v-scale-transition
      div(v-if='isActiveForm')
        v-divider.my-4
        comment-form(@create='createCommentHandler')
    v-divider.my-4
    div(v-if='true')
      comment(
        v-for='comment in 4'
        :key='comment'
        :comment='comment'
      )
    div(v-else)
      .font-weight-bold Комментариев нет

</template>

<script>
import BasePage from '@/modules/BasePage'
import { Component } from 'vue-property-decorator'

import Comment from '@/components/main/Comment'
import CommentForm from '@/components/main/CommentForm'

@Component({
  components: { CommentForm, Comment },
  validate: ({ params }) => {
    return Boolean(params.id)
  }
})
export default class PostId extends BasePage {
  postId = null

  isActiveForm = true

  createCommentHandler () {
    this.isActiveForm = false
  }

  created () {
    this.postId = this.$route.params.id
  }
}
</script>
