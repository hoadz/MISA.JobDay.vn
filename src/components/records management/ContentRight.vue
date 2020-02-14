<template>
<div class="container-right ">
    <div class="d1 row ml-auto">
        <div class="row text-top d-flex  align-item-center">
            <div class="justify-content-center align-items-center d-flex">
                <p>Cài đặt chế độ bảo mật Hồ sơ</p>
            </div>
        </div>
        <div class="row r1 justify-content-end">
            <div class="text-icon-bottom row">
                <div class="col-sm-2 active-icon">
                    <!-- <div class="icon-two">
                        <div class="icon-one"></div>
                    </div> -->
                    <toggle-button v-model="checkButton" :speed=300 color="#ff5969" :width="46" :height="26" />
                </div>
                <div class="col-sm-10 text-thongbao" v-if="checkButton == false">
                    <p class="text-status">Trạng thái tìm việc đang tắt </p>
                    <p class="text-status2">CV của bạn không hiển thị công khai, nhà tuyển dụng không thể tìm thấy CV của bạn, nhưng bạn có thể đính CV khi nộp đơn cho một việc làm.</p>
                </div>
                <div class="col-sm-10 text-thongbaotrue" v-else>
                    <p class="text-status">Trạng thái tìm việc đang bật </p>
                    <p class="text-status2">CV của bạn hiển thị công khai, nhà tuyển dụng sẽ tìm thấy CV của bạn, họ có thể gửi gmail hoặc thông tin được cung cấp bởi thông tin cá nhân của bạn </p>
                </div>
            </div>
        </div>
    </div>
    <div class="d2 row ml-auto">
        <div class="row text-top d-flex  align-item-center">
            <div class="justify-content-center align-items-center d-flex">
                <p>Nhận email thông báo việc làm</p>
            </div>
        </div>
        <div class="row r2 justify-content-end">
            <div class="text-icon-bottom row">
                <p class="d2-text ">Chúng tôi sẽ gửi Email công việc phù hợp với bạn.</p>

                <div class="row text-e1">
                    <div class="text-e d-flex align-items-center ">
                        <p>nguyenvieth0a1998@gmail.com</p>
                    </div>
                </div>
                <div class="row text-e2 d-flex align-items-center justify-content-center">
                    <div class="d-flex align-items-center justify-content-center">

                        <p>Nhận thông báo</p>
                    </div>
                </div>
                <div class="t10"></div>
            </div>
        </div>
    </div>
    <!-- khuc thu 3 -->
    <div class="d3 row ml-auto">
        <div class="row text-top d-flex  align-item-center">
            <div class="justify-content-center align-items-center d-flex">
                <p>Bạn đã có CV chưa?</p>
            </div>
        </div>
        <div class="row r2 justify-content-end">
            <div class="text-icon-bottom row">
                <p class="d3-text ">Tạo CV chuyên nghiệp nhận ngay việc làm ưng ý.</p>
            </div>
            <div class="row text-e3 d-flex align-items-center justify-content-center">
                <div class="d-flex align-items-center justify-content-center e3-1">
                    <div class="text-e2-icon iconBackground"></div>
                    <p>Tạo CV ngay</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { ToggleButton } from 'vue-js-toggle-button'
export default {
    data() {
        return {
            checkButton: false
        }
    },
    components:{
        ToggleButton
    }
}
</script>

<style scoped>
.text-thongbaotrue .text-status {
    color: #ff5969 !important;
}

.text-thongbaotrue .text-status2 {
    color: #212121 !important;
}
.e3-1:hover p {
    color: #FF5969 !important;
}
.row.text-e2 div:hover p {color: #FF5969;}
.row.text-e2 div:hover {
    border: 1px solid  #FF5969;
    }
.e3-1:hover {
    color: #FF5969 !important;
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, .1);
    border: thin dashed #FF5969 !important;
}

