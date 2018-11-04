console.log('works');

function GetImage(image) {
    console.log(image);
    return `<img src='images/${image}' />`
}

Vue.component('download', {
    props: ['text','link'],
    template: ` <a class="button" :href="link"> {{text}} </a> ` 
});

var app = new Vue({
    el:'#root',
    data: {
        header: {
            projectDev: GetImage('scuffed23.png'),
            other: 'other Products',
            team: 'The Team'
        },
        title: {
            name: 'Project Grass',
            logo: GetImage('Logo_temp.png'),
            type: 'Plant Identification Software'
        },
        showcase: {
            images: [
                {image: 'images/plants/plant1.png', text:'help the enviroment with this app'},
                {image: 'images/plants/plant2.jpg', text:'smells like woomy spirit'},
                {image: 'images/plants/plant3.jpg', text:'Get those Salmon Eggs BOI!'}
            ],
            arrow: GetImage('pointers.png'),
            currentCounter: 0,
        },
        main: {
            slogan: 'Plant Idetification Made Easy',
            sloganDetail: 'Discover Thousands of Plants With Advanced AI',
            downloadText: 'Download Now',
            downloadLink: 'http://Google.com'
        }
    },
    methods: {
        prevImage: function() {
            this.showcase.currentCounter == 0 ? this.showcase.currentCounter = this.showcase.images.length-1 : this.showcase.currentCounter--;
            console.log(this.showcase.currentCounter);
        },
        nextImage: function() {
            this.showcase.currentCounter == this.showcase.images.length-1 ? this.showcase.currentCounter = 0 : this.showcase.currentCounter++;
            console.log(this.showcase.currentCounter);
        },
    }
});

console.log(app.showcase.currentImage);