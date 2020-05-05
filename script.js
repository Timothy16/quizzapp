const ul = document.getElementById("ul").children
const btn = document.getElementById("button")
const scoreCard = document.getElementById("scoreCard")
const quizBox = document.getElementById("questionBox")
const op1 = document.getElementById("op1")
const op2 = document.getElementById("op2")
const op3 = document.getElementById("op3")
const op4 = document.getElementById("op4")
const op5 = document.getElementById("op5")
const displayScore = document.getElementById("scoreCard")
const change = document.querySelector(".score_card")
const home = document.querySelector(".home")
let counter = document.getElementById("counter")
let count = 60
let percentage
setInterval(function(){
    count--;
    if(count >= 0){
        counter.innerHTML = count
        counter.style.backgroundColor="green"
    }
    if(count <= 30){
        counter.style.backgroundColor="red"
    }
    if(count === 0){
        quizBox.innerHTML="Time Up.........Thanks for participating............"      
        op1.style.display="none";
        op2.style.display="none";
        op3.style.display="none";
        op4.style.display="none";
        op5.style.display="none";
        btn.style.display="none";
        scoreCard.style="none";
        change.style.marginLeft="-15px"
        change.style.backgroundColor="#fd7e14"
        home.style.display="block"
        home.style.marginTop="20px"
    }
}, 1000)
const app = {
    questions : [
        {q:'HTML stands for?', options:['A. Hyper Text Markup Language','B. High Text Markup Language',' C .Hyper Tabular Markup Language',' D. Higher Title Maker Language', ' E. None of these'], answer:1},
        {q:'CSS stands for ?',options:['A. Cascio Style Sheet','B. Cascading Style Sheet','C. Calibri Standard Style','D. Cascading Stlye Sharp', 'E. Cascading Stop Sheet'], answer:2},
        {q:'Which of the following tag is used to mark a begining of paragraph ?',options:['A. TD','B. br','C. p','D. tr', 'E. form'], answer:3},
        {q:'Correct HTML tag for underline is ?',options:['A. pre','B. hr','C. u','D. u', 'E. code'], answer:4},
        {q:'Correct HTML tag for the largest heading is ?',options:['A. h4','B. h9','C. h8','D. h9', 'E. h1'], answer:5}
    ],
    index : 0,
    load:function(){
           if(this.index <= this.questions.length -1){
            quizBox.innerHTML=this.index+1 +". " +this.questions[this.index].q;      
            op1.innerHTML=this.questions[this.index].options[0];
            op2.innerHTML=this.questions[this.index].options[1];
            op3.innerHTML=this.questions[this.index].options[2];
            op4.innerHTML=this.questions[this.index].options[3];
            op5.innerHTML=this.questions[this.index].options[4];
            this.scoreCard()
            }
         else{ 
            quizBox.innerHTML="Thanks for participating............!!!"      
            op1.style.display="none";
            op2.style.display="none";
            op3.style.display="none";
            op4.style.display="none";
            op5.style.display="none";
            btn.style.display="none";
            scoreCard.style="none";
            change.style.marginLeft="-15px"
            change.style.backgroundColor="#fd7e14"
            home.style.display="block"
            home.style.marginTop="20px"
            this.displayScore()         
            counter.style.display="none"
        }
    },
    check:function(ele){
        var id = ele.id
        if(id[id.length - 1] == this.questions[this.index].answer){
           this.score++
           ele.className = "correct"
           this.scoreCard()
        }
        else{
            ele.className = "wrong"
        }
    },
    notClickAble:function(ele){
            for(let i = 0; i <ul.length; i++){
                ul[i].style.pointerEvents="none";
                if(ul[i].id != this.questions[this.index].answer){
                    ul[this.index].classList.add("correct")
                }
            }
        },
    clickAble:function(){
            for(let i=0; i < ul.length; i++){
                ul[i].style.pointerEvents="auto";
                ul[i].className=''
            }
     }, 
    score : 0,
    
    scoreCard:function(){
        scoreCard.innerHTML=this.questions.length + " / " + this.score
        },
    displayScore:function(){
            scoreCard.innerHTML= "Hi, you got " + this.score + " " + " question(s) Correctly" + " >>>>>> "+ " Total score : " + this.score
        },
    next:function(){
        this.index++
        this.load()
    },
}

window.onload=app.load();

function button(ele){
    app.check(ele)
    app.notClickAble(ele)
    app.wrong(ele)
}

function next(){
    app.next()
    app.clickAble()
}




