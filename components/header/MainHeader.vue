<template>
  <v-app-bar
    fixed
    app
    flat
    rounded
  >
    <v-btn nuxt to='/' text class='font-weight-bold mr-8' rounded>{{ title }}</v-btn>
    <v-btn
      v-for="(item, i) in items"
      :key="i"
      :to="item.to"
      nuxt router exact rounded depressed active-class='info'
    > {{ item.title }}
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'MainHeader',
  data () {
    return {
      items: [
        {
          title: 'Главная',
          to: '/'
        },
        {
          title: 'О нас',
          to: '/inspire'
        }
      ],
      title: 'NUXT BLOG'
    }
  }
}
</script>

<style lang='sass' scoped>
  .v-btn
    &:not(:last-child)
      margin-right: 8px
</style>
