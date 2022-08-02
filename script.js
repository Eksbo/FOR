'use script'
// азберите мое решение описанной задачи, 
// а затем самостоятельно, не подсматривая в мой код, решите эту задачу. 

// let one = 0 ;
// let two = 1 ;

// for ( let i = 1 ; i <= 5 ;i ++ ){
//     let cur = one + two ;
//      one = two ;
//      two = cur ;
//      console.log(cur);
// }

// Решите задачу на нахождение ряда чисел,
//  каждое из которых равно сумме трех предыдущих, а первые три числа равны 0, 1 и 2. 

// let one = 0 ;
// let two = 1 ;
// let three = 2;
// let curent = 0 ;

// for ( let i = 1 ; i <=6 ; i ++ ){
//     curent = one + two + three ;
//     one += 1 ;
//     two += 1 ;
//     three += 1 ;
//     console.log(curent);
// }

//   Выведите на экран следующую пирамидку:
// xx
// xxxx
// xxxxxx
// xxxxxxxx
// xxxxxxxxxx 

// let str = '' ;
// for (let i = 1 ; i <= 5 ; i ++){
//     str += "xx"
//     document.write(str + '<br>' )
// }

// for (let i = 1; i <= 9; i++) {
// 	for (let j = 1; j <= i; j++) {
// 		document.write(i);
// 	}
	
// 	document.write('<br>');
// }

//  Выведите на экран следующую пирамидку:
// 1
// 333
// 55555
// 7777777
// 999999999 


// for (let i = 0; i <= 9; i++) {
//     i += 1 ;
// 	for (let j = 1; j <= i; j++) {
// 		document.write(i);
// 	}
	
// 	document.write('<br>');
// }

// for ( let i = 5 ; i >= 1 ; i --){
//     let str = '' ;
//     for ( let k = 0 ; k < i ; k ++ ){
//         str += 'x'
//     }
//     document.write( str + "<br>");
// }

//  Выведите на экран следующую пирамидку:
// xxxxxxxxxx
// xxxxxxxx
// xxxxxx
// xxxx
// xx 

// for ( let i = 5 ; i >= 1 ; i --){
//     let str = '' ;
//     for ( let k = 0 ; k < i ; k ++ ){
//         str += 'xx'
//     }
//     document.write( str + "<br>");
// }

//  Выведите на экран следующую пирамидку:
// 999999999
// 88888888
// 7777777
// 666666
// 55555
// 4444
// 333
// 22
// 1 

// for (let i = 9; i >= 1; i--) {
   
// 	for (let j = 1; j <= i; j++) {
// 		document.write(i);
// 	}
	
// 	document.write('<br>');
// }

// С помощью цикла сформируйте следующий массив:
// ['xx', 'xxxx', 'xxxxxx', 'xxxxxxxx', 'xxxxxxxxxx']

// let arr = [] ;
// let str = '' ;
// for (let i = 1 ; i <= 5 ; i ++){
   
//         str += "xx"
//         arr.push(str)
  
// }
// console.log(arr);

// let arr = [];

// for (let i = 1; i < 10; i++) {
// 	let str = '';
	
// 	for (let j = 0; j < i; j++) {
// 		str += i;
// 	}
	
// 	arr.push(str);
// }

// console.log(arr);

//  С помощью цикла сформируйте следующий массив:
// ['11111', '22222', '33333', '44444', '55555']

// let arr = [] ;
// for (let i = 1 ; i <= 5 ;i ++){
//     let str = '';
//     for (let k = 1 ; k <= 5 ; k++ ){
//        str += i 
//     }
//     arr.push(str)
// }
// console.log(arr);

// Дан массив:
// let arr = [10, 20, 30, 40, 21, 32, 51];

// Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму.
// let arr = [10, 20, 30, 40, 21, 32, 51];
// let sum = 0 ;
// for (let num of arr){
//     if ( String(num)[0] == 1 || String(num)[0] == 2){
//         console.log(num);
//         sum += num
//     }
// }
// console.log(sum);
// let arr =[ "1" ,'2']
// console.log(typeof+arr[0]);


// Исправьте ошибки, допущенные в следующем коде:
// let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
// let sum = 0;

// for (let elem in obj) {
// 	if (elem[0] === '1' && elem[0] === '2') {
// 		sum += +elem;
// 	}
// }

// console.log(sum);

// let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
// let sum = 0;

// for (let elem in obj) {
//     // console.log(obj[elem]);



// 	if (+String(obj[elem])[0] == 1 || +String(obj[elem])[0] == 2) {
// 		sum += obj[elem];
       
// 	}
// }


// console.log(sum);

// Выведите с помощью цикла столбец чисел от 1 до 100. 
// for (let i = 1 ; i <= 100 ; i ++){
//     console.log(i);
// }


// Выведите с помощью цикла столбец чисел от 100 до 1.
// for (let i = 100 ; i >= 1 ; i --){
//     console.log(i);
// }

// Выведите с помощью цикла столбец четных чисел от 1 до 100. 
// for (let i = 1 ; i <= 100 ; i ++){
//  if ( i % 2 == 0){
//     console.log(i);
//  }
// }

// Заполните массив 10-ю иксами с помощью цикла. 
// let arr = [];
// let str = 'x';

// for ( let i = 1 ; i <= 10 ; i ++)
// {

//     arr.push(str)
// }
// console.log(arr);


// Заполните массив числами от 1 до 10 с помощью цикла. 
// let arr = [] ;
// for ( let i = 1 ; i <=10 ;i ++){
//     arr.push(i)
// }
// console.log(arr);

// Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это 
// произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 
// 4! = 1*2*3*4. 

// let fuck = 4 ;
// let fuckValue = 1 ;
// for (let i = 1 ; i <= fuck ;i ++){
//     fuckValue *= i ;
// }
// console.log(fuckValue);