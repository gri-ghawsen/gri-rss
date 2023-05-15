function getRandomNames(names, count, nameCounts) {
  if (count > names.length) {
    console.log("Error: Requested count exceeds the number of available names.");
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

// Example usage
const names = ["John", "Jane", "Michael", "Emily", "David", "Sarah", "Daniel", "Olivia", "Matthew", "Emma", "Robert", "Lily", "William", "Sophia", "Thomas"];
const numberOfNames = 10;

let nameCounts = {};

// Initialize nameCounts for all names
for (const name of names) {
  nameCounts[name] = 0;
}

// First call
const result1 = getRandomNames(names, numberOfNames, nameCounts);
console.log("Random Names 1:", result1.randomNames);
console.log("Name Counts 1:", result1.nameCounts);

// Second call
const result2 = getRandomNames(names, numberOfNames, result1.nameCounts);
console.log("Random Names 2:", result2.randomNames);
console.log("Name Counts 2:", result2.nameCounts);
