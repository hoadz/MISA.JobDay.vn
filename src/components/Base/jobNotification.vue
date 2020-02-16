<template>
<div>
    <template v-if="arrayData == 0">
        <no-save v-bind:state="state">
            <p>{{textHeader}}</p>
        </no-save>
    </template>

    <Save v-else v-bind:arrayData="arrayData" v-bind:text="text">
        <template slot="note-icon">
            <div class="note"></div>
        </template>
        <template slot="name-date">
            Ngày cập nhập:
        </template>
    </Save>
</div>
</template>

<script>
import noSave from './noSave.vue'
import Save from './Save.vue'
export default {
    data() {
        return {
            state: "jobNotification",
            textHeader: "Bạn chưa có thông báo việc làm nào",
            arrayData: [
            ]
        }
    },
    components: {
        noSave,
        Save
    }
}
</script>

<style scoped>
.main-nosave {
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .1);
    /* width: 736px; */
    height: 290px;
    overflow: hidden;
}
</style>
