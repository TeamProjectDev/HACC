console.log('works');

function GetImage(image) {
    console.log(image);
    return `<img src='images/${image}' />`
}

function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return console.log((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);
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
            showCaseImage: 'images/plants/plant1.png',
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
            currentCounter: 0,
            leftArrow: '<',
            rightArrow: '>'
        },
        main: {
            slogan: 'Plant Idetification Made Easy',
            sloganDetail: 'Discover Thousands of Plants With Advanced AI',
            downloadText: 'Download Now',
            downloadLink: 'http://Google.com'
        },
        discover: {
            slogan: 'Discover A Expanding Community',
            recent: 'Recent Discoveries around Oahu',

        }
    },
    methods: {
        prevImage: function() {
            this.showcase.currentCounter == 0 ? this.showcase.currentCounter = this.showcase.images.length-1 : 
            this.showcase.currentCounter--;
        },
        nextImage: function() {
            this.showcase.currentCounter == this.showcase.images.length-1 ? this.showcase.currentCounter = 0 : 
            this.showcase.currentCounter++;
        },
        uploads: function() {
            return api.uploaded
        },
        template: function(discoverIn,discoveredDate,discoveredBy,plantDisovered,description) {
            return `
            <div class="cardHolder">
                <div class="rootHolder>
                    <div class="imageHolder"> 
                    
                    </div>
        
                    <div class="textHolder>
                    
                        <div class="discoveredIn"> 
                            <h3>Discovered In</h3>
                            <p>${discoverIn}</p>
                        </div>
        
                        <div class="discoveredDate">
                            <h3> Date </h3>
                            <p> ${discoveredDate} </p>
                        </div>
        
                        <div class = "discoveredBy">
                            <h3>Discovered By</h3>
                            <p>${discoveredBy}</p>
                        </div>
        
                        <div class = "discoveredPlant">
                            <h3>Plant Discovered</h3>
                            <p>${plantDisovered}</p>
                        </div>
        
                        <div class = "description">
                            <h3>Description</h3>
                            <p>${description}</p>
                        </div>
        
                    </div>
                </div>
            </div>
            `
        }
    }
});