<template lang='pug'>
  v-card.pa-4.mb-2(outlined tile)
    .d-flex.justify-space-between.align-center.flex-column.flex-md-row
      | person name
      .d-flex.align-center
        v-icon.mr-1(color='success') mdi-clock
        | {{ new Date().toLocaleString() }}
    v-divider.mt-2.mb-4
    div Lorem Ipsum is simply dummy text of the printing and typesetting industry.
</template>

<script>
import BaseComponent from '@/modules/BaseComponent'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class Comment extends BaseComponent {

  @Prop(Number) comment

}
</script>
