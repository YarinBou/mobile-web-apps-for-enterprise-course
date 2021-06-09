let qSyntax = function () { //function expression
    "use strict";
    return { //object literal
        doSomething: () => {
            let name = window.prompt("Please enter your name", "Yarin");
            const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman', 'Green Arrow',
                'Flash', 'Wonder Woman', 'Iron Man', 'Captain America', 'Hulk', 'Thor', 'Black Widow', 'Hawkeye']
            const quotes = ['“With great power, comes great responsibility.” – Spiderman',
                '"I\'m The Best There Is At What I Do, But What I Do Best Isn\'t Very Nice." - Wolverine',
                '"Wakanda Forever!" - Black Panther', ' “I\'m not here to help you. I\'m here to help Gotham.”' +
                ' - Batwoman', '"\'You\'ve Failed This City\'" - Green Arrow',
                '“When you stop trying to force the solution, it\'ll happen on its own.” - Flash',
                '"So long as life remains, there is always hope... and so long as there is hope, there can be victory!"' +
                ' - Wonder Woman', ' “I’m a huge fan of the way you lose control and turn into an enormous' +
                ' green rage monster.” - Iron Man', '“I don\'t like bullies; I don\'t care where they\'re from.”' +
                ' – Captain America', '"Hulk smash!" - Hulk', '“You should know that when you betray me,' +
                ' I will kill you.” - Thor', ' “At Some Point, We All Have To Choose Between What The World Wants' +
                ' You To Be And Who You Are.” - Black Widow', '"We\'ve come a long way since Budapest." - Hawkeye']

            class Game { // class syntax
                constructor(name, heroes, quotes) {
                    this.name = name;
                    this.heroes = heroes;
                    this.quotes = quotes;
                }

                async start() {
                    const div = document.getElementById("game");
                    let msg = `open your console to play the game\n`
                    div.append(msg)
                    console.log(msg)
                    await this.doAsync(5000);
                    picYourHero();
                }

                doAsync = function (ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }
            }

            function picYourHero() {
                let i = 0;
                let msg = `Who will you choose to save you from the ${numOfBandits} bandits ${name.toUpperCase()}?\n`;
                console.log(msg)
                for (let hero of heroes) { // for ... of syntax
                    console.log(i + ". " + hero);
                    i++;
                }
                let ans = window.prompt("Please enter your hero index (0-12)", "0");
                cryForHelp(ans); // code function
            }

            let numOfBandits = Math.floor(Math.random() * 10 + 1);     // returns a random integer from 1 to 10
            function cryForHelp(index) {
                console.log(`PLEASE HELP US, ${heroes[index].toUpperCase()}`)
                onMyWay(index)
            }

            function onMyWay(index) {
                console.log(`${heroes[index].toUpperCase()} will arrives soon! In the meantime, read his best quote: \n 
                ${quotes[index].toUpperCase()}`);
                saveTheDay(index);
            }

            function saveTheDay(index) {
                console.log(`${name.toUpperCase()} You should help ${heroes[index].toUpperCase()} to beat up the ${numOfBandits} bandits are you ready?`)
                let res = window.prompt("yes or no?", "yes");
                if (res === "yes") {
                    fight(index);
                } else if (res === "no") {
                    run(index);
                } else {
                    console.log("Please choose only yes or no")
                    saveTheDay(index);
                }
            }

            function fight(index) {
                console.log(`${heroes[index].toUpperCase()} is glad you choose to fight with him ${name.toUpperCase()} \n`);
                let res = window.prompt("Guess a number from 1 to 10", "1");
                let rnd = Math.floor(Math.random() * 10 + 1); // returns a random integer from 1 to 10
                if (res >= rnd) {
                    win(index);
                } else {
                    loss(index);
                }

            }

            let run = (index) => { // arrow function
                console.log(`${heroes[index].toUpperCase()} : "${name.toUpperCase()} You'll have to run fast so they do 
                not catch us" \n`)
                console.log("Too bad you chose to run away! Good luck next time.")
                playAgain(index)

            }

            function loss(index) {
                console.log(`${heroes[index].toUpperCase()} : "${name.toUpperCase()} The taste of defeat is bitter" \n`)
                playAgain(index)
            }

            function win(index) {
                console.log(`${heroes[index].toUpperCase()} : "${name.toUpperCase()} You made me proud that we defeated 
                these ${numOfBandits} bandits" \n`)
                playAgain(index)
            }

            function playAgain(index) {
                console.log(`${heroes[index].toUpperCase()} : "${name.toUpperCase()} Do you want to play again?`)
                let res = window.prompt("yes or no?", "yes").toLowerCase();
                if (res === "yes") {
                    picYourHero();
                } else {
                    console.log("Bye Bye")
                }
            }

            let heroesGame = new Game(name, heroes, quotes)
            heroesGame.start()
        },
        desc: 'The purpose of the "do something" function is to let the user play a text game in the browser.' +
            ' The game allows the user to choose a superhero from one of his favorites' +
            ' and ask him to save him from a gang of robbers.'
    }
}


