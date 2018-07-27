function promise() {
  console.log('Please wait ten seconds');
  return new Promise (function(resolve, reject) {
      setTimeout (function() {
        resolve("Hello Cursor!")
      },2000)
  });
};

async function getdata(){
    const hellocursor = await promise();
    console.log(hellocursor);
}

getdata();