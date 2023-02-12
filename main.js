
// Show Hide function
var home = document.getElementById('home');
var about = document.getElementById('about');
var skills = document.getElementById('Skills');
var project = document.getElementById('main-project');
var contact = document.getElementById('main-contact');

function homeShow() {
    about.style.display = 'none';
    skills.style.display = 'none';
    project.style.display = 'none';
    contact.style.display = 'none';
}
function aboutShow() {
    about.style.display = 'block';
    skills.style.display = 'none';
    project.style.display = 'none';
    contact.style.display = 'none';
}

function skillsShow() {
    skills.style.display = 'block';
    about.style.display = 'none';
    project.style.display = 'none';
    contact.style.display = 'none';
}

function projectShow() {
    project.style.display = 'block';
    skills.style.display = 'none';
    about.style.display = 'none';
    contact.style.display = 'none';
}

function contactShow() {
    contact.style.display = 'block';
    skills.style.display = 'none';
    about.style.display = 'none';
    project.style.display = 'none';
}

// SMTP API
let fName = document.getElementById('fName');
let cEmail = document.getElementById('cEmail');
let cPhone = document.getElementById('cPhone');
let cMessage = document.getElementById('cMessage');

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        //   Port: 587,
        Username: "de3mo9@gmail.com",
        Password: "mxatymjbioueuhko",
        To: 'de3mo9@gmail.com',
        From: "de3mo9@gmail.com",
        Subject: "Sending Email using javascript",
        Body: 'Name - ' + fName + '\n' +
            'Email - ' + contactEmail + '\n' +
            'Phone - ' + cPhone + '\n' +
            'Message - ' + cMessage + '\n',
    })
        .then(function (message) {
            alert("mail sent successfully")
        });
}

