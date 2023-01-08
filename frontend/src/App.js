import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, } from './components';
import { Dashboard, Payments, Calendar, Employees, Tenants, Kanban, Editor, NewTenant, NewEmployee, SiteInfo, Exit, SignIn, Payroll, Expenses} from './pages';
import {About,Photos, Public, Contact} from './pages';
import { useStateContext } from './contexts/ContextProvider';
import ProtectedRoute from './auth/ProtectedRoute';


const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
          <div className='flex relative dark:bg-main-dark-bg'>
              <div className='fixed right-4 bottom-4 ' style={{zIndex: '1000'}}>
              </div>
              {/*SIDEBAR */}
              {activeMenu ? (
                <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                    <Sidebar />
                </div>
              ) : (
                <div className='w-0 dark:bg-secondary-dark-bg'>
                    <Sidebar />
                </div>
              )}
              {/*NAVBAR */}
              <div className={
                `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
                }>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-fu;ll'>
                        <Navbar />
                    </div>
              
              <div>
              <Routes>
                  {/*Dash */}
                  <Route path='/home' element={<Public />} />
                  <Route path='/photos' element={<Photos />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/sign-in' element={<SignIn />} />
        
                    <Route element={<ProtectedRoute />}>
                      <Route path='/dashboard' element={<Dashboard />} />
                                {/*People */}
                   
                        <Route path='/employees' element={<Employees />} />
                        <Route path='/new-employee' element={<NewEmployee />} />
                        <Route path='/tenants' element={<Tenants />} /> 
                        <Route path='/new-tenant' element={<NewTenant />} />

                        {/*Money */}
                        <Route path='/payments' element={<Payments />} />
                        <Route path='/payroll' element={<Payroll />} />
                        <Route path='/expenses' element={<Expenses />} />


                      {/*Planning */}
                      <Route path='/tasks' element={<Kanban />} />
                      <Route path='/blog' element={<Editor />} />
                      <Route path='/calendar' element={<Calendar />} />
                     

                      {/*Members */}
                      <Route path='/SiteInfo' element={<SiteInfo />} />
                      <Route path='/exit' element={<Exit />} />
                   </Route>
        

                </Routes>
              </div>
              </div>
          </div>
      </BrowserRouter>
    </div>
  );
};

export default App 