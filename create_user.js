var namesArray = [];

console.log("Start");
const electron = require('electron');
const {
    ipcRenderer
} = electron;

// Get the input field
var input = document.getElementById("nameInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Trigger the button element with a click
        document.getElementById("addBtn").click();
    }
});

function add() {
    var name = document.getElementById("nameInput").value;
    var firstname = document.getElementById("output0").innerHTML;
    // console.log(name);

    if (namesArray.length < 12 && name !== "" && name !== " " && name.length < 20) {
        namesArray.push(name);
        // console.log(namesArray);
        document.getElementById('nameInput').value = null;
        document.getElementById('nameInput').style.borderColor = '';
    } else if (namesArray.length == 12) {
        snackBar_Platz();
        document.getElementById('nameInput').style.borderColor = 'red';
    } else {
        document.getElementById('nameInput').style.borderColor = 'red';
        document.getElementById('nameInput').value = null;
        snackBar_Name();
    }

    // console.log(namesArray);
    // if(firstname == namesArray[0]){
    //     userOnFirstPlace(firstname);
    // }

    displayName(namesArray);

}

function displayName(array) {

    for (var i = 0; i < array.length; i++) {
        // txt += array[i] + "," + " ";
        document.getElementById("output" + i).innerHTML = array[i];
    }
    var a = i + 1;
    document.getElementById("output" + i).innerHTML = "";
}


function inputLength() {
    var inputlen = document.getElementById('nameInput').value;

    if (inputLength > 20) {
        // border color red
        // message to long
        document.getElementById('nameInput').style.borderColor = 'red';
    }
}


var click = false;
var booluser = false;

function next() {
    // var state = true;
    var backgrounddiv = document.getElementById('wcBackground');
    var text = document.getElementById('frei');
    var idcell = document.getElementById('cell0Blue');
    var idcellNext = document.getElementById('cell1Blue');
    var arrow = document.getElementById('arrow');
    var next_back = document.getElementById('next');

    document.getElementById('nameInput').style.borderColor = '';

    if (namesArray != 0) {
        if (click == false) {
            text.innerHTML = 'besetzt';
            backgrounddiv.style.background = 'red';
            idcell.style.background = 'red';
            idcellNext.style.background = 'green';
            arrow.style.borderLeft = '81px solid red';
            next_back.style.background = 'green';
            click = true;
            booluser = false;
        } else if (click == true) {
            text.innerHTML = 'frei';
            backgrounddiv.style.background = 'green';
            idcell.style.background = 'green';
            idcellNext.style.background = 'rgb(' + 22 + ',' + 99 + ',' + 201 + ')';
            arrow.style.borderLeft = '81px solid green';
            next_back.style.background = 'red';
            click = false;
            booluser = true;

            skipUser();
        }
    }
    var name = document.getElementById('output0').innerHTML;
    userOnFirstPlace(name);
}

var removeedUserConut = 0;

function skipUser() {
    if (booluser) {
        // console.log("remove");
        removeedUserConut++;
        removeUser();
    } else {
        // console.log("not remove");
    }
}

function removeUser() {
    namesArray.shift();

    displayName(namesArray);

    // console.log(namesArray.length);
}



// function userOnFirstPlace(name) {
//     var start = new Date().getTime();
//     console.log(start);
    // var start = new Date().getTime();
    // console.log(name)


    // setInterval(function () {
    //     var end = new Date().getTime();
    //     console.log(end)
    // }, 3000);
// }


// var end = new Date().getTime();
// var time = end - start;
// alert('Execution time: ' + time);


function snackBar_Name() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}

function snackBar_Platz() {
    var x = document.getElementById("snackbar1");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}