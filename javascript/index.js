$( document ).ready
(
  function()
  {
    
    
    window.compute = function()
    {
      //grab em all
    var balance = $("#balance").val();
    var rate = $("#rate").val();
    var term = $("#term").val();
    var n = $(":selected").val();
    var either = $(":selected").text();
      
    // number of payments 
    var numberOfPayments = term * n;
    
    // monthly interest rate
    var monthlyInterestRate = (rate / 100) / n;
    
    // compounded interest rate 
    var compounded = Math.pow((1 + monthlyInterestRate), numberOfPayments);
    
    // interest quotient 
    var interestQuotient = (monthlyInterestRate * compounded) / (compounded - 1);
    
    // final calculation 
    var monthlyPayment = balance * interestQuotient; 
          
    var fin = Math.round(monthlyPayment * 100) / 100  
      
     $("#output").text("Your "+either+" payment will be $" + fin);
      
    }
    
  }
); 