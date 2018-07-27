var map = (array, func) => {
	if(!Array.isArray(array)){
		throw new Error(`${array} it's not array!`);
	}
	if(typeof func !== 'function') {
		throw new Error(`${func} it's not a function!`);
	}
	 var newArray = [];
	 for(let i = 0; i < array.length; i++) {
	 	newArray.push(func(array[i], i, array));
	 }
	 return newArray;
}
var arr = [1, 2, 3, 4, 5];
arr