// Introduction to Functional JS

// normal function
function normal(arg){
    return arg;
}

// callback function
let callbackFun = function(arg){
    return arg;
}

// Arrow Function
let arrowFun = arg => {return arg};

let arrowFun2 = (arg1, arg2) => {
    return arg1 * arg1;
}


//  Now let's Introduce some array iterate methods in JS

let numbers = [2,3,4,5,6,7,8];

// ` forEach ` can't directly store data in new array, 
//   for each is a for loop for array iterate, it is a self method of array
let forEachNumber = []
numbers.forEach(funn = (value, index, item) => {
//     console.log('Value : ', value);
//     console.log('Index : ', index);
//     console.log('Items : ', item);
       if (value % 2 == 0){
        forEachNumber.push(value);
       }
  })


// ` filter ` method returns its own data after filtering with provided logic,
// it never create new data like ` return value * 2; `
// it is a data filtering method for ` array `
// // But it can store data in new array like ` forEach ` method with logic, but it is not its purpose
let filterNumber = numbers.filter(fun = (value, index, item) => {
    // console.log('Value : ', value);
    // console.log('Index : ', index);
    // console.log('Items : ', item);    
    return value % 2 == 0;   
})


// ` map ` method returns new data after manipulating with provided logic like ` return value * 2;,
// it can't filter own data with logic, cause for every single element it must be
// return something like ` undefined `, it can't skip any element when return onw element
// But it can store data in new array like ` forEach ` method with logic, but it is not its purpose
let mapNumber = numbers.map(fun = (value, index, item) => {
    // console.log('Value : ', value);
    // console.log('Index : ', index);
    // console.log('Items : ', item);  
    return value * 2;
      
})


// ` reduce ` method returns sum data after manipulating all values,
let reduceNumber = numbers.reduce(function(resultNum, nextNum, serial){
    // console.log('Result Number : ', resultNum);
    // console.log('Next Number: ', nextNum);
    // console.log('Serial : ', serial);  
    return resultNum + nextNum;
})


// function that checks whether
function checkAdult(age) {
    return age >= 18;
}

//checks if all the array elements
// return only True or False
let everyNumber = numbers.every(function(value, index, items){
    // console.log('Value : ', value);
    // console.log('Index : ', index);
    // console.log('Items : ', items);     
    return value > 10;
});
