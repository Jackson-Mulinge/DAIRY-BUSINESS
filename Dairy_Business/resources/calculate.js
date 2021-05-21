const shedA = document.getElementById("shedA");
const shedB = document.getElementById("shedB");
const shedC = document.getElementById("shedC");
const shedD = document.getElementById("shedD");





document.getElementById("butt").addEventListener("click", ()=>{
    const totalMilk = Number(shedA.value) + Number(shedB.value) + Number(shedC.value) + Number(shedD.value);

    const toselects = document.querySelectorAll('input[name="result"]');

    let selectedvalue;

    for (const toselect of toselects){
        if (toselect.checked) {
            selectedvalue = toselect.value;
            break;
        }
    }


    switch (selectedvalue) {
        case "Yearly":
            
            var h = document.createElement("h4");
            var t = document.createTextNode("The " + selectedvalue + " income is " + calculateYearly(totalMilk));
            h.appendChild(t);
            document.getElementById("results").appendChild(h);
            break;

        case "Weekly":
            var h = document.createElement("h4");
            var t = document.createTextNode("The " + selectedvalue + " income is " + calculateWeekly(totalMilk));
            h.appendChild(t);
            document.getElementById("results").appendChild(h);
            break
        case "LeapYear":
            var h = document.createElement("h4");
            var t = document.createTextNode("The " + selectedvalue + " income is " + calculateLeapYear(totalMilk));
            h.appendChild(t);
            document.getElementById("results").appendChild(h);
        case "Monthly":
            let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            for (let i = 0; i < calculateMonthly(totalMilk).length; i++) {
            var h = document.createElement("h4");
            var t = document.createTextNode("The " + month[i] + " income is " + calculateMonthly(totalMilk)[i]);
            h.appendChild(t);
            document.getElementById("results").appendChild(h);
            
        }

            console.log(calculateMonthly(totalMilk));
            break
    
        default:
            break;
    }

     

});


function calculateYearly(value) {
    return value*365*45;
     
}

function calculateLeapYear(value) {
    return value*366*45;
}

function calculateWeekly(value){
    return value*7*45;
}

function calculateMonthly(value) {
    const months = [31,29,31,30,31,30,31,31,30,31,30,31];

    const results = [];
    for (i = 0; i < months.length; i++){
        var result = value*months[i]*45;
        results.push(result);
    }
    return results;
}