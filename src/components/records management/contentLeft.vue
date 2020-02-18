<template>
<div>
    <div v-bind:style="{backgroundImage: 'url('+imageCover+')' ,backgroundSize: 'cover'}" class="banneravt"></div>
    <div class="content-banner">
        <div class="row width-row-banner p1">
            <div class="d-flex flex-row banner-top mt-3">
                <!-- check theo dieu kien khi gui popup ve cho dialog cha -->
                <div class="avt mr-auto" v-bind:style="this.checkPushInfo ? [{backgroundImage: 'url('+imageAvataGet+')' ,backgroundSize: 'cover'}]:''"></div>
                <div class="banner-right d-flex flex-row">
                    <div class="dropdown mr-3">
                        <a v-on:click.prevent class="  dropdown-banner dropdown-toggle my-auto" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Thêm mục
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">Thông tin cá nhân </a>
                            <a class="dropdown-item" href="#">Trình độ</a>
                            <a class="dropdown-item" href="#">Kĩ năng </a>
                            <a class="dropdown-item" href="#">Thành tựu </a>
                            <a class="dropdown-item" href="#">khác </a>
                        </div>
                    </div>
                    <div class="icon1 mr-3 ml-3">
                        <div class="dropdown-menu a-icon-three" aria-labelledby="dropdownMenuLink">
                            <div class="download-sum d-flex justify-content-center align-items-center">
                                <div class="icon-download iconBackground"></div>
                                <p class="text-download">Chia sẻ hồ sơ</p>
                            </div>
                            <div class=" share d-flex justify-content-center align-items-center">
                                <div class="icon-share iconBackground"></div>
                                <p class="text-share">Tải xuống PDF</p>
                            </div>
                        </div>
                        <div class="iconBackground icon-three" data-toggle="dropdown"></div>
                    </div>
                    <!-- su kien khi kich vao nut sua va hien thi lai pupop thong tin ca nhan -->
                    <div class="icon2 mr-3" v-on:click="activeDialog">
                        <div class="iconBackground"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row width-row-banner p2">
            <div class="col-sm-12"></div>
            <p v-if="!checkPushInfo">Nguyễn Thị Như{{test}}</p>
            <p v-else>{{name}}</p>
        </div>
        <div class="row width-row-banner p3 justify-content-center align-items-center" v-if="!checkPushInfo">
            <!-- su kien hien thi popup cap nhap thong tin ca nhan -->
            <div v-on:click="activeDialog" class="div want-info row justify-content-center align-items-center">
                <p>Bạn cần hoàn thiện thông tin cá nhân để có thể hiển thị đầy đủ</p>
            </div>
        </div>
        <date-picker style="display:none" format="DD-MM-YYYY"></date-picker>
        <!-- thong tin ca nhan cua user -->
        <div class="row inforUser" v-if="checkPushInfo">
            <div class="col-4">
                <div class="icon-base icon-infoUserParen iconBackground"></div>

                <p class="t1">Vị trí công việc</p>
                <p class="t2">{{jobPosition}}</p>
            </div>
            <div class="col-4">
                <div class="icon-base icon-infoUserParen1 iconBackground"></div>

                <p class="t1">Email</p>
                <p class="t2">{{email}}</p>
            </div>
            <div class="col-4">
                <div class="icon-base icon-infoUserParen2 iconBackground"></div>

                <p class="t1">Số điện thoại</p>
                <p class="t2">{{phoneNumber}}</p>
            </div>

            <div class="col-4">
                <div class="icon-base icon-infoUserParen3 iconBackground"></div>

                <p class="t1">Địa chỉ</p>
                <p class="t2">{{adress}}</p>
            </div>
            <div class="col-4">
                <div class="icon-base icon-infoUserParen4 iconBackground"></div>

                <p class="t1">Sinh nhật</p>
                <p class="t2">{{birthday}}</p>
            </div>
            <div class="col-4">
                <div class="icon-base icon-infoUserParen5 iconBackground"></div>

                <p class="t1">Giới tính</p>
                <p class="t2">{{sex}}</p>
            </div>
        </div>

        <!-- muc do hoan thien ho so  -->
        <div class="filesuccess width-row-banner">
            <div class="file">
                <div class="left-24px">
                    <div class="text-filesuccess row d-flex flex-row">
                        <p>Mức độ hoàn thiện hồ sơ<span>5%</span></p>
                        <div class="down ml-auto iconBackground"></div>
                    </div>
                    <div class="row icon-spinner ">
                        <div class="scroll-icon d-flex flex-row">
                            <div class="left-icon-spinner"></div>
                            <div class="right-icon-spinner iconBackground"></div>
                        </div>
                        <div class="icon-star ml-auto iconBackground"></div>
                    </div>
                    <div class="row  width-row-banner p11">
                        <div class="col-sm-1  ">
                            <div class="icon-info-banner iconBackground"></div>
                        </div>
                        <div class="text-info-banner col-sm-11">
                            <p class="text1">Cập nhật thông tin cá nhân</p>
                            <p class="text2">Thêm thông tin cá nhân để thu hút nhà tuyển dụng</p>
                        </div>
                    </div>
                </div>
                <div class="row b-filesuccess d-flex flex-row">
                    <div class="text-prev">
                        <p>Trước</p>
                    </div>
                    <div class="text-next d-flex flex-row">
                        <p>Tiếp</p>
                        <div class="icon-next iconBackground"></div>
                    </div>
                    <div class="text-update-now ml-auto">
                        <p>Cập nhật ngay</p>
                    </div>
                </div>
            </div>

            <!-- title and icon  ...-->
            <item v-for="(item,index) in items" v-bind:key="index+1" v-bind:item="item">
                <div class="iconBackground icon-creer-goals-child " v-bind:class="['d'+(index+1)]"></div>
            </item>
        </div>
    </div>
    <div>
        <popup ref="activeClick" v-on:commitdataAvt="commitdataAvt" />
    </div>
