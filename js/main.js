var uprostitel = document.getElementById("result");
var total, razniza = 0;

for (var i = 1; i <=15; i++) {
    var first = Math.floor((Math.random() * 6) + 1);
    var second = Math.floor((Math.random() *6) +1);

    if (i === 8 || i === 13) {
        continue;
    }
    console.log("good" + i);

    uprostitel.innerHTML += "Первая кость: " + first  + " Вторая кость: " + second + "<br>" + " "

    if (first === second) {
        uprostitel.innerHTML += "#Выпал дубль. Число: " + second + "<br>"
    }
    razniza = second - first;
    if (first < 3 && second > 4 || second < 3 && first > 4) {
        
        uprostitel.innerHTML += "Большой разброс между костями. Разница составляет: "+ razniza + "<br>" 
    }
    total += first + second;
    console.log("Resultat: " + total);
}

uprostitel.innerHTML += (total > 100) 
? ("Победа, вы набрали" + total + "очков") 
: ("Вы проиграли, у вас" + total + "очков");
  
