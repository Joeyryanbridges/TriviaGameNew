// Timer Countdown variables and functions
var time = 30;
var intervalId;
var timeOut = false;

var timer = function(){
  if (!timeOut){
    intervalId = setInterval(countdown,1000)
  }
}

var countdown = function(){
  time--;
  $("#timer").html("<span class='glyphicon glyphicon-hourglass'></span> Time Remaining: " + time);

  if(time===0){
  	timeOut = true;
  	clearInterval(intervalId);
  	showAnswer();
  }
}

// Counters
var numCorrect = 0;
var numIncorrect = 0;
var unanswered = 0;
var count = 0;
var answer = "";
var imgSrc = "";

// =================================
// Questions for game
var questionArray = [
{
		question: "What is the band's name who performs the opening theme song?",
		choices: ['Jimmy Eat World','Third Eye Blind','Goo Goo Dolls','The Rembrants'],
		correctChoice: 3
	},
	{
		question: "What color is the couch in Central Perk?",
		choices: ['Red', 'Yellow', 'Blue', 'Orange', ],
		correctChoice: 3
	},
	{
		question: "What is the 'Joey Special'?",
		choices: ['Two girls at once', 'Pancakes', 'Ordering two pizzas', 'His hit TV Show'],
		correctChoice: 2
	},	
	{
		question: "What does Phoebe change her name to in the final season?",
		choices: ['Jewel Hanson', 'Princess Consuela Bananahammock', 'Lindsey Hannigan', 'Crystal Methany'],
		correctChoice: 1
	},
	{
		question: "What is Chandlers dad's burlesque show called?",
		choices: ['Viva la Gaydas', 'Tiny thangs shakin', 'Its raining men', 'Tight Squeeze'],
		correctChoice: 0
	},
	{
		question: "What country do Chandler tell Janice he is moving to?",
		choices: ['Greece', 'Yemen', 'Italy', 'Japan'],
		correctChoice: 1
	},
	{
		question: "What is Monicas biggest pet peeve?",
		choices: ['Messy house', 'Animals dressed as humans', 'Doing the dishes', 'Nail biters'],
		correctChoice: 1
	},
	{
		question: "What fruit is Ross allergic to?",
		choices: ['Melon', 'Starberry', 'Kiwi', 'Grapefruit'],
		correctChoice: 3
	},
	{
		question: "What is Chandler's Job?",
		choices: ['Programmer', 'IT procurement manager', 'Zoo keeper', 'Mailman'],
		correctChoice: 1
	},
	{
		question: "Bonus: Which character got a pencil stuck in his/her ear?",
		choices: ['Chandler', 'Ross', 'Monica', "Joey"],
		correctChoice: 2
	}
];



