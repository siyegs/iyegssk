///////////// PEOPLE COUNTER APP ////////////////

let count = 0
let countEl = document.querySelector('.count-el')
function increasing() {
    count += 1
    countEl.innerHTML = count
}
 
let saving = document.querySelector('.save-el')

function save() {
    let demo = count + " - "
    saving.innerHTML += demo
    countEl.textContent = 0
    count = 0
}


///////////////////////// BLACKJACK //////////////////////////////

firstCard = getRandomCard() // cards[0]
secondCard = getRandomCard() // cards[1]
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
hasBlackJack = false
isAlive = true
let message = ""
let messageEl = document.querySelector("#message-el")
let cardEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")

///////////////////////////////////////////////////////////////////

let theTails = {
        name: "Iyegere",
        chips: 600
    }

let playerInform =  document.querySelector(".info")
// playerInform.textContent = theTails["name"] + ":" + " " + "$" + theTails.chips

///////////////////////////////////////////////////////////////////

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13) + 1
    // start at 1, end at 1+12 = 13
    
    if ( randomNumber > 10) {
        return 10
    }
    else if ( randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}
console.log(getRandomCard());




function startGame() {
    renderGame()
}


function renderGame() {

    if (sum <= 20) {
        message = "Draw"
        // console.log(hasBlackJack);
        // console.log(isAlive);

    }
    else if (sum === 21) {
        isAlive = false
        hasBlackJack = true
        message = "Blackjack"
    }
    else {
        hasBlackJack = false
        isAlive = false
        message = "Game Over"
    }
    
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: "
     
    for (let i = 0; i < cards.length; i++) {
        // const element = array[index];
        cardEl.textContent += cards[i] + " " 
    }
}


function newCard() {
    
    if ( hasBlackJack === false && isAlive === true ) { 
        let anotherCard = getRandomCard()
        sum += anotherCard
        cards.push(anotherCard)
        renderGame()
    }   
}
        

////////// ARRAYS  ///////////

let messages = [
    "Hey, how is it going?",  //messages[0]
    "I'm great, thank you! How about you?", //messages[1]
    "All good" //messages[2]
]


messages.push("Same here") // push adds a last message. Push only works for arrays. You can't push a string into another string that's not in an array
console.log(messages);

messages.pop() // pop removes last message
console.log(messages);

messages.shift() // shift removes first message
console.log(messages);

messages.unshift("John my boy")
console.log(messages);


///////////  FOR LOOP  ////////////

    //   start    finish   step-size
for (let i = 10;   i < 31;    i += 10 ) {
    // const element = array[index];
    console.log(i);
}



let array = [7, 3, 9]
for (let index = 0; index < array.length; index++) {
    // index++ is same thing as index = index + 1 or index += 1
    // console.log(array);
    console.log(array[index]);
    // from what i understand, when an array is logged out, it appears as literally horizontal-like arrays

    // but when you "index-ify" an array,you want that array to appear in list form, no longer the horizontal array-like form it'll normally be. This is made most possible by the step-size
}

/////////////////  RETURN  ////////////////////

let player1Time = 107.1
let player2Time = 107


function fastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    }
    else if (player1Time > player2Time) {
        return player2Time
    }
    else {
        return "nothing"
    }    
}
let fastestRace = fastestRaceTime()
console.log(fastestRace);


///////  RANDOM NUMBER GENERATOR  ////////

let santana = Math.random()*7
// that Math.random * 7 means that random numbers having decimal points will be generated but none will be === 7 
console.log(santana);

let flooredNumber = Math.floor(-6.45632)
// Math.floor(+ve number) removes the decimal points
// Math.floor(-ve number) removes the decimal points and adds +1
console.log(flooredNumber);



////////////////// LOGICAL OR OPERATOR /////////////////////////

let likesDocumentaries = true
let likesStartups = true

if ( likesDocumentaries === true || likesStartups === false) {
    recommendMovies()
}

