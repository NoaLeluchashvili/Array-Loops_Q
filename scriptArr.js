function root(){
    window.location.href="index.html"
}
function rootArr(){
    window.location.href="indexArr.html"
}

function arrayFormatting() {
        
    let checkArray = document.getElementById("input1").value;
    console.log("Original array:\n"+checkArray);
           //checking if its in formmat array [ , , ]
      if ( checkArray[0] == "[" &&checkArray[checkArray.length - 1] == "]") 
      {
        let array = [];
        let text = "",j = 0;
        for (let i = 1; i < checkArray.length - 1; i++) {
          if (checkArray[i] != ",") text += checkArray[i];
          else if (checkArray[i] == ",") {
            array[j] = text;
            j++;
            text = "";
          }
        }
        array[j] = text;
        console.log("The array is:");
        console.log(array);
        return array
    } else {
      console.log("not an array");
      document.getElementById("result1").innerText =
        "Your input is not an array";
        document.getElementById("result1").style.color="red"
    }
  }

/**Arrays
 * Q1
 */
function Q1(){
    window.location.href="Q1Arr.html"
}
/**Arrays
 * Q2
 */
function Q2(){
    window.location.href="Q2Arr.html"
}
/**Arrays
 * Q3
 */
function Q3(){
    window.location.href="Q3Arr.html"
}
/**Arrays
 * Q4
 */
function Q4(){
    window.location.href="Q4Arr.html"
}

/**Arrays
 * Q5
 */
function Q5(){
    window.location.href="Q5Arr.html"
}
/**Arrays
 * Q6
 */
function Q6(){
    window.location.href="Q6Arr.html"
}
/**Arrays
 * Q7
 */
function Q7(){
    window.location.href="Q7Arr.html"
}
/**Arrays
 * Q8
 */
function Q8(){
    window.location.href="Q8Arr.html"
}
/**Arrays
 * Q9
 */
function Q9(){
    window.location.href="Q9Arr.html"
}
/**Arrays
 * Q10
 */
function Q10(){
    window.location.href="Q10Arr.html"
}
/**Arrays
 * Q11
 */
function Q11(){
    window.location.href="Q11Arr.html"
}
/**Arrays
 * Q12
 */
function Q12(){
    window.location.href="Q12Arr.html"
}
