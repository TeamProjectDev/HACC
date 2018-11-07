console.log('works');

function GetImage(image) { /* returns a img element of the images in the foler */
    console.log(image);
    return `<img src='${image}' />`
}

Vue.directive('scroll', { //vue directive
    inserted: function (el, binding) {
      let f = function (evt) {
        if (binding.value(evt, el)) {
          window.removeEventListener('scroll', f)
        }
      }
      window.addEventListener('scroll', f)
    }
})

Vue.component('download', {
    props: ['text','link'],
    template: ` <a class="button" :href="link"> {{text}} </a> ` 
});

var app = new Vue({
    el:'#root',
    data: {
        header: {
            projectDev: GetImage('images/scuffed23.png'),
            other: 'other Products',
            forumProjectDev: GetImage('../images/Logo_forums_edit.png'),
            team: 'The Team',
            forum: 'Forums',
            upload : 'The Upload'
        },
        title: {
            showCaseImage: 'images/plants/plant4.jpg',
            name: 'Project Grass',
            logo: GetImage('images/logo_temp.png'),
            type: 'Plant Identification Software'
        },
        showcase: {
            images: [
                {image: 'images/plants/plant1.png', text:'help the enviroment with this app'},
                {image: 'images/plants/plant2.jpg', text:'smells like woomy spirit'}, //GETIMAGE on this
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

        },
        forum: {
            start: 'Forums',
            startSlogan: 'Start your discussions here'
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
        forumPost: function() {
            return forumAPI.uploaded
        },
        handleScroll: function (evt, el) { /* handles the scrolling happening in function */
            if (window.scrollY > 250) {
              el.setAttribute(
                'style',
                `
                 height: 7%;
                 background-color: rgba(0,0,0,1);
                `
              )
            } else {
                el.setAttribute(
                    'style',
                    `
                     height: 10%;
                     background-color: rgba(0,0,0,0.2);
                    `
                  )
            }
            // return window.scrollY > 100
          },
          homeTemplate: function(discoverIn,discoveredDate,discoveredBy,plantDisovered,description,photo) {
            return `
            <div class="cardHolder">
                <div class="rootHolder">
                    <div class="imageHolder" style="background-image:url(${photo});"> 
                    
                    </div>

                    <div class="textHolder">
                        <span class="discoveredPlant">
                            <h3>${plantDisovered} </h3>
                        </span>

                        <span class="details">
                            <p class="discoverer">${discoveredBy} <p>
                            <p class="discoveredDate">${discoveredDate} <p>
                            <p class="whereabouts">${discoverIn} </p>
                        </span>

                        <span class="comment">
                            <p>${description} </p>
                        </span>

                    </div>
                </div>
            </div>
            `
        },
        forumTemplate: function(creator,title,date,commentNumber) {
            return `
                <p class="creator">${creator}</p>
                <p class="forumTitle"> ${title} </p>
                <p class="date"> ${date} </p>
                <p class="commentNumber">${commentNumber}</p> 
            `
        },
        uploadTemplate: function(user,img,description) {
            return `
                <div class="cardContainer">

                    <p class="userCredit">${user}</p> 

                    <div class="imgContainer" style="background-image:url(${img})"> </div>

                    <div class="textContainer">
                        
                        <div class="tags">
                            <p class="tag">Example</p>
                        </div>

                        <p class="userDescript">${description}</p>

                    </div>

                </div>
            `
        }
    }
});