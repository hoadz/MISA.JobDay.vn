<template>
<div>
    <button type="button"  style="display:none" class="btn btn-primary" data-toggle="modal" data-target="#Project" ref="active">
    </button>
    <div class="modal fade" data-backdrop="static" id="Project" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog  modal-xl dialog-all" role="document">
            <div class="modal-content body-dialog">
                <div class="modal-header text-header">
                    <h5 class="modal-title text-title">Dự án</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                 <div class="modal-content body-dialog">
                    <div class="modal-body dialog-body">
                        <div class="form-body">
                            <div class="form-group">
                                <label for="" class="text-form1">Tên dự án <span>*</span></label>
                                <input v-model="DataMain.nameProject" type="email" class="form-control  text-form2" aria-describedby="emailHelp" placeholder="Tên dự án">
                                <small id="" class="form-text text-muted"></small>
                            </div>
                            <div class="form-group">
                                <label for="" class="text-form1">Khách hàng<span>*</span></label>
                                <input v-model="DataMain.NameCustomer" type="email" class="form-control  text-form2" aria-describedby="emailHelp" placeholder="Tên khách hàng">
                                <small id="" class="form-text text-muted"></small>
                            </div>  
                            <div class="form-group">
                                <label for="" class="text-form1">Số thành viên <span>*</span></label>
                                <input v-model="DataMain.CountMember" type="email" class="form-control  text-form2" aria-describedby="emailHelp" placeholder="Số thành viên tham gia dự án">
                                <small id="" class="form-text text-muted"></small>
                            </div>  
                            <div class="form-group">
                                <label for="" class="text-form1">Vị trí của bạn trong dự án<span>*</span></label>
                                <input v-model="DataMain.YourPositon" type="email" class="form-control  text-form2" aria-describedby="emailHelp" placeholder="Vị trí của bạn trong dự án">
                                <small id="" class="form-text text-muted"></small>
                            </div>
                            <div class="form-group">
                                <label for="" class="text-form1">Nhiệm vụ <span>*</span></label>
                                <input v-model="DataMain.mission" type="email" class="form-control  text-form2" aria-describedby="emailHelp" placeholder="Nhiệm vụ của bạn trong dự án">
                                <small id="" class="form-text text-muted"></small>
                            </div>
                            <div class="form-row mt-3">
                                <div class="form-group col-md-6">
                                    <label for="" class="text-form1">Thời gian bắt đầu </label>
                                    <div class="form-row mt-2">
                                        <div class="col-6">
                                            <input v-model="DataMain.monthStart" type="number" class="form-control " max="12" min="1" aria-describedby="emailHelp" placeholder="Tháng">
                                        </div>
                                        <div class="col-6">
                                            <input v-model="DataMain.mouthEnd" type="number" class="form-control " max="3000" min="1" aria-describedby="emailHelp" placeholder="Năm">
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group col-md-6">
                                    <label for="">Thời gian kết thúc </label>
                                    <div class="form-row mt-2">
                                        <div class="col-6">
                                            <input v-model="DataMain.yearStart" type="number" class="form-control " max="12" min="1" aria-describedby="emailHelp" placeholder="Tháng">
                                        </div>
                                        <div class="col-6">
                                            <input v-model="DataMain.yearEnd" type="number" class="form-control " max="3000" min="1" aria-describedby="emailHelp" placeholder="Năm">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group textaer">
                                <label for="" class="text-form1">Mô tả chi tiết</label>
                                <textarea v-model="DataMain.describe" class="form-control rounded-0 detail" placeholder="Mô tả chi tiết dự án" id="exampleFormControlTextarea2" rows="3"></textarea>
                            </div>

                        </div>
                    </div>
                    <div class="twe-itemExp d-flex flex-row align-items-center justify-content-center">
                        <div class="item-icon iconBackground "></div>
                        <p> Thêm mới</p>
                    </div>
                    <div class="modal-footer  dialog-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" ref="close">Hủy</button>
                        <button type="button" class="btn-color" @click="commitdata">Lưu thông tin</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {coverDate} from '../../MyMixins.js'
export default {
    mixins: [coverDate],
    data() {
        return {
            DataMain: {
                name: "popupMain",
                nameProject: "",
                NameCustomer: "",
                CountMember :0,
                YourPositon:"",
                mission :"",

                describe: "",
                time: "",
            }
        }
    },
    methods: {
        active: function () {
            this.$refs.active.click();
        },

    }
}
</script>

<style scoped>
.form-group.col-md-6 {
    margin-bottom: 0;
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

.modal-body.dialog-body {
    margin: 24px;
    padding-top: 10px;
    background-color: #f9f9f9;
    border-radius: 3.5px;
    border: 1px solid #e0e8ec;
}
</style>
