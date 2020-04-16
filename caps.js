var arr =["yes", "no", "another one", "one more"];
var arr2 = ["not", 22, false];
function makeAllCaps(arr){
    var m = new Promise( function(resolve, reject){
        var x = arr.map( function(y){
            if(typeof y ==="string")
            {
                return y.toUpperCase();
            }else{
                reject("error");
            }
        })
        resolve(x);
    })
    return(m);
}
function sortWords(arr){
var m= new Promise(function(resolve, reject){
    if(arr){
        arr.forEach((y), function (){
            if(typeof y!== "string"){
                reject("thats not a string");
            }
        })
    }
})
return(m)
}
makeAllCaps(arr).then(function(result){console.log(result)}).catch( function(reject){console.log(reject)});
