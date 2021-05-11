
function fibonacci_series(n) 
{
  if (n===1) {
    return [0, 1];
  } 

  const array = fibonacci_series(n - 1);
  array.push(array[array.length - 2] + array[array.length - 1]);
  return array;
};

 console.log(fibonacci_series(5));
 /*
 fibonacci_series(5)
    var array = fibonacci_series(n - 1);
        fibonacci_series(4)
            var array = fibonacci_series(n - 1);
            fibonacci_series(3)
                var array = fibonacci_series(n - 1);
                fibonacci_series(2)
                    var array = fibonacci_series(n - 1);
                    fibonacci_series(1)
                        return [0, 1];
                    array.push(array[array.length - 1] + array[array.length - 2]);
                    return [0, 1, 1];
                array.push(array[array.length - 1] + array[array.length - 2]);
                return [0, 1, 1, 2];
            array.push(array[array.length - 1] + array[array.length - 2]);
            return [0, 1, 1, 2, 3];
        array.push(array[array.length - 1] + array[array.length - 2]);
    return [0, 1, 1, 2, 5];


*/
// array =  [0, 1,1]
// array.push( [0, 1,1] [3 - 1]+  [0, 1,1] [ 3 - 2])

// console.log(array)



