<template>
<div class="main-nosave row align-items-center justify-content-center">
    <div class="content-nosave ">
        <!-- icon cho viec lam ua thich -->
        <template v-if="state == 'favoriteJob'">
            <div class="saveLike iconBackground"></div>
        </template>
        <!-- icon cho viec lam da ung tuyen -->
        <template v-if="state == 'JobApplied'">
            <div class="JobApplied iconBackground"></div>
        </template>
        <!-- icon cho thong bao viec lam  -->
        <template v-if="state == 'jobNotification'">
            <div class="jobNotification iconBackground"></div>
        </template>
        <slot></slot>
        <!-- icon cho viec lam da ung tuyen va viec lam ua thich  -->
        <template v-if="state == 'favoriteJob'|| state=='JobApplied'">
            <p><button type="button" class="btn-color">Tìm việc ngay</button></p>
        </template>
        <!-- button cho thong bao viec lam  -->
         <template v-if="state == 'jobNotification'">
            <p><button type="button" class="btn-color">Tạo thông báo</button></p>
        </template>
    </div>
</div>
</template>

<script>
export default {
    props: {
        state: {
            String
        }
    }
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

.saveLike {
    width: 220px;
    height: 140px;
    margin: auto;
    background-position: 0px -378px;
}

.JobApplied {
    width: 220px;
    height: 140px;
    margin: auto;
    background-position: -220px -378px;
}
.jobNotification{
    width: 220px;
    height: 140px;
    margin: auto;
    background-position: -440px -378px;
}
.content-nosave p {
    text-align: center;
}
</style>