// Develop an ‘arrow-function expression’ called ‘qObj’
// Returns an object that consists of two keys:
// ‘createObjects’: <function that generates the same object in at least 5 different methods. It returns a Map where the key is the method name and the value is the generated object>
// ‘chain’ : <function: returns a prototype-chain that contains all the objects that were created by ‘createObjects’, it can contains additional objects as well>
// ‘desc’ : <string: description of what b.i.1,b.i.2 are doing>

let qObj = () => {
    const person = {name: 'Yarin Michael Bouzaglo', age: 26, food: "pizza"};

    function Person(name, age, food) {
        return {
            name: name,
            age: age,
            food: food
        }
    }

    function PersonCon(name, age, food) {
        this.name = name;
        this.age = age;
        this.food = food
    }

    return {
        createObjects: function () {
            let map = new Map();
            let person1 = {name: 'Yarin Michael Bouzaglo', age: 26, food: "pizza"};
            let person2 = new Object();
            person2.name = "Yarin Michael Bouzaglo";
            person2.age = 26;
            person2.food = "pizza";
            let person3 = Object.create(person)
            person3.name = "Yarin Michael Bouzaglo";
            person3.age = 26;
            person3.food = "pizza";
            let person4 = Person('Yarin Michael Bouzaglo', 26, "pizza");
            let person5 = new PersonCon('Yarin Michael Bouzaglo', 26, "pizza");
            map.set("Object Literal", person1);
            map.set("New Object", person2);
            map.set("ObjectCreate", person3);
            map.set("Object Factory", person4);
            map.set("Object constructor", person5);
            return map;
        },
        chain: function chain() {
            let personsMap = this.createObjects();
            let parson1 = personsMap.get("Object Literal");
            let parson2 = personsMap.get("New Object");
            let parson3 = personsMap.get("ObjectCreate");
            let parson4 = personsMap.get("Object Factory");
            let parson5 = personsMap.get("Object constructor");
            parson4.__proto__ = parson5;
            parson3.__proto__ = parson4;
            parson2.__proto__ = parson3;
            parson1.__proto__ = parson2;
            let listProto = [parson1, parson2, parson3, parson4, parson5];
            return listProto;
        },
        desc: "The value of createObjects stores a function that create 5 Person objects, whom been generates by 5 different methods. " +
            " The Function returns a map that stores the objects and how they were generated.",
    }
}


// Develop a ‘function declaration’ called ‘qCalc’
// Returns an object (built via constructor) that consists of two keys:
//     ‘calcFactory’ : <function: returns a calculator object that has 3 methods add(num),
//     sub(num) getValue() and no other exposed keys>
// ‘desc’ : <string: description of what ‘calcFactory’() is doing and how to use it>

class Calculator {

    constructor(num) {
        this.value = num;
    }

    add = function (num) {
        return (this.value + num)
    }
    sub = function (num) {
        return (this.value - num)
    }
    getValue = function () {
        return this.value

    }
}

function qCalc() {
    function obj() {
        this.calcFactory = function (num) {
            return new Calculator(num);
        };
        this.desc = "returns a calculator object that has 3 methods add(num), sub(num) getValue() and no other exposed keys"
    }

    let objToReturn = new obj();
    return objToReturn;
}


// Develop a ‘function declaration’ called ‘qAsync'
// Returns an object (built via constructor) that consists of two keys:
//     ‘doAsync’ <function: returns setTimeout function that can be used using async/await syntax>
//     ‘exec’ : <function that uses the doAsync function to print something after 11.5 seconds>
//
//     ‘desc’ : <string: description of what doAsync/exec() are doing and how to use it>

function qAsync() {
    function obj() {
        this.doAsync = async function (action, ms) {
            let prom = new Promise((resolve) => {
                setTimeout(() => resolve(action), ms)
            });
            let res = await prom;
            alert(res);
        }
        this.desc = "This function waits elven and a half seconds then calls exec," +
            " that calls doAsync then the function prints to the log.";

        this.exec = async function () {
            await this.doAsync("The text changed 11.5 seconds after! Do you remember what it said before?", 11500);
        }
    }

    let objToReturn = new obj();
    return objToReturn;
}
