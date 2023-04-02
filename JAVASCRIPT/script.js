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

var cardnote = document.getElementById("displayallbox");

// ! get info to local storage

var data = localStorage.getItem("noteS");
if (data != null) {
  useraRRAY = JSON.parse(data);
}

displayinfo();
// ! get info to local storage
// ! save info to local storage
var savebtn = document.getElementById("savebuttunwrite");
titalinput = document.getElementById("titall");
discript = document.getElementById("discript");
var useraRRAY = [];
savebtn.addEventListener("click", () => {
  var titalname = titalinput.value;
  var discrname = discript.value;
  useraRRAY.push({ tital: titalname, discription: discrname });
  SAveinFo(useraRRAY);
});
function SAveinFo(useraRRAY) {
  var strr = JSON.stringify(useraRRAY);
  localStorage.setItem("noteS", strr);
}
// ! save info to local storage s

// function DisplayInfo() {
//   let statement = "";
//   useraRRAY.forEach((user) => {
//     statement += `<div class="boxes" id="cardnotes" >
//     <div class="titalbox">${user.tital}</div>
//     <div class="boxcontent">
//    gghhhhhhhh
//     </div>
//     <div class="timebox">Yesterday 4:18 PM</div>
//   </div>`
//   });
//   cardnote.innerHTML = statement;
// }

function displayinfo() {
  let statement = "";
  useraRRAY.forEach((user) => {
    statement += `<div class="boxes" id="cardnotes" >
    <div class="titalbox">raviggggggggggiiii</div>
    <div class="boxcontent">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Numquam obcaecati laborum dicta quidem ipsum ipsam accusantium
      recusandae sint tempore fugiat?
    </div>
    <div class="timebox">Yesterday 4:18 PM</div>
  </div>`;
  });
  cardnote.innerHTML = statement;
}

// displayallbox