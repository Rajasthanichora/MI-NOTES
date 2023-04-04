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

// ! plus buttun to ==== writing container
var addNoteContainer = document.getElementById("addNoteContainer");
addNoteContainer.style.display = "none";
var addNoteBtn = document.getElementById("addboxxbtnn");
addNoteBtn.addEventListener("click", function () {
  addNoteContainer.style.display = "flex";
  addNoteContainer.style.flexDirection = "column";
  addNoteContainer.style.justifyContent = "center";
  addNoteContainer.style.alignItems = "center";

  // ye niche baki screen gayab ke liye
  document.getElementById("searchbar").style.display = "none";
  document.getElementById("displayallbox").style.display = "none";
  document.getElementById("convertsection").style.backgroundColor = "white";
  document.body.style.backgroundColor = "white";
  addNoteBtn.style.display = "none";
});

// ! plus buttun to ==== writing container

const storageInput = document.querySelector("#titall");
const DiscInput = document.querySelector("#discript");
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
  const discss = DiscInput.value;
  usserarry.push({ TITALL: name, DISCRIPTION: discss });
  saveinfo(usserarry);
  storageInput.value = "";
  // displayinfo();
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
      ${user.DISCRIPTION}
      </div>
      <div class="timebox">Yesterday 4:18 PM</div>
    </div>`;
  });

  recordsDisplay.innerHTML = statement;
}

// // ! delete info

// function deleteinfo() {}

//
