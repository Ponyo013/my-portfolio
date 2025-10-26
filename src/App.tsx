// Components
import ComingSoonModal from "./components/ComingSoonModal";

// Icon
import Git from './assets/mdi_github.svg';
import Linked from './assets/mdi_linkedin.svg'
import Ts from './assets/devicon_typescript.svg'
import Rs from './assets/devicon_react.svg'
import Vt from './assets/vscode-icons_file-type-vite.svg'
import linkIc from './assets/flowbite_link-outline.svg'
import figmac from './assets/logos_figma.svg'
import KotlinIc from './assets/material-icon-theme_kotlin.svg'
import AndroIc from './assets/devicon_androidstudio-wordmark.svg'

function App() {
  return (
    <>
      <div className="flex flex-col items-center my-12 md:my-50 sm:mx-10 md:mx-15 lg:mx-30 xl:mx-40 2xl:mx-60 gap-50 min-h-screen">
        {/* Home */}
        <div id="home" className="flex flex-col-reverse md:flex-row md:justify-between items-center">
          {/* Introduction */}
          <div className="flex flex-col gap-5 items-center text-center mt-12 md:text-left md:mr-24 md:mt-0 md:items-start">
            <p className="text-2xl sm:text-3xl uppercase font-bold font-primary">
              an informatics undergraduate
            </p>
            <p className="text-md mx-8 sm:mx-0 sm:text-lg font-secondary text-gray-500">
              Hi! I'm Moreno Pradita, an Informatics student interested in software development and machine learning.
            </p>

            {/* Logos */}
            <div className="flex flex-row space-x-2.5">
              <a href="https://github.com/Ponyo013" target='_blank' className='cursor-pointer 
                     transition-transform duration-200 hover:scale-105'>
                <img src={Git} alt="Git Logo" />
              </a>
              <a href="https://www.linkedin.com/in/moreno-pradita-49b42828a" target='_blank' className='cursor-pointer'>
                <img src={Linked} alt="Linked in Logo" className="
                     transition-transform duration-200 hover:scale-105" />
              </a>
            </div>
          </div>

          {/* Photos */}
          <div className="shrink-0">
            <img src="/4x6.JPG" alt="4x6" className="w-50 h-50 md:w-60 md:h-60 rounded-full object-cover" />
          </div>
        </div>

        {/* About */}
        <div id="about" className='mr-24'>
          <div className='flex flex-col w-full gap-5'>
            <p className="text-3xl uppercase font-bold font-primary">
              about me
            </p>
            <div className='font-secondary text-gray-500 text-lg'>
              <p>
                Throughout my studies, I have worked on various projects, such as:
              </p>
              <ol className="list-[lower-alpha] list-inside mt-2 ml-6 space-y-1">
                <li>Developing a website for the <span className='underline text-black!'>UMN Mentoring Organization</span>.</li>
                <li>Designing a <span className='underline text-black!'>waste pickup application</span>.</li>
                <li>Building a mobile e-commerce app for <span className='underline text-black!'>UMKM bike shops</span> with automated sentiment analysis.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Projects */}
        {/* <div id="projects" className='flex flex-col gap-52'>
          <div className='flex flex-col'>
            <p className="text-3xl uppercase font-bold font-primary">
              projects
            </p>
            <div className='flex mt-8 justify-between'>
              <div className='flex flex-col gap-5'>
                <img src="/project-1-a.png" alt="project-1-a" />
                <img src="/project-1-b.png" alt="project-1-b" />
              </div>
              <div className='flex flex-col gap-7 w-1/2 text-center items-center'>
                <p className='font-semibold text-2xl font-primary'>
                  UMN Mentoring Profile
                </p>
                <p className='text-lg font-secondary text-gray-500'>
                  A web-based platform designed to display event schedules for the mentoring program and manage participant group data.
                  The system includes search and filtering features to help mentors and administrators efficiently navigate and organize participant information.
                </p>

                <div className='flex flex-col items-center gap-12'>

                  <div className='flex space-x-5'>
                    <img src={Ts} alt="icon-ts" />
                    <img src={Rs} alt="Icon-rs" />
                    <img src={Vt} alt="Icon-Vt" />
                  </div>

                  <a href="https://mentoring.umn.ac.id/" target="_blank" rel="noopener noreferrer">
                    <button className="flex space-x-2.5 bg-black w-fit p-2 rounded-lg cursor-pointer 
                     transition-transform duration-200 hover:scale-105">
                      <p className="text-white font-bold font-secondary">Live Demo</p>
                      <img src={linkIc} alt="hyperlinkIc" />
                    </button>
                  </a>

                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-between'>
            <div className='flex flex-col gap-7 w-1/2 text-center items-center'>
              <p className='font-semibold text-2xl font-primary'>
                Co Waste
              </p>
              <p className='text-lg font-secondary text-gray-500'>
                A mobile application that encourages users to recycle by converting their food waste into reward points.
                These points can be exchanged for various products or discounts, promoting sustainable habits and reducing household waste.
              </p>
              <div className='flex flex-col items-center gap-12'>
                <div>
                  <img src={figmac} alt="icon-ts" />
                </div>
                <a href="https://www.figma.com/proto/rgtHJHgombG6W97CAwf0XL?node-id=93-6153&t=GLFWyK4rvwvZviTu-6" target="_blank" rel="noopener noreferrer">
                  <button className="flex space-x-2.5 bg-black w-fit p-2 rounded-lg cursor-pointer 
                     transition-transform duration-200 hover:scale-105">
                    <p className="text-white font-bold font-secondary">Prototype</p>
                    <img src={linkIc} alt="hyperlinkIc" />
                  </button>
                </a>
              </div>
            </div>

            <div className='flex gap-7'>
              <img src="/project-2-a.png" alt="project-2-a" />
              <img src="/project-2-b.png" alt="project-2-b" />
            </div>
          </div>
        </div>

        <div className='flex mt-8 justify-between'>
          <div className='flex gap-5'>
            <img src="/project-3-a.png" alt="project-1-a" />
            <img src="/project-3-b.png" alt="project-1-b" />
          </div>
          <div className='flex flex-col gap-7 w-1/2 text-center items-center'>
            <p className='font-semibold text-2xl font-primary'>
              UMN Mentoring Profile
            </p>
            <p className='text-lg font-secondary text-gray-500'>
              A mobile e-commerce application developed to digitalize a local bike shop's operations. The app enables the shop to manage products, process customer orders,
              and generate financial reports, helping improve efficiency and business growth. <i>(Currently under development)</i>
            </p>
            <div className='flex flex-col items-center gap-12'>

              <div className='flex space-x-5'>
                <img src={AndroIc} alt="icon-ts" />
                <img src={KotlinIc} alt="Icon-rs" />
              </div>

              <ComingSoonModal />
            </div>
          </div>
        </div> */}
      </div >
    </>
  );
}

export default App;
