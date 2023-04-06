// ! SEARCH BAR END START
// ? click search baar
var searchh = document.getElementById("searchbarbtnn");
searchh.addEventListener("click", function () {
  document.getElementById("advertisment").style.display = "none";
  document.getElementById("searchbar").style.display = "flex";
  document.getElementById("cancelbtnn").style.display = "inline-block";
  document.getElementById("cancelbtnn").style.marginLeft = "10px";
  document.getElementById("formm").style.width = "60vw";
  document.getElementById("formm").style.transition = "0.4s";
});
// ? click on  cancel btn
var cancelbtn = document.getElementById("cancelbtnn");
cancelbtn.addEventListener("click", function () {
  document.getElementById("advertisment").style.display = "flex";
  document.getElementById("searchbar").style.display = "block";
  document.getElementById("cancelbtnn").style.display = "none";
  document.getElementById("formm").style.width = "80vw";
  document.getElementById("formm").style.transition = "0.3s";
  document.getElementById("searchbar").style.display = "flex";
  document.getElementById("searchbar").style.justifyContent = "center";
  document.getElementById("searchbar").style.alignItems = "center";
  var searchbtnn = document.getElementById("searchbarbtnn")
  searchbtnn.value = "";  
});
// ! SEARCH BAR END
//////////////////////////////////////////////
///////////////////////////////////////////////
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
  var searchbtnn = document.getElementById("searchbarbtnn")
  searchbtnn.value = "";
  document.getElementById("form").reset();
});

// ! plus buttun to ==== writing container end

const storageInput = document.querySelector("#titall");
const DiscInput = document.querySelector("#discript");
const buttonns = document.querySelector("#savebuttunwrite");
let recordsDisplay = document.querySelector("#displayallbox");
let buttunText = buttonns.innerHTML;
let edit_id = null;
let usserarry = [];
let objstr = localStorage.getItem("DATA");
if (objstr != null) {
  usserarry = JSON.parse(objstr);
}

displayinfo();

// ! save button info start tick tick
buttonns.onclick = () => {
  // ! dateeeeeeeee start
  const carddate = new Date().toLocaleDateString("en-us", {
    hour: "numeric",
    minute: "numeric",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  // ! dateeeeeeeee end
  const name = storageInput.value;
  const discss = DiscInput.value;
  const date = carddate;
  if (edit_id != null) {
    usserarry.splice(edit_id, 1, {
      TITALL: name,
      DISCRIPTION: discss,
      DATE: date,
    });
    edit_id = null;
  } else {
    usserarry.push({ TITALL: name, DISCRIPTION: discss, DATE: date });
  }
  saveinfo(usserarry);
  storageInput.value = "";
  //  stylingggggggg
  displayinfo();
  document.getElementById("searchbar").style.display = "unset";
  document.getElementById("displayallbox").style.display = "unset";
  addNoteContainer.style.display = "none";
  document.getElementById("convertsection").style.backgroundColor = "#f2f2f2";
  document.body.style.backgroundColor = "#f2f2f2";
  addNoteBtn.style.display = "unset";
  recordsDisplay.style.display = "flex";
  recordsDisplay.style.justifyContent = "center";
  recordsDisplay.style.alignItems = "center";
  document.getElementById("searchbar").style.display = "flex";
  document.getElementById("searchbar").style.justifyContent = "center";
  document.getElementById("searchbar").style.alignItems = "center";
  var searchbtnn = document.getElementById("searchbarbtnn")
  searchbtnn.value = "";
  buttonns.innerHTML = buttunText;
};
// ! save button info end tick tick

// ! save info start
function saveinfo() {
  let stringyfii = JSON.stringify(usserarry);
  localStorage.setItem("DATA", stringyfii);
  displayinfo();
}
// ! save info start

// ! display info start
function displayinfo() {
  let statement = "";
  usserarry.forEach((user, i) => {
    statement += `
    <div class="boxes" id="cardnotes">
    <div id="contentcardss" onclick="editCard(${i})" >
      <div class="titalbox">${user.TITALL}</div>
      <div class="boxcontent">
      ${user.DISCRIPTION}
      </div>
      <div class="timebox">${user.DATE}</div>
      </div>
      <button type="button" class="material-symbols-rounded deletemycard" onclick="deleteinfo(${i})">delete_forever</button>
    </div>`;
  });
  recordsDisplay.innerHTML = statement;
}
// ! display info end

// ! DELETE CARDS START
function deleteinfo(id) {
  usserarry.splice(id, 1);
  saveinfo();
}
// ! DELETE CARDS END

// ! EDIT CARD START
function editCard(id) {
  edit_id = id;
  storageInput.value = usserarry[id].TITALL;
  DiscInput.value = usserarry[id].DISCRIPTION;
  // styling/////////////////
  buttonns.innerHTML = "&#10003;";
  document.getElementById("searchbar").style.display = "none";
  document.getElementById("displayallbox").style.display = "none";
  document.getElementById("convertsection").style.backgroundColor = "white";
  document.body.style.backgroundColor = "white";
  addNoteBtn.style.display = "none";
  addNoteContainer.style.display = "flex";
  addNoteContainer.style.flexDirection = "column";
  addNoteContainer.style.justifyContent = "center";
  addNoteContainer.style.alignItems = "center";
  var searchbtnn = document.getElementById("searchbarbtnn")
  searchbtnn.value = "";
  displayinfo();
}
// ! EDIT CARD END

// ! 333 dot icon start
function threedotbtn() {
  document.getElementById("iconcard").style.display = "flex";
  var contentsection = document.getElementById("contentsec");
  contentsection.addEventListener("click", function () {
    document.getElementById("iconcard").style.display = "none";
  });
}
// ! 333 dot icon end

var searchinput = document.getElementById("searchbarbtnn");

searchinput.addEventListener("input", () => {
  var searchinputvalue = searchinput.value.toLowerCase();
  var allcardssearch = document.getElementsByClassName("boxes");
  Array.from(allcardssearch).forEach((ele) => {
    let cardtextts = ele.getElementsByClassName("boxcontent")[0].innerText;
    if (cardtextts.toLowerCase().includes(searchinputvalue)) {
      ele.style.display = "block";
    } else {
      ele.style.display = "none";
    }
  });
});
