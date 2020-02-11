<template>
<div class="Education">
    <!-- Button trigger modal -->
    <button type="button" style="display:none" class="btn btn-primary" data-toggle="modal" data-target="#Education" ref="active">
        Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="Education" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                            <input type="email" class="form-control  text-form2" aria-describedby="emailHelp" placeholder="Nhập trường học">
                            <small id="" class="form-text text-muted"></small>
                        </div>
                        <div class="form-row mt-3">
                            <div class="form-group col-md-6">
                                <label for="" class="text-form1">Chuyên ngành <span>*</span></label>
                                <input type="email" class="form-control  text-form2" aria-describedby="emailHelp" placeholder="Nhập trường học">
                                <small id="" class="form-text text-muted"></small>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="">Bằng cấp <span>*</span></label>

                                <select class="custom-select" id="inputGroupSelect01">
                                    <option selected>Đại Học</option>
                                    <option value="1">Cao Đẳng</option>
                                    <option value="2">Trung Cấp</option>
                                    <option value="3">Trung Học Phổ Thông</option>
                                    <option value="3">No Bằng</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="text-form1">Thời gian <span>*</span></label>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                <label class="custom-control-label" for="customCheck1">Tôi đang học ở đây</label>
                            </div>
                        </div>

                        <div class="form-row mt-3">
                            <div class="form-group col-md-6">
                                <label for="" class="text-form1">Thời gian bắt đầu </label>
                                <div class="form-row mt-2">
                                    <div class="col-6">
                                        <input type="number" class="form-control " max="12" min="1" aria-describedby="emailHelp" placeholder="Tháng">
                                    </div>
                                    <div class="col-6">
                                        <input type="number" class="form-control " max="3000" min="1" aria-describedby="emailHelp" placeholder="Năm">
                                    </div>
                                </div>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="">Thời gian kết thúc </label>
                                <div class="form-row mt-2">
                                    <div class="col-6">
                                        <input type="number" class="form-control " max="12" min="1" aria-describedby="emailHelp" placeholder="Tháng">
                                    </div>
                                    <div class="col-6">
                                        <input type="number" class="form-control " max="3000" min="1" aria-describedby="emailHelp" placeholder="Năm">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="" class="text-form1">Mô tả chi tiết</label>
                            <textarea class="form-control rounded-0 detail" id="exampleFormControlTextarea2" rows="3"></textarea>
                        </div>
                    </div>
                </div>
                 <div class="modal-footer  dialog-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn-color">Save changes</button>
                    </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        active: function () {
            this.$refs.active.click();
        }
    }
}
</script>

<style scoped>
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
    padding: 24px;
    padding-top: 10px;
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
    width: 786px;
    /* height: 720px; */
    overflow: hidden;
}

.modal-header.text-header {
    padding-left: 24px;
    padding-top: 17px;
    border-bottom: none;
}
</style>
