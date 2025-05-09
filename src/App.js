/*import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function BuggyComponent() {
  const [throwError, setThrowError] = useState(false);

  if (throwError) {
    throw new Error('BuggyComponent crashed!');
  }

  return (
    <div>
      <button onClick={() => setThrowError(true)}>
        Crash the component
      </button>
    </div>
  );
}





function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // Reset app state here if needed
        }}
      >
        <BuggyComponent />
        <A/>

      </ErrorBoundary>
    </div>
  );
}

export default App;


const A = () => {
  return (
    <div>This is your testing time. dont give up</div>
  )
}*/


/*import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function UserProfile({ userId }) {
  if (!userId) {
    throw new Error('User ID is required to load profile');
  }

  // Imagine this is a fetch to an API
  const user = {
    id: userId,
    name: 'Jane Doe',
    email: 'jane@example.com'
  };

  return (
    <div style={{ padding: '1rem', border: '1px solid gray' }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}




function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" style={{ border: '1px solid red', padding: '1rem' }}>
      <p>Oops! Failed to load user:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Dashboard</h1>

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // Reset anything necessary (e.g. re-fetch logic or local state)
        }}
      >
        <UserProfile userId={null} /> {/* This will simulate a failure 
      </ErrorBoundary>
    </div>
  );
}

export default App;*/






/*import React, { useEffect, useState } from 'react';
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';

// Fallback UI component
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

// A component that might throw an error (e.g. due to failed API)
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const handleError = useErrorHandler(); // hook to delegate errors to ErrorBoundary

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('User not found');
        }
        return res.json();
      })
      .then(setUser)
      .catch((err) => {
        setError(err);
      });
  }, [userId]);

  // Forward error to ErrorBoundary
  if (error) handleError(error);

  return user ? <div>{user.name}</div> : <p>Loading...</p>;
}

// App with ErrorBoundary
export default function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // optional: reset any state when "Try again" is clicked
      }}
    >
      <UserProfile userId={9999} /> {/* invalid ID to simulate error 
    </ErrorBoundary>
  );
}*/

/*import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate,useNavigate } from 'react-router-dom';

const isAuthenticated = () => {
  return !!localStorage.getItem('token');

};


const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" replace />;
}

const PrivateRoute = ({ children }) => {
  const auth = isAuthenticated();

  return auth ? children : <Navigate to="/" replace />;
};

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('token', 'demo-token');
    console.log(isAuthenticated())

    navigate('/dashboard');
  };

  return <button onClick={handleLogin}>Login</button>;

};


const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    console.log(isAuthenticated())
  
    navigate('/');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default function App() {
  console.log(isAuthenticated())

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}*/



  /*import React from 'react'
  import { BrowserRouter,Route,Routes,Navigate,useNavigate } from 'react-router-dom' 

   const auth=()=>{
       return !!localStorage.getItem('token')
   }

      const ProtectedRoute=({children})=>{
       
        return auth?children:<Navigate to='/' replace/>

      }

    
     
     const Login = () => {
          const navigate=useNavigate()
    
          const handleLogin=()=>{
             localStorage.setItem('token','life at stake')
             navigate('/dashboard')
            }

       return <button onClick={handleLogin}>Login</button>
       
     }

     const Dashboard=()=>{
         const navigate=useNavigate()
        
         const handleLogout=()=>{
          localStorage.removeItem('token')
          navigate('/')
         }
   
         return (
          <div>
             <p>Dashboard component</p>
             <button onClick={handleLogout}>Logout</button>
          </div>
         )

     }
     
    
  const App = () => {
    return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
       </Routes>
       </BrowserRouter>
    )
  }
  
  export default App*/


   
  




           /*import React,{useState} from 'react'
            const countryStateData={
              usa:['michigan','texas'],
              india:['telangana','karnataka']
            }
           const App = () => {
            const[selectedCountry,setSelectedCountry]=useState('')
            const[states,setStates]=useState([])

              const handleChange=(e)=>{
                const country=e.target.value
                setSelectedCountry(country)
                setStates(countryStateData[country])
              }
             return (
               <div>
                    <select value={selectedCountry} onChange={handleChange}>
                         <option>Select Country</option>
                         {Object.keys(countryStateData).map(country=>(
                          <option key={country}>{country}</option>
                         ))}
                    </select>
                    <br/>
                    <select disabled={!selectedCountry}>
                         <option>Select state</option>
                         {states.map(state=>(
                          <option key={state}>{state}</option>
                         ))}
                    </select>

               </div>
             )
           }
           
           export default App*/





           import React,{useState} from 'react'
            const Step1 = ({formData,changeHandler,handleNext}) => {
             return (
               <div>
                <input type='text' name='name' value={formData.name} onChange={changeHandler}/>
                <input type='email' name='email' value={formData.email} onChange={changeHandler}/>
                 <button onClick={handleNext}>Next</button>
               </div>
             )
           }
           
           const Step2 = ({formData,changeHandler,handleNext,handlePrev}) => {
            return (
              <div>
                <input type='text' name='address' value={formData.address} onChange={changeHandler}/>
                 <button onClick={handleNext}>Next</button>
                 <button onClick={handlePrev}>Prev</button>
                 </div>
                )
              }
          
          const Step3 = ({formData,changeHandler,handleNext,handlePrev}) => {
            return (
              <div>
                <select value={formData.paymentMethod} onChange={changeHandler}>
                     <option>Select PaymentMethod</option>
                     <option>Creditcard</option>
                     <option>Paypal</option>
                </select>
                <button onClick={handleNext}>Next</button>
                <button onClick={handlePrev}>Prev</button>
                </div>
            )
          }
          
          const Step4 = ({formData,handlePrev}) => {
            return (
              <div>
                <p>{formData.name}</p>
                <p>{formData.email}</p>
                <p>{formData.address}</p>
                <p>{formData.paymentMethod}</p>
                <button type='button' onClick={handlePrev}>Prev</button>
                <button type='submit'>Submit</button>

              </div>
            )
          }
          




           const App = () => {
            const[formData,setFormData]=useState({
              name:'',
              email:'',
              address:'',
              paymentMethod:''
             })
             const[step,setStep]=useState(1)
             const[submited,setSubmited]=useState(false)

             const handleNext=()=>{
              setStep(p=>p+1)
             }

             const handlePrev=()=>{
              setStep(p=>p-1)
             }
            const changeHandler=(e)=>{
              const{name,value}=e.target
              setFormData((prev)=>({...prev,[name]:value}))
            }

            const submitHandler=(e)=>{
              e.preventDefault()
              setSubmited(true)


            }

              return(
               <div>
                {!submited?(
                 <form onSubmit={submitHandler}>
                    {step===1 &&<Step1 formData={formData} changeHandler={changeHandler} handleNext={handleNext}/>}
                    {step===2 &&<Step2 formData={formData} changeHandler={changeHandler} handleNext={handleNext} handlePrev={handlePrev}/>}
                    {step===3 &&<Step3 formData={formData} changeHandler={changeHandler} handleNext={handleNext} handlePrev={handlePrev}/>}
                    {step===4 &&<Step4 formData={formData} handlePrev={handlePrev} submitHandler={submitHandler}/>}
                 </form>
                ):(
                  <div>
                      <h1>{formData.name}</h1>
                      <h1>{formData.email}</h1>
                      <h1>{formData.address}</h1>
                      <h1>{formData.paymentMethod}</h1>
                    </div>
                  )}
               </div>
             )
           }
           
           export default App