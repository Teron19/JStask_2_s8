"use sctrict" //чаще всего сейчас используют let 

let total = 0,
    difference = 0;
let result = " ";

for (var i = 1; i <=15; i++) {
    var first = Math.floor((Math.random() * 6) + 1); // возвращяет найбольшее целое число Math.floor
    var second = Math.floor((Math.random() *6) + 1); //

    if (i === 8 || i === 13) {
        continue;
    }
    console.log("good" + i);

    result += "Первая кость: " + first  + " Вторая кость: " + second + "<br>" + " ";

    if (first === second) {
        result += "#Выпал дубль. Число: " + second + "<br>";
    }
    difference = Math.abs(second - first);  //используем модуль Math.abs
    if (first < 3 && second > 4 || second < 3 && first > 4) {
        result += "Большой разброс между костями. Разница составляет: "+ razniza + "<br>";
    }
    total += first + second;
    console.log("Resultat: " + total);
}


result += (total > 100) 
                    ? ("Победа, вы набрали " + total + " очков") 
                    : ("Вы проиграли, у вас " + total + " очков");
 document.getElementById("result").innerHTML = difference;
