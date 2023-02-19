/// Doi Tuong Date
 var date = new Date();

 var year = date.getFullYear();
 var month = date.getMonth() + 1;
 var day = date.getDate();

 ///////
 console.log(Math.random('An', 'Truyen', 'Cu', 'Hung'));
 //////
 var random = Math.floor(Math.random() * 5)

 var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin'
 ];
 
 console.log(bonus[random]);
 /////////////////
  var date = 9;
  if(date ===2) {
    console.log('Hom nay la thu 2');
  } else if(date ===3) {
    console.log('Hom nay la thu 3');
  }else if (date ===4) {
    console.log('Hom nay la thu 4')
  } else{
    console.log('Khong Biet')
  }
  ////// Toan Tu 3 ngoi
var course = {
    name: 'Javascript',
    coin: 0
}

if(course.coin>0){
    console.log(`${course.coin} Coin`);
}else {
    console.log('Mien Phi');
}
///////
var result = course.coin > 0? `${course.coin} Coin`: 'Mien Phi'; 
console.log(result);

var a = 1;
var b = 2;

var c = a > 0? a : b;

/// For loop

for(var i =1; i<=1000; i++){
    console.log(i);
}