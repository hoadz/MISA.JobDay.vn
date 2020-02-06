<template>
<div>
    <div class="row main">
        <div class="col-md-9 col-sm-8 left containerBanner">
            <div>
                <div class="banneravt">

                </div>
                <div class="content-banner">
                    <div class="row ">
                        <div class="">
                            <div class="dropdown">
                                <a v-on:click.prevent class="dropdown-banner dropdown-toggle my-auto" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Thêm mục
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-4 right"></div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
    background-color: blue;
}

.main {
    margin: 0;
}

.main div {
    padding: 0;

}

.left {
    height: 70vh;
    background-color: aqua
}

.right {
    height: 70vh;
    background-color: blueviolet
}
</style>
