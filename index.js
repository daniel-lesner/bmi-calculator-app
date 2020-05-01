function myFunction(){
    let weight=document.getElementById("weight").value;
    let height=document.getElementById("height").value/100;
    let bmi=weight/(height**2);
    
    if (bmi<18.5){
        document.getElementById("box3").innerHTML = "You are underweight, your BMI is " + bmi.toFixed(2);
        document.getElementById("box3").style.display = "block";
    } 
    else if ((bmi>=18.5) && (bmi<25)){
        document.getElementById("box3").innerHTML = "You are fine, your BMI is " + bmi.toFixed(2);
        document.getElementById("box3").style.display = "block";

    } 
    else if ((bmi >=25) && (bmi <30)){
        document.getElementById("box3").innerHTML = "You are overweight, your BMI is " + bmi.toFixed(2);
        document.getElementById("box3").style.display = "block";
    } 
    else if (bmi>=30){
        document.getElementById("box3").innerHTML = "You are obese, your BMI is " + bmi.toFixed(2);
        document.getElementById("box3").style.display = "block";
    }
    else {
        alert("Please complete both boxes with numeric values")
    }
}

