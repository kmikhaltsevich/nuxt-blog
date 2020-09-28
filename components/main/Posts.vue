<template lang='pug'>
  v-container
    v-row
      v-col(
        v-for='(item, index) in data'
        :key='index+item.title'
        cols='12' md='4'
      )
        v-card(outlined tile)
          .d-flex.justify-space-between.align-center.flex-column.flex-md-row.mx-4.my-2
            .text-h6 {{ item.title }}
            .d-flex.align-center
              v-icon.mr-1(color='success') mdi-clock
              | {{ item.date }}
          v-img(
            :src='item.image'
            width='100%'
            contain
          )
          .d-flex.justify-space-between.align-center.mx-4.my-2
            .d-flex.align-center.text-h6
              v-icon.mr-1(color='success') mdi-message
              | {{ item.message }}
            v-btn(nuxt :to='`/post/${item.id}`' rounded text depressed color='success') Открыть
</template>

<script>
import BaseComponent from '@/modules/BaseComponent'
import { Component } from 'vue-property-decorator'

@Component
export default class Posts extends BaseComponent {
  data = [
    {
      id: 1,
      title: 'Новость',
      date: new Date().toLocaleString(),
      image: 'https://eskipaper.com/images/gorgeous-hd-wallpapers-mac-1.jpg',
      message: 12
    },
    {
      id: 2,
      title: 'Новость 2',
      date: new Date().toLocaleString(),
      image: 'https://i.pinimg.com/originals/26/5e/6b/265e6b853f8d502b2001334b8c037e99.jpg',
      message: 24
    },
    {
      id: 2,
      title: 'Новость 2',
      date: new Date().toLocaleString(),
      image: 'https://i.pinimg.com/originals/26/5e/6b/265e6b853f8d502b2001334b8c037e99.jpg',
      message: 24
    },
    {
      id: 2,
      title: 'Новость 2',
      date: new Date().toLocaleString(),
      image: 'https://i.pinimg.com/originals/26/5e/6b/265e6b853f8d502b2001334b8c037e99.jpg',
      message: 24
    },
    {
      id: 2,
      title: 'Новость 2',
      date: new Date().toLocaleString(),
      image: 'https://i.pinimg.com/originals/26/5e/6b/265e6b853f8d502b2001334b8c037e99.jpg',
      message: 24
    }
  ]
}
</script>
