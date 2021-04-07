/*
* Name:        Compute
* Parameters:  N/A
* Description: This function takes the values set by the User
*              and calculates the interest rate using the following
*              math operation: (Amount * years * rate) / 100
*              If Amount value <= 0, an alert will be displayed
*/

function compute()
{
    
    //Get current values
    var principal   = document.getElementById("amount").value;
    var rate        = document.getElementById("rate").value;
    var years       = document.getElementById("years").value;
    var CurrentYear = new Date().getFullYear();
    var interest    = 0.0;

    //There is no need for a security check for the parseInt since years will always have a number value
    var finalYear = parseInt(years) + CurrentYear;

    //Check if the Amount Value is Valid
    if(principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("amount").focus();
    }
    else
    {
        //Calculate final Value of the Interest Rate
        interest = (principal * years * rate)/100;

        document.getElementById("result").innerHTML = "If you deposit <mark>$"+principal+"</mark>,"+
                                                  "<br>"+"at an interest rate of <mark>"+rate+"%</mark>."+
                                                  "<br>"+"You will receive an amount of <mark>$"+interest+"</mark>,"+
                                                  "<br>"+"in the year <mark>"+finalYear+"</mark>";

   }
}

/*
* Name:        RateChanged
* Parameters:  N/A
* Description: This function takes the rate value set by the User
*              and refreshes the span object which displays said value*
*/
function RateChanged()
{
    var rate = document.getElementById("rate").value;
    document.getElementById("rate_result").innerHTML = rate+" %";
}
        