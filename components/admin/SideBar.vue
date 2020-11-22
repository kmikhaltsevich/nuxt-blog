<template lang='pug'>
  v-card(height='100%' outlined tile flat)
    v-list(height='100%')
      v-subheader.text-uppercase.font-weight-bold Admin panel
      v-list-item-group(v-model='adminGroup')
        v-list-item(
          v-for='(item, index) in adminItems'
          :key='index+item.slug'
          :to='item.slug'
          nuxt
          exact
        )
          v-list-item-icon
            v-icon(size='24') {{ item.icon }}
          v-list-item-content
            v-list-item-title {{ item.text }}
        v-list-item(@click='$router.push("/admin/login"); onLogout')
          v-list-item-icon
            v-icon(size='24') mdi-exit-to-app
          v-list-item-content
            v-list-item-title Выход
</template>

<script>
import BaseComponent from '@/modules/BaseComponent'
import { Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const auth = namespace('auth')

@Component
export default class AdminSideBar extends BaseComponent {
  adminGroup = null
  adminItems = [
    { text: 'Аналитика', icon: 'mdi-chart-pie', slug: '/admin' },
    { text: 'Создать', icon: 'mdi-plus-circle-outline', slug: '/admin/create' },
    { text: 'Посты', icon: 'mdi-newspaper', slug: '/admin/list' },
    { text: 'Пользователи', icon: 'mdi-account-multiple', slug: '/admin/user' }
  ]

  @auth.Action onLogout
}
</script>

<style lang='sass' scoped>
  .v-card
    border-bottom: none
    border-top: none
</style>
