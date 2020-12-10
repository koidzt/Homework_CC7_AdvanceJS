function answer1() {
  let num = '';
  for (let i = 2; i <= 100; i++) {
    let a, b;
    let c = 0;
    for (let j = 2; j <= i; j++) {
      a = i / j;
      b = i % j;
      if (a >= 1 && b === 0) {
        c++;
      }
    }
    if (c === 1) {
      num += `${i}  `;
    }
  }
  console.log(`exercise 1\nn = 100\nresult\n${num}`);
  alert(`exercise 1\nn = 100\nresult\n${num}`);
}

function answer2() {
  let n = prompt('enter number');
  let num = '';
  for (let i = 2; i <= n; i++) {
    let a, b;
    let c = 0;
    for (let j = 2; j <= i; j++) {
      a = i / j;
      b = i % j;
      if (a >= 1 && b === 0) {
        c++;
      }
    }
    if (c === 1) {
      num += `${i}  `;
    }
  }
  console.log(`exercise 2\nn = ${n}\nresult = ${num}`);
  alert(`exercise 2\nn = ${n}\nresult = ${num}`);
}

function answer3() {
  let n = prompt('enter number');
  let num = [];
  let ans = '';
  for (let i = 2; i <= n * 1000; i++) {
    let a, b;
    let c = 0;
    for (let j = 2; j <= i; j++) {
      a = i / j;
      b = i % j;
      if (a >= 1 && b === 0) {
        c++;
      }
    }
    if (c === 1) {
      num = [...num, i];
    }
  }
  for (let i = 0; i < n; i++) {
    ans += `${num[i]}  `;
  }
  console.log(`exercise 3\nn = ${n}\nresult = ${ans}`);
  alert(`exercise 3\nn = ${n}\nresult = ${ans}`);
}

function answer4() {
  let n = prompt('enter number');
  let num = [];
  let ans = 0;
  for (let i = 2; i <= n * 1000; i++) {
    let a, b;
    let c = 0;
    for (let j = 2; j <= i; j++) {
      a = i / j;
      b = i % j;
      if (a >= 1 && b === 0) {
        c++;
      }
    }
    if (c === 1) {
      num = [...num, i];
    }
  }
  for (let i = 0; i < n; i++) {
    ans += num[i];
  }
  console.log(`exercise 4\nn = ${n}\nresult = ${ans}`);
  alert(`exercise 4\nn = ${n}\nresult = ${ans}`);
}

function answer5() {
  let n = prompt('enter number');
  let sum = 0;
  let mess = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      sum += i;
      mess += `${i} + `;
    }
  }
  console.log(`exercise 5\nn = ${n}\nresult = ${mess} = ${sum}`);
  alert(`exercise 5\nn = ${n}\n${sum}`);
}

function answer6() {
  let n = prompt('enter number');
  let sum = 0;
  let mess = '';
  for (let i = 1; i <= n; i++) {
    let a, b;
    let c = 0;
    for (let j = 2; j <= i; j++) {
      a = i / j;
      b = i % j;
      if (a >= 1 && b === 0) {
        c++;
      }
    }
    if (c === 1) {
      sum += -i;
      mess += `-${i}`;
    } else {
      sum += i;
      mess += `+${i}`;
    }
  }
  console.log(`exercise 6\nn = ${n}\nresult = ${mess} = ${sum}`);
  alert(`exercise 6\nn = ${n}\nresult = ${sum}`);
}

function answer7() {
  let num = prompt('enter number');
  let listNum = [];
  while (num !== null) {
    listNum.push(Number(num));
    num = prompt('enter number');
  }

  let gcdSol = (a, b) => {
    if (!b) {
      return a;
    } else {
      return gcdSol(b, a % b);
    }
  };

  let gcdArr = (arr) => {
    let gcd = arr[0];
    for (let i = 1; i < arr.length; i++) {
      gcd = gcdSol(gcd, arr[i]);
    }
    return gcd;
  };

  console.log(`exercise 7\nlistNum =${listNum}\ngcd = ${gcdArr(listNum)}`);
  alert(`exercise 7\nlistNum =${listNum}\ngcd = ${gcdArr(listNum)}`);
}

