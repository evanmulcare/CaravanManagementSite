import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent, TooptipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings,} from './components';
import { Dashboard, Payments, Calendar, Employees, Tenants, Kanban, Editor, ColorPicker, Pie, Line, NewTenant, NewEmployee} from './pages';
import {About,Photos, Public, Contact} from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';
import ProtectedRoute from './auth/ProtectedRoute';


const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
          <div className='flex relative dark:bg-main-dark-bg'>
              <div className='fixed right-4 bottom-4 ' style={{zIndex: '1000'}}>
                <TooltipComponent content="Settings" position='top'>
                  <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{ background: 'blue', borderRadius: '50%'}}>
                    <FiSettings />
                  </button>
                </TooltipComponent>
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
        
                    <Route element={<ProtectedRoute />}>
                      <Route path='/dashboard' element={<Dashboard />} />
                                {/*Pages */}
                   
                        <Route path='/employees' element={<Employees />} />
                        <Route path='/new-employee' element={<NewEmployee />} />
                        <Route path='/tenants' element={<Tenants />} /> 
                        <Route path='/new-tenant' element={<NewTenant />} />
                        <Route path='/payments' element={<Payments />} />


                      {/*Apps */}
                      <Route path='/tasks' element={<Kanban />} />
                      <Route path='/blog' element={<Editor />} />
                      <Route path='/calendar' element={<Calendar />} />
                      <Route path='/color-picker' element={<ColorPicker />} />

                      {/*Charts */}
                      <Route path='/line' element={<Line />}/>
                      <Route path='/pie' element={<Pie />} />
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