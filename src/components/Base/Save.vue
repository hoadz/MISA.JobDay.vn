<template>
<div id="list-job">
    <p class="text-count-job">Có {{arrayData.length}} việc làm {{text}}</p>
    <div class="job " v-for="(item,index) in arrayData" v-bind:key="index">
        <div class="row ">
            <div class="logo-cp"><img :src="item.linkImage" alt=""></div>
            <div class="info">
                <div class="row-info">
                    <div class="title-job">{{item.location}}</div>
                    <slot name="note-icon"></slot>
                </div>
                <div class="company text-second-2">{{item.place}}</div>

                <div class="location text-second-2">
                    <div class="icon"></div>{{item.city}}
                </div>
                <div class="row-info">
                    <div class="salary cl-red ">
                        <div class="icon"></div>{{item.money}}
                    </div>
                    <div class="date">
                      <slot name="name-date"></slot><span>{{item.dayUpdate}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props:{
        arrayData:{
            type: Array,
            default :()=>[]
        },
        text :{
            type:String,
            default:""
        }
    },
    data() {
        return {
        }
    },
}
</script>

<style  scoped>
p.text-count-job {
    overflow: hidden;
    height: 70px;
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    background-color: #ffffff;
    color: #212121;
    line-height: 70px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .1);
    margin-bottom: 1px;
    padding-left: 42px;
}
div#list-job {
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .1);
}


    div#list-job > .title {
        display: flex;
        justify-content: space-between;
        background-color: #f9f9f9;
        height: 63px;
        border-bottom: 1px solid #e0e8ec;
    }

        div#list-job > .title .amount-result {
            line-height: 63px;
            font-size: 18px;
            font-weight: 500;
            color: #212121;
        }

        div#list-job > .title .notification {
            font-size: 15px;
            color: #212121;
            line-height: 63px;
            margin-right: 63px;
            display: flex;
        }

            div#list-job > .title .notification .icon {
                margin-right: 11px;
                background: url(../../assets/icon.svg);
                width: 17px;
                height: 19px;
                background-position: -580px -34px;
                margin-top: 22px;
            }

        div#list-job > .title .amount-result .number {
            font-size: 24px;
            font-weight: 500;
            margin: 0px 12px 0px 25px;
        }
#list-job .job {
    background-color: #ffffff;
    border-top: 1px solid #e0e8ec;
    height: 177px;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid white;
    border-bottom: 1px solid #e0e8ec;
}

    #list-job .job:hover {
        border: 1px solid #ff5969;
    }

    #list-job .job * {
        line-height: 17px;
        font-size: 15px;
        color: #666666;
    }

    #list-job .job .location {
        display: flex;
    }

        #list-job .job .location .icon {
            background: url(../../assets/icon.svg);
            width: 14px;
            height: 19px;
            background-position: -293px -59px;
            margin-right: 12px;
            margin-left: 5px;
        }

    #list-job .job .salary {
        display: flex;
    }

        #list-job .job .salary .icon {
            background: url(../../assets/icon.svg);
            width: 18px;
            height: 18px;
            background-position: -515px -35px;
            margin-right: 9px;
            margin-left: 3px;
        }

    #list-job .job .date span {
        margin-left: 14px;
    }


    #list-job .job .info {
        margin-top: 33px;
        display: block;
        width: calc(100% - 162px);
    }

        #list-job .job .info .row-info {
            display: flex;
            justify-content: space-between;
        }

    #list-job .job.selected .info .row-info .note {
        width: 32px;
        height: 32px;
        background: url(../../assets/icon.svg);
        background-position: -568px -80px !important;
    }

    #list-job .job .info .row-info .note {
        width: 32px;
        height: 32px;
        background: url(../../assets/icon.svg);
        background-position: -536px -80px;
    }

    #list-job .job .info > div {
        margin-bottom: 12px;
    }

    #list-job .job .title-job {
        margin-right: 34px;
        line-height: 20px;
        font-size: 18px;
        font-weight: 500;
        color: #212121;
    }

    #list-job .job .info .new {
        width: 40px;
        height: 24px;
        border-radius: 5px 5px 5px 0px;
        margin-left: 34px;
    }

#list-job .row {
    margin: 0px !important;
}

#list-job .job .logo-cp {
    height: 110px;
    width: 110px;
    margin: 30px 14px 0px 14px;
}

    #list-job .job .logo-cp img {
        width: 100%;
    }

</style>
