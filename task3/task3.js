let firstPromise = new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve('Hello Cursor')
  }, 10000);

});
firstPromise.then(
    result => {
      alert(result);
    }
  );