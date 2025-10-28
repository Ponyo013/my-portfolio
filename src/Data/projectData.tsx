import Ts from '../assets/devicon_typescript.svg'
import Rs from '../assets/devicon_react.svg'
import Vt from '../assets/vscode-icons_file-type-vite.svg'
import figmac from '../assets/logos_figma.svg'
import Kt from '../assets/material-icon-theme_kotlin.svg'
import AndroidIc from '../assets/devicon_androidstudio-wordmark.svg'
import mysql from '../assets/logos_mysql.svg'
import phpIc from '../assets/logos_php.svg'

export const projects = [
    {
        id: 1,
        type: "web",
        title: "UMN Mentoring Profile",
        description:
            "A web-based platform designed to display event schedules for the mentoring program and manage participant group data. \
            The system includes search and filtering features to help mentors and administrators efficiently navigate and organize participant information.",
        images: ["/project-1-a.avif", "/project-1-b.avif"],
        icons: [Ts, Rs, Vt],
        buttonText: "Live Demo",
        link: "https://mentoring.umn.ac.id/",
    },
    {
        id: 2,
        type: "mobile",
        title: "Co Waste",
        description:
            "A mobile application that encourages users to recycle by converting their food waste into reward points. \
            These points can be exchanged for various products or discounts, promoting sustainable habits and reducing household waste.",
        images: ["/project-2-a.avif", "/project-2-b.avif"],
        icons: [figmac],
        buttonText: "Prototype",
        link: "https://www.figma.com/proto/rgtHJHgombG6W97CAwf0XL?node-id=93-6153&t=GLFWyK4rvwvZviTu-6",
    },
    {
        id: 3,
        type: "web",
        title: "Evenlix",
        description:
            "Evenlix is a simple event management website that features both client and admin interfaces. On the client side, \
            users can browse and purchase tickets for various events, as well as view their event registration history through their profile. \
            Meanwhile, the admin side allows administrators to manage the platform by adding, editing, and deleting events, as well as monitoring user activities and registration data.",
        images: ["./project-4-b.avif", "./project-4-a.avif"],
        icons: [mysql, phpIc],
        buttonText: "Live Demo",
        link: "https://moreno.xo.je",
    },
    {
        id: 4,
        type: "mobile",
        title: "UMKM Bike Shop",
        description:
            "A mobile e-commerce application developed to digitalize a local bike shop's operations. \
            The app enables the shop to manage products, process customer orders, and generate financial reports, \
            helping improve efficiency and business growth. (Currently under development)",
        images: ["./project-3-a.avif", "./project-3-b.avif"],
        icons: [AndroidIc, Kt],
        buttonText: "",
        link: "",
    },
];