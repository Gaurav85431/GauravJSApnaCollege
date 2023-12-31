function getVowel(word) {

  let count = 0;
  for (const character of word) {
    if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' || character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U') {
      count++;

    }
    else {

    }
  }
  console.log(count);
}

getVowel('Gaurav');




// same task using arrow function::-

const TotalVowel = (word) => {

  let count = 0;
  for (const character of word) {
    if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' || character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U') {
      count++;

    }
    else {

    }
  }
  console.log(count);
}

TotalVowel('India');
