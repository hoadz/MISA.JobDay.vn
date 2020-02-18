export const coverDate = {
    data() {
        return {
            monthStart: "",
            mouthEnd: "",
            yearStart: "",
            yearEnd: "",
        }
    },
    methods:{
        commitdata(){
            console.log(1);
            this.DataMain.time="Từ " + this.monthStart + "/" + this.mouthEnd + " - " + this.yearStart +"/" + this.yearEnd;
            this.$emit("CreateDataPopup",this.DataMain);
            this.$refs.close.click();
        },
        resetData(){
            this.monthStart= "",
           this.mouthEnd = "",
           this.yearStart= "",
           this.yearEnd= "",
           this.DataMain=""
       }
    }
}