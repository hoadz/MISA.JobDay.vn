<template>
<div class="career-goals">
    <div class="row creer-goals-text">
        <div class="icon-creer-goals col-sm-1 ">
            <slot></slot>
        </div>
        <p class="col-sm-10">{{item.title}}</p>
        <div class="col-sm-1">
            <div class="iconBackground iconAdd" v-bind:class="{closeAdd:!stateAdd}"></div>
        </div>
    </div>
    <div class="row addRemove " v-bind:class="{closeAdd:!stateAdd}">
        <div class="col-sm-11"></div>
        <div class="col-sm-1 d-flex">
            <div class="icon1 iconBackground" @click="changePupop()"></div>
            <div class="icon2 iconBackground" @click="deleteData"></div>
        </div>

    </div>
    <div v-bind:class="{autoheight:stateAdd}" class="row new-item d-flex flex-row align-items-center justify-content-center ">
        <div class="twe-item d-flex flex-row align-items-center justify-content-center" v-on:click="changePupop" v-bind:class="{closeAdd:stateAdd}">
            <div class="item-icon iconBackground "></div>
            <p> Thêm mới</p>
        </div>
        <div class="row a">
            <!-- code phan Skill  -->
            <div class="row aa" v-if="this.nameSkill == 'skill' && stateAdd" >
                <div class="col-sm-6 aaa" v-for="(item, index) in dataArray" v-bind:key="index">    
                    <p>{{item.text}}</p>
                    <star-rating :show-rating=false :read-only=true v-model="item.rating" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :increment="0.5" :max-rating=5 :star-size=30 :padding=10 active-color="#ff5969"></star-rating>
                </div>
            </div>

            <!--  phan con lai -->
            <div class="col-12 c">
                <div class="textCareerGoals" v-html="Data.DataCareer" v-if="Data.name=='CareerGoals' && this.stateAdd==true"></div>
                <div class="textCareerGoals1" v-if="Data.name=='popupMain'&&this.stateAdd">
                    <p v-for="(value, name) in Data" v-bind:key="name"  >
                        <template v-if="value != 'popupMain'">
                            {{value}}
                        </template>
                    </p>
                </div>

            </div>
        </div>

    </div>
    <div class="popup">
        <component v-bind:is="item.name" ref="activePopup" v-on:CreateDataPopup="CreateDataPopup" v-on:arraySkill="commitdata"></component>
    </div>
</div>
</template>

<script>
import CareerGoals from '../popup/CareerGoals.vue';
import Education from '../popup/Education.vue';
import ExpJob from '../popup/ExpJob.vue';
import Prize from '../popup/Prize.vue';
import Course from '../popup/Course.vue'
import Project from '../popup/Project.vue'
import VolunteerActivities from '../popup/VolunteerActivities.vue'
import skill from '../popup/skill.vue'
import StarRating from 'vue-star-rating'
export default {
    data() {
        return {
            stateAdd: false,
            nameSkill:"",
            Data: Object,
            dataArray:[]
        }
    },
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    },
    components: {
        StarRating,
        CareerGoals,
        Education,
        ExpJob,
        Prize,
        Course,
        Project,
        VolunteerActivities,
        skill
    },
    methods: {
        // thay doi dialog phu hop 
        changePupop() {
            this.$refs.activePopup.active();
        },
        // nhan data tu dialog va biuld len 
        CreateDataPopup(data) {
            this.Data = data;
            console.log(this.converArray(data));
            this.stateAdd = true;
        },
        // xoa data khi kich vao nut xoa
        deleteData(){

            this.Data="";
            this.stateAdd=false;
            this.$refs.activePopup.resetData();
        },
        converArray(){
            var arry =Object.values(this.Data);
            arry.shift();
            return arry;
        },
        // ham nhan mang object va biuld o bang skill 
        commitdata(data,name){
            this.stateAdd = true;
            this.dataArray=data;
            this.nameSkill=name;
            console.log(this.dataArray,this.nameSkill);
        }
    },
}
</script>

<style scoped>
.row.aa {
    width: 100%;
        margin: 0;
}

.textCareerGoals1 {
    width: 100%;
    height: 100%;
    padding-left: 12px;
}

.textCareerGoals1 p {
    padding-bottom: 5px;
}
.row.a {
    width: 100%;
    padding-top: 16px;
}

.col-sm-1.b {
    padding: 0;
}

.col-11.c {
    padding-left: 0;
}
.row.addRemove {
    width: 100%;
    height: 20px;
    margin: 0;
}

.icon1.iconBackground {
    width: 16px;
    height: 16px;
    background-position: -64px 0;
    cursor: pointer;
}

.icon2.iconBackground {
    background-position: -192px 0px;
    width: 16px;
    margin-left: 16px;
    height: 16px;
    cursor: pointer;
}

.row.addRemove .col-sm-1 {
    padding: 0;
}

.iconBackground.iconAdd {
    background-color: #ffebed;
    border-radius: 50%;
    width: 23px;
    height: 23px;
    overflow: hidden;
    background-position: -49px -33px;
    cursor: pointer;
}

.textCareerGoals {
    width: 100%;
    height: 100%;
    /* padding: 16px; */
}

.textCareerGoals li {
    margin-top: 5px;
}

.autoheight {
    height: auto !important;
}

.closeAdd {
    display: none !important;
}

.twe-item:hover {
    color: #FF5969 !important;
    -webkit-box-shadow: inset 0 2px 10px rgba(0, 0, 0, .1);
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, .1);
    border: thin dashed #FF5969 !important;
}

.twe-item:hover p {
    color: #FF5969 !important;
}

.twe-item {
    width: calc(100% - 80px);
    border-radius: 3.5px;
    border: 1px dashed #e0e8ec;
    height: 39px;
    cursor: pointer;
}

.row.new-item {
    height: 80px;
    margin: 0;
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
.col-sm-6.aaa {
    padding: 0;
    padding-left: 24px;
    margin-bottom: 21px;
}

.new-item p {
    font-size: 17px;
    color: #212121;
    margin-bottom: 0px;
}

.icon-creer-goals.col-sm-1 {
    padding-top: 6px;
}

.row.creer-goals-text {
    padding-top: 30px;
}

.career-goals {
    box-shadow: inset 0 3px 0px rgba(0, 0, 0, .1);
    background-color: #ffffff;
    margin-top: 16px
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
