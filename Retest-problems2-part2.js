function exercise1() {
  // let string = prompt('enter string');
  let mess;
  checkCharacter = (str) => {
    if (str === str.toUpperCase()) {
      mess = 'All character are capital.';
    } else if (str === str.toLowerCase()) {
      mess = 'All character are small.';
    } else {
      mess = 'All character are mix.';
    }
    return mess;
  };
  // console.log(`exercise 1\nString = ${string}\nresult = ${checkCharacter(string)}`);
  console.log(`exercise 1\nString = 'ABC'\nresult = ${checkCharacter('ABC')}`);
  console.log(`String = 'abc'\nresult = ${checkCharacter('abc')}`);
  console.log(`String = 'Abc'\nresult = ${checkCharacter('Abc')}`);
}

function exercise2() {
  // let a = prompt('enter a of pow(a,n)');
  // let n = prompt('enter n of pow(a,n)');
  const pow = (a, n) => {
    return a ** n;
  };
  // console.log(`exercise 2\npow(${a},${n})=${pow(a, n)}`);
  console.log(`exercise 2\npow(8,2)=${pow(8, 2)}`);
  console.log(`pow(3,4)=${pow(3, 4)}`);
}

function exercise3() {
  let typeString = '"Hello"';
  let typeNumber = 234;
  let typeFunction = alert;
  let typeObject = { name: 'Hello' };
  let typeUndefiled;
  let typeNull = '';

  const thaiTypeof = (variable) => {
    let mess;
    if (typeof variable === 'string') {
      mess = 'ข้อความ';
    } else if (typeof variable === 'number') {
      mess = 'ตัวเลข';
    } else if (typeof variable === 'function') {
      mess = 'ฟังก์ชัน';
    } else if (typeof variable === 'object') {
      mess = 'ออปเจ็คต์';
    } else if (typeof variable === 'undefined') {
      mess = 'ไม่มีค่า';
    } else {
      mess = 'ไม่สามารถระบุชนิดได้';
    }
    return mess;
  };
  console.log(
    `exercise 3\ninput = ${typeString}\ntypeof (${typeString}) = ${typeof typeString}\nชนิดตัวแปร = ${thaiTypeof(
      typeString
    )}`
  );
  console.log(
    `input = ${typeNumber}\ntypeof (${typeNumber}) = ${typeof typeNumber}\nชนิดตัวแปร = ${thaiTypeof(typeNumber)}`
  );
  console.log(
    `input = ${typeFunction}\ntypeof (${typeFunction})= ${typeof typeFunction}\nชนิดตัวแปร = ${thaiTypeof(
      typeFunction
    )}`
  );
  console.log(
    `input = ${typeObject}\ntypeof (${typeObject}) = ${typeof typeObject}\nชนิดตัวแปร = ${thaiTypeof(typeObject)}`
  );
  console.log(
    `input = ${typeUndefiled}\ntypeof (${typeUndefiled}) = ${typeof typeUndefiled}\nชนิดตัวแปร = ${thaiTypeof(
      typeUndefiled
    )}`
  );
}

function exercise4() {
  let arr = [1, 3, 5, 9];
  let arr2 = [5, 8, 6, 7, 1];

  const evenArraySum = (array) => {
    let sumEven = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        sumEven += array[i];
      }
    }
    return sumEven;
  };

  console.log(`exercise 4\ninput = [1, 3, 5, 9]\noutput = ${evenArraySum(arr)}`);
  console.log(`input = [5, 8, 6, 7, 1]\noutput = ${evenArraySum(arr2)}`);
}

