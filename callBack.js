// console.log("begining");
// function getData(callback){
//     setTimeout(()=>{console.log("data initiated");
//     },2000);
// }
// getData(function(result)
// {
//     console.log(result);
    
// })
// //promise creation 
// let promise = new Promise((resolve,reject)=>{
//     let success = true;
//     if(success){
//         resolve("Promise Resolved");
//     }
//     else{
//         reject("Error Occured");
//     }
// })


// fetch("")//for api calling 
// //consuming promise - > for this we use .then() and .catch();
// promise.then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error); 
// })
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {
    console.log(users);   
    users.forEach(user => {
        console.log(user);
    });
})
.catch(error => console.log(error));

  
