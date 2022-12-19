let projects = [
    {
        id: "1",
        abbr: "me",
        name: "Movie Explorer",
        intro: "A full-stack web app",
        skills: ["Angular", "Node.js", "Bootstrap", "SwiftUI", "GCP"],
        time: "Mar. 2021 - May 2021",
        pic: "",
        details: [
            "Backend - A proxy server using the Express framework, which contains multiple \
        routes that can communicate with the clients and TMDB. It is hosted on Google App Engine.",
            "Web App - A responsive website using Angular and Bootstrap that allows user to\
         fetch information about movies and TV shows by making AJAX calls to the proxy server.",
            "iOS App - An iOS app corresponding to the web application, using SwiftUI."
        ]
    },
    {
        id: "2",
        abbr: "me-ios",
        name: "Movie Explorer - iOS",
        intro: "A full-stack web app",
        skills: ["Angular", "Node.js", "Bootstrap", "SwiftUI", "GCP"],
        time: "Mar. 2021 - May 2021",
        pic: "",
        details: [
            "Backend - A proxy server using the Express framework, which contains multiple \
        routes that can communicate with the clients and TMDB. It is hosted on Google App Engine.",
            "Web App - A responsive website using Angular and Bootstrap that allows user to\
         fetch information about movies and TV shows by making AJAX calls to the proxy server.",
            "iOS App - An iOS app corresponding to the web application, using SwiftUI."
        ]
    },
    {
        id: "3",
        abbr: "cae",
        name: "Caelestis",
        intro: "A 2D platformer game",
        skills: ["C#", "Unity"],
        time: "Aug. 2021 – Dec. 2021",
        pic: "",
        details: [
            "Designed a multi-level 2D platformer game that encourages players to follow the beats and take actions using Unity.",
            "Developed a shop interface where players can buy items with coins collected during the game.",
            "Designed a control system that allows the players to use various input devices (Touch Screen, Keyboard, Gamepad)."
        ]
    },
    {
        id: "4",
        abbr: "usc-reg",
        name: "USC Registration System",
        intro: "A course query system",
        skills: ["C++", "Unix", "Socket Programming"],
        time: "Oct. 2022 - Nov 2022",
        pic: "./Assets/socket.png",
        details: [
            "Developed five communication endpoints, including client, Main server, CS server, EE server and Credential server.",
            "Built connections between client and servers using TCP and UDP connections. Designed data structure for\
            communications between endpoints.",
            "Implemented simple authentication scheme."
        ]
    }
]

const data = {
    projects
}

export default data;
