<template>
    <div class="main-nosave row align-items-center justify-content-center">
        <div class="content-nosave ">
            <div class="a iconBackground"></div>
            <slot ></slot>
            <p><button type="button" class="btn-color" >Tìm việc ngay</button></p>
            
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.content-nosave .btn-color {
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

.content-nosave .btn-color:hover {
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, .1);
    background-color: #FB727F !important;
}
 .a.iconBackground {
    width: 220px;
    height: 140px;
    margin: auto;
    background-position: 0px -378px;
}

.content-nosave p {
    text-align: center;
}

</style>