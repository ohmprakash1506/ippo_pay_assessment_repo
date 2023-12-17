function partition(arr) {
  const arrLength = arr.length;
  if(arrLength === 0 ){
    return `The givne array is not an 2^n length array`
  }else{
    const subArrLength = arrLength / 2;
  
  let sum = Math.abs(arr.reduce((a,b) => { return a + b}))
  let row = subArrLength + 1
  
  const subArr1 = Array.from(Array(row), () => new Array().fill())
  const subArr2 = Array.from(Array(row), () => new Array().fill())
  

  for (let i = 0; i < 1 << subArrLength; i++) {
    let count = 0;
    let subArr1Sum = 0;
    let subArr2Sum = 0;

    for (let j = 0; j < subArrLength; j++) {
      if (i & (1 << j)) {
        count++;
        subArr1Sum += arr[j];
        subArr2Sum += arr[subArrLength + j];   
      }
    }

    subArr1[count].push(subArr1Sum); 
    subArr2[count].push(subArr2Sum);
  }

  for (let i = 0; i < subArrLength; i++) {
    subArr2[i].sort((a, b) => a - b);
  }

  let ans = Number.MAX_VALUE;
  
  for (let i = 0; i < subArrLength; i++) {
  const leftArr = subArr1[i];
  const rightArr = subArr2[subArrLength - i]; 
  

  for (let j = 0; j < leftArr.length; j++) {
    const element = leftArr[j];
    let low = 0;
    let high = rightArr.length - 1;

    while (low <= high) {
      const mid = Math.floor(low + (high - low) / 2);
      const value = sum - 2 * (element + rightArr[mid]);
      ans = Math.min(ans, Math.abs(value));
      if (ans == 0) {
        return `Absolute sum for the array: [${arr}] is ==>  ${ans}`;
      }
      if (value > 0) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
}

  return `Absolute sum for the array: [${arr}] is ==>  ${ans}`;
  }
  
};

let array1 = [-36,36]
let array2 = [3,9,3,7]
let array3 = [2,-1,0,4,-2,-9]
let array4 = []
let resutl1 = partition(array1);
let resutl2 = partition(array2);
let resutl3 = partition(array3);
let resutl4 = partition(array4);
console.log(resutl1)
console.log(resutl2)
console.log(resutl3)
console.log(resutl4)