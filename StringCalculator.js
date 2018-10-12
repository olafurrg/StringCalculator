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
		splittedString.forEach(function(item, index, array){
			toRetrun += parseInt(item, 10)
		});
		
		return toRetrun.toString();

	}

}

module.exports = Add;