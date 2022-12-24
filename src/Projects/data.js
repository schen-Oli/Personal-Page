let projects = [
    {
        id: "1",
        abbr: "me-front",
        name: "Movie Explorer: Frontend",
        intro: "An Angular based webapp",
        skills: ["Angular", "TypeScript", "Bootstrap", "AJAX", "HTML", "CSS", "JSON"],
        time: "Mar. 2021 - May 2021",
        url: "https://github.com/schen-Oli/Movie-Explorer-Frontend",
        video: "BK5Efy43u_o",
        details: ["This is the frontend web application of the Movie Explorer project. It consists of three types of pages, including a home page, a detail page, and a My-List page.",
            "A navbar is located on the top of all pages, where the users can navigate to different pages. In addition, there is a search box where users can type in the name of Movies or TV shows, and the application will list search results in typeahead format.",
            "On the home page, the user can see the popular, top-rated, trending movies and TV shows. In addition, the movies/TV shows that the user previously explored and shown in the continuous watching section. On the detail page, the user can see the trailer, basic information, cast, and reviews of the movie/TV show. The user can also share the movie on Twitter or Facebook. The user can also click on the photo of the actors, which will lead to a pop-up window showing information about the actor. The My-List page is used to show the movies or TV shows that the users added to their list.",
            "Check out my GitHub page for more details. "]
    },
    {
        id: "2",
        abbr: "me-back",
        name: "Movie Explorer: Backend",
        intro: "An Express based proxy server",
        skills: ["Node.js", "Express", "TMDB API", "REST API", "Postman"],
        time: "Mar. 2021 - May 2021",
        url: "https://github.com/schen-Oli/Movie-Explorer-Backend",
        video: "BK5Efy43u_o",
        details: [
            "A proxy server using the Node.js and Express framework, and contains ten endpoints that can communicate with the clients and The Movie Database.",
            "Check out my GitHub page for more details. "
        ]
    },
    {
        id: "3",
        abbr: "me-ios",
        name: "Movie Explorer: iOS",
        intro: "An iOS app",
        skills: ["Swift", "SwiftUI", "iOS Development"],
        time: "Mar. 2021 - May 2021",
        url: "https://github.com/schen-Oli/Movie-Explorer-iOS",
        video: "IlF68WO7FhE",
        details: [
            "This is the iOS application of the Movie Explorer project. It consists of three tabs, including a home tab, a search tab, and a favorite page.",
            "In the search tab, users can type in the name of Movies or TV shows, and the application will list search results in typeahead format.",
            "On the home page, the user can see the top-rated, trending movies and TV shows. Long pressing on a movie or TV show will activate a pop-up window, allowing users to share the show or add it to their favorite list. On the other hand, if a user clicks on the movie or the TV show, they will be moved to a detail page, where the user can see the trailer, basic information, cast, and reviews of the movie/TV show. The user can also share the movie on Twitter or Facebook.", 
            "Check out my GitHub page for more details. "
        ]
    },
    {
        id: "4",
        abbr: "cae",
        name: "Caelestis",
        intro: "A 2D platformer game",
        skills: ["C#", "Unity", "Game Development"],
        time: "Aug. 2021 – Dec. 2021",
        url: "https://github.com/Saki97/Project_Caelestis",
        video: "LxHzWiBswjI",
        details: [
            "Caelestis is a 2D platformer that encourages players to follow the music beats and act. Every time the player hit the beat successfully, there will be some sort of reward.",
            "I developed a control system that allows the players to use various input devices, including a touch screen, keyboard, and gamepad.",
            "In addition, I developed several interfaces, including a shop interface where players can buy items with coins collected during the game, and other interfaces such as an entry point interface, a settings page, a pause page, win/lose pages, and a point count mechanism.",
            "Check out my GitHub page for more details. "
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
        url: "https://github.com/schen-Oli/Socket-Programming",
        video: "ZShD-chIF84",
        details: [
            "A USC web registration system. Students can use the client program to access the central web registration main server, which will forward their requests to the corresponding department servers. For each department, the server will store the information of the courses offered by the department. Additionally, a credential server will be used to verify the identity of the student.",
            "Check out my GitHub page for more details. "
        ],
    }
]

const data = {
    projects
}

export default data;
