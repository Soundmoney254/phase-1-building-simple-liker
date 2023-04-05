// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
//Initializing variables for HTML elements
const errorModal = document.querySelector("#modal");
const likeButtons = document.querySelectorAll(".like-glyph");
const errorMessage = document.querySelector("#modal-message");

//Loop through all the items in the likeButtons colection
likeButtons.forEach(button => {
  button.addEventListener("click", () =>{
    mimicServerCall()
    .then(serverResponse => {
      if(button.textContent === EMPTY_HEART){
        errorModal.classList.add("hidden");
        console.log(serverResponse);
        button.textContent = FULL_HEART;
        button.classList.add("activated-heart")
    } else {
        button.textContent = EMPTY_HEART;
        button.classList.remove("activated-heart");
    }
    })
    .catch(error => {
      errorMessage.textContent = error;
      console.log(error);
      errorModal.classList.remove("hidden");
      button.classList.remove("activated-heart");
      button.textContent = EMPTY_HEART;
      if(errorModal.classList !== "hidden" ){
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
    }
    });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
console.log(mimicServerCall());