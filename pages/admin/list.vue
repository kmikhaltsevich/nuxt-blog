<template lang='pug'>
  div
    v-data-table(
      :loading='!list.length'
      :headers='header'
      :items='list'
      sort-by='date'
      class='elevation-1'
    )
      template(v-slot:item.actions="{ item }")
        v-icon.ma-2(@click='$router.push(`/admin/post/${item._id}`)' large color='success') mdi-tooltip-edit
        v-icon.ma-2(@click='deletePost(item._id)' large color='error') mdi-delete
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
  header = [
    { text: 'Название', value: 'title' },
    { text: 'Дата', value: 'date' },
    { text: 'Просмотры', value: 'views' },
    { text: 'Комментарии', value: 'comments' },
    { text: 'Действия', value: 'actions' },
  ]
  list = []

  @posts.Action fetchAdminPosts

  deletePost (id) {
    this.list = this.list.filter(item => id !== item._id)
  }

  async created () {
    this.list = await this.fetchAdminPosts()
  }
}
</script>

<style lang='sass' scoped>

</style>
