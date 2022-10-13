import React from "react";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import PostUser from "./pages/usarios/postUser";
import Tecnicos from "./pages/tecnicos/Tecnicos";
import Edit from "./pages/edit/styles/edit";
import Feed from "./pages/Home/home";


function App() {
  return( 
   <Router>
      <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path="/user" element={<PostUser/>}/>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/tecnicos" element={<Tecnicos/>}/>
      </Routes>
   </Router>
  )
 
  
}

export default App;
