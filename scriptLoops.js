
function root(){
    window.location.href="index.html"
}
function rootLoop(){
    window.location.href="indexLoops.html"
}

function homeHtmlLoop(){
    window.location.href="indexLoops.html"

}
//Q1-bigger number between 2 numbers
function Q1_loops() {        
    document.getElementById("contain").innerHTML = '<div class="grid-container" id="Q1"><h2>please put two numbers</h2></div><input type="text" id="input1"/><input type="text" id="input2"/><div class="btn" style="background-color: blue;" onclick="Q1_()">Click</div><p id="result1"></p><div class="btn" onclick="homeHtmlLoop()">return</div>'

}
function Q1_(){
    let num1=document.getElementById("input1").value
    let num2=document.getElementById("input2").value
  
        if(num1==num2)
        document.getElementById("result1").innerText="equals"
        else if(num1>num2)
        document.getElementById("result1").innerText=num1+" is bigger"
        else
        document.getElementById("result1").innerText=num2+" is bigger"

}

//Q2-sign of 3 numbers
function Q2_loops(){
    document.getElementById("contain").innerHTML = '<div class="grid-container" id="Q1"><h2>Find the sign of product of three numbers\nOpne console--></h2></div><div class="btn" style="background-color: blue;" onclick="Q2_()">Click</div><p id="result1"></p><div class="btn" onclick="homeHtmlLoop()">return</div>'
}

function Q2_(){
    let num1=3;
    let num2=-7;
    let num3=2;

    if (num1>=0 && num2>=0 && num3>=0)
    {
           alert("The sign is +");
           document.getElementById("result1").innerText="To "+num1+"," +num2+"," +num3+"\n" +"The sign is +"
    }
    else if (num1<0 || num2<0 || num3<0)
    {
              console.log("The sign is -");
              document.getElementById("result1").innerText="One of: "+num1+"," +num2+"," +num3+"\n" +"The sign is -"
    }
           
}

//Q3-sorting
function Q3_loops(){
    document.getElementById("contain").innerHTML = '<div class="grid-container" id="Q1"><h2>Sorting 3 numbers</h2></div><div class="btn" style="background-color: blue;" onclick="Q3_()">Click</div><p id="result1"></p><div class="btn" onclick="homeHtmlLoop()">return</div>'
}

function Q3_(){
    let num1= 0;
    let num2= -1;
    let num3= 4;
    if (num1>num2 && num1>num3)
    {
            if (num2>num3)
            {
                console.log(num1 + ", " + num2 + ", " +num3);
                document.getElementById("result1").innerText=""+num1+"," +num2+"," +num3+"\n"
            }
            else
            {
                console.log(num1 + ", " + num3 + ", " +num2);
                document.getElementById("result1").innerText=""+num1+"," +num3+"," +num2+"\n"
            }
    }
    else if (num2>num1 && num2 >num3)
    {
            if (num1>num3)
            {
                console.log(num2 + ", " + num1 + ", " +num3);
                document.getElementById("result1").innerText=""+num2+"," +num1+"," +num3+"\n"
            }
            else
            {
                console.log(num2 + ", " + num3 + ", " +num1);
                document.getElementById("result1").innerText=""+num2+"," +num3+"," +num1+"\n"
            }
    }
    else if (num3>num1 && num3>num1)
    {
            if (num1>num2)
            {
                console.log(num3 + ", " + num1 + ", " +num2);
                document.getElementById("result1").innerText=""+num3+"," +num1+"," +num2+"\n"
            }
            else
            {
                console.log(num3 + ", " + num2 + ", " +num1);
                document.getElementById("result1").innerText=""+num3+"," +num2+"," +num1+"\n"
            }
    } 
}

//Q4-largest between 5 numbers
function Q4_loops(){
    document.getElementById("contain").innerHTML = '<div class="grid-container" id="Q1"><h2>max number between: -5,-2,-6,0,-1</h2></div><div class="btn" style="background-color: blue;" onclick="Q4_()">Click</div><p id="result1"></p><div class="btn" onclick="homeHtmlLoop()">return</div>'
}

function Q4_(){
    let res=""
    a=-5;
    b=-2;
    c=-6;
    d= 0;
    f=-1;
    if (a>b && a>c && a>d && a>f)
    {
        console.log(a);
        res=a
        document.getElementById("result1").innerText="result: \n"+res
    }
    else if (b>a && b>c && b>d && b>f)
    {
        console.log(b);
        res=a
    }
    else if (c>a && c>b && c>d && c>f)
    {
        console.log(c);
        res=a
    }
    else if (d>a && d>c && d>b && d>f)
    {
        console.log(d);
        res=a
    }
    else
    {
        console.log(f);
    }
    res=a
    document.getElementById("result1").innerText="open console-->"
}

//Q5-EvenOdd
function Q5_loops(){
    document.getElementById("contain").innerHTML = '<div class="grid-container" id="Q1"><h2>Even (VS) Odd</h2></div><div class="btn" style="background-color: blue;" onclick="Q5_()">Click</div><p id="result1"></p><div class="btn" onclick="homeHtmlLoop()">return</div>'
}

