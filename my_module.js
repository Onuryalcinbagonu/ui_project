const hello = messageName => {
//  console.log("Hello "+messageName);
 console.log(`Hello ${messageName}`);
};

const sum = (a,b) => a+b;


// export default subtraction
export default (a,b) => a-b;

const comment = "Comment"

const user ={
    name: 'Veli',
    surname: 'Yılmaz'
}

const users =[{
    name: 'User 1 name',
    surname: 'User 1surname '
},
{
    name: 'User 1 name',
    surname: 'User 1surname '
}]

export {
    hello,
    sum,
    comment,
    user,
    users
}



// ex2 const sum = (a,b) => {

//     return a+b
// }

// ex3 const sum=function sum(a,b){

//     return a+b
// }


// ex4 function sum(a,b){

//     return a+b
// }

// export default sum;