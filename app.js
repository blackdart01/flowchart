// let draggables = document.querySelectorAll(".draggable");

// draggables.forEach((draggable) => {
//   draggable.addEventListener("dragstart", () => {
//     draggable.classList.add("dragging");
//   });
//   draggable.addEventListener("dragend", () => {
//     draggable.classList.remove("dragging");
//   });
// });

// let block = document.getElementById("block");
// let line = document.getElementById("line");
// let addBlock = document.getElementById("addBlock");
// let container = document.getElementById("container");
// let set = document.getElementById("set");
// set.style.display = "none";
// let chart = [];
// let i = 0;
// let b = "";
// console.log(container);
// addBlock.addEventListener("click", () => {
//   console.log("addBlock clicked");
//   console.log(set.style.display);
//   set.style.display = "flex";
//   console.log(set.style.display);
//   b += `<div class="block" id="block"></div>
//            <div class="line" id="line"></div>
//            <div class="addBlock" id="addBlock"><span>+</span></div>`;
//   container.innerHTML = b;
// });

let ab = document.getElementById("ab");
let l = document.getElementById("l");
let b = document.getElementById("b");
// let inner = document.getElementById("inner");
// let b1 = document.getElementsByClassName("b1");
// let b2 = document.getElementById("b2");
let container = document.getElementById("container");
// inner.style.display = "none";
// console.log("ab = " + ab[0] + " ferds");
// let i = -1,
//   j = -1;
let content = `<a href="#" id="b">Block</a>
    <a href="#" id="l">Line</a>
    <a href="#" id="ab0" class="ab">AddBlock</a>
    `;

// ab.forEach((element) => {
//   console.log("fired");
// let i = 0;
// let aba = [];
// aba.push(ab0);
// console.log("ewfrgef" + aba[1]);

// function fun() {
ab.addEventListener("click", () => {
  console.log("inside");
  // let aba[0] = document.getElementById('ab' + i);
  content += `<a href="#" id="b">Block</a>
        <a href="#" id="l">Line</a>
        <a href="#" id="ab" class="ab">AddBlock</a>
       </div>`;
  // console.log("ss " + `ab${++i}` + "  ss");
  // aba.push(ab0 + i);
  // document.body.appendChild(container).innerHTML = content;
  container.innerHTML = content;
  //   });
  //   inner.style.display == "block"
  //     ? (inner.style.display = "none")
  //     : (inner.style.display = "block");
  // });
  // console.log("vfdgb" + inner.style.display);
  // b1.addEventListener("click", () => {
  //   content += `<a href="#" id="b">Block</a>
  //         <a href="#" id="l">Line</a>
  //         <a href="#" id="ab" class="ab">AddBlock</a>
  //         <div class="inner" id="inner">
  //         <a href="#" id="b1 class="b1">single</a>
  //         <a href="#" id="b2">multiple</a>
  //         </div>`;
  //   container.innerHTML = content;
  // });
});
// setInterval(fun, 200);
