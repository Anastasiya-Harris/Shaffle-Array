var getnNewArray = function (length) {
  var array = [];
  for (var i = 0; i <= length; i++) {
    array.push(i);
  }
  return array;
};

var arr = getnNewArray(8)
console.log(arr);

var shuffleArray = function (arr) {
  // тут мы делаем копию массива, чтобы не менять пришедший массив. Потому что по функциональному программированию (а в JS есть и ФП и ООП) функции не должны иметь побочных эффектов. А изменение пришедшего массива - это побочный эффект, поэтому мы просто делаем его копию.
  var originalArray = arr.slice();
  var randomArray = [];
  while (originalArray.length > 0) {
    var randomNumber = Math.floor(Math.random() * originalArray.length);
    // splice удалит по нужному индексу 1 элемент и вернет массив с удаленным элементом
    var number = originalArray.splice(randomNumber, 1);
    console.log(number);
    // мы должны запушить не массив, который вернул splice, а элемент
    randomArray.push(number[0]);
  }
  return randomArray;
}

console.log(shuffleArray(arr));
