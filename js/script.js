const { createApp } = Vue;

const app = createApp({
    data () {
        // dati
        return{
            todo:[
                "Fare la spesa",
                "Andare in palestra",
                "Chiamare il dentista",
            ],
            newTodo:"",
        }
    },    

    methods: {
        cancel: function(index) {
            this.todo.splice(index, 1);        
      },
        addTodo() {
            this.todo.push(this.newTodo);
            this.newTodo = '';
        }
    }
}).mount("#app");