function exercise5() {
  // let dateNum = prompt('enter date (DD-MM-YYYY)');
  // if (dateNum.length !== 10) {
  //   return console.log('please enter date in form DD-MM-YYYY');
  // }
  // if (dateNum[2] !== '-' || dateNum[5] !== '-') {
  //   return console.log('please enter date in form DD-MM-YYYY');
  // }

  const changeStringToThaiDate = (string) => {
    let dateString;
    let day = string.slice(0, 2);
    let month = string.slice(3, 5);
    let year = string.slice(6, 10);
    switch (Number(month)) {
      case 2:
        if (Number(year) % 4 !== 0) {
          dateString =
            Number(day) > 28 || Number(day) < 1 ? 'Error' : `วันที่ ${day} เดือนกุมภาพันธ์ พ.ศ.${Number(year) + 543}`;
        } else {
          dateString =
            Number(day) > 29 || Number(day) < 1 ? 'Error' : `วันที่ ${day} เดือนกุมภาพันธ์ พ.ศ.${Number(year) + 543}`;
        }
        break;

      case 1:
        dateString =
          Number(day) > 31 || Number(day) < 1 ? 'Error' : `วันที่ ${day} เดือนมกราคม พ.ศ.${Number(year) + 543}`;
        break;

      case 3:
        dateString =
          Number(day) > 31 || Number(day) < 1 ? 'Error' : `วันที่ ${day} เดือนมีนาคม พ.ศ.${Number(year) + 543}`;
        break;
      case 5:
        dateString =
          Number(day) > 31 || Number(day) < 1 ? 'Error' : `วันที่ ${day} เดือนพฤษภาคม พ.ศ.${Number(year) + 543}`;
        break;
      case 7:
        dateString =
          Number(day) > 31 || Number(day) < 1 ? 'Error' : `วันที่ ${day} เดือนกรกฎาคม พ.ศ.${Number(year) + 543}`;
        break;
      case 8:
        dateString =
          Number(day) > 31 || Number(day) < 1 ? 'Error' : `วันที่ ${day} เดือนสิงหาคม พ.ศ.${Number(year) + 543}`;
        break;
      case 10:
        dateString =
          Number(day) > 31 || Number(day) < 1 ? 'Error' : `วันที่ ${day} เดือนตุลาคม พ.ศ.${Number(year) + 543}`;
        break;
      case 12:
        dateString =
          Number(day) > 31 || Number(day) < 1 ? 'Error' : `วันที่ ${day} เดือนธันวาคม พ.ศ.${Number(year) + 543}`;
        break;

      case 4:
        dateString =
          Number(day) > 30 || Number(day) < 1 ? 'Error' : `วันที่ ${day} เดือนเมษายน พ.ศ.${Number(year) + 543}`;
        break;
      case 6:
        dateString =
          Number(day) > 30 || Number(day) < 1 ? 'Error' : `วันที่ ${day} เดือนมิถุนายน พ.ศ.${Number(year) + 543}`;
        break;
      case 9:
        dateString =
          Number(day) > 30 || Number(day) < 1 ? 'Error' : `วันที่ ${day} เดือนกันยายน พ.ศ.${Number(year) + 543}`;
        break;
      case 11:
        dateString =
          Number(day) > 30 || Number(day) < 1 ? 'Error' : `วันที่ ${day} เดือนพฤศจิกายน พ.ศ.${Number(year) + 543}`;
        break;

      default:
        dateString = 'Error';
    }
    return dateString;
  };
  // console.log(`exercise 5\ninput: ${dateNum}\nresult: ${changeStringToThaiDate(dateNum)}`);
  console.log(`exercise 5\ninput: '12-11-1996'\nresult: ${changeStringToThaiDate('12-11-1996')}`);
  console.log(`input: '31-11-2000'\nresult: ${changeStringToThaiDate('31-11-2000')}`);
  console.log(`input: '12-13-1996'\nresult: ${changeStringToThaiDate('12-13-1996')}`);
}

function exercise6() {
  const isTheSameAnagram = (string1, string2) => {
    let str1 = string1.toLowerCase().split('').sort().join('');
    let str2 = string2.toLowerCase().split('').sort().join('');

    if (str1 === str2) {
      return true;
    } else {
      return false;
    }
  };
  console.log(`exercise 6\ninput1: LISTEN\ninput2: SILENT\nresult: ${isTheSameAnagram('LISTEN', 'SILENT')}`);
}

function exercise7() {
  const numberOfSquare = (height, width) => {
    let gcdSol = (a, b) => {
      if (!b) {
        return a;
      } else {
        return gcdSol(b, a % b);
      }
    };

    return (height * width) / gcdSol(height, width) / gcdSol(height, width);
  };

  console.log(`exercise 7\ninput: 15, 15\nresult: ${numberOfSquare(15, 15)}`);
  console.log(`input: 20, 15\nresult: ${numberOfSquare(20, 15)}`);
  console.log(`input: 2, 8\nresult: ${numberOfSquare(2, 8)}`);
  console.log(`input: 1, 5\nresult: ${numberOfSquare(1, 5)}`);
}

function exercise8() {
  const toChange = (money) => {
    let thousand = 0,
      fiveHundred = 0,
      oneHundred = 0,
      fifty = 0,
      twenty = 0,
      ten = 0,
      five = 0,
      two = 0,
      one = 0;
    if (money > 1000) {
      thousand = Math.floor(money / 1000);
      money = money - thousand * 1000;
    }
    if (money > 500) {
      fiveHundred = Math.floor(money / 500);
      money = money - fiveHundred * 500;
    }
    if (money > 100) {
      oneHundred = Math.floor(money / 100);
      money = money - oneHundred * 100;
    }
    if (money > 50) {
      fifty = Math.floor(money / 50);
      money = money - fifty * 50;
    }
    if (money > 20) {
      twenty = Math.floor(money / 20);
      money = money - twenty * 20;
    }
    if (money > 10) {
      ten = Math.floor(money / 10);
      money = money - ten * 10;
    }
    if (money > 5) {
      five = Math.floor(money / 5);
      money = money - five * 5;
    }
    two = Math.floor(money / 2);
    one = money % 2;
    let mess = `แบงค์พัน\t\t\t${thousand} ใบ\nแบงค์ห้าร้อย\t\t${fiveHundred} ใบ\nแบงค์ร้อย\t\t\t${oneHundred} ใบ\nแบงค์ห้าสิบ\t\t${fifty} ใบ\nแบงค์ยี่สิบ\t\t${twenty} ใบ\nเหรียญสิบ\t\t\t${ten} เหรียญ\nเหรียญห้า\t\t\t${five} เหรียญ\nเหรียญสองบาท\t${two} เหรียญ\nเหรียญบาท\t\t${one} เหรียญ`;
    return mess;
  };
  console.log(`exercise 8\ninput: 788\nresult:\n${toChange(788)}`);
  console.log(`input: 1688\nresult:\n${toChange(1688)}`);
}

