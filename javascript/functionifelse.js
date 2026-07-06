function checkEvenOdd(value){
    if(value%2==0){
        console.log(`${value} is EVEN`);
        
    }else{
        console.log(`${value}IS ODD`);
        
    }
}
checkEvenOdd(30);
function checkISAdmin(value){
    if(value==true){
        console.log(`User is Admin`);
        
    }else{
        console.log(`Guest User`);
    }
}
checkISAdmin(1);
function canVote(age){
    if(age>=18 && age<=100){
        console.log('can vote');
    }else{
        
        console.log('cant give vote');
        
    }
}
canVote(111);