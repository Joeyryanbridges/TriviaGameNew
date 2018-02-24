
$(".jumbotron").hide();
$(".jumbotron").slideDown(6000);
$(".jumbotron").fadeIn(6000);
$("#body-container").hide();
$("#body-container").slideDown(6000);



// Timer Countdown variables and functions
var time = 10;
var intervalId;
var timeOut = false;

var timer = function(){
  if (!timeOut){
    intervalId = setInterval(countdown,1000)
  }
}

var countdown = function(){
  time--;
  $("#timer").html(" Time Remaining: " + time);

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
		correctChoice: "The Rembrants",
		image: "assets/images/question1.gif",
	},
	{
		question: "What color is the couch in Central Perk?",
		choices: ['Red', 'Yellow', 'Blue', 'Orange', ],
		correctChoice: "Orange",
		image: "assets/images/question2.gif",
	},
	{
		question: "What is the 'Joey Special'?",
		choices: ['Two girls at once', 'Pancakes', 'Ordering two pizzas', 'His hit TV Show'],
		correctChoice: "Ordering two pizzas",
		image: "assets/images/question3.gif",
	},	
	{
		question: "What does Phoebe change her name to in the final season?",
		choices: ['Jewel Hanson', 'Princess Consuela Bananahammock', 'Lindsey Hannigan', 'Crystal Methany'],
		correctChoice: "Princess Consuela Bananahammock",
		image: "assets/images/question4.gif",
	},
	{
		question: "What is Chandlers dad's burlesque show called?",
		choices: ['Viva La Gaydas', 'Tiny thangs shakin', 'Its raining men', 'Tight Squeeze'],
		correctChoice: "Viva La Gaydas",
		image: "assets/images/question5.gif",
	},
	{
		question: "What country do Chandler tell Janice he is moving to?",
		choices: ['Greece', 'Yemen', 'Italy', 'Japan'],
		correctChoice: "Yemen",
		image: "assets/images/question6.gif",
	},
	{
		question: "What is Monicas biggest pet peeve?",
		choices: ['Messy house', 'Animals dressed as humans', 'Doing the dishes', 'Nail biters'],
		correctChoice: "Animals dressed as humans",
		image: "assets/images/question7.gif",
	},
	{
		question: "What fruit is Ross allergic to?",
		choices: ['Melon', 'Starberry', 'Kiwi', 'Grapefruit'],
		correctChoice: "Kiwi",
		image: "assets/images/question8.gif",
	},
	{
		question: "What is Chandler's Job?",
		choices: ['Programmer', 'IT procurement manager', 'Zoo keeper', 'Mailman'],
		correctChoice: "IT procurement manager",
		image: "assets/images/question9.gif",
	},
	{
		question: "Bonus: Which character got a pencil stuck in his/her ear?",
		choices: ['Chandler', 'Ross', 'Monica', "Joey"],
		correctChoice: "Monica",
		image: "assets/images/question10.gif"},
];

// ==================================
// Function called to start off the game

var reset = function(){
	numCorrect = 0;
	numIncorrect = 0;
	unanswered = 0;
	count = 0;
	answer = "";
	imgSrc = "";
	timeOut = false;
	time = 10;
	$("#choices").empty();
	$("#timer").html("Time Remaining: " + time);
	timer();
	displayQnA(questionArray[count]);
	}
	
	// Function to create radio buttons populated with choices and Submit button 
	// Struggled with this the most
	
	var displayQnA = function(currentQ){
		$("#question").html(currentQ.question);
		for(var i = 0; i < currentQ.choices.length; i++){
	 
		var option =$("<label>");
		option.html("<input type='radio' name='radioSelect' value ='" + 
		currentQ.choices[i] + "'>" + currentQ.choices[i]);
		$("#choices").append(option);
		}
		$("label").after("</br>");
		var btn = $("<button id='verify' type='button'>").addClass("btn btn-lg btn-danger").text("Submit");
		$("#choices").append(btn);
		answer = currentQ.correctChoice;
		imgSrc = currentQ.image;
	}
	
	// ============================
	// Function to pull next question
	
	var nextQ = function(){
		$("#choices").empty();
		count++;
		if(count<questionArray.length){
	  displayQnA(questionArray[count]);
	  timeOut = false;
	  time = 10;
	  $("#timer").html("<span class='glyphicon glyphicon-hourglass'></span> Time Remaining: " + time);
	  timer();
	  }

	// Once question que has finished present with the players results
		else{
			$("#timer").text("");
			$("#question").text("The results are in:");
		  	$("#choices").append("<p>Correct Answers: <b>" + numCorrect + "</b></p>");
			$("#choices").append("<p>Incorrect Answers: <b>" + numIncorrect + "</b></p>");
			$("#choices").append("<p>Unanswered Questions: <b>" + unanswered + "</b></p>");
			var btn = $("<button type='button'>").addClass("btn btn-lg btn-primary reset").text("Try again?");
			$("#choices").append(btn);
		}
	}
	
	// Function to display correct answer
	var showAnswer = function(){
		var checkA = isCorrectChoice();
		$("#choices").empty();
		if(checkA){
			$("#question").html("You are correct! The answer is: <b>" + answer + "</b>");
		}
		else{
			$("#question").html("Wrong! The correct answer is: <b>" + answer + "</b>");
		}
		$("#choices").append("<img src='" + imgSrc + "' alt='correctAnswer'>");
		setTimeout(nextQ,4000);

	}
			
	// ========================================
	// Check if correct answer selected
	
	var isCorrectChoice = function (){
		var userSelected = $('input[name=radioSelect]:checked','#choices').val();
		if(!$("input[name=radioSelect]:checked").val()){
		unanswered++;
		return false;
		}
		else if(userSelected === answer){
			numCorrect++;
			return true;
		}
		else{
			numIncorrect++;
			return false;
		}
	}
	
	// ==============================
	// Submit button event
	$(document).on("click", "#verify", function(){
		timeOut = true;
		clearInterval(intervalId);
		showAnswer();
	});
	//  ================
	// Start button and restart button
	$(document).on("click", ".reset", function(){
		reset();
	});

