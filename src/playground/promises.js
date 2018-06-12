const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'First baddy',
            age: 3
        });
    }, 5000)
})
console.log('przed');

promise1.then((data) => {
    console.log('z pierwszego', data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('kolejna obietnica');
        }, 5000)
    })
}).then((str) => {
    console.log('zwrot 1', str)
}).catch((err) => {
    console.log('err:', err)
})

console.log('po wszytskim')
//---------------------------------------------
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
       // resolve('this is my resolve data');
       // resolve('this is my other resolve data');
        reject('Sth went wrong')
    }, 5500);

});

console.log('before');

promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('error :', error)
})

//mozna inaczej przechwycic:
promise.then((data) => {
    console.log('1', data);
}, (error) => {
    console.log('error :', error)
})



//mozna kilka razy do tego samego:
// promise.then((data) => {
//     console.log('2', data);
// });

console.log('after');