.text-e2-icon.iconBackground {
    margin-right: 6px;
    width: 16px;
    height: 16px;
    background-position: -52px -36px;
}

.row.text-e3 p {
    margin: 0;
    font-size: 15px;
    color: #1d1d1d;
}

.row.text-e3 {
    width: 100%;
    margin: 0;
    padding-left: 15px;
    padding-right: 20px;
    margin-bottom: 20px;
}

.row.text-e3 .e3-1 {
    background-color: #ffffff;
    border-radius: 3px;
    border: 1px dashed #e0e8ec;
    width: 100%;
    height: 38px;
    overflow: hidden;
    cursor: pointer;
}

.d3.row.ml-auto {
    background-color: #ffffff;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 3px 6px rgba(0, 0, 0, .1);
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, .1);
    height: 265px;
    overflow: hidden;
    margin: 0;
    margin-top: 17px;
    width: 90%;
}

.t10 {
    height: 10%;
    width: 100%;
}

.row.text-e2 p {
       font-size: 15px;
    color: #212121;
    margin: 0;

}

.row.text-e2 div {
    border-radius: 3.5px;
    border: 1px solid #E0E8EC;
    width: 100%;
    height: 39px;
    overflow: hidden;
    cursor: pointer;
}

.row.text-e2 {
    width: 100%;
    padding-left: 15px;
}

.text-e {
    background-color: #ffffff;
    border-radius: 4px;
    border: 1px solid #e0e8ec;
    width: 100%;
    height: 40px;
    overflow: hidden;
}

.row.text-e1 {
    width: calc(100% + 15px);
    /* padding-left: 15px; */
    height: 30%;
}

.text-e p {
    font-size: 15px;
    color: #212121;
    padding-left: 15px;
    margin: 0;
}

.row.text-e1 {
    width: 100%;
    padding-left: 15px;
    height: 30%;
}

.row.r2 {
    height: calc(265px - 60px);
    margin: 0;
    border-top: thin solid #e0e8ec;
    /* border-top: thin solid red; */
    padding-top: 15px;
    width: 100%;
}

p.d2-text {
    font-size: 15px;
    color: #666666;
    height: 30%;
    margin: 0;
    padding-top: 10px;
    /* padding-right: 20px; */
}

.d2.row {
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, .1);
    height: 265px;
    overflow: hidden;
    margin: 0;
    margin-top: 17px;
    width: 90%;
}

p.text-status2 {
    font-size: 15px;
    color: #666666;
}

p.text-status {
    margin-bottom: 11px;
    font-size: 15px;
    font-weight: 500;
    color: #212121;
}

.icon-one {
    background-color: #ffffff;
    border-radius: 50%;
    width: 19px;
    height: 19px;
    overflow: hidden;
    margin: 3px 19px 3px 3px;
}

.icon-two {
    background-color: #bdc7d2;
    border-radius: 12px;
    width: 39px;
    height: 24px;
    overflow: hidden;
    cursor: pointer;
}

.col-sm-2.active-icon {
    padding: 0;
}

.col-sm-10.text-thongbao {
    /* padding: 0px 20px 0px 5px; */
}

.text-icon-bottom {
    width: calc(100% - 15px);
    margin: 0;
    padding-right: 20px;
}

.row.r1 {
    height: calc(237px - 60px);
    margin: 0;
    border-top: thin solid #e0e8ec;
    /* border-top: thin solid red; */
    padding-top: 15px;
}

.text-top p {
    margin: 0;
    font-size: 18px;
    /* font-size: 15px; */
    font-weight: 500;
    color: #212121;
}

.text-top div {
    margin-left: 15px;
}

.row.text-top {
    background-color: #f9f9f9;
    /* background-color: aqua; */
    width: 100%;
    height: 60px;
    margin: 0;
}

.d1 {
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, .1);
    width: 90%;
    height: 237px;
    overflow: hidden;
    margin: 0
}
</style>
