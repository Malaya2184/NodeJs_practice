setTimeout(function timer() {
    console.log('timer');
},5000)


function x (y){
    console.log('x function');
    y()
}

x(function y(){
    console.log('y function');
})