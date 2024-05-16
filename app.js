const display = document.getElementById ("display");
const items = document.querySelectorAll("button");
const specialChars = ["/", "-", "+", "x", "="];
let output = "";
let invisibleOutput = "";
const calculate = (btnValue) => {
    if(btnValue === "=" && btnValue !== ""){
        try{
            output = eval(invisibleOutput.replace("x", "*"));
            invisibleOutput = output;
        }
        catch (error){
            output = "Error";
        }
        
    } else if (btnValue === "C"){
        output = "";
        invisibleOutput = "";

    } else {
      if(!isNaN(btnValue))
        {
            if (isNaN(invisibleOutput.slice(-1)))
                output = "";

                output += btnValue;
        }

        invisibleOutput += btnValue;
    }

    display.value = output;
};


items.forEach((button) => {
    button.addEventListener('click', (e) => calculate(e.target.dataset.value));
});