</div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import popup from '../popup/dialogAvata.vue'
import item from './item.vue';
export default {
    data() {
        return {
            items: [{
                    title: "Mục tiêu nghề nghiệp",
                    name: "CareerGoals"
                },
                {
                    title: "Học vấn và bằng cấp",
                    name: "Education"
                },
                {
                    title: "Kinh nghiệm làm việc",
                    name: "ExpJob"
                },
                {
                    title: "Kỹ năng",
                    name: "skill"
                },
                {
                    title: "Giải thưởng",
                    name: "Prize"
                },
                {
                    title: "Khóa học",
                    name: "Course"
                },
                {
                    title: "Dự án",
                    name: "Project"
                },
                {
                    title: "Hoạt động xã hội và tình nguyện",
                    name: "VolunteerActivities"
                },
            ],
            // infoUserParen: {
                imageAvataGet:'',
                imageCover: '',
                name: '',
                jobPosition: "Nhân viên thiết kế đồ họa",
                email :"Thanhha@gmail.com",
                phoneNumber :"0968 700 888",
                adress:"Hoàn Kiếm - Hà Nội",
                birthday :"04/09/1993",
                sex:"Nữ",
                marry:''
            // }
            ,
            test: '',
            checkPushInfo: false,
        }
    },
    computed: {

    },
    beforeUpdate(){
        console.log('tag', 'update')
    },
    methods: {
        // bind du lieu 
        updateData(e){
            this.imageAvataGet = e.imageAvataGet;
            this.imageCover = e.imageCover;
            this.name = e.name;
            this.jobPosition = e.jobPosition;
            this.email = e.email;
            this.phoneNumber = e.phoneNumber;
            this.adress = e.adress;
            this.birthday = e.birthday;
            this.sex = e.sex;
            this.marry = e.marry;
        },
        // ham nhan du lieu tu ben popup dialogAvata
        commitdataAvt(e) {
            // console.log('contentleft')
            // Object.assign(this.infoUserParen, e);
            this.updateData(e)
            //console.log(this.infoUserParen);
            this.checkPushInfo=true;
        },
        activeDialog() {
            this.$refs.activeClick.clickShowInfoAvt();
        },
    },
    components: {
        item,
        popup,
        // Education
        DatePicker,

    }
}
</script>

<style scoped>
.mx-datepicker {
    position: relative;
    display: inline-block;
    width: 100%;
}

.inforUser .col-4 {
    padding-left: 24px !important;
    margin-top: 20px;
}

