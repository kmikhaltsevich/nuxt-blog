<template lang='pug'>
  .admin-layout
    v-app
      v-container
        v-row.ma-0
          v-col.pa-0(cols='12' md='3')
            side-bar
          v-col.pa-0(cols='12' md='9')
            v-breadcrumbs(:items='items' divider='-')
            nuxt
      snack-bar
</template>

<script>
import Base from '@/modules/Base'
import { Component } from 'vue-property-decorator'

import SideBar from '@/components/admin/SideBar'

@Component({
  middleware: ['adminAuth'],
  components: { SideBar }
})
export default class AdminLayout extends Base {
  items = [
    {
      text: 'Главная',
      disabled: false,
      to: '/'
    },
    {
      text: 'О нас',
      disabled: false,
      to: '/inspire'
    },
    {
      text: 'Администрирование',
      disabled: false,
      to: '/admin'
    }
  ]
}
</script>

<style lang='sass' scoped>
.admin-layout
  width: 100%
  height: 100vh
  .container
    height: 100%
    padding: 0
    .row
      height: 100%
</style>
