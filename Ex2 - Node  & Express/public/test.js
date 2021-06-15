function onqAsyncDescClick() {
    let desc = document.getElementById("onqAsyncDescClick").append(qAsync().desc);
}

function onCalcDescClick() {
    let desc = document.getElementById("calcFactoryDESC").append(qCalc().desc);
}

function onCalcClick() {
    let X = qCalc().calcFactory(10).add(552);
    let Y = qCalc().calcFactory(958).sub(2);
    let Z = qCalc().calcFactory(3).getValue();
    let XX = document.getElementById("calcFactoryADD").append("10 + 552 = " + X + "\n");
    let YY = document.getElementById("calcFactorySUB").append("958 - 2 = " + Y + "\n");
    let ZZ = document.getElementById("calcFactoryVAL").append("The num in get value is: " + Z + "\n");
}

function onqObjClickDesc() {
    let desc = document.getElementById("onqObjClickDesc").append(qObj().desc);
}

function onqObjClick() {
    let mapObj = qObj().createObjects();
    let chain = qObj().chain();
    for (let [key, val] of mapObj) {
        document.getElementById("Objects").innerHTML += "\nthe method:" + key + "the val type: " + val + ", what stores in obj.name: " + val.name + " age: " + val.age + " and food: " + val.food + "<br>";
    }
    for (let i = 0; i < 5; i++) {
        if (chain[i].__proto__) {
            document.getElementById("Chain").innerHTML += "\nThe obj " + i + " has the right proto." + "<br>";
        }
    }
}

function onGameClickDesc() {
    let desc = document.getElementById("onGameClickDesc").append(qSyntax().desc);
}