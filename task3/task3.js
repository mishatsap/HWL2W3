let promise = new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve("Hello Cursor")
  }, 2000);

});
promise.then(
    result => {
      alert("Fulfilled: " + "Hello Cursor");
    }
  );