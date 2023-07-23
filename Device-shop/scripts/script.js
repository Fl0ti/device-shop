/* let number;

number = prompt("Введите число больше 100",0);


while(number <= 100) {
    if (number == null) {
        alert("Отменено!") 
        break;
    }
    alert("Введите число ещё раз!!!");
    number = prompt("Введите число от 100",0);
}
if (number >= 100){
    alert(`Ваше число ${number}`);
} */


/* let n = 10;

    nextPrime:
    for(let i = 2; i <= n; i++ ) {
        for(let j = 2; j < i; j++) {
            if(i % j == 0) continue nextPrime;
        }
        alert(i);

    } */

/* let a = 3;

switch (a) {
    case 3:
    case 5:
        alert('dasdas');
        alert('asdasd');
        break;

    default:
        alert('sdajsh');

} */



/* let browser = prompt("Please enter your browser name", "");

if(browser === 'Edge') {
    alert( "You've got the Edge!" );
}
else if(browser === 'Chrome'
|| browser === 'Firefox'
|| browser === 'Safari'
|| browser === 'Opera'){
    alert( 'Okay we support these browsers too' );
}
else {
    alert( 'We hope that this page looks ok!' );
} */

/* const number = +prompt('Введите число между 0 и 3', '');

switch(number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    
    case 1:
        alert('Вы ввели число 1');
        break;

    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
} */


/* function showMessage(from, text) {
    from = '*' + from + '*';

    alert(from + ': ' + text);
}

let from = "Аня";

showMessage(from, "Привет");

alert(from); */


/* function sum(a,b) {
    return sum = a + b;
}

let result = sum(1,2)

alert(result); */


/* function checkAge(age){
    if(age >= 18){
        return true;
    }
    else {
        return confirm("А родители разрешили?");
    }
}

let age = prompt("Введите ваш возраст", 18);

if ( checkAge(age) ) {
    alert("Доступ разрешен");
}
else {
    alert("Доступ закрыт");
} */

/* function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      alert( i ); // простое
    }
  }

alert(showPrimes(10)); */

/* function showPrimes(n) {
    for(let i = 2; i < n; i++) {
        if(!isPrime(i)) continue;

        alert(i);
    }
}

function isPrime(n) {
    for(let i = 2; i < n; i++) {
        if(n % i == 0) return false; 
    }
    return true;
} */


/* function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?') ; 
} */

/* function showMin(a,b) {
    if(a < b) {
        return a;
    }
    else if (b < a) {
        return b;
    }
} */


/* function pow(x,n) {
    let sum = x;
    for(let i = 0; i < n - 1; i++) {
        sum *= x;
    }
    return alert(sum);
}

let x = prompt('x?');
let n = prompt('n?');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`)
}
else {
    alert (pow(x,n));
} */

/* let age = prompt("Сколько Вам лет?", 18)

function welcome(age) {
    if (age < 18) {
        alert("Привет!");
    }
    else alert("Здравствуйте!");
   
}

welcome(age); */


/* function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

ask("Вы согласны?",
() => alert("Вы согласны!"),
() => alert("Вы не согласны!")); */


/* let a = prompt("a",1);
let b = prompt("b",1);

function sum(a,b) {
    let result = Number(a) + Number(b);

    return result;
}

alert(sum(a,b)); */


/* describe("pow", function() {

    it("Возводит в степень n", function() {
        assert.equal(pow(2, 3), 8);
    });
    
}); */

/* function showCountryCode(country) {
  country = prompt("Введите название страны", "Германия");
  let code;

  if ( country === "Германия" ) code = "+49"
  else if ( country === "Украина" ) code = "+380"
  else if ( country === "Швейцария" ) code = "+41"
  else if ( country === "Великобритания" ) code = "+44"
  else if ( country === "США" ) code = "+1"

  alert(code);
}

alert(showCountryCode) */


/* let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
  };

  function salariesSum(salaries) {
    sum = salaries.Ann + salaries.John + salaries.Pete;

    if(isEmpty == true) sum = 0;
    return sum;
  }

  function isEmpty(salaries) {
    for(let key in salaries) {
        return false;
    }
    return true;
  } */


  