
var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === "pictures/sample_for_video.jpg"){
        myImage.setAttribute ("src", "pictures/sample_for_video2.jpg");
    } else {
        myImage.setAttribute ("src", "pictures/sample_for_video.jpg")
    }
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector(`h1`);

function setUserName(){
    var myName = prompt("Bitte gib deinen Namen ein:");
    localStorage.setItem('name', myName);
    myHeading.textContent = "Hallo " +  myName;
}

if (!localStorage.getItem('name!')) {
    setUserName();
}   else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = "Hallo " + storedName;
}

myButton.onclick = function() {
    setUserName();
}
