if(!Array.prototype.map) {
	Array.prototype.map = function(func){
		if (this == null) {
    		throw new TypeError(` ${this} is null or not defined`);
    	}
    
 		if(!Array.isArray(this)) {
    		throw new TypeError(`${this} is not array`); 
		}
   
		if (typeof func !== 'function') {
    		throw new TypeError(`${func} is not a function`);
    	}
		var newArray = [];
		for (var i = 0; i < this.length; i++) {
			newArray.push(func(this[i], i, this))
		}
		return newArray;
	};
};
var arr = [1, 2, 3, 4];
var newArr = arr.map(function (number) {
    return number * 2;
});
console.log(arr);
console.log(newArr);
