window.onload = function() {
 
   $("b1").observe("click", submitForm);
}
 

function submitForm()
{
  
  var inputs = document.getElementById("p1");
  var valid = true;
 
    if (inputs != "123")
    {
      valid = false;
    }
  }
 
  
  if (valid == true)  {
    window.location.href = "https://currentstudents.yorku.ca/";
  }
  else {
     window.location.href = "staff.html";
  }
}