function greetUser(){
    var name = prompt("What is your name?", "Enter your name");
    
    if(name === null || name === ""){
        alert("User cancelled the prompt.");
    } else {
        alert("Welcome " + name);
    }
}

function mouseOverFontColor(){
    document.getElementById("name").style.color = "navy";
}

function mouseOverBgColor(){
    document.getElementById("header").style.background = "lightskyblue";
}

function textChange(){
    document.getElementById("textPara").innerHTML = 
            "It is a long established fact that a reader will be distracted by the readable content of a page" + "<br>" +
            "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less " + "<br>" +
            "normal distribution of letters, as opposed to using content here," + "<br>" +
            "content there, making it look like readable English.";
}

function textReappear(){
    document.getElementById("textPara").innerHTML = "This website is part of the assignment for Web Programming Course." + "<br>" +
            "The course divided into 3 units which could divided into 2 parts." + "<br>" +
            "First part is client side scripting which focus on JavaScript." + "<br>" +
            "Second part is server side scripting and database access using PHP and MySQL.";
}

function fontColorChange(){
    document.getElementById("fontColorPara").style.color = "steelblue";
}

function fontColorReappear(){
    document.getElementById("fontColorPara").style.color = "black";
}