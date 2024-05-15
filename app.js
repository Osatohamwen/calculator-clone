const display = document.getElementById ("display");
const items = document.querySelectorAll("button");
const specialChars = ["/", "-", "+", "x", "="];
let output = "";
const calculate = (btnValue) => {
    if(btnValue === "=" && btnValue !== ""){
        try{
            output = eval(output.replace("x", "*"));
        }
        catch (error){
            output = "Error";
        }
        
    } else if (btnValue === "C"){
    output = "";
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};


items.forEach((button) => {
    button.addEventListener('click', (e) => calculate(e.target.dataset.value));
});
