window.addEventListener("load",init);

const levels={
	easy:5,
	medium:3,
	hard:2
}
let currentLevel=5;

const easy=document.getElementById("easy");
const medium = document.getElementById('medium');
const hard=document.getElementById("hard");

easy.addEventListener("click",function(){
	time=currentLevel=levels.easy;
	seconds.innerHTML=levels.easy
})
medium.addEventListener("click",function(){
	time=currentLevel=levels.medium;
	seconds.innerHTML=levels.medium
})
hard.addEventListener('click',function(){
	time=currentLevel=levels.hard;
	seconds.innerHTML=levels.hard
})



let time=currentLevel
let score=0;
let isPlaying;

const wordInput=document.getElementById("word-input");
const currentWord=document.getElementById("current-word");
const scoreDisplay=document.getElementById("score");
const timeDisplay=document.getElementById("time");
const message=document.getElementById("message");
const seconds=document.getElementById("seconds");

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

function init(){
	seconds.innerHTML=currentLevel
	showWord(words);
	wordInput.addEventListener("input",startMatch)
	setInterval(countdown,1000);
	setInterval(checkStatus,50)
}

function startMatch(){
	if(matchWord()){
		isPlaying=true;
		time=currentLevel+1;
		showWord(words);
		wordInput.value="";
		score++
	}
	if(score===-1){
		scoreDisplay.innerHTML=0
	}

	scoreDisplay.innerHTML=score
}

function matchWord(){
	if(wordInput.value===currentWord.innerHTML){
		message.innerHTML="Correct!!!";
		return true
	}else{
		message.innerHTML="";
		return false
	}
}

function showWord(words){
	const randomIndex= Math.floor(Math.random()*words.length);
	currentWord.innerHTML= words[randomIndex]
}

function countdown(){
	if(time>0){
		time--;
	}else if(time===0){
		isPlaying=false
	}
	timeDisplay.innerHTML=time
}

function checkStatus(){
	if(!isPlaying && time===0){
		message.innerHTML="Game Over!!!";
		score=-1;
	}
}