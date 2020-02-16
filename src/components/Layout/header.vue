<template>
<div >
    <header class="header">
        <div class="content">
            <nav class="navbar navbar-expand-md navbar-light col-md-12 col-12">
            <div class="navbar-brand iconBackground logo-header" v-on:click="BackHome"></div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto ">
                    <li class="nav-item mr-3 ">
                        <a class="nav-link text-primary" href="#">Việc làm</a>
                    </li>
                    <li class="nav-item mr-3">
                        <a class="nav-link text-primary" href="#">Quản Lý CV</a>
                    </li>
                    <li class="nav-item mr-3">
                        <a class="nav-link text-primary" href="#">Hỗ trợ</a>
                    </li>
                    <li class="nav-item mr-3">
                        <a class="nav-link text-primary" href="#"><i class="far fa-bell"></i></a>
                    </li>
                    <li class="nav-item mx-1">
                        <div class="avt"></div>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    </header>
    <!-- <div class="scroll"></div> -->
</div>
</template>

<script>
export default {
    name: 'header',
    methods: {
        BackHome() {
            this.$router.push("/");
        }
    },
}
</script>

<style scoped>
nav.navbar.navbar-expand-md.navbar-light.col-md-12.col-12 {
    padding: 8px 0px;
}
    .scroll{
        background-color: #ff5969;
        border-radius: 2px;
        width: 119px;
        height: 4px;
        overflow: hidden;
    }
    .avt{
        width: 32px;
        height: 32px;
        background-size: cover;
        border-radius: 50%;
        background-image: url(../../assets/avt.jpg);
        background-repeat: no-repeat;
        margin-top: 4px;
        cursor: pointer;
    }
    .header{
        height: 60px;
        background-color: #ffffff;
    }
   .logo-header{
       width: 140px;
       height: 34px;
       margin-top: 1px;
       background-repeat: no-repeat;
       cursor: pointer;
       background-position: -396px  -78px;
   }
    h4.title {
        display: block !important;
        clear: both;
    }
   

    header li.nav-item a:hover {
        color: #FF5969 !important;
    }

    header li.nav-item a {
        color: #212121 !important;
        font-size: 16px;
    }

</style>
