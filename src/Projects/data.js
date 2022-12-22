let projects = [
    {
        id: "1",
        abbr: "me-front",
        name: "Movie Explorer: Frontend",
        intro: "An Angular based webapp",
        skills: ["Angular", "TypeScript", "Bootstrap", "AJAX", "HTML", "CSS", "JSON"],
        time: "Mar. 2021 - May 2021",
        url: "https://github.com/schen-Oli/Movie-Explorer-Backend",
        details: ["A webpage that allows user to search for information regarding movies and TV shows using the TMDB API\
            and upon selection can display results on the details page of that specific movie or TV show. \
            The user can view popular, top-rated and trending movies and TV shows on the home page along with currently playing movies. \
            The user will first open Home page, where the navbar contains Search Bar and user can enter the movie or TV show name\
            and select from a list of matching movie/TV show names along with images using “autocomplete”. \
            Selecting the movie or TV show name will lead to the details page of that movie or TV show.\
            Recently visited movies and TV shows are listed under Continue Watching in the Home page.\
            In detailed page, users can read basic information, reviews, etc about the movie or TV show, \
            and require cast information.", "Check out the github page for more details."]
    },
    {
        id: "2",
        abbr: "me-back",
        name: "Movie Explorer: Backend",
        intro: "An Express based proxy server",
        skills: ["Node.js", "Express", "TMDB API", "REST API"],
        time: "Mar. 2021 - May 2021",
        url: "https://github.com/schen-Oli/Movie-Explorer-Backend",
        details: [
            "A proxy server using the Express framework, and contains ten\
            endpoints that can communicate with the clients and The Movie Database.",
            "Check out the github page for more details."
        ]
    },
    {
        id: "3",
        abbr: "me-ios",
        name: "Movie Explorer: iOS",
        intro: "An iOS app",
        skills: ["Swift", "SwiftUI", "iOS Development"],
        time: "Mar. 2021 - May 2021",
        url: "https://github.com/schen-Oli/Movie-Explorer-Backend",
        details: [
            "Backend - A proxy server using the Express framework, which contains multiple \
        routes that can communicate with the clients and TMDB. It is hosted on Google App Engine.",
            "Web App - A responsive website using Angular and Bootstrap that allows user to\
         fetch information about movies and TV shows by making AJAX calls to the proxy server.",
            "iOS App - An iOS app corresponding to the web application, using SwiftUI.",
            "Check out the github page for more details."
        ]
    },
    {
        id: "4",
        abbr: "cae",
        name: "Caelestis",
        intro: "A 2D platformer game",
        skills: ["C#", "Unity"],
        time: "Aug. 2021 – Dec. 2021",
        pic: "",
        details: [
            "Designed a multi-level 2D platformer game that encourages players to follow the beats and take actions using Unity.",
            "Developed a shop interface where players can buy items with coins collected during the game.",
            "Designed a control system that allows the players to use various input devices (Touch Screen, Keyboard, Gamepad).",
            "Check out the github page for more details."
        ]
    },
    {
        id: "5",
        abbr: "usc-reg",
        name: "USC Registration System",
        intro: "A course query system",
        skills: ["C++", "Unix", "Socket Programming"],
        time: "Oct. 2022 - Nov 2022",
        pic: "./Assets/socket.png",
        video: "ZShD-chIF84",
        details: [
            "A USC web registration system. Students can use the client program to access the central web registration main server, which will forward their requests to the corresponding department servers. For each department, the server will store the information of the courses offered by the department. Additionally, a credential server will be used to verify the identity of the student.",
            "Check out the github page for more details."
        ],
    }
]

const data = {
    projects
}

export default data;
