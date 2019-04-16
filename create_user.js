var namesArray = [];
snackBar_FullScreen();

console.log("Start");
const electron = require("electron");
const { ipcRenderer } = electron;


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

    if (namesArray.length < 12 && name !== "" && name !== " ") {
        chefCheck(name);

        if (cheffunctionbool == true) {
            // console.log('First');
            cheffunction(name);
            console.log(namesArray);
        } else {
            namesArray.push(name);

            // console.log(namesArray);
            document.getElementById("nameInput").value = null;
            document.getElementById("nameInput").style.borderColor = "";
        }
    } else if (namesArray.length == 12) {
        snackBar_Platz();
        document.getElementById("nameInput").style.borderColor = "red";
    } else {
        document.getElementById("nameInput").style.borderColor = "red";
        document.getElementById("nameInput").value = null;
        snackBar_Name();
    }

    displayName(namesArray);
}

var cheffunctionbool;

function chefCheck(name) {
    var splitName = name.split(" ");
    if (splitName[0] == "Chef") {
        cheffunctionbool = true;
    } else {
        cheffunctionbool = false;
    }
}

function cheffunction(name) {
    var text = document.getElementById("frei").innerText;
    var splitName = name.split(" ");

    console.log(text);

    if (text == "besetzt") {
        namesArray.splice(1, 0, splitName[1]);
        document.getElementById("nameInput").value = null;
        document.getElementById("nameInput").style.borderColor = "";
    } else {
        namesArray.unshift(splitName[1]);
        document.getElementById("nameInput").value = null;
        document.getElementById("nameInput").style.borderColor = "";
    }
}

function displayName(array) {
    for (var i = 0; i < array.length; i++) {
        // txt += array[i] + "," + " ";
        var output = document.getElementById("output" + i);
        output.innerHTML = array[i];


        // console.log('r'+w);

        // var outputWidth = output.getBoundingClientRect().width;
        // console.log(outputq);

        // if (outputWidth > w) {
        //     output.innerHTML = nameToLong(array[i], i);
        //     console.log('TO long');
        //     // console.log('print');
        // } else {
        // output.innerHTML = array[i];
        // }
    }
    //var a = i + 1;
    if (namesArray.length < 12) {
        document.getElementById("output" + i).innerHTML = "";
    }
}

// function onResize() {
//     w = document.getElementById('test').getBoundingClientRect().width;
//     console.log(w);
//     // return document.getElementById('test').getBoundingClientRect().width;
// }

// function nameToLong(name, index) {
//     // var w = document.getElementsByClassName('name_header').offsetWidth;
//     // console.log(w);

//     nameArrayToLong = name.split('');
//     newName = [];
//     var k = 15;

//     var output = document.getElementById("output" + index);
//     var outputWidth = output.getBoundingClientRect().width;


//     while (w < outputWidth) {

//         newName = [];
//         for (let i = 0; i < k; i++) {
//             newName.push(nameArrayToLong[i]);
//         }

//         newName.push('...');

//         if (k != 0) {
//             k = k - 1;
//         }

//         output.innerHTML = newName;
//         outputWidth = output.getBoundingClientRect().width;
//         console.log('While ' + outputWidth);

//         if (w == outerWidth) {
//             break;
//         }
//     }




// var k = 15

// var wr = w;

// console.log(w);

// for (let j = 0; j < nameArrayToLong.length; j++) {
//     newName = [];

//     for (let i = 0; i < k; i++) {
//         newName.push(nameArrayToLong[i]);
//     }
//     newName.push('...');

//     document.getElementById('output' + index).innerHTML = newName;
//     var ow = document.getElementById('output' + index).getBoundingClientRect().width;

//     if (ow <= wr) {
//         break;
//     }

//     k--;
// }

// document.getElementById('output'+index).getBoundingClientRect().width;

//     return newName.join('');
// }

var click = false;
var booluser = false;

function next() {
    // var state = true;
    var backgrounddiv = document.getElementById("wcBackground");
    var text = document.getElementById("frei");
    var idcell = document.getElementById("idNummer0");
    var idcellNext = document.getElementById("idNummer1");
    var arrow = document.getElementById("arrow");
    var next_back = document.getElementById("next");

    document.getElementById("nameInput").style.borderColor = "";

    if (namesArray != 0) {
        if (click == false) {
            text.innerHTML = "besetzt";
            backgrounddiv.style.background = "red";
            idcell.style.background = "red";
            idcellNext.style.background = "green";
            arrow.style.borderLeft = "81px solid red";
            next_back.style.background = "green";
            click = true;
            booluser = false;
        } else if (click == true) {
            text.innerHTML = "frei";
            backgrounddiv.style.background = "green";
            idcell.style.background = "green";
            idcellNext.style.background = "rgb(" + 22 + "," + 99 + "," + 201 + ")";
            arrow.style.borderLeft = "81px solid green";
            next_back.style.background = "red";
            click = false;
            booluser = true;

            skipedUser();
        }
    }
    var name = document.getElementById("output0").innerHTML;
}

function skipedUser() {
    if (booluser) {
        // console.log("remove");
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

function snackBar_Name() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 2000);
}

function snackBar_Platz() {
    var x = document.getElementById("snackbar1");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 2000);
}

function snackBar_FullScreen() {
    var x = document.getElementById("snackbar2");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}

/*
    ʕ•ᴥ•ʔ
*/
