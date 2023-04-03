// ? click search baar
var searchh = document.getElementById("searchbarbtnn");
searchh.addEventListener("click", function () {
  document.getElementById("advertisment").style.display = "none";
  document.getElementById("searchbar").style.display = "flex";
  document.getElementById("cancelbtnn").style.display = "inline-block";
  document.getElementById("cancelbtnn").style.marginLeft = "10px";
  document.getElementById("formm").style.width = "70vw";
  document.getElementById("formm").style.transition = "0.3s";
  //   ?  touch on screen anywhere
  var contentsection = document.getElementById("contentsec");
  contentsection.addEventListener("click", function () {
    document.getElementById("advertisment").style.display = "block";
    document.getElementById("searchbar").style.display = "block";
    document.getElementById("cancelbtnn").style.display = "none";
    document.getElementById("formm").style.width = "90vw";
    document.getElementById("formm").style.transition = "0.3s";
    document.getElementById("searchbar").style.display = "flex";
    document.getElementById("searchbar").style.justifyContent = "center";
    document.getElementById("searchbar").style.alignItems = "center";
  });
});
// ? click on  cancel btn
var cancelbtn = document.getElementById("cancelbtnn");
cancelbtn.addEventListener("click", function () {
  document.getElementById("advertisment").style.display = "block";
  document.getElementById("searchbar").style.display = "block";
  document.getElementById("cancelbtnn").style.display = "none";
  document.getElementById("formm").style.width = "90vw";
  document.getElementById("formm").style.transition = "0.3s";
  document.getElementById("searchbar").style.display = "flex";
  document.getElementById("searchbar").style.justifyContent = "center";
  document.getElementById("searchbar").style.alignItems = "center";
  // document.getElementById("searchbar").style.flexBasis = "auto";
});

// ! !!!!!!!!!!!11111111111

// var boxclick = document.querySelectorAll(".boxes");

// boxclick.forEach((userItem) => {
//   userItem.addEventListener("click", function () {
//     boxxez = this;

//     document.getElementById("searchbar").style.display = "none";
//     boxxez.style.borderRadius = "0px";
//     boxxez.style.margin = "0px";
//     boxxez.style.flexBasis = "auto";
//     document.getElementById("advertisment").style.backgroundColor = "blue";
//     document.getElementById("convertsection").style.backgroundColor = "white";
//     document.body.style.backgroundColor = "white";

// // // !tital box
// //     var titalBoxes = document.querySelectorAll(".titalbox");
// //     titalBoxes.forEach((titalall) => {
// //       titalall.style.width = "100%";
// //       // titalall.style.color = "red";
// //       // titalall.style.color = "red";
// //       // titalall.style.color = "red";

// //     })

//     // !display none
//     var allboxes = document.querySelectorAll(".boxes");
//     allboxes.forEach((allbxx) => {
//       allbxx.style.display = "none";
//       boxxez.style.display = "unset";
//     });

//     // boxclicdffk.style.color = "red";
//   });
// });

// function showAllNotes(){
//   // addNoteContainer.style.display = 'none';
//   // let allNotes;
//   let notes = localStorage.getItem("notes")
//   // if(notes === null){
//   //     allNotes =[]
//   // }else{
//   //     allNotes = JSON.parse(notes);
//   // }
// }

// showAllNotes()

// console.log(notes)

// ! plus buttun to ==== writing container
var addNoteContainer = document.getElementById("addNoteContainer");
addNoteContainer.style.display = "none";
var addNoteBtn = document.getElementById("addboxxbtnn");
addNoteBtn.addEventListener("click", function () {
  addNoteContainer.style.display = "unset";
});
// ! plus buttun to ==== writing container


const storageInput = document.querySelector("#titall");
const buttonns = document.querySelector("#savebuttunwrite");
let recordsDisplay = document.querySelector("#displayallbox");
let usserarry = [];

let objstr = localStorage.getItem("DATA");
if (objstr != null) {
  usserarry = JSON.parse(objstr);
}

displayinfo();

// ! submit button info

buttonns.onclick = () => {
  const name = storageInput.value;
  usserarry.push({ TITALL: name });
  saveinfo(usserarry);
  storageInput.value = "";
  displayinfo();
};


// ! save info

function saveinfo() {
  let stringyfii = JSON.stringify(usserarry);
  localStorage.setItem("DATA", stringyfii);
}

// ! display info

function displayinfo() {
  let statement = "";
  usserarry.forEach((user) => {
    statement += `
    <div class="boxes" id="cardnotes" >
      <div class="titalbox">${user.TITALL}</div>
      <div class="boxcontent">
       jj thobson
      </div>
      <div class="timebox">Yesterday 4:18 PM</div>
    </div>`;
  });

  recordsDisplay.innerHTML = statement;
}

// // ! delete info

// function deleteinfo() {}
