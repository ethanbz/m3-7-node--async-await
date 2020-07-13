// Exercise 3
// ----------

const doublesLater = (num) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  let newNum;
  console.log('waiting...')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      newNum = num*2;
      resolve(newNum);
      reject('error');
    }, 2000);
  })
};

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  try {
    const a = await doublesLater(num);
    const b = await doublesLater(a);
    const c = await doublesLater(b);
    return c;
  }
  catch(err) {
    console.log(err);
  }
}

// 4. verification
handleSum(10).then((ans) => console.log(ans));
