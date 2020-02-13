<template>
<div>
    <div class="row main">
        <div class=" col-8 left containerBanner">
           <content-left></content-left>
        </div>
        <div class="col-4 right">
            <content-right></content-right>
        </div>
    </div>
    
</div>
</template>

<script>
// import popup from '../popup/dialogAvata.vue'
import contentLeft from './contentLeft.vue'
import contentRight from './ContentRight.vue'
export default {

    methods: {
        activeDialog() {
            this.$refs.activeClick.clickShowInfoAvt();
        },
    },
    components: {
        contentRight,
        contentLeft


    }
}
</script>

<style scoped>


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