function exercise9() {
  const maxPossibleNumber = (number) => {
    let str = String(number);
    let point = str.indexOf('.');
    let result = '';
    if (point != -1) {
      str = str.split('.').join('').split('').sort().reverse();
      for (let i = 0; i < str.length; i++) {
        if (i === point) {
          result += '.';
        }
        result += str[i];
      }
    } else {
      result = str.split('.').join('').split('').sort().reverse().join('');
    }
    return result;
  };
  console.log(`exercise 9\ninput: 69523\nresult: ${maxPossibleNumber(69523)}`);
  console.log(`input: 12523.97\nresult: ${maxPossibleNumber(12523.97)}`);
  console.log(`input: 955\nresult: ${maxPossibleNumber(955)}`);
}

function exercise10() {
  const squareRoot = (number) => {
    if (number % Math.sqrt(number) === 0) {
      return Math.sqrt(number);
    } else {
      let num = [];
      for (let i = 1; i <= number; i++) {
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
          num.push(i);
        }
      }

      let component = [];
      for (let i = 0; i < num.length; i++) {
        if (number % num[i] === 0) {
          component.push(num[i]);
        }
      }

      let outSqrt = 1;
      let inSqrt = 1;
      for (let i = 0; i < component.length; i++) {
        let count = 0;
        while (number % component[i] === 0) {
          number = number / component[i];
          count++;
        }
        if (count % 2 === 0) {
          outSqrt *= component[i];
        } else {
          inSqrt *= component[i];
        }
      }
      if (outSqrt === 1) {
        return 'root ' + inSqrt;
      }
      return outSqrt + ' root ' + inSqrt;
    }
  };
  console.log(`exercise 10\ninput: 50\nresult: ${squareRoot(50)}`);
  console.log(`input: 17\nresult: ${squareRoot(17)}`);
  console.log(`input: 25\nresult: ${squareRoot(25)}`);
  console.log(`input: 77\nresult: ${squareRoot(77)}`);
  console.log(`input: 121\nresult: ${squareRoot(121)}`);
  console.log(`input: 12\nresult: ${squareRoot(12)}`);
}

function exercise11() {
  const dotProduct = (vector1, vector2) => {
    let length = Math.max(vector1.length, vector2.length);
    let result = 0;
    for (let i = 0; i < length; i++) {
      if (vector1[i] && vector2[i]) {
        result += vector1[i] * vector2[i];
      }
    }
    return result;
  };
  console.log(`exercise 11\ninput: [1, 2, 6, 9] dot [3, 2, 6, 3]\nresult: ${dotProduct([1, 2, 6, 9], [3, 2, 6, 3])}`);
  console.log(`exercise 11\ninput: [3, 4] dot [2, 8, 9, 11]\nresult: ${dotProduct([3, 4], [2, 8, 9, 11])}`);
}

function exercise12() {
  const maxPairSum = (array) => {
    let maxNum = Math.max(...array);
    let removeMaxOfArray = array.filter((arr) => arr !== Math.max(...array));
    let secondMaxNum = Math.max(...removeMaxOfArray);
    let sum = maxNum + secondMaxNum;
    return sum;
  };
  console.log(`exercise 12\ninput: [2, 5, 3, 9, 19, 3, 7, 58]\nresult: ${maxPairSum([2, 5, 3, 9, 19, 3, 7, 58])}`);
}

function exercise13() {
  const minPairSum = (array) => {
    let minNum = Math.min(...array);
    let removeMinOfArray = array.filter((arr) => arr !== Math.min(...array));
    let secondMinNum = Math.min(...removeMinOfArray);
    let sum = minNum + secondMinNum;
    return sum;
  };
  console.log(`exercise 13\ninput: [2, 5, 3, 9, 19, 3, 7, 58]\nresult: ${minPairSum([2, 5, 3, 9, 19, 3, 7, 58])}`);
}

function exercise14() {
  const numberOfJumpFrog = (speed, distance) => {
    return Math.ceil(distance / speed);
  };
  console.log(`exercise 14\ninput: 3, 12\nresult: ${numberOfJumpFrog(3, 12)}`);
  console.log(`input: 5, 23	\nresult: ${numberOfJumpFrog(5, 23)}`);
}

function exercise15() {
  const calculateInterest = (money, years) => {
    for (let i = 0, interest = 0; i < years; i++) {
      interest = (money * 2.5) / 100;
      money += interest;
    }
    return money;
  };
  console.log(`exercise 15\ninput: 15126, 14\nresult: ${calculateInterest(15126, 14)}`);
  console.log(`input: 100000, 1\nresult: ${calculateInterest(100000, 1)}`);
}
