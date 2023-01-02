main();

function main(){
	test1();
}

function Authentication_diversification(){
	// this functioin 由後端產生
	let result = 'abcdefghijklmnopqrstuvwxyz'
	return result;
}

function Authentication_apikey(){
	// 需要混淆程式
	let body = Authentication_diversification.toString()
	let pattern = /result\s+=\s\'(.+)\'/;
	let keyword = body.match(pattern)[1];
	let chr = keyword.substring(3, 3+1);
	console.log(keyword);
	console.log(chr);
	return chr;
}

function test1(){
	Authentication_apikey();
}

