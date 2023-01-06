import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const Dashboard = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;


  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-full p-8 pt-9 m-3 bg-hero-pattern bg-no-repat bg-cover bg-center'>
            <div className='flex justify-between items-center'>
                <div>
                  <p className='font-bold text-gray-400'>Earnings</p>
                  <p>20,0000</p>
                </div>
            </div>
        </div>

        <div>
        <div>
            <div className="row align-items-center profile-header">
              <div className="col-md-2 mb-3">
                <img
                  src={picture}
                  alt="Profile"
                  className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                />
              </div>
              <div className="col-md text-center text-md-left">
                <h2>{name}</h2>
                <p className="lead text-muted">{email}</p>
              </div>
            </div>
            <div className="row">
              <pre className="col-12 text-light bg-dark p-4">
                {JSON.stringify(user, null, 2)}
              </pre>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard