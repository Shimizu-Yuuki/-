var app=new Vue({
  el: '#app',
  data(){
    return{
    textInput: '',
    lists:[
      {
        name:'aaa'
      }
    ]
    }
  },
   methods: {
    addForm() {
      //alert(this.textInput);
      this.lists.push({
        name: this.textInput,
      });
   },
    
    deleteForm(id) {
      this.lists.splice(id, 1);
    }
    // this.textInput=()
  }

});

