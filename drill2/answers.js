const {users} = require('./users.js')

//Q1. Find all users who are interested in playing video games.
function findAllUsers(){
    let arr={};
    let status=1;
    for(let user in users){
        let a=users[user];
        if(a.hasOwnProperty("interests") | a.hasOwnProperty("interest")){
        for(let interest1 in a){
            let b=a[interest1]
            if(typeof b === 'object'){
                for(let object1 in b){
                    if(typeof b[object1] === 'string'){
                        let str2=b[object1].toLowerCase();
                        if(str2.includes('video games')){
                            arr[user]=users[user];
                            status=2;
                        }
                    }
                }
            }
        
        }
    }
    }
    if(status===2){
    return arr;
    }
    else{
        return "There are no users who are interested in playing video games";
    }
}

//Q2 Find all users staying in Germany.
function findAllUsersInGermany(){
    let arr={};
    let status=1;
    for (let user in users){
        let a=users[user];
        if(a.hasOwnProperty("nationality")){
        for(let properties in a){
            if(properties === 'nationality'){
                if(a[properties].toLowerCase() === 'germany'){
                    status=2;
                    arr[user]=users[user];

                }
            }
        }
        }
    }
    if(status === 2){
    return arr;
    }
    else{
        return "There are no users staying in Germany";
    }
}


//Q3 Find all users with masters Degree.
function findAllUsersWithMasterDegree(){
    let arr={};
    let status=1;
    for (let user in users){
        let a=users[user];
        if(a.hasOwnProperty("qualification")){
        for(let properties in a){
            if(properties === 'qualification'){
                if(a[properties].toLowerCase().includes('master')){
                    status=2;
                    arr[user]=users[user];

                }
            }
        }
        }
    }
    if(status === 2){
    return arr;
    }
    else{
        return "There are no users with Master's Degree";
    }
}


//Q4 Group users based on their Programming language mentioned in their designation.
function findUsersOnProgrammingLanguage(language="python"){
    let pl=language.toLowerCase();
    let arr={};
    let status=1;
    for (let user in users){
        let a=users[user];
        if(a.hasOwnProperty("desgination")){
        for(let properties in a){
            if(properties === 'desgination'){
                if(a[properties].toLowerCase().includes(pl) ){
                    status=2;
                    arr[user]=users[user];

                }
            }
        }
        }
    }
    if(status === 2){
    return arr;
    }
    else{
        return "There are no users with programming language "+language;
    }
}

module.exports = { findAllUsers, findAllUsersInGermany , findAllUsersWithMasterDegree, findUsersOnProgrammingLanguage};