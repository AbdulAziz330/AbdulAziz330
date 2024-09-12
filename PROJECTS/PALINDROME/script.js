let btnsearch = document.querySelector("#submit")
    let cls = document.querySelector(".cls");
    let result = document.querySelector(".para")
    
    btnsearch.addEventListener("click",()=>{
      let searchedValue = document.querySelector("#text").value;
      let valueLength = searchedValue.length;
      let string1 = searchedValue.replace(/ /g, "");
    
    let len1 = string1.length;
    let string2 = "";
    for (let j = 0; j < len1; j++) {
      
      if((string1[j] >= 'a' && string1[j] <= 'z') || (string1[j] >= 'A' && string1[j] <= 'Z') || (string1[j] >= '0' && string1[j] <= '9')) {
        string2 = string2.concat(string1[j]);
      }
          
    }
    let totalLen = string2.length;
    if (string2 == "") {
      document.getElementById("result").innerHTML = "Please enter a valid string!";
    }
    else {
      string2 = string2.toLowerCase();
      let value = true;
      for (i = 0;  i < (totalLen / 2); i++) {
        if (string2[i] !== string2[totalLen - 1 - i]) {  
           
          value = false;
       }
       if (value == false) {
        document.getElementById("result").innerHTML = "It\'s not palindrome.";  
         
     
        
      }
      else if (value == true) {
        document.getElementById("result").innerHTML = "It\'s palindrome.";
     }
    
   
      }
    
    }

  }
)
  cls.addEventListener("click",()=> {
    document.getElementById("result").innerHTML = "";
    document.getElementById("text").value = "";
});