//Write a function printReverse() that prints out elements in reverse order
//printReverse([1,2,3,4,5]); --5,4,3,2,1
printReverse([1,2,3,4,5]);
function printReverse(arr){
	for(var i = arr.length -1; i >= 0; i--){
		console.log(arr[i]);
	}
}

//Write a function isUniform() which takes an array and returns true is all elements are identical 
//isUniform([1,1,1,1,1]);  --true
isUniform([1,1,1,1,1]);
isUniform([2,1,1,1,1]);

function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++){
		 if(arr[i] !== first){
		 	return false;
		 }
	}
	return true;
}

//sumArray(). Sum of all the numbers in a array
//sumArray([1,2,3]); --6
sumArray([1,2,3]);

function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}

//max(). Returns the maximum number in the array
//max([1,2,3]);  --3
max([1,2,3]);

function max(arr){
	var max = arr[0];
	for (var i =1; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i]
		}
	}
	return max;
}