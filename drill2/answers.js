const {users} = require('./users.js')

//Q1. Find all users who are interested in playing video games.
function findAllUsers(){
    let arr={};
    for(let user in users){
        let a=users[user]
        for(let interest1 in a){
            let b=a[interest1]
            if(typeof b === 'object'){
                for(let object1 in b){
                    if(typeof b[object1] === 'string'){
                        let str2=b[object1].toLowerCase();
                        if(str2.includes('playing video games')){
                            arr[user]=users[user];
                        }
                    }
                }
            }
        
        }
    }
    return arr;
}

//Q2 Find all users staying in Germany.
function findAllUsersInGermany(){
    let arr={};
    for (let user in users){
        if()
    }
}

module.exports = { findAllUsers, findAllUsersInGermany };
