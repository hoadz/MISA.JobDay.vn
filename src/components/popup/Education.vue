<template>
<div>
    <button style="display:none" ref="activeClick" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
    </button>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog dialog-all" role="document">
            <div class="modal-content body-dialog">
                <div class="modal-header text-header">
                    <h5 class="modal-title text-title" id="exampleModalLabel">Học vấn và bằng cấp</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body dialog-body">
                    ........
                </div>
                <div class="modal-footer dialog-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                    <button type="button" class=" btn-color">Lưu thông tin </button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        clickShowInfo: function () {
            this.$refs.activeClick.click();
        }
    }
}
</script>

<style scoped>

</style>
