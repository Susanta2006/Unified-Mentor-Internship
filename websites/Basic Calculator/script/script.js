//Zero screen
function setZero()
{
  if(document.getElementById('screen').value.trim()=="")
  {
    document.getElementById('screen').value="0";
  }
}

//Delete Function
function delete1()            //Delete All
{
 document.getElementById('screen').value="0";
}
function delete2()            //Delete Last Element
{
 if(document.getElementById('screen').value !=='')
	{
		document.getElementById('screen').value="0";
	}
}
function delete3()           //Delete single digits
{
 document.getElementById('screen').value=document.getElementById('screen').value.slice(0,-1);
 if (document.getElementById('screen').value =='')
	{
		document.getElementById('screen').value="0";
	}
}

//Keys Function
function key(x) 
{
  let screen = document.getElementById('screen');
  let current = screen.value;

  if (current === "0" && x !== ".") 
  {
    screen.value = x;
    return;
  }
  if (x === "." && current.includes(".")) 
  {
    return;
  }
  if (document.getElementById('value2').value === "") 
  {
    screen.value = current + x;
  } else 
  {
    document.getElementById('value1').value = current;
    if (x === ".") 
	{
		screen.value = "0.";
	} 
	else 
	{
		screen.value = x;
	}
    document.getElementById('value2').value = "";
  }
}

function sign(x)
{
  document.getElementById('sign1').value=x;
  document.getElementById('value2').value="1";
}

//Calculation
function calculate() 
{
  let screen = document.getElementById('screen');
  let val1 = document.getElementById('value1');
  let val2 = document.getElementById('value2');
  let sign = document.getElementById('sign1');

  let num1 = parseFloat(val1.value);
  let num2 = parseFloat(screen.value);

  switch (sign.value) 
  {
    case "+":
      screen.value = num1 + num2;
      break;
    case "-":
      screen.value = num1 - num2;
      break;
    case "*":
      screen.value = num1 * num2;
      break;
    case "/":
      if (num2 === 0)
		  {
			screen.value = "Not Divisible by 0";
			return;
		   }
      screen.value = num1 / num2;
      break;
	case "xn":
      screen.value = Math.pow(num1, num2);
      break;
	case "x^n":
	  if (num2 === 0)
		  {
			screen.value = "Root Cannot be 0";
			return;
		   }
      screen.value = Math.pow(Math.abs(num1), 1/num2);
      break;
	case "dec":
      screen.value = num1+0.0;
      break;  
  }
  val1.value = screen.value;
  sign.value = "";
}

//Deep Functions
function percentage()
{
  let screen = document.getElementById('screen');
  screen.value = parseFloat(screen.value) / 100;
}

function reciprocal() 
{
  let screen = document.getElementById('screen');
  let value = parseFloat(screen.value);

  if (value === 0)
	  {
    screen.value = "Not Divisible by 0";
	  } 
  else 
  {
    screen.value = 1 / value;
  }
}
function signinverse()
{
  let screen = document.getElementById('screen');
  let val1 = document.getElementById('value1');
  let val2 = document.getElementById('value2');

  let num1 = parseFloat(val1.value);
  let num2 = parseFloat(screen.value);
  
  if (num1>0)
  {
    screen.value = num1*-1
  }
  else {
	  screen.value = num1*-1
  }
  if (num2>0)
  {
    screen.value = num2*-1
  }
  else {
	  screen.value = num2*-1
  }
}

////////////////////////////////////////////// Complete //////////////////////////////////////////
