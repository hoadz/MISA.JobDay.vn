<template>
<div>
    <button style="display:none" ref="activeClick" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal " id="exampleModal" data-backdrop="static" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog dialog-all" role="document">
            <div class="modal-content body-dialog">
                <div class="modal-header text-header">
                    <h5 class="modal-title text-title" id="exampleModalLabel">Thông tin cá nhân</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body dialog-body">
                    <!-- popup crop anh -->
                    <cropAvata ref="cropAvata" v-bind:src="imageAvata" v-on:getUrlCrop="getUrlCrop"></cropAvata>

                    <div class="row cover-image" v-bind:style="{backgroundImage: 'url('+this.infoUser.imageCover+')' ,backgroundSize: 'cover'}">
                        <!-- su kien kich vao de hien len input lay anh bia tu may -->
                        <div @click="$refs.inputCoverImg.click()" class="update-cover-image d-flex justify-content-center align-items-center ">
                            <div class="icon-update iconBackground"></div>
                            <div class="text-update">
                                <p>Cập nhật ảnh bìa</p>
                            </div>
                        </div>
                        <!-- su kien kich vao de lay anh avata -->
                        <div class="avt" @click="upLoadAvt" v-bind:style="[this.checkPushAvt ?{backgroundImage: 'url('+this.infoUser.imageAvataGet+')' ,backgroundSize: 'cover'} :'']">
                            <div class="avt-image iconBackground"></div>
                        </div>
                    </div>
                    <div class="form-body">
                        <div class="form-group">
                            <label for="" class="text-form1">Họ tên <span>*</span></label>
                            <input type="email" v-model="infoUser.name" class="form-control  text-form2" aria-describedby="emailHelp" placeholder="Họ và tên của bạn">
                            <small id="" class="form-text text-muted"></small>
                        </div>
                        <div class="form-group mt-3">
                            <label for="" class="text-form1">Vị trí công việc <span>*</span></label>
                            <input v-model="infoUser.jobPosition" type="email"  class="form-control text-form2" aria-describedby="emailHelp" placeholder="Vị trí hiện tại của bạn">
                            <small id="" class="form-text text-muted"></small>
                        </div>
                        <div class="form-group mt-3">
                            <label for="exampleInputEmail1" class="text-form1">Email <span>*</span></label>
                            <input v-model="infoUser.email" type="email" class="form-control text-form2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                        </div>
                        <div class="form-group mt-3">
                            <label for="" class="text-form1">Điện thoại <span>*</span></label>
                            <input v-model="infoUser.phoneNumber" type="email" class="form-control text-form2" aria-describedby="emailHelp" placeholder="Số điện thoại hiện tại">
                            <small id="" class="form-text text-muted"></small>
                        </div>
                        <div class="form-group mt-3">
                            <label for="" class="text-form1">Ngày sinh <span>*</span></label>
                            <!-- <input type="email" class="form-control text-form2" aria-describedby="emailHelp" placeholder="Ngày sinh của bạn"> -->
                            <date-picker format="DD-MM-YYYY" ></date-picker>
                            <small id="" class="form-text text-muted"></small>
                        </div>
                        <div class="form-row mt-3">
                            <div class="form-group col-md-6">
                                <label for="" class="text-form1">Giới tính <span>*</span></label>
                                <div class="form-row mt-2">
                                    <div class="col-5">
                                        <div class="custom-control custom-radio">
                                            <input v-model="infoUser.sex" value="Nam" type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                                            <label class="custom-control-label" for="customRadio1">Nam</label>
                                        </div>
                                    </div>
                                    <div class="col-7">
                                        <div class="custom-control custom-radio">
                                            <input v-model="infoUser.sex" value="Nữ" type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
                                            <label class="custom-control-label" for="customRadio2">Nữ</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="">Tình trạng hôn nhân <span>*</span></label>
                                <div class="form-row mt-2">
                                    <div class="col-5">
                                        <div class="custom-control custom-radio">
                                            <input v-model="infoUser.marry" value="Độc thân" type="radio" id="customRadio3" name="customRadio1" class="custom-control-input">
                                            <label class="custom-control-label" for="customRadio3">Độc thân</label>
                                        </div>
                                    </div>
                                    <div class="col-7">
                                        <div class="custom-control custom-radio">
                                            <input value="Đã kết hôn" v-model="infoUser.marry" type="radio" id="customRadio4" name="customRadio1" class="custom-control-input">
                                            <label class="custom-control-label" for="customRadio4">Đã kết hôn</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group ">
                            <label for="" class="text-form1">Địa chỉ hiện tại <span>*</span></label>
                            <input v-model="infoUser.adress" type="email" class="form-control text-form2" aria-describedby="emailHelp" placeholder="Địa chỉ hiện tại của bạn">
                            <small id="" class="form-text text-muted"></small>
                        </div>
                    </div>
                </div>
                <div class="modal-footer dialog-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                    <button type="button" class=" btn-color" @click="commitdataAvt">Lưu thông tin </button>
                </div>
            </div>
        </div>
    </div>
    <input type="file" style="display:none" ref="inputCoverImg" accept="image/*" @change="uploadCoverImg">
    <input type="file" style="display:none" ref="inputAvtImg" accept="image/*" @change="uploadAvtImg">
