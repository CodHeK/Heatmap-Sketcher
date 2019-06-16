const writeString = '<3';

const colorSet = ['#2a6127', '#2a6127', '#7bc96f', '#c6e48b', '#ebedf0'];
const hearColors = ['rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 0.5)', 'rgba(255, 0, 0, 0.2)', 'rgba(255, 0, 0, 0.7)']


let days = document.getElementsByClassName("day")
for(day of days) {
    day.setAttribute("fill", colorSet[4])
}


let charMap = {
  'A': [0, 1, 2, 4, 5, 6],
  'B': [0, 1, 2, 3, 4, 5, 6],
  'C': [0, 3, 4, 5],
  'O': [0, 1, 2, 3, 4, 5],
  'L': [3, 4, 5],
  'I': [4, 5],
  'D': [3, 4, 6, 1, 2],
  'N': [4, 6, 2],
  'U': [3, 4, 2],
  'E': [0, 1, 3, 4, 5, 6],
  'S': [0, 5, 6, 2, 3],
  'P': [0, 1, 4, 5, 6],
  'G': [0, 1, 6, 5, 3, 2],
  'H': [1, 2, 4, 5, 6],
  'Y': [5, 6, 1, 2],
  'N': [4, 5, 1, 2, '\\'],
  'X': ['\\', '/'],
  'M': [4, 5, 7, 0, 1, 2],
  '<3': ['<3'],
}


const smallDownLeftDiagonal = (start) => {
  for(let i = start+3; i <= start + 27; i += 8) {
    let randColor = Math.floor(Math.random() * 4);
    days[i].setAttribute("fill", hearColors[randColor])
  }
}

const smallUpLeftDiagonal = (start) => {
  for(let i = start; i <= start + 24; i += 8) {
    let randColor = Math.floor(Math.random() * 4);
    days[i].setAttribute("fill", hearColors[randColor])
  }
}

const smallDownRightDiagonal = (start) => {
  for(let i = start+27; i <= start + 45; i += 6) {
    let randColor = Math.floor(Math.random() * 4);
    days[i].setAttribute("fill", hearColors[randColor])
  }
}

const smallUpRightDiagonal = (start) => {
  for(let i = start+24; i <= start + 48; i += 6) {
    let randColor = Math.floor(Math.random() * 4);
    days[i].setAttribute("fill", hearColors[randColor])
  }
}

const leftDiagonal = (start) => {
  for(let i = start; i <= start + 48; i+= 8) {
    let randColor = Math.floor(Math.random() * 4);
    days[i].setAttribute("fill", colorSet[randColor])
  }
}

const rightDiagonal = (start) => {
  for(let i = start+6; i <= start + 48; i+= 6) {
    let randColor = Math.floor(Math.random() * 4);
    days[i].setAttribute("fill", colorSet[randColor])
  }
}

const heartLeftWall = (start) => {
  for(let i = start+1; i <= start+2; i++) {
    let randColor = Math.floor(Math.random() * 4);
    days[i].setAttribute("fill", hearColors[randColor])
  }
}

const heartRightWall = (start) => {
  for(let i = start+43; i <= start+44; i++) {
      let randColor = Math.floor(Math.random() * 4);
      days[i].setAttribute("fill", hearColors[randColor])
  }
}

const genColorBars = (num, start) => {
  switch(num) {
    case 0:
      for(let i = start; i <= start+42; i++) {
        if(i%7 === 0) {
          let randColor = Math.floor(Math.random() * 4);
          days[i].setAttribute("fill", colorSet[randColor])
        }
      }
      break
    case 1:
      for(let i = start+42; i <= start+44; i++) {
          let randColor = Math.floor(Math.random() * 4);
          days[i].setAttribute("fill", colorSet[randColor])
      }
      break
    case 2:
      for(let i = start+42+4; i <= start+48; i++) {
          let randColor = Math.floor(Math.random() * 4);
          days[i].setAttribute("fill", colorSet[randColor])
      }
      break
    case 3:
      for(let i = start; i <= start+48; i++) {
        if(i%7 === 6) {
          let randColor = Math.floor(Math.random() * 4);
          days[i].setAttribute("fill", colorSet[randColor])
        }
      }
      break
    case 4:
      for(let i = start+4; i <= start+6; i++) {
        let randColor = Math.floor(Math.random() * 4);
        days[i].setAttribute("fill", colorSet[randColor])
      }
      break
    case 5:
      for(let i = start; i <= start+2; i++) {
        let randColor = Math.floor(Math.random() * 4);
        days[i].setAttribute("fill", colorSet[randColor])
      }
      break
    case 6:
      for(let i = start; i <= start+48; i++) {
        if(i%7 === 3) {
          let randColor = Math.floor(Math.random() * 4);
          days[i].setAttribute("fill", colorSet[randColor])
        }
      }
      break
    case 7:
      for(let i = start+21; i <= start+21+4; i++) {
          let randColor = Math.floor(Math.random() * 4);
          days[i].setAttribute("fill", colorSet[randColor])
      }
      break
    case 8:
      for(let i = start+21+4; i <= start+21+6; i++) {
          let randColor = Math.floor(Math.random() * 4);
          days[i].setAttribute("fill", colorSet[randColor])
      }
      break
    case '\\':
      leftDiagonal(start)
      break
    case '/':
      rightDiagonal(start)
      break
    case '<3':
      smallDownRightDiagonal(start);
      smallDownLeftDiagonal(start);
      smallUpRightDiagonal(start);
      smallUpLeftDiagonal(start);
      heartLeftWall(start);
      heartRightWall(start);
      break
  }
}

start = 0

let build = "", flag = 0;

for(letter of writeString) {
  if(letter === '<') {
    build += letter;
    flag = 1;
    continue;
  }
  if(flag == 1) {
    letter = build+letter;
    flag = 0;
  }
  let pattern = charMap[letter]
  for(num of pattern) {
    genColorBars(num, start)
  }
  start += 56
}
