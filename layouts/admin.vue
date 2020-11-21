<template lang='pug'>
  .admin-layout
    v-app
      v-container
        v-row.ma-0
          v-col.pa-0(cols='12' md='3')
            side-bar
          v-col.pa-0(cols='12' md='9')
            nuxt
</template>

<script>
import Base from '@/modules/Base'
import { Component } from 'vue-property-decorator'

import SideBar from '@/components/admin/SideBar'

@Component({
  components: { SideBar }
})
export default class AdminLayout extends Base {
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
