<template>
<nav class="navbar navbar-expand-lg navbar-light  menu">
    <div class="collapse navbar-collapse setmargin" id="navbarNav">
        <ul class="navbar-nav ul">
            <router-link to="/profile" class="nav-item" tag="li" active-class="active1" exact>
                Quản lý hồ sơ
            </router-link>
            <router-link :to="{name:'favoriteJob'}" class="nav-item" active-class="active1" tag="li" exact>
                Việc làm yêu thích
            </router-link>
            <router-link to="/profile/saveJob" class="nav-item" active-class="active1" tag="li" exact>
                Việc làm đã lưu
            </router-link>
             <router-link :to="{name:'JobApplied'}" class="nav-item" active-class="active1" tag="li" exact>
                Việc làm đã ứng tuyển
            </router-link>
            <router-link :to="{name:'jobNotification'}" class="nav-item" active-class="active1" tag="li" exact>
                Thông báo việc làm
            </router-link>
            <li class="nav-item">
                <a class="nav-link " href="#">Nhà tuyển dụng xem hồ sơ</a>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.ul.navbar-nav.ul li.active1::after {
    content: "";
    display: block;
    width: 4px;
    background-color: #ff5969;
    border-radius: 2px;
    width: 116px;
    height: 4px;
    overflow: hidden;
    position: relative;
    top: 13px;
    width: calc(100% + 20px);
    left: -10px;
}

.active1 {
    font-weight: 600 !important;
    color: #ff5969 !important;
}

.menu .nav-item a {
    font-size: 15px;
    color: #9e9e9e;
    padding: 0
}

.menu {
    background-color: #ffffff;
    border-radius: 4px;
    -webkit-box-shadow: inset 0px 5px 10px 1px rgba(0, 0, 0, 0.16);
    box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.16);
    height: 56px;
    overflow: hidden;
    padding: 0;
    margin-top: 22px;
    margin-bottom: 15px;
}

.setmargin {
    margin-left: 38px
}

ul.navbar-nav.ul li {
    margin-right: 48px;
    font-size: 15px;
    font-weight: 500;
    color: #9e9e9e;
    cursor: pointer;
}
</style>