function recommendMovies(params) {
    console.log("Hey check out this new film we think you will like");
}


//////////// OBJECTS //////////////////

//for objects, instead of the regular = to assign value, we use :
let details = {
/// key    value
    name: "Iyegere",
    chips: 600,
    isFree: true, // boolean
    tags: ["html", "CSS" ], // array
    sayHello: function() {
        console.log("let us see what happens");
    }
  // when a function is part of an assigned object (details), you don't need to give that function a name. You can write whatever you want that function to do when invoked, and invoke the function by calling it like this - assignment.key. For example; details.sayHello()
}

console.log(details.chips)
console.log(details.sayHello());



/////////////// Tasks given to me by Per Borgen///////////////////////////////

// 1. ROCK, PAPAER, SCISSORS
let hands = ["rock", "paper", "scissors"]

// create a function that returns a random item from the array

function randomReturner(params) {
    let randomFunction = Math.floor(Math.random()*3)
    return hands[randomFunction]
}

randomReturner()
console.log(randomReturner());



// 2.  FRUIT SORTER
let fruit = ["apple", "orange", "apple", "apple", "orange"]
let appleShelf = document.querySelector("#apple-shelf")
let orangeShelf = document.querySelector("#orange-shelf")

function fruitStack(params) {
    for (let index = 0; index < fruit.length; index++) {
        // const element = array[index];
        console.log(fruit[index]);
        
        if (fruit[index] === "apple") {
            // appleShelf.textContent += "apple" + " "
        } 
        else {
            // orangeShelf.textContent += "orange" + " "
        }
    }
}

fruitStack()
// console.log(fruitStack()); 


// 3.  EXTENSION

// const values can't be re-assigned
let myLeads = []

let saveInput = document.querySelector("#input-button")
const inputEL = document.querySelector("#input-el")
const unorderedList = document.querySelector(".unorderedList")
const clear = document.querySelector(".clear")
let cta = document.querySelector(".cta")


saveInput.addEventListener("click", function name(params) {
    myLeads.push(inputEL.value); // this .value helps you drag a written value into something else
    saveInput.textContent = "Input Saved"
    inputEL.value = ""
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    // localStorage.clear(myLeads)
    renderLeads()
    
    
    // cta.textContent = leadsFromLocalStorage      
})

localStorage.clear()
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage);



clear.addEventListener("click", function name(params) { // a new way to add event listeners
    inputEL.value = ""
    saveInput.textContent = "Save Input"
})

inputEL.addEventListener("click", function name(params) {
    saveInput.textContent = "Save Input"
})


function renderLeads(params) { 
    let listItems = "Your Saved List"
    for (let index = 0; index < myLeads.length; index++) {
        listItems +=
        `<li style="list-style-type: none;"> 
            <a href = 'jstestlinks.html'  style="color: white;">
                ${myLeads[index]}
            </a>
        </li>`
 // template string can be broken into different lines unlike when using quotation marks and it appears broken even in the site or console log. It is like using <br> tag for JS
    }
    unorderedList.innerHTML = listItems
}

// *.innerHTML can be used to write as many html (tags) and in-line css in the tags. *it is the inner.HTML that makes the html tags reassigned to list items to function as tags and nit just appear as ordinary textContent   

// JSON.parse and JSON.stringify

let shalomTeachers = `["Opia"]`

shalomTeachers = JSON.parse(shalomTeachers) // JSON.parse turns strings into forms that can .push can be used with. To parse, the assigned variable must be written in an array form but turned to string using `` Ordinarilly, you cant push into non arrays
shalomTeachers.push("Kalu")
console.log(typeof shalomTeachers);


shalomTeachers = JSON.stringify(shalomTeachers) // JSON.stringify turns an array into a string-like forms, so .push becomes impossible
console.log(shalomTeachers);
console.log(typeof shalomTeachers) // helps you know the nature of what is being consoled. If it is a string or whatever