const { createApp } = Vue;

const app = createApp({
    data () {
        // dati
        return{
            todo:[
                "Spesa",
                "Palestra",
                "Dentista",
            ],
        }
    },    

    methods: {
        cancel: function(index) {
            this.todo.splice(index, 1);        
      }
    }
}).mount("#app");