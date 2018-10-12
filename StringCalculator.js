function Add(numbers){

	if(numbers == ""){
		return "0";
	}
	if(!numbers.includes(",")){
		return numbers;
	}
	else{
		var delimiter;
		if(numbers.includes("//")){
			var indexof = numbers.indexOf('\n');
			delimiter = numbers.substring(2, indexof);
			numbers = numbers.slice(indexof+1);
			numbers = numbers.replace(delimiter, ",");
		}
		var splittedString = numbers.split(/[',', '\n']+/);
		console.log(splittedString);
		var toRetrun = 0;
		var negatives = "Negatives not allowed:";
		var hasNegatives = false;
		splittedString.forEach(function(item, index, array){
			if(item.includes("-")){
				negatives += item +",";
				hasNegatives = true;
			}
			else if(parseInt(item, 10) < 1000){
				toRetrun += parseInt(item, 10);
			}
			else{
				//Do nothing
			}
		});
		if(!hasNegatives){
			return toRetrun.toString();
		}
		else{
			throw new Error(negatives.slice(0, -1));
		}
	}

}

module.exports = Add;