function gradeSystem(marks) {
    switch (true) {
        case  (marks >= 90 && marks <= 100):
            return "A+";

        case (marks >= 80 && marks <= 89):
            return "A";

        case (marks >= 70 && marks <= 79):
            return "B";

        case (marks >= 60 && marks <= 69):
            return "C";

        case (marks >= 50 && marks <= 59):
            return "D";

        default:
            return "Invalid marks";
    }
}

console.log(gradeSystem(90)); 
