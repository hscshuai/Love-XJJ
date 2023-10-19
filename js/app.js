var vm = new Vue({
  el: '#app',
  data: {
    flowHeartShow: true,
  },
  methods:{
    heartClear(){
      if(this.flowHeartShow){
        document.getElementById("flow-heart").style.display = "none"
      }else{
        document.getElementById("flow-heart").style.display = "block"
      }
      this.flowHeartShow = !this.flowHeartShow;
    }
  },
})