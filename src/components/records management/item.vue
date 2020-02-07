<template>
<div class="career-goals">
    <div class="row creer-goals-text">
        <div class="icon-creer-goals col-sm-1 ">
           <slot></slot>
        </div>
        <p class="col-sm-11">{{nameItem}}</p>
    </div>
    <div class="row new-item d-flex flex-row justify-content-center ">
        <div class="item-icon iconBackground "></div>
        <p> Thêm mới</p>
    </div>
</div>
</template>

<script>
export default {
    props:{
        nameItem:{
            type:String,
        }
    }
}
</script>

<style scoped>
.row.new-item {
    height: 39px;
    margin-top: 40px;
}
.icon-creer-goals.col-sm-1 {
    padding-top: 6px;
}



.item-icon.iconBackground {
    width: 24px;
    margin-right: 6px;
    height: 24px;
    background-position: -47px -34px;
}

.new-item p {
    font-size: 15px;
    color: #ff5969;
}

.icon-creer-goals.col-sm-1 {
    padding-top: 6px;
}

.row.creer-goals-text {
    padding-top: 30px;
}

.career-goals {
    box-shadow: inset 0 3px 0px rgba(0, 0, 0, .15);
}

.icon-creer-goals.col-sm-1.iconBackground {
    width: 24px;
    height: 24px;
}



.row.creer-goals-text p {
    margin: 0;
    padding: 0;
    font-size: 24px;
    font-weight: 500;
    color: #212121;
}


</style>
