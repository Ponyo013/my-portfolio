// Component
import ComingSoonModal from "./components/ComingSoonModal";

// Data
import { projects } from "./Data/projectData"

// Icon
import Git from './assets/mdi_github.svg';
import Linked from './assets/mdi_linkedin.svg'
import linkIc from './assets/flowbite_link-outline.svg'


function App() {
  const scrollToProject = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };


  return (
    <>
      <div className="flex flex-col items-center my-12 md:my-50 sm:mx-10 md:mx-15 lg:mx-30 xl:mx-40 xl:items-start 2xl:mx-60 gap-50 min-h-screen">
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
            <img src="/4x6.JPG" alt="4x6" className="w-50 h-50 md:w-60 md:h-60 rounded-full object-cover object-[center_10%] " />
          </div>
        </div>

        {/* About */}
        <div id="about" className='sm:mr-3 md:mr-6 lg:mr-12 2xl:mr-24'>
          <div className='flex flex-col w-full gap-5'>
            <p className="text-center md:text-left text-2xl sm:text-3xl uppercase font-bold font-primary">
              about me
            </p>
            <div className='mx-8 sm:mx-0 text-md font-secondary text-gray-500 sm:text-lg'>
              <p>
                Throughout my studies, I have worked on various projects, such as:
              </p>
              <ol className="list-[lower-alpha] list-inside mt-2 ml-6 space-y-1">
                {projects.map((project, index) => {
                  let textBefore = "";
                  let textAfter = "";

                  switch (index) {
                    case 0:
                      textBefore = "Developing a website for the ";
                      break;
                    case 1:
                      textBefore = "Designing a ";
                      break;
                    case 2:
                      textBefore = "Developing an ";
                      textAfter = " website";
                      break;
                    case 3:
                      textBefore = "Building a mobile e-commerce app for ";
                      textAfter = " with automated sentiment analysis";
                      break;
                  }

                  return (
                    <li key={project.id}>
                      {textBefore}
                      <span
                        className="underline text-black cursor-pointer"
                        onClick={() => scrollToProject(project.title)}
                      >
                        {project.term}
                      </span>
                      {textAfter}.
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div id="projects" className='flex flex-col'>
          <div className='flex flex-col items-center lg:items-start'>
            <p className="text-2xl lg:text-3xl uppercase font-bold font-primary">
              projects
            </p>

            <div className="flex flex-col gap-52">
              {projects.map((project, index) => (
                <div
                  id={project.title}
                  key={project.id}
                  className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                    } gap-8 md:gap-12 items-center lg:items-start lg:gap-0 mt-8 lg:justify-between`}
                >
                  {/* IMAGE SECTION */}
                  {project.type === "web" ? (
                    // Web layout → stacked images
                    <div className="flex flex-col mx-12 lg:mx-0 gap-5">
                      {project.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${project.title}-${i}`}
                          className="w-[407px] h-auto object-contain"
                        />
                      ))}
                    </div>
                  ) : (
                    // Mobile layout → side-by-side
                    <div className="flex flex-col sm:flex-row gap-7 mx-14 lg:mx-0 items-center justify-center">
                      {project.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${project.title}-${i}`}
                          className="w-[200px] h-auto object-contain"
                        />
                      ))}
                    </div>
                  )}

                  {/* TEXT SECTION */}
                  <div className="flex flex-col gap-5 lg:gap-7 mx-12 lg:mx-0 lg:w-1/2 text-center items-center">
                    <p className="font-semibold text-xl md:text-2xl font-primary">
                      {project.title}
                    </p>
                    <p className="text-sm md:text-lg lg:text-lg font-secondary text-gray-500">
                      {project.description}
                    </p>

                    <div className="flex flex-col items-center gap-12">
                      <div className="flex space-x-5">
                        {project.icons.map((icon, i) => (
                          <img key={i} src={icon} alt={`icon-${i}`} />
                        ))}
                      </div>

                      {project.buttonText === "" ? (
                        <ComingSoonModal />
                      ) : (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <button className="flex space-x-2.5 bg-black w-fit p-2 rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105">
                            <p className="text-white font-bold font-secondary">
                              {project.buttonText}
                            </p>
                            <img src={linkIc} alt="hyperlinkIc" />
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div >

      {/* End Text */}
      <div className="flex justify-center mb-50">
        <p className="text-2xl text-center mx-12 sm:mx-0 font-primary font-normal">
          I’m constantly learning and more projects will be added soon.
        </p>
      </div>
    </>
  );
}

export default App;
