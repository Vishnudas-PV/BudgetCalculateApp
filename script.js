function toRegistered(){
    window.location='./register.html';
}
function toLogin(){
    window.location='./index.html';

}

function logout(){
    window.location='./index.html';
}

function toRegister(){
    //step1 fetch the values from html
    regname=reg_name.value;
    regid=reg_userid.value;
    regpswrd=reg_pswrd.value;
    //step2 Create an object named regDetails
    regDetails={
        regname,
        regid,
        regpswrd
    }
 
     //Check the acno is already present in the localStorage 
     if((regid==null || regname=="")){
        alert('Enter the details');
     }
     else if((regid in localStorage )){
        alert('Already account exist !!')
        
    
     }

    
     else{
        localStorage.setItem(regid,JSON.stringify(regDetails));
        alert('Account Registered Successfully')
        window.location='./index.html'
     }

}

function login(){
usr_id=userid.value;
usr_pswrd=pswrd.value;
if(usr_id in localStorage){
    regDetails=JSON.parse(localStorage.getItem(usr_id));
    if(usr_pswrd==regDetails.regpswrd){
    
    alert('Login Successful');
    window.location='./mainpage.html';
    }
    else{
        alert('Password is incorrect');
    }

}
else{
    alert('Account is not present');
    window.location='./register.html'
     
}
}

function addInc(){
username= usrname.value;
useramount=usramount.value;
amnt=document.getElementById('amnt').innerHTML;
if ((username == + "") || (useramount == + 0)) {
        
    alert("Please type details in both inputs of income")

}


else{
    document.getElementById('amnt').innerHTML = Number(amnt) + Number(useramount);
    tabledata=`
        <tr>

        <td>${username}</td>
        <td>${useramount}</td>
    
        </tr>`
        document.getElementById('tablee').innerHTML+=tabledata;
}

    
}
function expInc(){
    expensename=expname.value;
    expenseamount=expamount.value;
    amnt=document.getElementById('amnt').innerHTML;
   
    if ((expensename == + "") || (expenseamount == + 0)) {
        
        alert("Please type details in both inputs of expense")

    }
    
    else{
        document.getElementById('amnt').innerHTML=Number(amnt)-Number(expenseamount);
        tabledata=`
        
            <tr>
    
            <td>${expensename}</td>
            <td>${expenseamount}</td>
            
        
            </tr>
            `
            document.getElementById('tablee2').innerHTML+=tabledata;
    }
    
        
    }
    
    //clearall button
   function clearAll(){
    document.getElementById('tablee').innerHTML=`
    <table id="tablee" class="bg-success">
                        
    <thead>
        <th  class=" iSource">Income-Description</th>
        <th   class="iSource1">Amount</th>
        <!-- <th><button onclick="" id="btns" class="btn btn-danger">&#10539; </button></th> -->
    </thead>


</table>


    `
    document.getElementById('tablee2').innerHTML=`
    <table id="tablee2" class="bg-danger">
    <thead>
        <th class="iSource">Expense-Description</th>
        <th class="iSource1">Amount</th>
    </thead>
</table>

    `
document.getElementById('amnt').innerHTML='0'
   
   }


