function exercise1() {
  let string = prompt('enter string');
  let mess;
  checkCharacter = (string) => {
    if (string === string.toUpperCase()) {
      mess = 'All character are capital.';
    } else if (string === string.toLowerCase()) {
      mess = 'All character are small.';
    } else {
      mess = 'All character are mix.';
    }
    return mess;
  };
  console.log(`exercise 1\nString = ${string}\nresult = ${checkCharacter(string)}`);
}

function exercise2() {
  let a = prompt('enter a of pow(a,n)');
  let n = prompt('enter n of pow(a,n)');
  const pow = (a, n) => {
    return a ** n;
  };
  console.log(`exercise 2\npow(${a},${n})=${pow(a, n)}`);
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
  console.log(`exercise 5\n`);
}

function exercise6() {
  console.log(`exercise 6\n`);
}

function exercise7() {
  console.log(`exercise 7\n`);
}

function exercise8() {
  console.log(`exercise 8\n`);
}

function exercise9() {
  console.log(`exercise 9\n`);
}

function exercise10() {
  console.log(`exercise 10\n`);
}

function exercise11() {
  console.log(`exercise 11\n`);
}

function exercise12() {
  console.log(`exercise 12\n`);
}

function exercise13() {
  console.log(`exercise 13\n`);
}

function exercise14() {
  console.log(`exercise 14\n`);
}

function exercise15() {
  console.log(`exercise 15\n`);
}
