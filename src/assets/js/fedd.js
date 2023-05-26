function Feed(){
    var para={
     from_name:document.getElementById("from_name").value,
     Email_id:document.getElementById("Email_id").value, 
     phone_number:document.getElementById("phone_number").value,
     message:document.getElementById("message").value
      
    }
    emailjs.send("service_btean2u",'template_dfar8qc',para).then(function (res){
      if( document.getElementById("Email_id").value==='' ||document.getElementById("phone_number").value==='' ||document.getElementById("message").value===''||document.getElementById("from_name").value==='' )
      swal ( "Oops" ,  "Please Fill in All Feedback Form" ,  "error" ,{buttons:false})
      else{
      sweetAlert("Sended Successfully to Company ", "Thanks for your Feedback", "success",{buttons:false});
      document.getElementById("from_name").value='',
      document.getElementById('Email_id').value='', 
      document.getElementById("phone_number").value='',
      document.getElementById("message").value=''
      }
    }
 ) }
   
