//Part 2

const fs = require('fs');

fs.readFile('./santa.txt', (err, data) =>{
	console.time('funchallenge')
	if(!err) {
		const direction = data.toString();
		let santaLocation = 0;
		for (let i = 0; i < direction.length; i++) {
			if (direction.charAt(i) === '(') {
				santaLocation++;
			}
			if (direction.charAt(i) === ')') {
				santaLocation--;
				if (santaLocation === -1) {
					console.log(i+1);
					break;
				}
			};
		};
		console.log(santaLocation);
	};
	console.timeEnd('funchallenge')
});

//PART 2