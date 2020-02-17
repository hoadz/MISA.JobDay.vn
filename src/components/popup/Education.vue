<template>
<div class="Education">
    <!-- Button trigger modal -->
    <button type="button" style="display:none" class="btn btn-primary" data-toggle="modal" data-target="#Education" ref="active">
    </button>

    <!-- Modal -->
    <div class="modal fade" data-backdrop="static" id="Education" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog  modal-xl dialog-all" role="document">
            <div class="modal-content body-dialog">
                <div class="modal-header text-header">
                    <h5 class="modal-title text-title">Học vấn và bằng cấp</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body dialog-body">
                    <div class="form-body">
                        <div class="form-group">
                            <label for="" class="text-form1">Trường học <span>*</span></label>
                            <input v-model="DataMain.nameSchool" type="email" class="form-control  text-form2" aria-describedby="emailHelp" placeholder="Nhập trường học">
                            <small id="" class="form-text text-muted"></small>
                        </div>
                        <div class="form-row mt-3">
                            <div class="form-group col-md-6">
                                <label for="" class="text-form1">Chuyên ngành <span>*</span></label>
                                <input v-model="DataMain.major" type="email" class="form-control  text-form2" aria-describedby="emailHelp" placeholder="Nhập chuyên ngành">
                                <small id="" class="form-text text-muted"></small>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="">Bằng cấp <span>*</span></label>

                                <select v-model="DataMain.qualifications" class="custom-select" id="inputGroupSelect01">
                                    <option >Đại Học</option>
                                    <option >Cao Đẳng</option>
                                    <option >Trung Cấp</option>
                                    <option >Trung Học Phổ Thông</option>
                                    <option >No Bằng</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="text-form1">Thời gian <span>*</span></label>
                            <div class="custom-control custom-checkbox">
                                <input   true-value="true" false-value="false" type="checkbox" class="custom-control-input" id="customCheck1">
                                <label class="custom-control-label" for="customCheck1">Tôi đang học ở đây</label>
                            </div>
                        </div>

                        <div class="form-row mt-3">
                            <div class="form-group col-md-6">
                                <label for="" class="text-form1">Thời gian bắt đầu </label>
                                <div class="form-row mt-2">
                                    <div class="col-6">
                                        <input v-model="monthStart" type="number" class="form-control " max="12" min="1" aria-describedby="emailHelp" placeholder="Tháng">
                                    </div>
                                    <div class="col-6">
                                        <input v-model="mouthEnd" type="number" class="form-control " max="3000" min="1" aria-describedby="emailHelp" placeholder="Năm">
                                    </div>
                                </div>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="">Thời gian kết thúc </label>
                                <div class="form-row mt-2">
                                    <div class="col-6">
                                        <input v-model="yearStart" type="number" class="form-control " max="12" min="1" aria-describedby="emailHelp" placeholder="Tháng">
                                    </div>
                                    <div class="col-6">
                                        <input v-model="yearEnd" type="number" class="form-control " max="3000" min="1" aria-describedby="emailHelp" placeholder="Năm">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group textaer">
                            <label for="" class="text-form1">Mô tả chi tiết</label>
                            <textarea v-model="DataMain.describe" class="form-control rounded-0 detail" id="exampleFormControlTextarea2" rows="3"></textarea>
                        </div>
                    </div>
                </div>

                <div class="modal-footer  dialog-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" ref="close">Hủy</button>
                    <button type="button" class="btn-color" @click="commitdata">Lưu thông tin</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {coverDate} from '../../MyMixins.js'
export default {
    mixins:[coverDate],
    data() {
        return {
            DataMain: {
                name :"popupMain",
                nameSchool: "",
                major: "",
                qualifications: "Đại Học",
                // timeNow: false,
                describe:"",
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
.form-group.textaer {
    margin-bottom: 0;
}

.modal-footer.dialog-footer {
    padding-top: 0;
    border-top: none;
    padding-bottom: 20px;
    padding-right: 24px;
}

.form-group.textera {
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
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, .1);
    background-color: #FB727F !important;
}

.form-group.col-md-6 span {
    color: #ff5969;
}

label.text-form1 span {
    color: #ff5969;
}

label.text-form1 {
    font-size: 15px;
    font-weight: 600;
    color: #212121;
}

.modal-body.dialog-body {
    margin: 24px;
    padding-top: 10px;
    background-color: #f9f9f9;
    border-radius: 3.5px;
    border: 1px solid #e0e8ec;
}

.text-title {
    font-size: 22px;
    font-weight: 700;
    color: #212121;
}

.modal-dialog.modal-xl.dialog-all {
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, .1);
    /* width: 786px; */
    /* height: 720px; */
    overflow: hidden;
    top: 25%;
    transform: translateY(-25%);
}

.modal-header.text-header {
    padding-left: 24px;
    padding-top: 17px;
    border-bottom: none;
}
</style>
