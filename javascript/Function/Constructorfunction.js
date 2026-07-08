
function Student(name, enrollment,email,phone,address,course, year){
    this.name=name;
    this.enrollment=enrollment;
    this.email=email;
    this.phone=phone;
    this.address=address;
    this.course=course;
    this.year=year
    this.updateEmail=function(email){
        this.email=email;
    };
    this.updateYear=function(year){
        this.year=year;

    };
}
const studen1=new Student("Ankaj", 2403051050913,"palankaj4@gmail.com", 8409880719, "vadadora", "Btech", 2024);
console.log(studen1);
studen1.updateEmail("2403051050913@paruluniversity.ac.in");
studen1.updateYear(2028);
console.log(studen1.email);




