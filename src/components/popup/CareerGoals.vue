<template>
<div class="careerGoals">
    <!-- Button trigger modal -->
    <button type="button" style="display:none" class="btn btn-primary" data-toggle="modal" data-target="#careerGoals" ref="active">
        Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" data-backdrop="static" id="careerGoals" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog  modal-xl dialog-all" role="document">
            <div class="modal-content body-dialog">
                <div class="modal-header text-header">
                    <h5 class="modal-title text-title">Mục tiêu nghề nghiệp</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body dialog-body">
                    <div class="form-body">
                        <p class="text-form1">Mô tả mục tiêu nghề nghiệp <span>*</span></p>
                        <div class="ckeditor">
                            <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                           
                        </div>
                    </div>
                </div>
                <div class="modal-footer dialog-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" ref="close">Hủy</button>
                    <button data-v-134bea0e="" type="button" class=" btn-color" @click="commitData">Lưu thông tin </button>
                </div>
            </div>
        </div>

    </div>

</div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
    data() {
        return {

            editorData: "",
            DataMain: {
                name: "CareerGoals",
                DataCareer: ""
            },
            editor: ClassicEditor,
            editorConfig: {
                charset: 'utf-8',
                trim_trailing_whitespace: true,
                insert_final_newline: true,
                toolbar: ['bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote']
            },

        };
    },
    methods: {
        active: function () {
            this.$refs.active.click();
        },
        commitData() {
            this.DataMain.DataCareer = this.editorData;
            //console.log(this.dataPopup.DataCareer);
            this.$emit('CreateDataPopup', this.DataMain);
            //console.log(this.dataPopup);
            this.$refs.close.click();
        },
        resetData() {
            this.editorData = "";
        }
    }
}
</script>

<style scoped>
.modal-footer.dialog-footer {
    padding-top: 0;
    border-top: none;
    padding-bottom: 20px;
    padding-right: 24px;
}

button.btn.btn-primary {
    margin-right: 0;
}

.ckeditor {
    border-radius: 3.5px;
    border: 1px solid #e0e8ec;
    width: 737px;
    height: 179px;
    overflow: hidden;
}

.text-form1 {
    font-size: 15px;
    font-weight: 600;
    color: #212121;
}

.text-form1 span {
    color: #ff5969;
}

.dialog-all {
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, .1);
    width: 786px;
    /* height: 372px; */
    overflow: hidden;
    top: 25%;
    transform: translateY(-25%) !important;
}

.text-title {
    font-size: 22px;
    font-weight: 700;
    color: #212121;
}

.text-header {
    padding-left: 24px;
    padding-top: 17px;
    border-bottom: none;
}

.dialog-body {
    padding: 24px;
    padding-top: 10px;
}

.btn-color {
    margin-right: 0;
}

/* .body-dialog {
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, .1);
    width: 786px;
    height: 372px;
    overflow: hidden;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -30%);
} */
</style>
