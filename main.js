    
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