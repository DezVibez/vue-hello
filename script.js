console.log("js vue ok ", Vue)

Vue.config.devtools = true

/*Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

const root = new Vue({
    el: "#root",
    data: {
        messaggio1: "",
        messaggio2: "",
        fotoSrc: ""
    },
    methods: {}
})