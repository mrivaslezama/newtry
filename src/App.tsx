import {useState} from 'react'
import logo from './assets/online-research-icon.svg'
import './App.css'
import { StateSelector } from './components/StateSelector';

function App() {
  const [currentState, setCurrentState ] = useState('Digital Entrepreneur');
  return <main className="bg-gray-50">

 <section className="text-gray-400 body-font bg-gray-900">
  <div className="container mx-auto p-6">
      <div className="w-full flex items-center justify-between">
          <img src={logo} className= "rounded full w-20 h-20 px-4" alt="Image" />

      <a className="flex items-center text-white-900 
                  no-underline hover:no-underline font-bold 
                  text-2xl lg:text-2xl" href="#">
        DigitalEntrepreneur
      </a>

      <div className="flex w-1/2 justify-end">
        <div className="">
          <button type="button"  className="inline-block 
                px-6 py-2.5 bg-blue-600 text-white 
                font-medium text-xs leading-tight 
                uppercase rounded shadow-md hover:bg-rose-700 
                hover:shadow-lg focus:bg-rose-700 
                focus:shadow-lg focus:outline-none 
                focus:ring-0 active:bg-rose-800 active:shadow-lg 
                transition duration-150 ease-in-out">Contact</button>
        </div>
      </div>
    </div>
  </div>

  <div className="container px-5 py-24 mx-auto">

    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-blue-400 tracking-widest font-medium title-font mb-1">Web developer</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Hi, I am Miguel</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">I work with web tecnologies, Ruby on Rails, Python, Selenium with python, Postgresql, Vite-React, Typescript, TailwindsCss and Bootstrap.</p>
    </div>
    <div className="flex flex-wrap">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
        <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">Python</h2>
        <p className="leading-relaxed text-base mb-4">I started my programming journey with python, and to this day keep learning about this amazing and powerful language, I still have done very few basic projects with Python.</p>
      
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
        <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">Ruby on Rails</h2>
        <p className="leading-relaxed text-base mb-4">I learn Ruby on Rails with this bootcamp from DesafioLatam, which gives an amazing wide range of topics related to business in digital and web development, Ux-Ui, Figma, Git and Git-hub, bootstrap, Postgresql and many others.</p>
        <a className="text-blue-400 inline-flex items-center">https://empieza.desafiolatam.com/v/tC9LKFWtFr72gbb1X5o8CRqL
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
        <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">Vite-React-TailwindCSS</h2>
        <p className="leading-relaxed text-base mb-4">Recently found out that all jobs available required this, mainly React and TailwindCss, so I start learning about it... so I am on my way to become proficient.</p>
        <a className="text-blue-400 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
        <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">Selenium</h2>
        <p className="leading-relaxed text-base mb-4">I bought a course on Selenium with python, I am about to finish it, but the course was kind of old... However, I am learning to automate with selenium and python, hopefully to use it for testing or scrape data.</p>
        <a className="text-blue-400 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <button className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
  </div>

  <div className='flex items-center text-gray-900 
                    no-underline hover:no-underline font-bold 
                    text-2xl lg:text-4xl'>

      <div className='App Appheader mt-8 md:mt-0'>
        <h1 className="text-m font-semibold text-gray-400 tracking-wider uppercase">What I do? { currentState }</h1>


        <StateSelector 
        selectedState={currentState}
        onStateChange={ (state) => setCurrentState(state)}
        />
      </div>
  </div>

  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Digital Entrepreneur</h1>
        <div className="h-1 w-20 bg-blue-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90"> Self employed with the addition of operating via digital platforms. They rely on Information Technology (IT) and digital media tools to find potential customers. </p>
    </div>
    <div className="flex flex-wrap -m-4" id="Gallery">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"/>
          <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">Chichen Itza</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content"/>
          <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">Colosseum Roma</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content" />
          <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">Great Pyramid of Giza</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"/>
          <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">San Francisco</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    </div>
   </div>
  </section>
 </main>
}
export default App
