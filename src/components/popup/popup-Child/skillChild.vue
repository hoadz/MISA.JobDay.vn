<template>

    <div class="modal-body dialog-body">
        <div class="form-body">
            <div class="form-group">
                <label for="" class="text-form1">Kỹ năng chuyên môn <span>*</span></label>
                <input type="email" class="form-control  text-form2" aria-describedby="emailHelp" placeholder="Ki nang cua ban">
                <small id="" class="form-text text-muted"></small>
            </div>
            <div class="form-group">
                <label for="" class="text-form1">Đánh giá <span>*</span></label>
                <star-rating v-model="rating" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :increment="0.5" :max-rating=5 :star-size=30 :padding=10 active-color="#ff5969"></star-rating>
                <small id="" class="form-text text-muted"></small>
            </div>
        </div>
    </div>


</template>

<script>
import StarRating from 'vue-star-rating'
export default {
    data() {
        return {
            rating: 0
        }
    },
    components: {
        StarRating,
    },
}
</script>

<style scoped>
.modal-body.dialog-body {
    margin: 24px;
    padding-top: 10px;
    background-color: #f9f9f9;
    border-radius: 3.5px;
    border: 1px solid #e0e8ec;
    max-height: 70vh;
    overflow: auto;
    overflow-x: hidden;
}
</style>
