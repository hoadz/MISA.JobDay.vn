//  import Home from './components/Home.vue'
import ContentLeft from './components/records management/contentLeft.vue'
import favoriteJob from './components/Base/favoriteJob.vue'
export const routes = [
    {path:'/',name : "ContentLeft",component: ContentLeft},
    {path:'/favoritejob', name :"favoriteJob", component:favoriteJob}
]