p.t1 {
    font-size: 15px;
    font-weight: 700;
    color: #212121;
}

p.t2 {
    font-size: 15px;
    color: #212121;
}

.row.inforUser {
    margin: 0;
    background-color: #ffffff;
}

.icon-base {
    width: 24px;
    height: 24px;
    margin-bottom: 10px;
}

.icon-infoUserParen {
    background-position: -264px -56px;
}

.icon-infoUserParen1 {
    background-position: -408px -56px;
}

.icon-infoUserParen2 {
    background-position: -432px -56px;
}

.icon-infoUserParen3 {
    background-position: -456px -56px;
}

.icon-infoUserParen4 {
    background-position: -480px -56px;
}

.icon-infoUserParen5 {
    background-position: -504px -56px;
}

.dropdown-banner:hover {
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, .1);
    background-color: #FB727F !important;
}

.a-icon-three {
    top: 20px !important;
    left: -65px !important;
}

p.text-share {
    font-size: 15px;
    color: #212121;
    margin: 0;
}

.icon-share.iconBackground {
    width: 16px;
    height: 16px;
    background-position: -94px 0px;
    margin-right: 10px;
}

p.text-download {
    margin: 0;
    font-size: 15px;
    color: #212121;
}

.icon-download {
    width: 16px;
    height: 16px;
    background-position: -81px 0px;
    margin-right: 10px;
}

.download-sum,
.share {
    /* background-color: #ffebed; */
    width: 158px;
    height: 40px;
    border: thin dashed #fff;
}

.div.want-info:hover {
    border-color: #ff5969;
}

.download-sum:hover {
    border-color: #ff5969 !important;
}

.share:hover {
    border-color: #ff5969 !important;
}

.icon1 .icon-three {
    width: 24px;
    height: 29px;
    background-position: -152px -28px;
    margin-left: 7px;
    margin-top: 2px;
}

.dropdown-toggle::after {
    border: none !important;
}

.left-24px {
    margin-left: 24px;
}

.div.want-info {
    width: calc(100% - 40px);
    border-radius: 3.5px;
    border: 1px dashed #e0e8ec;
    cursor: pointer;
    height: 39px;
}

.iconBackground.icon-creer-goals-child.d2 {
    background-position: -225px -31px;
}

.iconBackground.icon-creer-goals-child.d3 {
    background-position: -247px -32px;
}

.iconBackground.icon-creer-goals-child.d4 {
    background-position: -272px -30px;
}

.iconBackground.icon-creer-goals-child.d5 {
    background-position: -297px -30px;
}

.iconBackground.icon-creer-goals-child.d6 {
    background-position: -322px -32px;
}

.iconBackground.icon-creer-goals-child.d7 {
    background-position: -344px -32px;
}

.iconBackground.icon-creer-goals-child.d8 {
    background-position: -365px -33px;
}

.d1 {
    background-position: -201px -31px;
}

.iconBackground.icon-creer-goals-child {
    width: 24px;
    margin-left: auto;
    height: 24px;
    margin-top: 7px;
    margin: 0;
    margin-left: 22px;

}

.text-update-now.ml-auto {
    margin-right: 10%;
    font-size: 15px;
    color: #ff5969;
}

.row.b-filesuccess.d-flex.flex-row {
    margin: 10px 0;
}

.icon-next.iconBackground {
    /* border: 2px solid #212121; */
    width: 8px;
    height: 12px;
    /* background-color: rebeccapurple; */
    margin-top: 5px;
    margin-left: 12px;
    background-position: -150px -2px;
}

.text-prev {
    /* width: 60px; */
    margin-left: 48px;
    font-size: 15px;
    color: #9e9e9e;
}

.text-next {
    margin-left: 34px;
    font-size: 15px;
    color: #212121;
    cursor: pointer;
}

.row.width-row-banner.p11 {
    height: 80px;
    margin-top: 20px;
}

.icon-star.ml-auto.iconBackground {
    width: 32px;
    height: 32px;
    margin-right: 4.6%;
    background-position: -224px -80px;
    margin-top: -10px;
}

.icon-info-banner.iconBackground {
    width: 24px;
    height: 24px;
    margin: 0 auto;
    background-position: -224px -34px;
    margin-top: 3px;
}

