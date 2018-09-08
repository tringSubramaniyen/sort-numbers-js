function FormValidate(){
    var name = document.forms["fillform"]["ename"].value;
    var mail = document.forms["fillform"]["email"].value;
    var mob = document.forms["fillform"]["mobile"].value;
    // var exp1 = /[a-z]/;
    // var exp2 = /[A-Z]/;
    // console.log(exp1);
    // console.log(name);
    // var xx = name.match(exp1);
    // console.log(xx);
    // if(name==xx){
    //     alert("Thanks");
    //     return true;
    // }else{
    //     alert("Enter a valid name!");
    //     return false;
    // }
    if (!/^[a-zA-Z]*$/g.test(document.fillform.ename.value)) { 
        alert("Invalid characters"); 
        document.fillForm.ename.focus(); 
        return false; 
    }

    // if(mail==[a-z] || mail==[0-9] || mail==/@/ || mail==/./){
    //     return true;
    // }else{
    //     alert("Enter a valid mail ID!");
    //     return false;
    // }
    // if(mob==[0-9] || mob==/+/){
    //     return true;
    // }else{
    //     alert("Enter a valid mobile number!");
    //     return false;
    // }
}