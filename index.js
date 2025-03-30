 const word = "💌 Just a quick note to tell you how much I appreciate you. 💖 Every moment with you is special, and I’m so lucky to have you in my life. ✨ You make everything brighter ☀️, and I can’t wait to see where our journey takes us. 🚀💑 With all my love, and we are one team forever ❤️🤝"

const button  = document.getElementById("button")
const words = document.getElementById("words")
 
 
let click = false 

let audio = new Audio('uuid.mp3');
let secondeaudio  = new Audio("piao__love.mp3")
// Play the audio

button.addEventListener("click",()=>{
     if(click==false){
        audio.play(); // this for run music
        click  =true
        words.innerHTML = ""
        setTimeout(()=>{
            secondeaudio.play()
        },2000)
        for(let i = 0;i<word.length;i++){
  
            setTimeout(()=>{
                       
            words.innerHTML +=word[i]
            },i*100)
        }   

        setTimeout(()=>{
            click = false
            secondeaudio.play()
        },6000)
     }
  
})



 