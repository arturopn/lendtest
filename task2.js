const once = (fn) => {
    let hasBeenCalled = false;
    let result;
  
    return (...params) => {
      if (!hasBeenCalled) {
        hasBeenCalled = true;
        result = fn(...params);
      }
  
      return result;
    };
  };
  
  const sum = (a, b) => a + b;
  const onceSum1 = once(sum);
  const onceSum2 = once(sum);
  
  console.log(onceSum1(1, 3)); // => 4
  console.log(onceSum1(5, 3)); // => 4
  console.log(onceSum2(2, 7)); // => 9
  console.log(onceSum2(5, 2)); // => 9