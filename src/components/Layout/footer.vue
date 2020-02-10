<template>
<div class="footer">
    <footer>
        <div>
            <div class="logo"></div>
            <div class="content">
                <div class="row">
                    <div class="for-fage">
                        <h4 class="title">Về job day</h4>
                        <ul>
                            <li><a href="">Tìm việc làm</a></li>
                            <li><a href="">Tạo hồ sơ</a></li>
                            <li><a href="">Hướng dẫn viết CV</a></li>
                            <li><a href="">Thiết kế CV</a></li>
                            <li><a href="">Dịch CV Việt - Anh - Nhật</a></li>
                        </ul>
                    </div>
                    <div class="tool">
                        <h4 class="title">Công cụ</h4>
                        <ul>
                            <li><a href="">Quảng lý hồ sơ</a></li>
                            <li><a href="">Việc làm yêu thích</a></li>
                            <li><a href="">Việc làm đã ứng tuyển</a></li>
                            <li><a href="">Nhà tuyển dụng xem hồ sơ</a></li>
                            <li><a href="">Cài đặt gợi ý làm việc</a></li>
                        </ul>
                    </div>
                    <div class=" ">
                        <div class="row connection">
                            <h4 class="title">Kết nối</h4>
                            <ul>
                                <li><a href="" class="fab fa-facebook-square"></a></li>
                                <li><a href="" class="fab fa-linkedin"></a></li>
                            </ul>
                        </div>
                        <div class="row certification">
                            <h4 class="title">Chứng nhận bởi</h4>
                            <div id="bct"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <hr>
        <div class="design">
            <div class="">Copyright © 2019 MISA JSC</div>
            <div class="">Powered By MISA JSC</div>
        </div>
    </footer>

    <!-- 

<script src="~/lib/jquery/jquery.js"></script>   
    <script src="~/lib/popper/umd/popper.js"></script>
    <script src="~/lib/bootstrap/js/bootstrap.js"></script> -->
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer footer {
    margin-top: 60px;
}
* {
    padding: 0px;
    margin: 0px;
    text-decoration: none;
    list-style: none;
    font-family: 'Open Sans', sans-serif;
}

footer .design {
    text-align: center;
    padding-bottom: 27px;
}

.design * {
    font-size: 16px;
    letter-spacing: -.16px;
    color: #666666;
    line-height: 18px;
    margin-bottom: 10px;
}

div#bct {
    background: url(../../assets/icon.svg);
    width: 182px;
    height: 51px;
    background-position: -50px -148px;
}

footer {
    background-color: #3e4a5a;
    padding-top: 54px;
    padding-left: 139px;
    padding-right: 139px;
}

footer hr {
    background-color: rgba(255, 255, 255, .3);
    height: 2px;
    width: calc(100% + 278px);
    margin-left: -139px;
    margin-bottom: 24px;
}

footer .logo {
    background: url(../../assets/icon.svg);
    width: 141px;
    height: 33px;
    background-position: -256px -80px;
}

footer .connection {
    display: block;
}

.row.connection ul {
    display: flex;
}

.row.connection ul .fab {
    color: #ffffff;
    font-size: 33px;
    line-height: 33px;
}

footer .row.connection ul li {
    height: 33px;
    margin-right: 7px;
}

footer .content {
    margin: 54px 0px 59px 0px;
}

footer .content .row {
    justify-content: space-between;
}

footer .row.certification .title {
    margin-bottom: 21px;
}

footer .content * {
    color: white;
}

footer .content .title {
    font-size: 20px;
    letter-spacing: -.2px;
    color: #ffffff;
    text-transform: uppercase;
    margin-bottom: 34px;
}

footer .content ul li {
    margin-bottom: 18px;
    height: 18px;
}

footer .content ul li a {
    font-size: 16px;
    letter-spacing: -.16px;
    color: #ffffff;
    line-height: 18px;
}

footer .content ul li a:hover {
    color: #ff5969 !important;
    text-decoration: none;
}

footer>div {
    width: 100%;
    margin: auto;
}

footer .row.certification {
    display: block;
}

.popup-title {
    font-size: 24px;
    font-weight: 700;
    color: #212121;
    line-height: 30px;
    font-weight: bold;
}

.heading {
    font-size: 24px;
    color: #212121;
    line-height: 30px;
    font-weight: 600;
}

.text-primary {
    font-size: 18px;
    color: #212121;
    line-height: 22px;
    font-weight: 500;
}

.text-second {
    font-size: 15px;
    color: #212121;
    line-height: 18px;
    font-weight: 400;
}

.text-second-2 {
    font-size: 15px;
    color: #9e9e9e;
    line-height: 18px;
    font-weight: 400;
}

.text-sub {
    font-size: 13px;
    color: #212121;
    line-height: 17px;
    font-weight: 400;
}

.btn {
    font-size: 15px;
    text-align: center;
    border-radius: 4px;
    height: 40px;
    padding: 0 16px !important;
    line-height: 40px;
    border-radius: 4px;
}

.btn-default {
    border-color: #E0E8EC;
    color: #212121;
}

.btn-red {
    background-color: #ff5969 !important;
}

.btn-green {
    background: #3ACC9C !important;
}

.input {
    height: 40px;
    padding: 0 12px !important;
    border-radius: 8px;
}

.cl-red {
    color: #ff5969 !important;
}

.bg-red {
    background: #ff5969 !important;
    color: white !important;
}

.bg-gray {
    background: #E0E8EC !important;
}

.bd-gray {
    border: 1px solid #E0E8EC !important;
}
</style>
