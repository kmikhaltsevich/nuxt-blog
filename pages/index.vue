<template lang='pug'>
  posts
</template>

<script>
import BasePage from '@/modules/BasePage'
import { Component } from 'vue-property-decorator'

import Posts from '@/components/main/Posts'

@Component({
  components: { Posts },
  head: {
    title: 'Главная страница'
  }
})
export default class IndexPage extends BasePage {

}
</script>