function answer8() {
  let num = prompt('enter number');
  let listNum = [];
  while (num !== null) {
    listNum.push(Number(num));
    num = prompt('enter number');
  }

  let gcdSol = (a, b) => {
    if (!b) {
      return a;
    } else {
      return gcdSol(b, a % b);
    }
  };

  let lcmArr = (arr) => {
    let lcm = arr[0];
    for (let i = 1; i < arr.length; i++) {
      lcm = (lcm * arr[i]) / gcdSol(lcm, arr[i]);
    }
    return lcm;
  };

  console.log(`exercise 8\nlistNum =${listNum}\nlcm = ${lcmArr(listNum)}`);
  alert(`exercise 8\nlistNum =${listNum}\nlcm = ${lcmArr(listNum)}`);
}

function answer9() {
  let n = +prompt('enter number');
  let mess = '';
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
    mess += `x${i}`;
  }
  console.log(`exercise 9\n${n}! = ${factorial}`);
  alert(`exercise 9\n${n}! = ${factorial}`);
}

function answer10() {
  let n = prompt('enter number');
  let listNum = [];
  while (n !== null) {
    listNum.push(Number(n));
    n = prompt('enter number');
  }
  let rawList = [...listNum];
  let sort = prompt('enter sort is true or false');
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  listNum.sort(compareNumeric);
  if (sort === 'false') {
    listNum.reverse();
  }
  console.log(`exercise 10\nlistNum =${rawList}\nresult = ${listNum}`);
  alert(`exercise 10\nlistNum =${rawList}\nresult = ${listNum}`);
}

function answer11() {
  let n = prompt('enter number');
  let listNum = [];
  while (n !== null) {
    listNum.push(Number(n));
    n = prompt('enter number');
  }
  let rawList = [...listNum];
  let sort = prompt('enter sort is true or false');
  let sortListNum = [];
  if (sort === 'true') {
    while (listNum.length > 0) {
      let min = Infinity;
      for (let i = 0; i < listNum.length; i++) {
        min = listNum[i] < min ? listNum[i] : min;
      }
      sortListNum.push(Number(min));
      for (let i = 0; i < listNum.length; i++) {
        if (listNum[i] === min) listNum.splice(i, 1);
      }
    }
  } else {
    while (listNum.length > 0) {
      let max = -Infinity;
      for (let i = 0; i < listNum.length; i++) {
        max = listNum[i] > max ? listNum[i] : max;
      }
      sortListNum.push(Number(max));
      for (let i = 0; i < listNum.length; i++) {
        if (listNum[i] === max) listNum.splice(i, 1);
      }
    }
  }
  console.locg(`exercise 11\nlistNum =${rawList}\n result = ${sortListNum}`);
  alert(`exercise 11\nlistNum = ${rawList}\n sort = ${sort}\nresult = ${sortListNum}`);
}

function answer12() {
  let result = 0;
  let mess = '';
  for (let i = 3; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
      mess += `${i}`;
    }
    if (i % 3 === 2 || i % 5 === 4) {
      mess += `+`;
    }
  }
  console.log(`exercise 12\nresult = ${mess} = ${result}`);
  alert(`exercise 12\nresult = ${result}`);
}

function answer13() {
  let num = prompt('enter number');
  let sum = 0;
  let strNum = String(num);
  for (let i = 0; i < strNum.length; i++) {
    sum += Number(strNum[i]);
  }
  console.log(`exercise 13\nresult = ${sum}`);
  alert(`exercise 13\nresult = ${sum}`);
}

function answer14() {
  let n = +prompt('enter number');
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  let strFac = String(factorial);
  let sum = 0;
  for (let i = 0; i < strFac.length; i++) {
    sum += Number(strFac[i]);
  }
  console.log(`exercise 14\n${n}! = ${factorial}\nresult = ${sum}`);
  alert(`exercise 14\n${n}! = ${factorial}\nresult = ${sum}`);
}

function answer15() {
  let sum = 0;
  for (let i = 1; i <= 4129980; i++) {
    let strNum = String(i);
    for (let j = 0; j < strNum.length; j++) {
      sum += Number(strNum[j]);
    }
  }
  console.log(`exercise 15\nresult = ${sum}`);
  alert(`exercise 15\nresult = ${sum}`);
}
