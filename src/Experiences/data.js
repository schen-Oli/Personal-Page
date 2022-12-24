let sde_internships = [
    {
        id : 1,
        company : "Apple Inc.",
        abbr : "apple",
        time : "May. 2022 – Aug. 2022",
        title : "Software Engineer Intern",
        location : "Sunnyvale, California",
        details : [
            "Built a backend server based on the Oat++ framework (C++) in the docker which consists of multiple endpoints that can handle various user requests, interact with Apple’s internal services, test the R&D algorithms and form responses in JSON format.",
            "Led the design and implementation of a user-friendly web application using native JavaScript and MapKit JS, to function as an internal visualization tool that is used to verify and validate algorithms and services.",
            "Tested and improved the performance of the web application. Performance was enhanced by 200% after topology optimization algorithms were adopted.",
            "Presented the project to multiple managers and other full-time employees. Clearly explained the logic of the application with an easily understandable keynote."
        ]
    },
    {
        id : 2,
        company : "YBF Center",
        abbr : "ybf",
        time : "Jun. 2021 – Aug. 2021",
        title : "Software Engineer Intern",
        location : "Shandong, China",
        details : [
            "Designed a WeChat mini program as an E-commerce platform for the YBF center. Scoped the project from a draft idea, developed a UI using Weixin DevTool, implemented the basic backend logic based on SpringBoot, and delivered the mini program on time.",
            "Tested and improved the performance of the app."
        ]
    },
]

let volunteer = [
    {
        id : 1,
        url : "https://ihfonline.org",
        company : "International Humanity Foundation",
        role : "Teaching Assistant",
        time: "Jul. 2017 - Aug. 2017",
        location: "Jakarta, Indonesia",
        details : "Taught English, Math, Science, and Chinese in a local non-profit educational institution."
    }
]

let other_internships = [
    {
        id : 1,
        company : "LuxCreo Inc.",
        abbr : "lux",
        time : "Jun. 2018 - Sep. 2018",
        title : "Mechanical Engineer Intern",
        location : "Zhejiang, China",
        details : [
            "Designed 3D models using SOLIDWORKS based on customer's requirement. Added support trees for the models to minimize collapse.",
            "Analyzed the mechanical properties of the designed structures using Finite Element Analysis.",
            "Assisted control and test the Ultra High Speed Light-Cured 3D Printers."
        ]
    },
    {
        id : 2,
        company : "Nottingham University Business School",
        abbr : "nubs",
        time : "Jun. 2017 - Jul. 2021",
        title : "Marketing Intern",
        location : "Zhejiang, China",
        details : [
            "Designed posters, brochures, souvenirs and other related products for Nottingham University Business School.",
            "Assisted with photography, interview, and coordination during academic conference."
        ]
    },
    {
        id : 3,
        company : "Nottingham City Council",
        abbr : "ncc",
        time : "Jan. 2017 - Jan. 2018",
        title : "Marketing Intern",
        location : "Remote",
        details : [
            "Translated over 20 awarded short films of Nottingham International Microfilm Festival to Chinese and added subtitles using Adobe Premiere.",
            "Managed the official account of Nottingham City Council on Youku and iQiyi.",
            "Assisted on the contenct creation of the official wechat account of Nottingham City Council."
        ]
    }
]

const data = {
    sde_internships,
    volunteer,
    other_internships
}
export default data;