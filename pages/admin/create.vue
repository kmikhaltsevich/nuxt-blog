<template lang='pug'>
  div create
</template>

<script>
import BasePage from '@/modules/BasePage'
import { Component } from 'vue-property-decorator'
import adminAuth from '@/middleware/adminAuth'

@Component({
  layout: 'admin'
})
export default class CreatePost extends BasePage {
}
</script>

<style lang='sass' scoped>

</style>
