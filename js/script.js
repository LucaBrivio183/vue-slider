const  { createApp } = Vue;

createApp ({
    data() {
        return {            
            activeIndex: 0,
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    isActive: false,
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    isActive: false,
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    isActive: false,
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    isActive: false,
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    isActive: false,
                }
            ],
        }
    }, 
    methods: {
        next(){
            this.activeIndex++;
            if (this.activeIndex > this.slides.length  - 1){
                this.activeIndex = 0;
            }
        },
        prev(){
            this.activeIndex--;
            if (this.activeIndex < 0){
                this.activeIndex = this.slides.length  - 1;
            }
        },
        select(index){
            this.activeIndex = index;
            this.slides[index].isActive = !this.slides[index].isActive;
        }
    }
}).mount('#app')


console.log(slides);