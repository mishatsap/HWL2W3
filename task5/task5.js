function recursionNum (value) {
	let countdown = recursionNum;
	if (value >= 0) {
		console.log(value);
		return countdown(value - 1)
	}
}
recursionNum(10);