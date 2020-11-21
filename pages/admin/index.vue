<template lang='pug'>
  div admin panel
</template>

<script>
import BasePage from '@/modules/BasePage'
import { Component } from 'vue-property-decorator'

@Component({
  layout: 'admin'
})
export default class IndexAdmin extends BasePage {
}
</script>

<style lang='sass' scoped>

</style>
