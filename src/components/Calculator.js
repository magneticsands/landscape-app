//
// Target outputs
// a list of lands to run in a deck.
// the list of lands should be constructed such that it supports the 
// strategy apparent in the cards provided.
// A simple metric for this is minimizing mulligans.
// other goals include:
//  maximizing color access in a timely fashion.
//  smoothing land draws when they would be bad.
//

//
// Target 1: lands by avg cmc (greater average, more lands)
// Target 2: lands by color balance (ensuring appropriate ratio on average)
// Target 2.5 : lands by card color count (accounting for single high-demand cards)
// Target 3: lands by color within cmc ( land timing )		
//

//
//Mana symbol field value key
//
//r = red, b = black, w = white, u = blue, g = green
//e = generic
//s = snow generic
//c = colorless
//
var landBase = 2/5;
var limitedFactor = 1;
var baseCMCAvg = 4;
var card = function(){
	this.cost ={}; 
	this.getColorList = function(){
		return Object.keys(this.cost);
	}
	this.getCMC = function(){
		var totalCost = 0;
		var colorSet = Object.keys(this.cost);
		for(var c = 0; c < colorSet.length; c++){
			totalCost += this.cost[colorSet[c]];
		}
		return totalCost;
	}
}

var model = function (){
	this.library = 60;
	this.cards = [];
	this.isLimited = false;
	this.manaSymbols = {r:0,b:0,w:0,u:0,g:0};
	this.getManaSymbols = function(){
		if(this.cards.length != null && this.cards.length > 0 ){
			this.manaSymbols = {r:0,b:0,w:0,u:0,g:0};
			for(var c = 0; c <  this.cards.length; c++){
				var card = this.cards[c];
				var colorSet = Object.keys(card.cost);
				for(var c = 0; c < colorSet.length; c++){
					this.manaSymbols[colorSet[c]] += card.cost[colorSet[c]];
				}
			}
		}
		return this.manaSymbols;
	}
	this.setManaSymbols = function(symbols){
		var colorSet = Object.keys(symbols);
		for(var c = 0; c < colorSet.length; c++){
			this.manaSymbols[colorSet[c]] = symbols[colorSet[c]];
		}
	}
	//
	// future notes: 
	// Magic has some cool cards that are rather complicated.
	// for split cards, Adventures, and possibly future MDFC's consider them as two separate cards with different cmcs.
	// For half-land MDFC's, halve the cmc before adding it into the total. Not perfect, but it'll work for now.
	//
	this.averageCMC = function(){
		var totalCMC = 0;
		for(var c = 0; c <  this.cards.length; c++){
			totalCMC += this.cards[c].getCMC();
		}
		if(this.cards.length != null && this.cards.length > 0){
			return totalCMC/this.cards.length;
		}else{
			return 0;
		}
	}
}

var Calculator = function() {
	this.model = new model();
	this.landCount = 0;
	this.setSymbols = function(symbols){
		this.model.setManaSymbols(symbols);
	}
	
	this.calculateLandTotal = function(){
		var baseCount = this.model.library * landBase + (this.model.isLimited ? limitedFactor : 0);
		var cmcDeviation = this.model.averageCMC() - baseCMCAvg;
		var cmcFactor = cmcDeviation > 0 ? cmcDeviation *2 : cmcDeviation *2;
		this.landCount = baseCount + (this.model.cards.length >0 ? cmcFactor : 0);
		return this.landCount;
	}
	
	this.calculateLandSpread = function(){
		var manaMap = this.model.getManaSymbols();
		var manaKeys = Object.keys(manaMap);
		var colorTotal = 0;
		var spread = {};
		for(var k=0; k < manaKeys.length;k++){
			var key = manaKeys[k];
			if(key != "e"){
				spread[key] = manaMap[key];
				colorTotal += manaMap[key];
			}
		}
		for(var k=0; k < manaKeys.length;k++){
			var key = manaKeys[k];
			if(key != "e"){
				spread[key] = manaMap[key]/colorTotal;
			}
		}
		return spread;
	}
	
	this.calculateLands = function(){
		this.calculateLandTotal();
		var spread = this.calculateLandSpread();
		var spreadKeys = Object.keys(spread);
		for(var k = 0; k < spreadKeys.length; k++){
			var key = spreadKeys[k];
			if(key != "e"){
				spread[key] = spread[key]*this.landCount;
			}
		}
		return spread;
	}
}

export default Calculator;