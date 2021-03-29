import { createStore } from 'vuex'
import sourceData from '@/data.json'
export default createStore({
  state: {
    ...sourceData,
    authId: '38St7Q8Zi2N1SPa5ahzssq9kbyp1'
  },
  getters: {
    authUser: state => state.users.find(user => user.id === state.authId)
  },
  actions: {
    createPost (context, post) {
      post.id = 'ggg' + Math.random()
      context.commit('setPost', { post }) // set the post
      context.commit('appendPostToThread', { postId: post.id, threadId: post.threadId }) // append post to thread
    }
  },
  mutations: {
    setPost (state, { post }) {
      state.posts.push(post)
    },
    appendPostToThread (state, { postId, threadId }) {
      const thread = state.threads.find(t => t.id === threadId)
      thread.posts.push(postId)
    }
  }
})
