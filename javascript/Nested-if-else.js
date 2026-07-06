function userCanDriveOrNot(age, license){
    if(age>=18){
        if(license==true){
            console.log("Can drive");
        }else{
            console.log("can not drive");
            
        }
    }else{
        console.log("can not drive");
        
    }
}
userCanDriveOrNot(23,1);