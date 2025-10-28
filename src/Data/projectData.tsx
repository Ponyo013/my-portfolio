// Components
import ComingSoonModal from "../components/ComingSoonModal";

import Ts from '../assets/devicon_typescript.svg'
import Rs from '../assets/devicon_react.svg'
import Vt from '../assets/vscode-icons_file-type-vite.svg'
import figmac from '../assets/logos_figma.svg'

export const projects = [
    {
        id: 1,
        type: "web",
        title: "UMN Mentoring Profile",
        description:
            "A web-based platform designed to display event schedules for the mentoring program and manage participant group data. The system includes search and filtering features to help mentors and administrators efficiently navigate and organize participant information.",
        images: ["/project-1-a.png", "/project-1-b.png"],
        icons: [Ts, Rs, Vt],
        buttonText: "Live Demo",
        link: "https://mentoring.umn.ac.id/",
    },
    {
        id: 2,
        type: "mobile",
        title: "Co Waste",
        description:
            "A mobile application that encourages users to recycle by converting their food waste into reward points. These points can be exchanged for various products or discounts, promoting sustainable habits and reducing household waste.",
        images: ["/project-2-a.png", "/project-2-b.png"],
        icons: [figmac],
        buttonText: "Prototype",
        link: "https://www.figma.com/proto/rgtHJHgombG6W97CAwf0XL?node-id=93-6153&t=GLFWyK4rvwvZviTu-6",
    },
];