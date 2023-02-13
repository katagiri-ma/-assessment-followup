'use strict';
// please do not delete the 'use strict' line above
// ランダムに色を出力
const colorList = [
  // rgb(239, 208, 224),
  "#efd0e0",
  "#8ce494",
  "#f8bf9f",
  "#5edbef",
  "#c397f6",
]


document.getElementById('color-button').addEventListener('click', changeColor)

function getRandom(){
  const random = Math.floor(Math.random() * colorList.length);
  const body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor  =  colorList[random];


  const imgArea = document.getElementById("imgArea");
  const rndImg = Math.floor(Math.random() * imgs.length);
  imgArea.src = imgs[rndImg];


}

function changeColor() {
  
  console.log('Button clicked!'); // feel free to change/delete this line
  // document.body.style.backgroundColor  =  "#efd0e0";
  getRandom();
  // document.write()
}

const imgs = [
  "ゼニガメ.png",
  "ヒトカゲ.png",
  "フシギダネ.png",
  "ワニノコ.png",
  "ヒノアラシ.png",
  "チコリータ.png",
]
