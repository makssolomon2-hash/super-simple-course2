//LOOPS - !!!

let i = 1;

while (i <= 5) {
  console.log('hello ' + i);
 // i = i + 1;
 // i += 1;
  i++;
}

for (let x = 1; x <=5; x++){
  console.log('x= ');
  console.log(x);
}



for(let index = 0; index <= toDoList.length - 1; 
  index++){
    console.log(toDoList[index]);
    //console.log(index); 
}

const nums = [1, 1, 5, 10];
const numsDoubled = [];
let total = 0;


for (let i = 0; i < nums.length; i++){
  const num = nums[i]
  numsDoubled.push(num * 2);
}



for(let i = 0; i < nums.length; i++){
  const num = nums[i];
  total += num;
}
console.log(total);

let totalDoubled = 0;
/* 
for(let i = 0; i < numsDoubled.length; i++){
  const num = numsDoubled[i]
  totalDoubled += num;
}
console.log(totalDoubled); */