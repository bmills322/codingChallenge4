//Part 1

const fs = require('fs');

fs.readFile('./santa.txt', (err, data) =>{
	console.time('funchallenge')
	if(!err) {
		let direction = Array.from(data.toString());
		let santaLocation = 0;

		direction.map(currentFloor => {
			if (currentFloor === "(") {
				santaLocation++;
			}
			if (currentFloor === ")") {
				santaLocation--;
			};
		});
		console.log(santaLocation);
	};
	console.timeEnd('funchallenge')
});
