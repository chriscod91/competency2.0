class about {
  constructor(name, telephone, email, message) {
    this.name = name;
    this.telephone = telephone;
    this.email = email;
    this.message = message; 
  }
}

function send() { 
  var newMessage = new about(
       $("#name").val(),
       $("#telephone").val(),
       $("#email").val(),
       $("#message").val(),


  );

  console.log(newMessage);
  
}

function initAbout(){
$("#enter-btn").on('click',send);
}