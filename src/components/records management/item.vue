<template>
    <div class="career-goals">
        <div class="row creer-goals-text">
            <div class="icon-creer-goals col-sm-1 ">
                <slot></slot>
            </div>
            <p class="col-sm-11">{{item.title}}</p>
        </div>
        <div v-bind:class="{autoheight:stateAdd}" class="row new-item d-flex flex-row align-items-center justify-content-center ">
            <div 
            class="twe-item d-flex flex-row align-items-center justify-content-center" 
            v-on:click="changePupop" 
            v-bind:class="{closeAdd:stateAdd}"
            >
                <div class="item-icon iconBackground "></div>
                <p> Thêm mới</p>
            </div>
            <div  
            class="textCareerGoals" 
            v-html="Data.DataCareer"  
            v-if="Data.name=='CareerGoals'&&this.stateAdd==true">
            </div>
        </div>
        <div class="popup">
            <component 
            v-bind:is="item.name" 
            ref="activePopup"
            @CreateCareerGoals="CreateCareerGoals"
            ></component>
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
export default {
    data() {
        return {
            stateAdd: false,
            Data: Object,
            widthPress :53
        }
    },
    props: {
        item:{
            type:Object,
            default :() =>{}
        }
    },
    components: {
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
      changePupop(){
          this.$refs.activePopup.active();
      } ,
      CreateCareerGoals(data){
           this.Data=data;
        //    console.log(this.Data);
            this.stateAdd =true;
      } 
    },
}
</script>

<style scoped>
.textCareerGoals{
     width: 100%;
    height: 100%;
    padding: 16px;
}
.textCareerGoals li {
    margin-top: 5px;
}
.autoheight{
    height: auto !important ;
}
.closeAdd{
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

.new-item p {
    font-size: 15px;
    color: #1d1d1d;
    margin-bottom: 2px;
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
