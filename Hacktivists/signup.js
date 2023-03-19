function signup()
{
  // let c = getElementById('signUp')

  console.log("CALLED  ")
  var firstName= document.getElementById("firstName").value;
  var lastName= document.getElementById("lastName").value;
  var Email= document.getElementById("Email").value;
  var Password= document.getElementById("Password").value;			
  var Password2= document.getElementById("Password2").value;
  
      //email id expression code


  if(firstName=='')
  {
    alert('Please enter your name');
  }
  else if(!letters.test(firstName))
  {
    alert('Name field required only alphabet characters');
  }
  else if(Email=='')
  {
    alert('Please enter your user email id');
  }
  else if (!filter.test(Email))
  {
    alert('Invalid email');
  }
  else if(Password=='')
  {
    
    alert('please enter your password');
  }
  
  else if(Password2=='')
  {
    alert('Enter Confirm Password');
  }
 
  
  else if(Password != Password2)
  {
    alert ('Password not Matched');
 
  }
  else
  {				                            
    alert('YOU ARE SIGNED IN!');
      
  }
}