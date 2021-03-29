import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

const forumApp = createApp(App)
forumApp.use(router)

// auto import and add all vue files in components that prefix with App as global components
const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName = baseComponentConfig.name || (
    fileName.replace(/^.+\//, '').replace(/\.\w+$/, '')
  )
  forumApp.component(baseComponentName, baseComponentConfig)
})

forumApp.mount('#app')
