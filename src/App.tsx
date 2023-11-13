import {useState} from 'react'
import logo from './assets/logo.svg'
import './App.css'
import { StateSelector } from './components/StateSelector';

function App() {

  const [currentState, setCurrentState ] = useState('none');

  return <main className="bg-gray-50">
    <div className="container mx-auto p-6">
        <div className="w-full flex items-center justify-between">
      
  <img src={logo} className= "rounded full w-20 h-20 px-4" alt="Image" />


        <a className="flex items-center text-gray-900 
                    no-underline hover:no-underline font-bold 
                    text-2xl lg:text-2xl" href="#">
          MR_Dev
        </a>

        <div className="flex w-1/2 justify-end">
          <div className="">
            <button type="button" className="inline-block 
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

  <div className="container mx-auto p-6">
    <div className="w-full flex items-center justify-between">
      <h1 className="flex items-center text-gray-900 
                    no-underline hover:no-underline font-bold 
                    text-2xl lg:text-4xl">
         Hi, I am Miguel
      </h1>
      <div>
        <div className="mt-12 md:mt-0">
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase"> Creamos productos digitales</h3>
          <span></span>
          <h3> Asesoramos todas las etapas del desarrollo web</h3>
        </div>

      </div>  
    </div>
  </div>

<section className="container mx-auto p-6">
  <div className='flex items-center text-gray-900 
                    no-underline hover:no-underline font-bold 
                    text-2xl lg:text-4xl'>

      <div className='App Appheader mt-12 md:mt-0'>
        <h1 className="text-m font-semibold text-gray-400 tracking-wider uppercase">What I do? { currentState }</h1>

        <StateSelector 
        selectedState={currentState}
        onStateChange={ (state) => setCurrentState(state)}
        />
      </div>
  </div>
</section>
</main>
}