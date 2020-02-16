import Home from './components/Home.vue'
import ContentLeft from './components/records management/contentLeft.vue'
import favoriteJob from './components/Base/favoriteJob.vue'
import contentHome from './components/records management/ContentHome.vue'
import SaveJob from './components/Base/SaveJob.vue';
import JobApplied from './components/Base/JobApplied.vue'
import jobNotification from './components/Base/jobNotification.vue'
export const routes = [
    {path:'/' ,name:'Home',component:Home,children :[
        {path:'profile',name:'profile',component:contentHome,children:[
            {path:'',name:'contentProfile',component:ContentLeft},
            {path:'favoriteJob',name:'favoriteJob',component:favoriteJob},
            {path:'saveJob',name:'saveJob',component:SaveJob},
            {path:'JobApplied',name:'JobApplied',component:JobApplied},
            {path:'jobNotification',name:'jobNotification',component:jobNotification}
        ]}
    ]}
]