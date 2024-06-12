
 // src/App.js
 import React, { useState ,createContext } from 'react';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import  Dash  from './compenents/Dash';
 import Home from './compenents/Home';
 import Products from './compenents/Products';
 import Services from './compenents/Services';
 import Contact from './compenents/Contact';
 import HireUs from './compenents/HireUs';
 import InSights from './compenents/InSights';
 import Testimonials from './compenents/Testimonials';
 import Reeact from './compenents/react';
 import Flu from './compenents/Flutter';
 import Android from './compenents/Andro';
 import Me from './compenents/Mean';
 import Node from './compenents/Node';
 import RW from './compenents/ReactWeb';
 import J from './compenents/Join';
 import SH from './compenents/in';
 import Ser from './compenents/ser';
 import R from './compenents/Regis';
 import M from './compenents/More';
 import './App.css'; 
 import Lay from './compenents/layout';


 export const ThemeContext = React.createContext(null);

const WellsFargo = () => <div><h1>Wells Fargo Page</h1></div>;
const BankOfAmerica = () => <div><h1>Bank of America Page</h1></div>;
 const ChaseBank = () => <div><h1>Chase Bank Page</h1></div>;
 const Citibank = () => <div><h1>Citibank Page</h1></div>;



 function App() {

   const [theme , setTheme] = useState("light");
   const toggleTheme = () => {

    setTheme((curr) => (curr === "light" ? "dark": "light"));
   }
  
   return (

    <ThemeContext.Provider value={{theme , toggleTheme }}>

    <div className="App" id={theme}>


       <Router>
         <Dash />
         <Routes>
         <Route path="/" element={<Home />} /> 
         <Route path="/products" element={<Products/>} /> 
          <Route path="/wells-fargo" component={WellsFargo} />
         <Route path="/bank-of-america" component={BankOfAmerica} />
         <Route path="/chase-bank" component={ChaseBank} /> 
         <Route path="/citibank" component={Citibank} />
         <Route path="/Services" element={<Services/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/hireus" element={<HireUs/>} />
         <Route path="/insights" element={<InSights/>} />
         <Route path="/test" element={<Testimonials/>} />
         <Route path="/ser" element={<Ser/>} />
         <Route path="/react" element={<Reeact/>} />
         <Route path="/flu" element={<Flu/>} />
         <Route path="/an" element={<Android/>}/>
         <Route path="/mean" element={<Me/>} />
         <Route path="/ree" element={<RW/>} />
         <Route path="/no" element={<Node/>} />
         <Route path="/join" element={<J/>} />
         <Route path="/in/:roomId" element={<SH/>} />
         <Route path="/reg" element={<R/>} />
         <Route path="/vacancy" element={<M/>} />
         <Route path="/lay" element={<Lay/>} />

        
         </Routes>
    </Router>
          </div>

          </ThemeContext.Provider>
  );
 }

 export default App;
