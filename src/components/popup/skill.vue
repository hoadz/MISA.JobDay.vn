<template>
<div>
    <button type="button" style="display:none" class="btn btn-primary" data-toggle="modal" data-target="#skill" ref="active">
    </button>
    <div class="modal fade" data-backdrop="static" id="skill" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog  modal-xl dialog-all" role="document">
            <div class="modal-content body-dialog">
                <div class="modal-header text-header">
                    <h5 class="modal-title text-title">Kỹ năng</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-content body-dialog">
                    <div class="scroll">
                        <div class="modal-body dialog-body" v-for="(item,index) in countChilds" v-bind:key="index">
                            <div class="form-body">
                                <div class="form-group">
                                    <div class="row d-flex r1">
                                        <label for="" class="text-form1 col-sm-11">Kỹ năng chuyên môn <span>*</span></label>
                                        <div class="iconthungrac  col-sm-1 align-items-center d-flex">
                                            <div class="iconBackground" @click="deleteOneRow(index)"></div>
                                        </div>
                                    </div>
                                    <input type="email" class="form-control  text-form2" aria-describedby="emailHelp" placeholder="Ki nang cua ban" v-model="item.text">
                                    <small id="" class="form-text text-muted"></small>
                                </div>
                                <div class="form-group">
                                    <label for="" class="text-form1">Đánh giá <span>*</span></label>
                                    <star-rating v-model="item.rating" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :increment="0.5" :max-rating=5 :star-size=30 :padding=10 active-color="#ff5969"></star-rating>
                                    <small id="" class="form-text text-muted"></small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div @click="addItem()" class="twe-itemExp d-flex flex-row align-items-center justify-content-center">
                        <div class="item-icon iconBackground "></div>
                        <p> Thêm Kỹ năng</p>
                    </div>
                    <div class="modal-footer  dialog-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"  ref="close">Hủy</button>
                        <button type="button" class="btn-color"  @click="commitdata">Lưu thông tin</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
    data() {
        return {
            name:"skill",
            countChilds: [{
                text: '',
                rating: 0
            }],

        }
    },
    methods: {
        active: function () {
            this.$refs.active.click();
        },
        addItem() {
            this.countChilds.push({
                text: '',
                rating: 0
            })
        },
        deleteOneRow(index){
            this.countChilds.splice(index,1);
        },
        commitdata(){
            this.$emit('arraySkill',this.countChilds,this.name);
            this.$refs.close.click()
        }

    },
    components: {
        StarRating,
    }
}
</script>

<style scoped>
.iconthungrac .iconBackground {
    background-position: -192px 0px;
    width: 16px;
    margin-left: 16px;
    height: 16px;
    cursor: pointer;
}
.scroll {
    max-height: 57vh;
    overflow: auto;
    overflow-x: hidden;
}

.modal-body.dialog-body {
    margin: 24px;
    padding-top: 10px;
    background-color: #f9f9f9;
    border-radius: 3.5px;
    border: 1px solid #e0e8ec;
}

.modal-body.dialog-body span {
    color: #ff5969;
}

.item-icon.iconBackground {
    width: 24px;
    margin-right: 6px;
    height: 24px;
    background-position: -47px -34px;
}

.twe-itemExp:hover {
    -webkit-box-shadow: inset 0 2px 10px rgba(0, 0, 0, .1);
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, .1);
    border: thin dashed #FF5969 !important;
}

.twe-itemExp:hover p {
    color: #FF5969 !important;
}

.twe-itemExp {
    margin: 24px;
    margin-top: 0;
    border-radius: 3.5px;
    border: 1px dashed #e0e8ec;
    height: 39px;
    cursor: pointer;
}

.twe-itemExp p {
    font-size: 15px;
    color: #212121;
    margin: 0;
}

.form-group.textaer {
    margin-bottom: 0;
}

button.btn-color {
    width: 160px;
    background-color: #ff5969;
    border-radius: 4px;
    height: 41px;
    overflow: hidden;
    border: none;
    font-size: 16px;
    color: #ffffff;
    line-height: 41px;
    margin-right: 0;
}

button.btn-color:hover {
    -webkit-box-shadow: inset 0 2px 10px rgba(0, 0, 0, .1);
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, .1);
    background-color: #FB727F !important;
}

.modal-footer.dialog-footer {
    padding-top: 0;
    border-top: none;
    padding-bottom: 20px;
    padding-right: 24px;
}

.modal-body.dialog-body label {
    /* font-size: 15px; */
    font-weight: 600;
    color: #212121;
}

.dialog-all {
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, .1);
    width: 786px;
    /* height: 720px; */
    overflow: hidden;
    top: 25%;
    -webkit-transform: translateY(-25%);
    transform: translateY(-25%) !important;

}

h5.modal-title.text-title {
    font-size: 22px;
    font-weight: 700;
    color: #212121;
}

.modal-header.text-header {
    padding-left: 24px;
    padding-top: 17px;
    border-bottom: none;
}
</style>
