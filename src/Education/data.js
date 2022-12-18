let education = [
    {
        id : 1,
        school : "University of Southern California",
        abbr : "usc",
        time : "Aug. 2020 – Dec. 2022",
        major : "Master of Science in Computer Science",
        gpa : "3.8/4.0",
        location : "Los Angeles, California",
        logo : "./usclogo.jpg"
    },
    {
        id : 2,
        school : "University of Nottingham",
        abbr : "unnc",
        time : "Sep. 2016 – Jul. 2020",
        major : "Bachelor of Engineering (Honours) in Mechanical Engineering",
        gpa : "3.9/4.0",
        location : "Ningbo, China & Nottingham, UK",
        logo : ""
    }
];

let scores = [
    {
        id : 1,
        name : "Graduate Record Examinations (GRE)",
        total : "327/340", 
        date : "Oct 2019",
        components : ["Verbal Reasoning: 160", "Quantitative Reasoning: 167", "Analytical Writing: 3.5"],
    },
    {
        id : 2,
        name : "International English Language Testing System (IELTS)",
        total : "7.5/9.0", 
        date : "Oct 2019",
        components : ["Listening: 9.0", "Reading: 7.5", "Writing: 6.5", "Speaking: 6.0"],
    }
]

let skills = {
    Languages : "C++, Python, Java, JavaScript, Swift, SQL, HTML/CSS",
    Frameworks : "Angular, React, Express, Spring Boot, Django, MongoDB, MySQL, Apache, Oat++",
    Tools : "Linux, Shell, Git, GitHub, SpringBoot, Docker, GCP, Azure"
}

const data = {
    education,
    scores,
    skills
}

export default data;