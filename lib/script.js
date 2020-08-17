function myFunction(){
    let bmi=BMI();

    if (isNaN (bmi)){
        alert("Please complete both boxes with numeric values")
        return
    }
    
    let result = getResult(bmi);
    printResult(result);
   
    function getResult(bmi) {
      let resultMap = [
        {
          cond: (bmi) => bmi < 18.5,
          text: "underweight",
        },
        {
          cond: (bmi) => bmi >= 18.5 && bmi < 25,
          text: "fine",
        },
        {
          cond: (bmi) => bmi >= 25 && bmi < 30,
          text: "overweight",
        },
        {
          cond: (bmi) => bmi >= 30,
          text: "obese",
        }
      ];
     
      return resultMap.reduce((result, variant) => 
      result + (variant.cond(bmi) ? variant.text : ""), "");
    }
   
    function printResult(result) {
      let box3 = document.getElementById("messageBox");
      box3.innerHTML = `You are ${result}, your BMI is ${bmi.toFixed(2)}`;
      box3.style.display = "block";
    }

    function BMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value / 100;
    return weight / (height ** 2);
    }
}