let firstPromise = new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve('Hello Cursor')
  }, 10000);

});

let nextPromise = new Promise((resolve, reject) => {

  resolve(firstPromise);

});

let test = async function () {
  try{
      let result = await nextPromise;
        alert(result);
      } catch(error){
        console.error(error);
      }
} 

test()