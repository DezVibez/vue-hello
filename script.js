console.log("js vue ok ", Vue)

Vue.config.devtools = true

/*Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

const root = new Vue({
    el: "#root",
    data: {
        messaggio1: "Ciao Mondo",
        messaggio2: "Hello World",
        fotoSrc: "img/184310709-24e023da-f854-4eaa-986f-4b270b2a59b0.jpeg"
    },
    methods: {}
})