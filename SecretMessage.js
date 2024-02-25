let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//find the length of the array
console.log(secretMessage.length);
//remove the last element of the array

//console.log(secretMessage);
secretMessage.pop();
//after removing the last element


//enter the elements
secretMessage.push('to', 'Program');

//finding the index of word easily in the message
let easilyIndex = secretMessage.indexOf('easily');
//replace it by right
secretMessage[easilyIndex] = 'right';
//console.log(secretMessage);

//remove first string of the array
secretMessage.shift();

//put first string of the array
secretMessage.unshift('Programming');

//remove five elements from index 6 
secretMessage.splice(6, 5, 'know');

//put the strings together to form a sentence using .join
console.log(secretMessage.join(' '));


