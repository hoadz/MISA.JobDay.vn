<template>
    <div class="containerbody">
        <div class="containerHome">
            <header-home></header-home>   
        <div class="content">
            <menu-home></menu-home>
            <ContentHome></ContentHome>
        </div>
    </div>
    </div>
    
</template>
<script>
import headerHome from './Layout/header.vue'
import menuHome from './Layout/menu.vue'

import ContentHome from './records management/ContentHome.vue'
export default {
    components:{
        headerHome,
        menuHome,
        ContentHome
    }
}
</script>
<style >
.containerHome{
    margin: 0 auto;
    background-color: #f0f0f0;
}
.content{
    width: calc(100% - 280px);
    margin: 0 auto;
}
.iconBackground{
       background-image: url('../assets/icon.svg');
        
    }
</style>