</div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css';
import cropAvata from './popup-childs/cropAvata.vue'
export default {
    data() {
        return {
            imageAvata: '',
            checkPushAvt:false,
            infoUser: {
                imageAvataGet:'',
                imageCover: '',
                name: '',
                jobPosition: "",
                email: "",
                phoneNumber: "",
                adress: "",
                birthday: "",
                sex: "",
                marry:''
            }
        }
    },
    methods: {

        // kich vao input lay anh avata
        upLoadAvt() {
            this.$refs.inputAvtImg.click();
        },

        // ham nhan url avt tu ben popup con 
        getUrlCrop(e){
            this.checkPushAvt=true;
            this.infoUser.imageAvataGet =e;
        },

        //su kien gui lai du lieu ve componnent cha la  comptentleft 
        commitdataAvt() {
            // console.log('DialogAVt')
            this.$emit('commitdataAvt', this.infoUser);
            window.$('#exampleModal').modal('hide');
        },
        uploadCoverImg(e) {
            let file = e.target.files[0];
            this.infoUser.imageCover = URL.createObjectURL(file);

            // Reference to the DOM input element
            // var input = event.target;

            // var reader = new FileReader();

            // reader.onload = (e) => {

            //     this.imageData = e.target.result;
            // }

            // reader.readAsDataURL(input.files[0]);
            // console.log('tag', this.imageData);
        },
        // nhan su kien kich hoat o ben component cha la contentleft
        clickShowInfoAvt: function () {
            this.$refs.activeClick.click();
        },
        // 2 ham nhan hinh anh va cover sang dang 64bit va chuyen sang ben cropavata
        uploadAvtImg(e) {
            var vm = this;
            new Promise(function (resolve) {
                vm.imageAvata = ''
                resolve();
            }).then(function () {

                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                vm.createImage(files[0]);
            });

        },
        createImage(file) {
            var vm = this;
            var reader = new FileReader();
            //var image = new Image();
            reader.onload = (e) => {
                console.log("createImage-onload" )
                vm.imageAvata = e.target.result;
                // console.log(vm.imageAvata)
                 this.$refs.cropAvata.active();

            };
            reader.readAsDataURL(file);
        },


    },
    components: {
        DatePicker,
        cropAvata
    },
}
</script>

<style scoped>
.mx-datepicker {
    position: relative;
    display: inline-block;
    width: 100%;
}

.modal-dialog.dialog-all {
    margin: 0;
    width: 100%;
    left: 50%;
    transform: translateX(-73%) !important;
}

.custom-control-input:checked~.custom-control-label::before {
    color: #fff;
    border-color: #ff5969;
    background-color: #ff5969;
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
}

button.btn-color:hover {
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, .1);
    background-color: #FB727F !important;
}

label.text-form1 {
    font-size: 15px;
    font-weight: 500;
    width: 100%;
    color: #212121;
}

input.form-control.text-form2 {
    font-size: 15px;
    font-weight: 500;
    color: #212121;
}

label.text-form1 span {
    margin-left: 5px;
    color: #ff5969;
}

.form-body {
    margin: 80px 10px 10px 25px;
    padding-right: 10px;
    padding-left: 2px;
    overflow: auto;
    overflow-x: hidden;
    max-height: calc(100vh - 500px);

}

/* div#exampleModal {
    overflow: hidden;
} */
.avt-image.iconBackground {
    width: 18px;
    height: 16px;
    background-position: -395px -36px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
}

.avt {
    border-radius: 50%;
    border: 3px solid #ffff;
    width: 112px;
    height: 112px;
    overflow: hidden;
    background-size: cover;
    position: absolute;
    cursor: pointer;
    bottom: -45px;
    left: 28px;
    background-image: url('../../assets/avt.jpg');
}

.text-update p {
    margin: 0;
    font-size: 15px;
    color: #212121;
    margin-left: 6px;
}

.icon-update {
    background-position: -395px -36px;
    /* background-color: #9e9e9e; */
    width: 18px;
    height: 16px;
}

.update-cover-image {
    background-color: #ffffff;
    border-radius: 4px;
    width: 172px;
    height: 40px;
    overflow: hidden;
    position: absolute;
    top: 16px;
    cursor: pointer;
    right: 16px;
}

.dialog-body {
    padding: 0;
}

.row.cover-image {
    background-color: #ff5969;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, .06);
    width: 100%;
    height: 254px;
    margin: 0;
    position: relative;
}

.modal-header.text-header {
    padding-left: 24px;
    padding-top: 20px;
}

.modal-content.body-dialog {
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, .1);
    width: 786px;
    /* height: 1078px; */
    overflow: hidden;
}

.text-title {
    font-size: 22px;
    font-weight: 700;
    color: #212121;
}
</style>
