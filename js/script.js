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

    created(){
        // all'avvio della pagina

    },

    methods: {
        // funzioni
          
    },
}).mount("#app");