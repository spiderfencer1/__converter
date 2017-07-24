function convert(str)
{
	let reversed = str.split("");
	for(let i=0;i<reversed.length;i++){
		if(reversed[i] !== ' ' && reversed[i+1] == ' '){
			reversed[i+1] = reversed[i];
			reversed[i] = ' ';
		}
	}
	return reversed.reverse().join("");
}

document.getElementById('convert').onclick = () => {
	const str = document.getElementById('input').value;
	document.getElementById('output').innerHTML = convert(str);
};
