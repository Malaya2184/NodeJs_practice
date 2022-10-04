
var promise =  new Promise((resolve, reject) => {
    if (true){
        return resolve();
    }
    else{
        reject();
    }
});

promise.then(function () {
    console.log("promise resolved");
}).catch(function (){
    console.log("promise rejected");
})