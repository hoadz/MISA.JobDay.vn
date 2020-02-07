<template>
<nav class="navbar navbar-expand-lg navbar-light  menu">
    <div class="collapse navbar-collapse setmargin" id="navbarNav">
        <ul class="navbar-nav ul">
            <li class="nav-item active">
                <a class="nav-link" href="#">Quản lý hồ sơ </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Việc làm yêu thích</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Việc làm đã ứng tuyển </a>
            </li>
            <li class="nav-item">
                <a class="nav-link " href="#">Thông báo việc làm </a>
            </li>
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
    .navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .nav-link.active{
        font-size: 15px;
        font-weight: 500;
        color: #ff5969;
    }
    .menu .nav-item a {
        font-size: 15px;
        color: #9e9e9e;
        padding: 0
    }
    .menu{
        background-color: #ffffff;
        border-radius: 4px;
        -webkit-box-shadow: inset 0px 5px 10px 1px rgba(0, 0, 0, 0.16);
        box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.16);
        height: 56px;
        overflow: hidden;
        padding: 0;
        margin-top: 22px ;
        margin-bottom: 15px;
    }
    .setmargin{
        margin-left: 38px
    }
    ul.navbar-nav.ul li {
        margin-right: 48px;
    }
</style>
