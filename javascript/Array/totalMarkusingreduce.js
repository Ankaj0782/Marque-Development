const marks=[95,78,90,78,59];
const total = marks.reduce((sum, mark) => sum + mark, 0);
console.log(total);
const result=(total/(marks.length*100))*100;
console.log(result+"%");

