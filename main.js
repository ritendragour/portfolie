    
    // Show Hide function
    var home = document.getElementById('home');
    var about = document.getElementById('about');
    var skills = document.getElementById('Skills');
    var project = document.getElementById('main-project');
    var contact = document.getElementById('main-contact');

    function homeShow(){
        about.style.display = 'none';
        skills.style.display = 'none';
        project.style.display = 'none';
        contact.style.display = 'none';

        // padding in home page
        // document.querySelector('#home').style.paddingTop ='110px';
    }
    function aboutShow(){
        about.style.display = 'block';
        skills.style.display = 'none';
        project.style.display = 'none';
        contact.style.display = 'none';
    }
    
    function skillsShow(){
        skills.style.display = 'block';
        about.style.display = 'none';
        project.style.display = 'none';
        contact.style.display = 'none';
    }
    
    function projectShow(){
        project.style.display = 'block';
        skills.style.display = 'none';
        about.style.display = 'none';
        contact.style.display = 'none';
    }
    
    function contactShow(){
        contact.style.display = 'block';
        skills.style.display = 'none';
        about.style.display = 'none';
        project.style.display = 'none';
    }
     
    // SMTP API


    // in html <button onclick="sendEmail">send me </button>
    function sendEmail() {
        Email.send({
          Host: "smtp.gmail.com",
          Port: 587,
          Username: "de3mo9@gmail.com",
          Password: "mxatymjbioueuhko",
          To: 'de3mo9@gmail.com',
          From: "de3mo9@gmail.com",
          Subject: "Sending Email using javascript",
          Body: "Well that was easy!!",
        })
          .then(function (message) {
            alert("mail sent successfully")
          });
      }