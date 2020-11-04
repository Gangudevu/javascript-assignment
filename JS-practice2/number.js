function even(){
        var input = "2346548459";
        var returnString = "";
        console.log("Even numbers");
        for(i=0;i<input.length;i++){
            if(input[i]%2 == 0){
                returnString += input[i] + ", ";    
            }
        }
        console.log(returnString);
    }
    even();
    
    
    function odd(){
        var input = "2346548459";
        var returnString = "";
        console.log("Odd numbers");
        for(i=0;i<input.length;i++){
            if(input[i]%2 !== 0){
                returnString += input[i] + ", ";    
            }
        }
        console.log(returnString);
       
    }
    odd();
    
    
    function replaceEvenWithOdd(){
        var input = "2346548459";
        var returnString = "";
        console.log("After exchanging even number by next odd number");
        for (i=0; i<input.length; i++){
            if(input[i]%2 == 0) {
                returnString += Number(input[i])+1;
                returnString += ", ";
            } else {
                returnString += input[i];
                returnString += ", ";
            }
        }
        console.log(returnString);
    }
    replaceEvenWithOdd();
    
    
    function removeOdd(){
        var input = "2346548459";
        var returnString = "";
        console.log("Removing odd numbers");
        for(i=0;i<input.length;i++){
            if(input[i]%2 == 0){
                returnString += input[i] + " ,";
                    }
        }
        console.log(returnString);
    }
    removeOdd();
    