function Add(numbers){

	if(numbers == ""){
		return "0";
	}
	if(!numbers.includes(",")){
		return numbers;
	}
	/*if(numbers.length == 2){
		var toRetrun = parseInt(numbers[0], 10) + parseInt(numbers[1], 10);
		return toRetrun.toString();

	}*/

}

module.exports = Add;