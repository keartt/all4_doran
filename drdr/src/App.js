import { Route, Routes } from "react-router";
import Test from "./pages/Test";
import AddFarm from "./pages/tree/AddFarm";
import ViewFarm from "./pages/tree/ViewFarm";
import ViewCarrot from "./pages/tree/ViewCarrot";
import Login from "./pages/member/Login";
import Signup from "./pages/member/Signup";
import Email from "./pages/member/Email";
import Pw from "./pages/member/Pw";
import Pw_Reset from "./pages/member/Pw_Reset";
import Home from "./pages/tree/home.main";

import AddCarrot from "./pages/tree/AddCarrot";

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>

        <Route path="Login" element={<Login/>}/>
        <Route path="Signup" element={<Signup/>}/>
        <Route path="Email" element={<Email/>}/>
        <Route path="Pw" element={<Pw/>}/>
        <Route path="Pw_Reset" element={<Pw_Reset/>}/>
        <Route path="/AddFarm/:CorD" element={<AddFarm/>}/>
        <Route path="/ViewFarm/:farmId" element={<ViewFarm/>}/>
        {/* <Route path="AddCarrot" element={<AddCarrot/>}/> */}
        <Route path="ViewCarrot/:carrotId" element={<ViewCarrot/>}/>
        <Route path="Home" element={<Home/>}/>

        <Route path="AddCarrot/:farmId" element={<AddCarrot/>}/>
        

        
      </Routes>
    </div>
    
  );
}

export default App;