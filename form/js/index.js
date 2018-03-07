new Vue({
    el: '#App',
    data(){
        return{
            name:'',
            number:'',
            email:''
        }
    },
    methods:{
        submitForm(){
            name=this.name;
            number= this.number;
            email=this.email;
            if(number.length>10){
                alert("number is wrong");///other validations
            }
        }
    }
})