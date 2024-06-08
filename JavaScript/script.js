function task1() {
    alert("Юрий".length);
}

function task2() {
    alert(3 + 5);
}

function task3() {
    confirm(16 / 2);
}

function task4() {
    const age = 23;
    console.log(age);
}

function task5() {
    const word = prompt("Введите слово");
    console.log(word.length);
    console.log(word.substring(0, 2));
}

function task6() {
    const motherAge = parseInt(prompt("Введите возраст матери"));
    const fatherAge = parseInt(prompt("Введите возраст отца"));
    if (motherAge > fatherAge) {
        alert("Мать старше");
    } else if (fatherAge > motherAge) {
        alert("Отец старше");
    } else {
        alert("У родителей одинаковый возраст");
    }
}

function task7() {
    const age = parseInt(prompt("Введите Ваш возраст"));
    if (age >= 12 && confirm("Готовы ли Вы отправиться слушать Аллу Пугачеву?")) {
        alert("Вперед за билетами");
    } else {
        alert("Сиди дома")
    }
}

function task8() {
    const square = function (number) {
        return number * number;
    };
    alert(square(parseInt(prompt("Введите число"))));
}

function task9() {
    const name = prompt("Введите Ваше имя");
    const greetings = function (name) {
        return "Доброго здоровечка, " + name;
    };
    alert(greetings(name));
}

function task10() {
    const number = parseInt(prompt("Введите число"));
    const remainder = function (number) {
        return number % 4;
    };
    if (remainder(number) == 0) {
        alert("Выражение истинно");
    } else {
        alert("Выражение ложно");
    }
}

function task11() {
    const a = parseInt(prompt("Введите первую сторону"));
    const b = parseInt(prompt("Введите вторую сторону"));
    const perimeter = function (a, b) {
        return (a + b) * 2;
    };
    alert(perimeter(a, b));
}

function task12() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function task13() {
    for (let i = 5; i <= 50; i += 5) {
        console.log(i);
    }
}

function task14() {
    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}

function task15() {
    let i = 5;
    while (i <= 50) {
        console.log(i);
        i += 5;
    }
}

function task16() {
    let i = 5;
    do {
        alert("Нас не задушишь, не убьешь");
    } while (i < 1);
}

function task17() {
    const food = prompt("Введите блюдо из меню (яблоко, апельсин, сок, пиво)");
    switch (food) {
        case "яблоко":
        case "апельсин":
        case "сок":
        case "пиво":
            console.log("Ваш выбор " + food + " + просто идеален");
            break;
        default:
            console.log("Пошел прочь!");
            break;
    }
}

function task18() {
    const array = [];
    for (let i = 0; i < 5; i++) {
        array[i] = parseInt(prompt("Введите " + (i + 1) + "-й элемент"));
    }
    alert(array[2]);
}

function task19() {
    const array = [];
    for (let i = 0; i < 5; i++) {
        array[i] = parseInt(prompt("Введите " + (i + 1) + "-й элемент"));
    }
    alert(array.length);
}

function task20() {
    const array = [];
    for (let i = 0; i < 5; i++) {
        array[i] = parseInt(prompt("Введите " + (i + 1) + "-й элемент"));
    }
    alert(array);
}

function task21() {
    const array = new Array();
    for (let i = 0; i < 3; i++) {
        if (i < 2) {
            array[i] = parseInt(prompt("Введите " + (i + 1) + "-й элемент"));
        } else {
            array[i] = new Array();
            for (let j = 0; j < 3; j++) {
                array[i][j] = parseInt(prompt("Введите " + (j + 1) + "-й элемент подмассива"));
            }
        }
    }
    alert(array);
}

function task22() {
    const phonebook = {
        "ФИО": prompt("Введите ФИО"),
        "Телефонный номер": prompt("Веедите телефонный номер")
    };
    alert(phonebook["ФИО"] + " " + phonebook["Телефонный номер"]);
}

function task23() {
    const obj = new Object();
    obj["1"] = prompt("Введите значение первого свойства");
    obj["2"] = prompt("Введите значение второго свойства");
    obj["3"] = prompt("Введите значение третьего свойства");
    obj["4"] = prompt("Введите значение четвертого свойства");
    obj["5"] = prompt("Введите значение пятого свойства");
    for (const property in obj) {
        alert(property);
    }
}

function task24() {
    const obj = new Object();
    obj["1"] = prompt("Введите значение первого свойства");
    obj["2"] = prompt("Введите значение второго свойства");
    obj["3"] = prompt("Введите значение третьего свойства");
    obj["4"] = prompt("Введите значение четвертого свойства");
    obj["5"] = prompt("Введите значение пятого свойства");
    for (const property in obj) {
        alert(obj[property]);
    }
}
