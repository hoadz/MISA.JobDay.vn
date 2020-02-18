<template>
 <!-- Button trigger modal -->
    <div>
        <button style="display:none" ref="show" type="button" class="btn btn-primary" data-toggle="modal" data-target="#crop-avata"></button>

<!-- Modal -->
<div class="modal fade" ref="cropAvata" id="crop-avata" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="crop-avata" aria-hidden="true">
  <div class="modal-dialog d" role="document">
    <div class="modal-content c">
      <div class="modal-header h">
        <h5 class="modal-title"> Cập nhật Avatar </h5>
        <button type="button" class="close"  @click="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body b">
            <vue-cropper  
            :minCropBoxWidth=200 
            :minCropBoxHeight=200 
            :minContainerWidth=578 
            :minContainerHeight=436  
            ref="cropper" 
            :zoomable= 'false'  
            :src="src" alt="Source Image" />
      </div>
      <div class="modal-footer f">
        <button type="button" class="btn btn-secondary" @click="close">Hủy</button>
        <button type="button" class="btn btn-primary btn-color" @click="pushUrl">Lưu</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>
<script>
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
export default {
    data() {
        return {
             ten: ''
        }
    },
    props:{
        src:{
            type: String,
            default: ''
        }

    },
    methods: {
        // ham nhan su kien kich o dialog cha cua no la dialogAvata
        active: function(){
            // console.log(1);
            // var vm =this;
            // vm.ten = vm.src;
            // console.log(this.ten);
            //  vm.$refs.cropper.replace(vm.src);
            //this.loadImgAvt();
            this.$refs.show.click();
   
        },
        loadImgAvt(){
            this.ten = this.src;
            
        },
        close: function(){
            window.$('#crop-avata').modal('hide')
        // this.$refs.cropAvata.modal('hide');
        },

        // ham xu ly va truyen du lieu len popup cha
        pushUrl(){
            let a =this.$refs.cropper.getCroppedCanvas();
            this.$emit('getUrlCrop',a.toDataURL("image/png"));
            this.close();
        },



        


    },
    watch: {
        src: function (newQuestion) {
            // console.log('old',oldQuestion );
            // console.log('new', newQuestion);
            
             this.src =newQuestion;
            // console.log("src :", this.src);
          this.$refs.cropper.replace(this.src);
    }
  },
    components: {
        VueCropper,
    },
    // mounted:{
    //     bb :function(){
    //         console.log(this.bb);
    //     }
    // }
}
</script>
<style  scoped>
.content-img{
    height: 100%;
}
button.btn.btn-primary.btn-color {
    background-color: #ff5969;
    border-radius: 4px;
    border-color: #ff5969;
}

.btn-color:hover {
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, .1);
    background-color: #FB727F !important;
}
.modal-body.b {
    margin: 24px;
    margin-top: 10px;
    height: 50vh;
}
.modal-content.c {
    width: 660px;
    left: 50%;
    transform: translateX(-50%) translateY(15%);
    /* transform: translateY(10px); */
}

div#crop-avata {
    width: 100%;
     height: 100%; 
    overflow: hidden;
}
#crop-avata{
    width: 785px!important;
}
.modal.fade {
    background: rgba(0,0,0,0.5);
}
</style>