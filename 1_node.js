
let arr = [12,13,1,2,3,7,5,4]

function sort(arr){
    for (let i= 0; i < arr.length-1; i++){
        for (let j= i+1; j < arr.length; j++){
            if (arr[i]> arr[j]){
                temp  = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }   
    return console.log(arr);
}

sort(arr)