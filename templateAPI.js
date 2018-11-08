const api = {
    data: {
        maxHold : 10,
        example : true
    },
    uploaded: [
        {
            user : 'Jeraldy Cascayan',
            discoveryLocation : 'Waikiki,HI',
            discoveryDate : '18/11/04',
            discoveredPlant : 'Hawaiian Baby WoodRose / Argyreia nervosa',
            description : '10/10 ; The purple flowers just represent my personality',
            photo : 'images/dynamicImages/upload1.jpg',
            tags : ['trippy,purple,neat','Argyreia nervosa','Hawaiian Baby WoodRose','flowers']
        },
        {
            user: 'Jarren Calizo',
            discoveryLocation : 'Wapio,HI',
            discoveryDate : '17/10/16',
            discoveredPlant : 'Plumeria',
            description : 'Selling a 2 week old Plumeria for $10',
            photo: 'images/dynamicImages/upload2.jpeg',
            tags : ['exchange','selling','Plumeria','flowers']
        }
    ]
}

const forumAPI = {
    uploaded : [
        {
            creator: 'J0hn_W1ck',
            title: 'Is this normal for a plant to do this?',
            date: '18/11/06',
            commentNumber : 3 /* needs to be dynamic later */
        },
        {
            creator: 'Influx_Phil',
            title: 'selling argyreia nervosa plants for $10',
            date: '18/11/06',
            commentNumber : 2 /* needs to be dynamic later */
        }
    ]
}