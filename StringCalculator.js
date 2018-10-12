function Add(numbers){

	if(numbers == ""){
		return "0";
	}
	if(!numbers.includes(",")){
		return numbers;
	}
	else{
		var splittedString = numbers.split(",");
		var toRetrun = parseInt(splittedString[0], 10) + parseInt(splittedString[1], 10);
		return toRetrun.toString();

	}

}

module.exports = Add;