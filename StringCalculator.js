function Add(numbers){

	if(numbers == ""){
		return "0";
	}
	if(!numbers.includes(",")){
		return numbers;
	}
	else{
		var splittedString = numbers.split(/[',', '\n']+/);
		var toRetrun = 0;
		var negatives = "Negatives not allowed:";
		var hasNegatives = false;
		splittedString.forEach(function(item, index, array){
			if(item.includes("-")){
				negatives += item +",";
				hasNegatives = true;
			}
			else{
				toRetrun += parseInt(item, 10);
			}
		});
		if(!hasNegatives){
			return toRetrun.toString();
		}
		else{
			throw new Error(negatives);
		}
	}

}

module.exports = Add;