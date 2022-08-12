// creating an array
// SOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
const cards = document.getElementsByClassName("cards");
let shoeCards = Array.from(cards);
//console.log(Array.from(cards));

// reveals any clicked card
shoeCards.map(function(element) { 
    element.addEventListener("click", revealCard)
  });
  
  
  // declaring variables
  let cardOne, cardTwo;
  let img = [];
  let flipped = false;
  
// easier to do toggle than having to flip animate two cards each 
function revealCard() {
    this.classList.toggle("flip");

    if (!flipped) {
       
        flipped = true;
        cardOne = this;
        img.push(cardOne.id);

        // console.log(img); -- first click!!
    
    } else {
        
        flipped = false;
        cardTwo = this;
        img.push(cardTwo.id);
        
        // console.log((cardTwo.id)); -- second click!!

        if (cardOne.dataset.img === cardTwo.dataset.img && img[0] != img[1]) {
          
            cardOne.removeEventListener("click", revealCard)
            cardTwo.removeEventListener("click", revealCard)
            
            // console.log(!flipped); -- it's a match!! 
            alert("YAY U FOUND IT!!");
          }
      
        else {
            setTimeout(() => {
                cardOne.classList.toggle("flip");
                cardTwo.classList.toggle("flip");

            }, 500);
            img = []; 
        }
      }
  }

// randomizing index to shuffle the shoe cards
shoeCards.map(function (element) {
    let random = Math.floor(Math.random() * 16) + 1;
    element.style.order = random;
    // console.log(shoeCards); -- checking if it's all there
})

// reset button 
// SOURCE: https://stackoverflow.com/questions/29884654/button-that-refreshes-the-page-on-click
function resetBtn(){
  window.location.reload();
}



// Tried to follow how to create a similar timer and move count but did not know how to exactly implement it to my current code
// Did not get it to work
// SOURCE: https://stackoverflow.com/questions/54171904/javascript-memory-game-need-to-add-congrats-message-at-the-end-of-game


// BELOW is what I originally started with and was completely lost so I started a new one ABOVE

// const allCards = document.querySelectorAll('section');

// allCards.forEach(card => {
//     card.addEventListener('click', clickFunction)
// })

// // click to reveal image
// function revealCard(e){
//   const target = e.currentTarget;
//   target.className = target.className.replace('flip cards', '')
    
//     console.log(e.target.querySelector("img")?.src);
//     console.log('clicked', e.currentTarget)
// }






// // function clickFunction(e)
// // keep track of clicks (array, card1, card2)
//  clicks.push(e.target)
// // numbers.push(e.target.innerText)
// // console.log(clicks, numbers)
// // keep track of amount of clicks 
// // compare property/string for 2 cards
// // if matched, remove event listener from div





// const clicks = []
// const numbers = []

// // shoe array
// const cards = [
//   'jordan1',
//   'kithaf1',
//   'airmax97',
//   'newbalance',
//   'union4',
//   'yeezy350',
//   'tiffanysb',
//   'stussydunk'
// ];
// console.log(cards)


// // match cards



// // reset button 
// // const flipCards = document.querySelectorAll('section')
// // const resetButton = document.querySelector('.reset-button')
// // compare string 

// // resetButton.addEventListener('click', function(e) {
// //     section.forEach(function(e) {
// //         e.innerHTML = ''
// //       }) 
// //   })

//   // seems to delete entire section. tried the other class names attatched but it wont do anything


// const resetButton = document.getElementById("reset-button");


// resetButton.addEventListener('click', () => {
//   location.reload()
//   console.log('reset button clicked');
// });


// //^^ console log shows that button is working. just need to figure out the function ^^