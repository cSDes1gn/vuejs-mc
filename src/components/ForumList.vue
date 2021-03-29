<template>
  <div class="col-full">
    <div class="category-item">
      <div class="forum-list">
          <h2 class="list-title">
            <router-link v-if="categoryId" :to="{ name: 'Category', params: { id: categoryId }}">{{ title }}</router-link>
            <span v-else>{{ title }}</span>
          </h2>
          <div class="forum-listing" v-for="forum in forums" :key="forum.id">
            <div class="forum-details">
              <router-link :to="{ name: 'Forum', params: { id: forum.id }}" class="text-xlarge">{{ forum.name }}</router-link>
              <p class="forum-description ">{{ forum.description }}</p>
            </div>
            <div class="threads-count">
              <p class="count text-lead">{{ forum.threads?.length }}</p>
              {{ forumThreadsWord(forum) }}
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default ({
  props: {
    forums: {
      required: true,
      type: Array
    },
    title: {
      required: true,
      type: String,
      default: 'Forums'
    },
    categoryId: {
      required: false,
      type: String
    }
  },
  methods: {
    forumThreadsWord (forum) {
      if (forum.threads?.length) {
        return forum.threads.length > 1 ? 'threads' : 'thread'
      } else {
        return 'no threads'
      }
    }
  }
})
</script>

<style scoped>
</style>
