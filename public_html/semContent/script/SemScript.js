var p1;
var p2;
var p3;
var p4;
var itemName = [];
var itemNum = [];
var order;

function startUp(){
    p1 = document.getElementById("p1");
    p2 = document.getElementById("p2");
    p3 = document.getElementById("p3");
    p4 = document.getElementById("p4");
    order = document.getElementById("showOrder");
}

function selectImg(name) {
    var fullname = document.getElementById(name).alt;
    let ans = confirm("Would you like to purchase " + fullname + " ?");
    if (ans === true) {
        var count = prompt("How many would you like to purchase " + fullname + " ?");
        if (count > 0) {
            itemName.push(document.getElementById(name).alt);
            itemNum.push(count);
        } else {
            alert("You entered the invalid value!");
        }
    } else {
        alert("You pressed Cancel!");
    }
}

function showOrder() {
    if (itemName.length >= 1) {
        order.innerHTML = "Item Names - Amount<br>";
        for (let i = 0; i < itemName.length; i++) {
            order.innerHTML += itemName[i] + " - " + itemNum[i] + "<br>";
        }
    } else {
        order.innerHTML = "Click to see your order here";
    }
}

function confirmOrder() {
    if (itemName.length >= 1) {
        let ans = confirm("Are you sure to proceed the order?");
        if (ans === true) {
            alert("Your order is successfully processed.");
        } else {
            alert("You canceled your confirmation.");
        }
    } else {
        alert("Empty Order!");
    }
}

function cancelOrder(){
    let ans = confirm("Are you sure to cancel some item on the order?");
    if (ans === true){
        for(let i = 0; i < itemName.length;){
            let itemDel = confirm(itemName[i] + " - " + itemNum[i] +
                    "\n\If you would like to remove this item, click 'ok'");
            if(itemDel === true){
                itemName.splice(i,1);
                itemNum.splice(i,1);
            } else {
                i++;
            }        
        }
        showOrder();
    }
}

function emptyOrder(){
    let ans = confirm("Are you sure to cancel the order?");
    if (ans === true){ 
        alert("Your order is successfully cancelled."); 
        itemName = [];
        itemNum = [];
        order.innerHTML = "Click to see your order here";
    } 
}

function changeOrder() {
    let ans = confirm("If you would like to add the order: \n\
            Click on product image and add number\n\
If you would like to cancel the individual item: \n\
            Click on 'Cancel Some Order'\n\
If you would like to empty cart: \n\
            Click on 'Empty Cart'\n\
If you would like to change the number:\n\
            Click 'ok' to proceed");
    if(ans === true){
        for(let i = 0; i < itemName.length; i++){
            let count = prompt(itemName[i] + " - " + itemNum[i] +
                    "\n\If you would like to change the number, entered the number below: ", itemNum[i]);
            if(count > 0){
                itemNum[i] = count;
            } else {
                alert("Invalid number");
            }
        }
        showOrder();
    }
}

//bulldog
function bulldogInfo(){
    p1.innerHTML =
        "Bulldog:" + "<br>" +
        "Size: medium" + "<br>" +
        "Temperament: Willful, Friendly" + "<br>" +
        "Color: White, Fawn, Piebald" + "<br>" +
        "Life span: 8 - 10 years";
}
function originBulldog(){
    p1.innerHTML = "Bulldog Puppy";
}

//golden
function goldenInfo(){
    p2.innerHTML =
        "Golden Retriever:" + "<br>" +
        "Size: large" + "<br>" +
        "Temperament: Kind, Intelligent" + "<br>" +
        "Color: Golden, Cream" + "<br>" +
        "Life span: 10 - 12 years";
}
function originGolden(){
    p2.innerHTML = "Golden Retriever Puppy";
}

//samoyed
function samoyInfo(){
    p3.innerHTML =
        "Samoyed:" + "<br>" +
        "Size: large" + "<br>" +
        "Temperament: Lively, Playful" + "<br>" +
        "Color: White" + "<br>" +
        "Life span: 12 - 13 years";
}
function originSamoy(){
    p3.innerHTML = "Samoyed Puppy";
}

//siberian
function siberianInfo(){
    p4.innerHTML =
        "Siberian Husky:" + "<br>" +
        "Size: medium" + "<br>" +
        "Temperament: Alert, Outgoing" + "<br>" +
        "Color: White, Silver, Copper" + "<br>" +
        "Life span: 12 - 15 years";
}
function originSiberian(){
    p4.innerHTML = "Siberian Husky Puppy";
}