p.text1 {
    font-size: 18px;
    font-weight: 500;
    color: #212121;
    margin-bottom: 10px;
}

p.text2 {
    font-size: 15px;
    color: #9e9e9e;
}

.left-icon-spinner {
    background-image: linear-gradient(90deg, #ec6164 0%, #3536eb 100%);
    width: 56px;
    height: 10px;
    border-radius: 30px;
}

.right-icon-spinner {
    background-color: #ff5969;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    margin-top: -10px;
    margin-left: -10px;
    overflow: hidden;
    background-position: -192px -80px;
}

.row.icon-spinner {
    width: 100%;
    height: 30px;
    margin: 0;
    margin-top: 6px;
}

.down.ml-auto {
    width: 30px;
    height: 30px;
    margin-right: 5%;
    margin-top: 3px;
    background-position: -171px -28px;
    cursor: pointer;
}

.text-filesuccess.row span {
    margin-left: 50px;
    font-size: 24px;
    color: #666666;
    display: inline-block;
}

.text-filesuccess.row {
    width: 100%;
    padding-top: 30px;
    padding-bottom: 15px;
    margin: 0;
}

.file {
    background-color: #ffffff;
}

.filesuccess.width-row-banner {
    /* margin-left: 24px; */
    border-radius: 4px;
    box-shadow: inset 0 3px 1px rgba(0, 0, 0, .1);
    margin-top: 16px;
    overflow: hidden;
    /* -webkit-box-shadow: inset 0 3px 6px rgba(0, 0, 0, .2); */
    /* box-shadow: inset 0 3px 6px rgba(0, 0, 0, .2); */
}

.text-filesuccess.row p {
    font-size: 24px;
    font-weight: 500;
    color: #212121;
    display: inline-block;
}

.row.width-row-banner.p2 p {
    font-size: 24px;
    font-weight: 500;
    color: #212121;
    display: inline-block;
    margin-left: 24px;
}

.row.width-row-banner.p2 {
    height: 40px;
    background-color: #ffffff;
}

.row.width-row-banner.p3 {
    background-color: #ffffff;
    height: 75px;
    overflow: hidden;
    text-align: center;
    width: 100%;
}

.row.width-row-banner.p3 p {
    font-size: 15px;
    color: #9e9e9e;
    width: 100%;
    margin: 0;
    display: inline-block;
}

.want-info:hover p {
    color: #ff5969 !important;
}

.row.width-row-banner.p1 {
    height: 65px;
    background-color: #ffffff;
}

.width-row-banner {
    width: 100%;
    margin: 0;
}

.d-flex.flex-row.banner-top {
    width: 100%;
}

.avt {
    border-radius: 50%;
    cursor: pointer;
    width: 112px;
    height: 112px;
    overflow: hidden;
    background-size: cover;
    position: relative;
    top: -70%;
    left: 24px;
    border: 3px solid #fff;
    background-image: url('../../assets/avt.jpg')
}

.icon2 div {
    width: 20px;
    height: 20px;
    background-position: -61px 3px;
    margin-left: 7px;
    margin-top: 6px;
}

.icon2 {
    border-radius: 3.5px;
    border: 1px solid #e0e8ec;
    width: 39px;
    height: 39px;
    overflow: hidden;
    cursor: pointer;
}

.icon1 {
    border-radius: 3.5px;
    border: 1px solid #e0e8ec;
    width: 39px;
    height: 39px;
    overflow: hidden;
    cursor: pointer;
}

.dropdown-banner {
    background-color: #ff5969;
    border-radius: 4px;
    width: 123px;
    height: 40px;
    display: block;
    overflow: hidden;
    font-size: 15px;
    color: #ffffff;
    line-height: 40px;
    text-align: center;
    text-decoration: none;
}

.content-banner {
    height: 43;
}

.containerBanner {
    /* height: 432px; */
}

.banneravt {
    height: 254px;
    background-color: #ff5969;
}

.main {
    margin: 0;
    border-radius: 4px;
    /* box-shadow: inset 0 3px 6px rgba(0, 0, 0, .1); */
    overflow: hidden;
}

.main div {
    padding: 0;

}

.right {
    /* background-color: blueviolet */
}
</style>
