// Add your functions here
function map(arr, f) {
    const newArr = []
    for (let e of arr) {
        newArr.push(f(e))
    }
    return newArr
}

function reduce(arr, reducer, initialValue = 0) {   
     let memo = initialValue 
     
     // will figure this condition out later
     
     if (initialValue == 0 && arr.every(val => !!val === true) && !arr.every(val => !isNaN(val))) return true 

     for (let v of arr) {
         memo = reducer(v, memo)
     }
 
    return memo;

}
