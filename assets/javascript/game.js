var targetScore

var winCounter = 0;

var lossCounter = 0;

var currentScoreCounter

var rubyValue

var saphireValue

var emeraldValue

var diamondValue

var rubyClicks = 0;

var saphireClicks = 0;

var emeraldClicks = 0;

var diamondClicks = 0;

$(document).ready(function() {
	targetScoreRandom();
	rubyValueRandom();
	saphireValueRandom();
	emeraldValueRandom();
	diamondValueRandom();
	$("#ruby").click(function() {
		rubyClicks = rubyClicks + 1;
		currentScoreEval();
	});
	$("#saphire").click(function() {
		saphireClicks = saphireClicks + 1;
		currentScoreEval();
	});
	$("#emerald").click(function() {
		emeraldClicks = emeraldClicks + 1;
		currentScoreEval();
	});
	$("#diamond").click(function() {
		diamondClicks = diamondClicks + 1;
		currentScoreEval();
	});
	$("img").click(function() {
		console.log(currentScoreCounter);
		winLoss();
	})
});

function targetScoreRandom() {
	targetScore = Math.floor((Math.random() * 102) + 19);
	console.log(targetScore);
	$("#targetScore").html(targetScore);
};

function rubyValueRandom() {
	rubyValue = Math.floor((Math.random() * 12) + 1);
	console.log(rubyValue);
};

function saphireValueRandom() {
	saphireValue = Math.floor((Math.random() * 12) + 1);
	console.log(saphireValue);
};

function emeraldValueRandom() {
	emeraldValue = Math.floor((Math.random() * 12) + 1);
	console.log(emeraldValue);
};

function diamondValueRandom() {
	diamondValue = Math.floor((Math.random() * 12) + 1);
	console.log(diamondValue);
};

function currentScoreEval() {
	currentScoreCounter = (rubyValue * rubyClicks) + (saphireValue * saphireClicks) + (emeraldValue * emeraldClicks) + (diamondValue * diamondClicks);
	$("#currentScore").html(currentScoreCounter);
}

function winLoss() {
	if(currentScoreCounter === targetScore) {
		winCounter = winCounter + 1;
		rubyValueRandom();
		saphireValueRandom();
		emeraldValueRandom();
		diamondValueRandom();
		currentScoreCounter = 0;
		rubyClicks = 0;
		saphireClicks = 0;
		emeraldClicks = 0;
		diamondClicks = 0;
		currentScoreEval();
		$("#winsCounter").html(winCounter);
		targetScoreRandom();
	}
	if(currentScoreCounter > targetScore) {
		lossCounter = lossCounter + 1;
		rubyValueRandom();
		saphireValueRandom();
		emeraldValueRandom();
		diamondValueRandom();
		currentScoreCounter = 0;
		rubyClicks = 0;
		saphireClicks = 0;
		emeraldClicks = 0;
		diamondClicks = 0;
		currentScoreEval();
		$("#lossesCounter").html(lossCounter);
		targetScoreRandom();
	}
}

