import { BrowserRouter, Routes, Route, DefaultRoute, Navigate } from "react-router-dom";
import AddEmployee from "./addEmployee";
import Employee from "./employee";
import Home from "./home";
import Test from "./test";
import PageNotFound from "./pageNotFound";

const router = () =>{
    
    return(
        <div>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/mysecondreact"/>}/>
                    
                    <Route exact path="/mysecondreact" element={<Home/>}/>
                    <Route exact path="/test" element={<Test/>}/> 
                    <Route exact path="/mysecondreact/employees" element={<Employee/>}/>
                    <Route exact path="/mysecondreact/add" element={<AddEmployee/>}/>
                    <Route exact path="/mysecondreact/edit/:employeeid" element={<AddEmployee/>}/>
                    <Route exact path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    )

}

export default router;