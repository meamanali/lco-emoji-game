const card = document.querySelectorAll(".card")
console.log(card);

// declaring use-case vars 
var firstEmoji;
var secondEmoji;
var isFlipped = false;

// flipping and identifing with 'this' keyword section starts here 
function flip () {
    // console.log(this);
    this.classList.add("flip") //flip is written in css 
    if (!isFlipped) {
        isFlipped = true
        firstEmoji = this
    }else{
        secondEmoji = this
        console.log(firstEmoji);
        console.log(secondEmoji);
        check();
    };
};
card.forEach((c)=>(c.addEventListener("click", flip)));
// flipping and identifing with 'this' keyword section ends here 

// checking part starts here 
function check(){
    // console.log('checking');
    firstEmoji.dataset.image === secondEmoji.dataset.image ? success() : failed ()
    // if(firstEmoji.dataset.image === secondEmoji.dataset.image){
    //     success ()
    // }else{
    //     failed()
    // }
};
// checking part ends here 

// winning part starts here 
function success() {
    // console.log('success');
    firstEmoji.removeEventListener("click", flip);
    secondEmoji.removeEventListener("click", flip);
    reset();
};
// winning part ends here 

// failing part starts here 
function failed (){
    setTimeout(()=>{
        firstEmoji.classList.remove("flip");
        secondEmoji.classList.remove("flip");
        reset();
    },1000);
    // console.log('failed');
};
// failing part ends here 

// resetting the var's values 
function reset(){
    firstEmoji = null;
    secondEmoji = null;
    isFlipped = false;
};

// shuffles the game - automatically calling function 
(function shuffle (){
    card.forEach((c)=>{
        var index = Math.floor(Math.random()*16);
        c.style.order = index;
    });
})();