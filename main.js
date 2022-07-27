let putnumber = document.getElementById('number');
let b1 = document.getElementById('button');
let outputnum = document.getElementById('output');
function shownum(){
  let listnumber = '';
  let numbers = Number(putnumber.value);
  let mat1 = (Math.sqrt(numbers));
  let matter = Math.trunc(mat1)
  if ((matter*matter) === numbers) {
    listnumber += '<p>';
    listnumber += "ค่ารูทของ " + numbers + " คือ " + matter;
    listnumber += '</p>';
    outputnum.innerHTML = listnumber;
  }else if ((matter*matter) !== numbers){
    listnumber += '<p>';
    listnumber += "ไม่สามารถถอดรูทได้ ใช้จำนวนที่ใกล้ที่สุด " + Math.trunc(matter) + " × " + Math.trunc(matter) + " = " + Math.trunc(matter)*Math.trunc(matter);
    listnumber += '</p>';
    outputnum.innerHTML = listnumber;
  }
}
b1.addEventListener("click", shownum);