function Q5_(){
    let res=""
    for (let x=0; x<=15; x++) {
        if (x === 0) {
                console.log(x +  " is even");
                res+=x +  " is even\n"
        }
        else if (x % 2 === 0) {
                console.log(x + " is even");
                res+=x +  " is even\n"   
        }
        else {
                console.log(x + " is odd");
                res+=x +  " is odd\n"
        }
    }
    document.getElementById("result1").innerText="result: \n"+res
}

//Q6-
function Q6_loops() {        
    document.getElementById("contain").innerHTML = '<div class="grid-container" id="Q1"><h2>calculate average-->open console</h2></div><div class="btn" style="background-color: blue;" onclick="Q6_()">Click</div><p id="result1"></p><div class="btn" onclick="homeHtmlLoop()">return</div>'

}

function Q6_(){
    let students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

    let Avgmarks = 0;
    let avg
    for (let i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
         avg = (Avgmarks/students.length);
    }

    console.log("Average grade: " + (Avgmarks)/students.length);
        if (avg < 60){
            console.log("Grade : F");      
            } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                    } 
        else if (avg < 80) 
                {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
    }
}
    
//Q7-Fizz(VS)Buzz

function Q7_loops() {        
    document.getElementById("contain").innerHTML = '<div class="grid-container" id="Q1"><h2>Fizz and Buzz</h2></div><div class="btn" style="background-color: blue;" onclick="Q7_()">Click</div><p id="result1"></p><div class="btn" onclick="homeHtmlLoop()">return</div>'

}
function Q7_(){
    let res=""
    for ( let i = 1; i <= 100; i++ )
    {
      if ( i%3 === 0 && i%5 === 0 )
      {
        console.log( " FizzBuzz" );
        res+=" FizzBuzz\n" 
      }
      else if ( i%3 === 0 ) 
      {
        console.log(" Fizz" );
        res+=" Fizz\n" 
      }
      else if ( i%5 === 0 ) 
      {
        console.log(" Buzz" );
        res+=" Buzz\n" 
      }
      else
      {
        console.log(i);
        res+=i+"\n" 
      }
    }
    document.getElementById("result1").innerText="result: \n"+res
}


//Q8
function Q8_loops() {        
    document.getElementById("contain").innerHTML = '<div class="grid-container" id="Q1"><h2>Q8-Loops</h2></div><div class="btn" style="background-color: dodgerblue;" onclick="Q8_()">Click</div><p id="result1"></p><div class="btn" onclick="homeHtmlLoop()">return</div>'

}
function Q8_(){

    document.getElementById("result1").innerText="busy..."
}


//Q9-three digit armstrong number
function Q9_loops() {        
    document.getElementById("contain").innerHTML = '<div class="grid-container" id="Q1"><h2>three digit armstrong number</h2></div><div class="btn" style="background-color: dodgerblue;" onclick="Q9_()">Click</div><p id="result1"></p><div class="btn" onclick="homeHtmlLoop()">return</div>'

}
function Q9_(){
    let res=""
    for(let i=100;i<1000;i++)
    {
        let d1=Math.floor(i/100),d2=Math.floor(i/10)%10,d3=i%10
        if(i==Math.pow(d1,3)+Math.pow(d2,3)+Math.pow(d3,3)){
            console.log(i)
            res+=i+"\n"
        }
    }
    document.getElementById("result1").innerText="result: \n"+res
}

//Q10-printing triangle *
function Q10_loops() {        
    document.getElementById("contain").innerHTML = '<div class="grid-container" id="Q1"><h2>Stars Triangle\n put a number until 10</h2></div><input type="text" id="input1"/><div class="btn" style="background-color: blue;" onclick="Q10_()">Click</div><p id="result1"></p><div class="btn" onclick="homeHtmlLoop()">return</div>'

}
function Q10_(){
    let num1=document.getElementById("input1").value
    let str=""
    for(let x=1; x <=num1; x++)
    {
        for (let i=1; i < x; i++)
            str+="*"
        str+="\n"
    }
    document.getElementById("result1").innerText="your triangle: "+str
    console.log(str);
}



//Q11-GCD
function Q11_loops() {        
    document.getElementById("contain").innerHTML = '<div class="grid-container" id="Q1"><h2>please put two numbers</h2></div><input type="text" id="input1"/><input type="text" id="input2"/><div class="btn" style="background-color: blue;" onclick="Q11_()">Click</div><p id="result1"></p><div class="btn" onclick="homeHtmlLoop()">return</div>'

}
function Q11_(){
    let num1=document.getElementById("input1").value
    let num2=document.getElementById("input2").value
    let gcd;
    while (num1!=num2)
    {
        if (num1>num2)
        {
            num1 = num1 -num2;
        }
        else
        {
            num2 = num2 - num1;
        }
    }
    gcd = num1;
    //console.log(gcd);
    document.getElementById("result1").innerText="their gcd is: "+gcd
}

//Q12-multiples of 3 and 5 under 1000
function Q12_loops() {        
    document.getElementById("contain").innerHTML = '<div class="grid-container" id="Q1"><h2>sum of multiples of 3 and 5 under 1000 is:</h2></div><div class="btn" style="background-color: blue;" onclick="Q12_()">Click</div><p id="result1"></p><div class="btn" onclick="homeHtmlLoop()">return</div>'
}
function Q12_(){
    let sum=0
    for(let i=0;i<1000;i++)
    {
        if(i%3===0||i%5===0)
        {
            sum+=i
        }
    }
    document.getElementById("result1").innerText=sum

}