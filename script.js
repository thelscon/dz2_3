'use strict';

alert ('Запросить у пользователя год рождения. Вывести в консоль возраст пользователя.');

//let yearOfBirth = Number (prompt ('Введите ваш год рождения: '));
//let age = 2020 - yearOfBirth;
//alert ('Ваш возраст - около ' + age + ' лет.');
let yyear = Number (prompt ('Введите ваш год рождения: '));

if (isNaN (yyear)) {
    alert('Вы не ввели число');
}
else if (yyear > 18) {
    alert ('Доступ разрешен - вам больше 18 лет.');
}
else if (yyear < 12) {
    alert('Вам меньше 12 лет - используйте другой сервис.');
}
else {
    alert ('Доступ запрещен.');
}