<template>
  <h1>{{ category.name }}</h1>
  <forum-list :title="category.name" :forums="getForumsForCategory(category)"/>
</template>

<script>
import ForumList from '@/components/ForumList'

export default ({
  components: { ForumList },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    category () {
      return this.$store.state.categories.find(c => c.id === this.id)
    }
  },
  methods: {
    getForumsForCategory (category) {
      return this.$store.state.forums.filter(f => f.categoryId === category.id)
    }
  }
})
</script>

<style scoped>
</style>
