<template>
    <div class="containerHome">
        <div class="content">
            <header-home></header-home>   
            <menu-home></menu-home>
            <ContentHome></ContentHome>
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
}
.content{
    width: calc(100% - 280px);
    margin: 0 auto;
}
.iconBackground{
       background-image: url('../assets/icon.svg');
        
    }
</style>