<template>
<div>
    <template v-if="arrayData == null">
        <no-save >
            <p>{{textHeader}}</p>
        </no-save>
    </template>

    <job-save v-else v-bind:arrayData="arrayData">
    </job-save>
</div>
</template>

<script>
import noSave from './noSave.vue'
import JobSave from './JobSave.vue'
export default {
    data() {
        return {
            textHeader: "Bạn chưa có việc làm đã lưu",
            arrayData: [{
                location: "Quản ký bán hàng",
                linkImage :"https://vmptraining.com/wp-content/uploads/TECOMEN.jpg",
                place: "Kangaroo Group",
                city: "Bình Dương",
                money: "20 000 000 - 30 000 000 VND",
                dayUpdate: "12/02/2020"
            },
            {
                location: "Quản ký bán hàng",
                linkImage :"https://vmptraining.com/wp-content/uploads/TECOMEN.jpg",
                place: "Kangaroo Group",
                city: "Bình Dương",
                money: "20 000 000 - 30 000 000 VND",
                dayUpdate: "12/02/2020"
            },
            {
                location: "Quản ký bán hàng",
                linkImage :"https://vmptraining.com/wp-content/uploads/TECOMEN.jpg",
                place: "Kangaroo Group",
                city: "Bình Dương",
                money: "20 000 000 - 30 000 000 VND",
                dayUpdate: "12/02/2020"
            }]
        }
    },
    components: {
        noSave,
        JobSave
    }
}
</script>

<style>
.main-nosave {
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .1);
    /* width: 736px; */
    height: 290px;
    overflow: hidden;
}
</style>
