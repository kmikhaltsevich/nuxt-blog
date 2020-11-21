<template lang='pug'>
  div
    .d-flex.justify-end.align-center
      v-btn-toggle(v-model='displayPanel')
        v-btn(:value='displayModule' :disabled='checkDisplayPanel(displayModule)')
          v-icon mdi-view-module
        v-btn(:value='displayList' :disabled='checkDisplayPanel(displayList)')
          v-icon mdi-view-list
        v-btn(:value='displayHeadline' :disabled='checkDisplayPanel(displayHeadline)')
          v-icon mdi-view-headline
    v-scale-transition(hide-on-leave)
      v-row(v-if='checkDisplayPanel(displayModule)')
        v-col(
          v-for='(item, index) in data'
          :key='index+item.title'
          cols='12' md='4'
        )
          v-card.d-flex.justify-space-between.flex-column(outlined tile height='100%')
            div
              .d-flex.justify-space-between.align-center.flex-column.flex-md-row.mx-4.my-2
                .text-h6 {{ item.title }}
                .d-flex.align-center.text-subtitle-2
                  v-icon.mr-1(small) mdi-clock
                  | {{ item.date }}
              v-img(
                :src='item.image'
                width='100%'
                contain
              )
            .d-flex.justify-space-between.align-center.mx-4.my-2
              .d-flex.align-center.text-subtitle-2
                v-icon.mr-1(small) mdi-message
                | {{ item.message }}
              v-btn(:to='`/post/${item.id}`' nuxt rounded depressed color='info') Открыть
    v-scale-transition(hide-on-leave)
      v-row(v-if='checkDisplayPanel(displayList)')
        v-col(
          v-for='(item, index) in data'
          :key='index+item.title'
          cols='12'
        )
          v-card.d-flex.align-center.justify-start(
            :to='`/post/${item.id}`'
            nuxt
            height='150px' outlined tile hover
          )
            v-img(
              :src='item.image'
              height='100%'
              width='100px'
              max-width='250px'
            )
            div.ml-md-4
              .d-flex.align-center.text-subtitle-2
                v-icon.mr-1(small) mdi-clock
                | {{ item.date }}
              .text-h4 {{ item.title }}

    v-scale-transition(hide-on-leave)
      v-row(v-if='checkDisplayPanel(displayHeadline)')
        v-col.pb-0(
          v-for='(item, index) in data'
          :key='index+item.title'
          cols='12'
        )
          v-card.d-flex.align-center.justify-space-between.px-4(
            :to='`/post/${item.id}`'
            nuxt
            height='40px' outlined tile hover
          )
            .text-h5 {{ item.title }}
            .d-flex.align-center.text-subtitle-2
              v-icon.mr-1(small) mdi-clock
              | {{ item.date }}
</template>

<script>
import BaseComponent from '@/modules/BaseComponent'
import { Component } from 'vue-property-decorator'

@Component
export default class Posts extends BaseComponent {
  displayModule = 1
  displayList = 2
  displayHeadline = 3
  displayPanel = 1
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

  checkDisplayPanel (type) {
    return this.displayPanel === type
  }
}
</script>
