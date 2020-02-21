<template>
<div>
    <menu-profile></menu-profile>
    <div class="row main">
        <div class=" col-8 left containerBanner">
            <transition name="face">
                <router-view></router-view>
            </transition>

        </div>
        <div class="col-4 right">
            <content-right></content-right>
        </div>
    </div>

</div>
</template>

<script>
import menuProfile from '../Layout/menu.vue'
import contentRight from './ContentRight.vue'
export default {

    methods: {
        activeDialog() {
            this.$refs.activeClick.clickShowInfoAvt();
        },
    },
    components: {
        contentRight,
        menuProfile
        // contentLeft

    }
}
</script>

<style scoped>
/* .face-enter{
    opacity: 0;
  }
.face-enter-to{
    opacity: 1;
}
.face-enter-active {
    transition:opacity 1s;
}

.face-leave{
    opacity: 1;
}
.face-leave-active{
transition :opacity 1s;

}
.face-leave-to{
    opacity: 0;
} */



.main {
    margin: 0;
    border-radius: 4px;
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, .1);
    overflow: hidden;
}

.main div {
    padding: 0;

}

.right {
    /* background-color: blueviolet */
}
</style>
