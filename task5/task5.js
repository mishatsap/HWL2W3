function recursionNum (value) {
	if (value >= 0) {
		console.log(value);
		return recursionNum(value - 1)
	}
}
recursionNum(10);
