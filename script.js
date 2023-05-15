function getRandomNames(names, count, nameCounts) {
	if (count > names.length) {
		console.log(
			'Error: Requested count exceeds the number of available names.'
		);
		return;
	}

	const randomNames = [];

	let sortedNames = names.slice().sort((name1, name2) => {
		const count1 = nameCounts[name1] || 0;
		const count2 = nameCounts[name2] || 0;
		return count1 - count2;
	});

	let shuffledNames = sortedNames.slice();
	for (let i = shuffledNames.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = shuffledNames[i];
		shuffledNames[i] = shuffledNames[j];
		shuffledNames[j] = temp;
	}

	for (let k = 0; k < count; k++) {
		const name = shuffledNames[k];
		randomNames.push(name);
		nameCounts[name] = (nameCounts[name] || 0) + 1;
	}

	return { randomNames, nameCounts };
}

// Example usage for a monthly schedule planner
const names = [
	'John',
	'Jane',
	'Michael',
	'Emily',
	'David',
	'Sarah',
	'Daniel',
	'Olivia',
	'Matthew',
	'Emma',
	'Robert',
	'Lily',
	'William',
	'Sophia',
	'Thomas',
];
const numberOfNames = 7; // Number of names per week
const weeksInMonth = 4; // Number of weeks in the month

let nameCounts = {};

// Initialize nameCounts for all names
for (const name of names) {
	nameCounts[name] = 0;
}

for (let i = 1; i <= weeksInMonth; i++) {
	console.log(`Week ${i}:`);

	// Call getRandomNames for each week
	const result = getRandomNames(names, numberOfNames, { ...nameCounts });
	console.log('Random Names:', result.randomNames);

	// Update nameCounts for the next week
	nameCounts = { ...result.nameCounts };

	console.log('Name Counts:', nameCounts);
	console.log('--------------------');
}