function Dog(name, breed, age, weightinkgs){
    this.name=name;
    this.breed=breed;
    this.age=age;
    this.weightinkgs=weightinkgs;
    this.eat=function(){
        console.log("Chomp");
        
    };
    this.bark=function(){
        console.log("Woof");
        
    };

}
const dogTheMarley=new Dog("Marley","pit", 3, 30);
console.log(dogTheMarley);