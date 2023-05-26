  function sendMail(){
  var params={
   from_name:document.getElementById("from_name").value,
   Email_id:document.getElementById('Email_id').value, 
   company_name:document.getElementById("company_name").value,
   message:document.getElementById("message").value
    
  }
  emailjs.send("service_2jt7r2v",'template_3tfyqyj',params).then(function (res){
    if(document.getElementById("from_name").value===''|| document.getElementById("Email_id").value==='' ||document.getElementById("company_name").value==='' ||document.getElementById("message").value==='' )
    swal ( "Oops" ,  "Please fill in all form" ,  "error" ,{buttons:false})
    else
    
  {  setTimeout(() => {
    
   sweetAlert("Sended Successfully to Company ", "We Will Message u back", "success",{buttons:false});}, 1000);
  document.getElementById("from_name").value='',
  document.getElementById('Email_id').value='', 
  document.getElementById("company_name").value='',
  document.getElementById("message").value=''
  
   }
  })}
  function Feed(){
    var para={
     from_name:document.getElementById("from_name").value,
     Email_id:document.getElementById("Email_id").value, 
     phone_number:document.getElementById("phone_number").value,
     message:document.getElementById("message").value
      
    }
    emailjs.send("service_btean2u",'template_dfar8qc',para).then(function (res){
      if(document.getElementById("from_name").value===''|| document.getElementById("Email_id").value==='' ||document.getElementById("phonenumber").value==='' ||document.getElementById("message").value==='' )
      swal ( "Oops" ,  "Please Fill in All Feedback Form" ,  "error" ,{buttons:false})
      else
      
    {  
     sweetAlert("Sended Successfully to Company ", "success",{buttons:false})
    document.getElementById("from_name").value='',
    document.getElementById("Email_id").value='', 
    document.getElementById("phone_number").value='',
    document.getElementById("message").value=''
   }
    })}
