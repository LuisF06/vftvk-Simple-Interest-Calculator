function compute()
{
    
    //Get current values
    var principal = document.getElementById("amount").value;
    var rate      = document.getElementById("rate").value;
    var years     = document.getElementById("years").value;
    var CurrentYear = new Date().getFullYear();
    var interest = 0.0;

    var finalYear = parseInt(years) + CurrentYear;

    if(principal <= 0)
    {
        alert("NOTE:\nPlease insert the Amount to be used in the Calculation.\nTry again.");
        document.getElementById("amount").focus();
    }
    else
    {
        interest = (principal * years * rate)/100;

        document.getElementById("result").innerHTML = "If you deposit <mark>$"+principal+"</mark>,"+
                                                  "<br>"+"at an interest rate of <mark>"+rate+"%</mark>."+
                                                  "<br>"+"You will receive an amount of <mark>$"+interest+"</mark>,"+
                                                  "<br>"+"in the year <mark>"+finalYear+"</mark>";

   }
}

function RateChanged()
{
    var rate = document.getElementById("rate").value;
    document.getElementById("rate_result").innerHTML = rate+" %";
}
        