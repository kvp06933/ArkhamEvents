

//display a message to the user

function getValues(){
    //declare variable
    let msg = "";
    //pull the value from the input box
    msg = document.getElementById("message").value;
    
    Swal.fire(msg);
   
}


