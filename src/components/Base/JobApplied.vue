<template>
<div>
    <template v-if="arrayData == 0">
        <no-save v-bind:state="state">
            <p>{{textHeader}}</p>
        </no-save>
    </template>

    <Save v-else v-bind:arrayData="arrayData" v-bind:text="text">
        <template slot="note-icon">
            <button data-v-134bea0e="" type="button" class=" btn-CV" >Xem CV </button>
        </template>
        <template slot="name-date">
            Nộp CV ngày :
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
            state: "JobApplied",
            textHeader: "bạn chưa có thông báo việc làm đã ứng tuyển ",
            text: "đã ứng tuyển",
            arrayData: [{
                location: "Quản ký bán hàng",
                linkImage: "https://vmptraining.com/wp-content/uploads/TECOMEN.jpg",
                place: "Kangaroo Group",
                city: "Bình Dương",
                money: "20 000 000 - 30 000 000 VND",
                dayUpdate: "12/02/2020"
            }]
        }
    },
    components: {
        noSave,
        Save
    }
}
</script>

<style  scoped>

button.btn-CV {
    color: #ffffff !important;
    width: 160px;
    background-color: #ff5969;
    border-radius: 4px;
    height: 41px;
    overflow: hidden;
    border: none;
    font-size: 16px;
    line-height: 41px;
}

button.btn-CV:hover {
    -webkit-box-shadow: inset 0 2px 10px rgba(0, 0, 0, .1);
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, .1);
    background-color: #FB727F !important;
}

.main-nosave {
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .1);
    /* width: 736px; */
    height: 290px;
    overflow: hidden;
}
</style>
