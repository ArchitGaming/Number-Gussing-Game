let check_Button = document.querySelector('.check')
let guess_text = document.querySelector('.guess')
let gussing_lable = document.querySelector('.message')
let score = document.querySelector('.score')
let high_score = document.querySelector('.highscore')
let queshtion_mark = document.querySelector('.number')
let again_button = document.querySelector('.again')
let body = document.querySelector('body') 
let score_value = 20
let highscore = 0

let theRandomNumber = Math.floor(Math.random() * 20) + 1;

console.log(theRandomNumber)

again_button.addEventListener('click',function(){
    theRandomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(theRandomNumber)
    score_value = 20
    score.textContent = score_value
    gussing_lable.textContent = 'Start guessing...'
    body.style.backgroundColor = '#222'
    guess_text.value = "";
    queshtion_mark.textContent = '?'
})

function guess_answer(){
    if (Number(guess_text.value) === 0) {
        gussing_lable.textContent = "Incorrect Input"
    }
    else if (Number(guess_text.value) === theRandomNumber) {

        gussing_lable.textContent = "You Win!"
        body.style.backgroundColor = 'green'
        if (highscore < score_value){
        highscore = score_value
        high_score.textContent = highscore
        }
        queshtion_mark.textContent = guess_text.value
        
    }

    else if(score_value > 0){

        if (Number(guess_text.value) > theRandomNumber) {
            gussing_lable.textContent = "Too High"
            score_value --
            score.textContent = score_value
            guess_text.value = "";
            
        }
    
        else if (Number(guess_text.value) < theRandomNumber) {
            gussing_lable.textContent = "Too Low"
            score_value --
            score.textContent = score_value
            guess_text.value = "";        
        }


    

    }

    else if (score_value == 0){
        body.style.backgroundColor = 'red'
        gussing_lable.textContent = "Try Again"
    }
}

check_Button.addEventListener('click', () => {
    
    guess_answer()

})