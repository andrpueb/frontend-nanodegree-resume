/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
    "name": "Andres Puentes",
    "role": "Front End Web Developer",
    "welcomeMessage": "Hi! I am Andres Puentes, a London based Junior Web Developer who has been learning all the magic of web development for the past 2 year, contact me to talk about your project! ",
    "biopic": "images/me.jpg",
    "contacts": {
        "mobile": "+447864968719",
        "email": "andresfpuentes@gmail.com",
        "github": "andrpueb",
        "twitter": "andrpueb",
        "location": "London",
    },
    "skills": ["css3", "html5", "javascript", "jquery", "bootstrap", "git", "gulp"]
};

var education = {
    "schools": [{
            "name": "Escuela Colombiana de Ingenieria",
            "city": "Bogota, Colombia",
            "major": "Electronic Engineering",
            "graduationYear": "2007"
        }, {
            "name": "Politecnico Grancolombiano",
            "city": "Bogota, Colombia",
            "major": "International Business",
            "graduationYear": "2012"
        }, {
            "name": "LSI",
            "city": "Auckland, New Zealand",
            "major": "English for Business",
            "graduationYear": "2011"
        }

    ],
    "onlineCourses": [{
        "title": "Front End Web Developer",
        "school": "CodeAcademy",
        "dates": "2016",
        "url": "https://www.codecademy.com/"
    }, {
        "title": "Front End Web Developer",
        "school": "FreeCodeCamp",
        "dates": "2016",
        "url": "https://www.freecodecamp.com/"
    }, {
        "title": "Front End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/"
    }]
};

var work = {
    jobs: [{
        "employer": "Kaplan International",
        "title": "Sales Executive",
        "location": "London",
        "dates": "Apr 2015 - Apr 2016",
        "description": "Worked as a sales executive for one of the greates english schools in the world, Providing outstanding service to potential customers in South America via email or phone in order to convert those leads into sales while interacting with other departments regarding the sales process and documentation (finance, customer care, compliance.)"
    }, {
        "employer": "Kumon Institute of education",
        "title": "Franchise Coordinator",
        "location": "Bogota",
        "dates": "July 2013 - Dec 2013",
        "description": "Amazing company dedicated to make the learning of maths and languages something enjoyable for kids. Worked Auditing the franchises that were under my supervision checking the performance and execution of the guidelines sent from the headquarters, analysing figures and giving term results. Responsible of implementing and improving processes by delivering trainings and workshops."
    }]

};

var projects = {
    projects: [{
        "title": "ceramind.co",
        "dates": "2016",
        "description": "This was my first project, is a website created for a company dedicated to produce refractory ceramic products, was created using HTML, CSS and basic PHP",
        "images": ["images/project1.jpg", "images/project2.jpg"]
    }, {
        "title": "holisticmind.com",
        "dates": "2016",
        "description": "I am now working on this big project, is an online shop of natural products and a place were people can meet to share their thoughts about healthy living",
        "images": ["images/yoga1.jpg", "images/yoga2.jpg"]
    }]
};

bio.contacts.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedEducationName = HTMLschoolName.replace("%data%", education.lastSchool);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedPic);
    $("#header").append(formattedMessage);
    $("#topContacts, #footerContacts").append(formattedMobile);
    $("#topContacts, #footerContacts").append(formattedEmail);
    $("#topContacts, #footerContacts").append(formattedTwitter);
    $("#topContacts, #footerContacts").append(formattedGithub);
};

bio.contacts.display();







bio.skills.display = function() {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
        var formattedSkills = HTMLskills.replace("%data%", skill).replace("%data%", skill).replace("%data%", skill).replace("%data%", skill);
        $("#skills").append(formattedSkills);
    });
};

bio.skills.display();

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedDate = HTMLworkDates.replace("%data%", job.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        var finalEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(finalEmployerTitle, formattedDate, formattedLocation, formattedDescription);
    });
};

work.display();

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedProTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedProTitle, formattedProjectDates, formattedProjectDescription);
        project.images.forEach(function(image) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedProjectImage);
        });


    });
};

projects.display();

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.major);
        var formattedSchoolDate = HTMLschoolDates.replace("%data%", school.graduationYear);
        var formatteSchoolCity = HTMLschoolLocation.replace("%data%", school.city);
        $(".education-entry:last").append(formattedSchoolName, formattedSchoolDegree, formattedSchoolDate, formatteSchoolCity);
    });
};

education.display();


education.onlineCourses.display = function() {
    $("#education").append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) {
        $("#education").append(HTMLonlineStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);
        $(".online-entry:last").append(formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineUrl);
    }
};
education.onlineCourses.display();




$("#mapDiv").append(googleMap);


//Changes to the code from here
$('span:first').addClass('role');

$('[data-toggle="tooltip"]').tooltip();

$('.skillLogo').hover(function() {
    $(this).addClass('hoverSkill');
}, function() {
    $('.skillLogo').removeClass('hoverSkill');
});
