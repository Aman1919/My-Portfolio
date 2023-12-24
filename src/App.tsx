import React from 'react';
import NavBar from "./Components/header";
import Home from "./Components/home";
import Skills from "./Components/skills";
import Projects from "./Components/projects";
import Footer from './Components/footer';

function App() {

  return (
<div className='bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] w-full from-gray-900 to-gray-600 bg-gradient-to-r text-white'>
<NavBar/>
<Home/>
<Skills/>
      <Projects />
      
      <Footer/>
</div>
  );
}

export default App;
