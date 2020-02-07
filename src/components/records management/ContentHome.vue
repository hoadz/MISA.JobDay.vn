<template>
<div>
    <div class="row main">
        <div class="col-md-9 col-sm-8 left containerBanner">
            <div>
                <div class="banneravt"></div>
                <div class="content-banner">
                    <div class="row width-row-banner p1">
                        <div class="d-flex flex-row banner-top mt-3">
                            <div class="avt mr-auto"></div>
                            <div class="banner-right d-flex flex-row">
                                <div class="dropdown mr-2">
                                    <a v-on:click.prevent class="dropdown-banner dropdown-toggle my-auto" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                <div class="icon1 mr-2">
                                    <div class="iconBackground"></div>
                                </div>
                                <div class="icon2 mr-3">
                                    <div class="iconBackground"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row width-row-banner p2">
                        <div class="col-sm-12"></div>
                        <p>Nguyễn Việt Hòa</p>
                    </div>
                    <div class="row width-row-banner p3">
                        <p>Bạn cần hoàn thiện thông tin cá nhân tại đây </p>
                    </div>
                    <!-- muc do hoan thien ho so  -->
                    <div class="filesuccess width-row-banner">
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

                        <!-- Mujc tieue nghe nghiep -->
                        <item v-bind:nameItem="info[0]">
                            <div class="iconBackground icon-creer-goals-child d1"></div>
                        </item>
                        <item v-bind:nameItem="info[1]">
                            <div class="iconBackground icon-creer-goals-child d2"></div>
                        </item>
                        <item v-bind:nameItem="info[2]">
                            <div class="iconBackground icon-creer-goals-child d3"></div>
                        </item>
                        <item v-bind:nameItem="info[3]">
                            <div class="iconBackground icon-creer-goals-child d4"></div>
                        </item>
                        <item v-bind:nameItem="info[4]">
                            <div class="iconBackground icon-creer-goals-child d5"></div>
                        </item>
                        <item v-bind:nameItem="info[5]">
                            <div class="iconBackground icon-creer-goals-child d6"></div>
                        </item>
                        <item v-bind:nameItem="info[6]">
                            <div class="iconBackground icon-creer-goals-child d7"></div>
                        </item>
                        <item v-bind:nameItem="info[7]">
                            <div class="iconBackground icon-creer-goals-child d8"></div>
                        </item>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-4 right">
            <div class="container-right">
                <div class="row text-top">
                    <p>Cài đặt chế độ bảo mật Hồ sơ</p>
                </div>
                <div class="row">

                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import item from './item.vue';
export default {
    data() {
        return {
            info: ["Mục tiêu nghề nghiệp", "Học vấn và bằng cấp", "Kinh nghiệm làm việc", "Kỹ năng", "Giải thưởng", "Khóa học", "Dự án", "Hoạt động xã hội và tình nguyện"],

        }
    },
    components: {
        item
    }
}
</script>

<style scoped>
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
    background-position: -294px -32px;
}

.iconBackground.icon-creer-goals-child.d6 {
    background-position: -319px -32px;
}

.iconBackground.icon-creer-goals-child.d7 {
    background-position: -341px -32px;
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
    margin: 0;
    margin-top: 30px;
}

.filesuccess.width-row-banner {
    background-color: #ffffff;
    margin-left: 24px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, .2)
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
}

.row.width-row-banner.p3 {
    background-color: #ffffff;
    border-radius: 3.5px;
    border: 1px solid #e0e8ec;
    height: 75px;
    overflow: hidden;
    text-align: center;
    width: 100%;
}

.row.width-row-banner.p3 p {
    font-size: 15px;
    color: #ff5969;
    width: 100%;
    height: 100%;
    margin: 0;
    display: inline-block;
    padding-top: 3%;
}

.row.width-row-banner.p1 {
    height: 65px;
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

.icon1 div {
    width: 24px;
    height: 29px;
    background-position: -152px -28px;
    margin-left: 7px;
    margin-top: 2px;
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
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, .1);
    overflow: hidden;
}

.main div {
    padding: 0;

}

.left {
    /* height: 70vh; */

}

.right {
    height: 70vh;
    background-color: blueviolet
}
</style>
