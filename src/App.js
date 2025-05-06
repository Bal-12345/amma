



import React, { useState } from 'react'
const App = () => {
   const[count,setCount]=useState(0)
   const handler=()=>{
    setCount(p=>p+1)
   }
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handler}>+</button>
    </div>
  )
}

export default App





























































































  /*import React,{useState,useEffect} from 'react'
  const App = () => {
     const[data,setData]=useState([])
     const[error,setError]=useState('')
     const[loading,setLoading]=useState(true)
     

     useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(
           res=>{
            if(!res.ok){
              throw new  Error('Network error')
            
            }
            return res.json()
           }
        ).then(
          json=>{
             setData(json)
             setLoading(false)
          }
        ).catch(
          err=>{
            setError(err.message)
            setLoading(false)
          }
        )
     },[])

     if(error) return <p>{error}</p>
     if(loading) return <p>Loading...</p>


    return (
      <div>
          
             <table border='1'>
              <thead>
                <tr><th>Name</th><th>City</th></tr>
              </thead>
              <tbody>
                {data.map(i=>(
                  <tr key={i.id}>
                  <td>{i.name}</td>
                  <td>{i.address.city}</td>
                  </tr>
                ))}
                
              </tbody>
            </table>
          
      
      </div>
        
    )
  }
  
  export default App*/


  
  /*import React, { useState,useEffect } from 'react'
    
  const App = () => {
    const[count,setCount]=useState(0)
    const[is,setIs]=useState(false)
    
    useEffect(()=>{
      if(is){
      let interval=setInterval(()=>{
          setCount(p=>p+1)
    },1000)

    return ()=>{
      clearInterval(interval)
    }
  }

    },[is])

    const toggle=()=>{
      setIs(!is)
    }

    return (
      <div>
        <h1>{count}</h1>
        <button onClick={toggle}>Toggle</button>
      </div>
    )
  }
  
  export default App*/



  /*import React, { useState } from 'react';
  function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);
  
    function handleChange(key, value) {
      setValues((prev) => ({ ...prev, [key]: value }));
    }
  
    function getInputProps(key) {
      const value = values[key];
      let isCheckbox = typeof value === 'boolean';
      return {
        [isCheckbox ? 'checked' : 'value']: value,
        onChange: (e) => {
          const { type, value, checked } = e.target;
          let finalValue = value;
          if (type === 'checkbox') {
            finalValue = checked;
          } else if (type === 'number') {
            finalValue = Number(value);
          }
  
          handleChange(key, finalValue);
        },
      };
    }
    return { values, handleChange, getInputProps };
  }




  
  
  export default function App() {
    const { values, getInputProps } = useForm({
      name: '',
      email: '',
      age: 0,
      isSubscribed: false,
    });
    return (
      <form>
        <input type="text" {...getInputProps('name')} />
        <input type="text" {...getInputProps('email')} />
        <input type="number" {...getInputProps('age')} />
        <input type="checkbox" {...getInputProps('isSubscribed')} />
  
        <pre>{JSON.stringify(values, null, 2)}</pre>
      </form>
    );
  }*/
  

     
    /*setTimeout(() => console.log('timeout'), 0);
    setImmediate(() => console.log('immediate'));
    Promise.resolve().then(() => console.log('promise'));
    process.nextTick(() => console.log('nextTick'));*/
    

   


            
    /*class Singleton {
      static instance;
    
      static getInstance() {
        if (!Singleton.instance) {
          Singleton.instance = new Singleton();
        }
        return Singleton.instance;
      }
    
      /*getTime() {
        return new Date();
      }
    }
    
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();
    
    console.log(instance1 === instance2);*/ // ✅ true — same instance
    


/*import {BrowserRouter,Routes,Route,Link,useNavigate,useLocation,Navigate} from 'react-router-dom'
import React,{useState} from 'react'
  const isAuth=()=>!!localStorage.getItem('token')
  const PrivateRoute=({children})=>{
  const location=useLocation()
  return isAuth()?children:<Navigate to='/' state={{from:location}} replace/>
 }

 const Login=()=>{
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate()
  const location=useLocation()
  const from=location.state?.from?.pathname||'/dashboard'

  const loginHandle=()=>{
    if(email ==='user@gmail.com' && password===123){
       localStorage.setItem('token','157');
       navigate(from,{replace:true})
    }else{
      alert('fill the credentials')
    }

  }

  return (
    <div>
    <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={loginHandle}>Login</button>
    </div>
  )

  }

  const Dashboard=()=><h2>Dashboard</h2>
  const Profile=()=><h2>Profile</h2>
  const NotFound=()=><h2>404</h2>
 
  const Navbar=()=>{
  const navigate=useNavigate()
  const logout=()=>{localStorage.removeItem('token');navigate('/')}
  return isAuth()?(
        <div>
       <Link to='/dashboard'>Dashboard</Link>
       <Link to='/profile'>Profile</Link>
       <button onClick={logout}>Logout</button>
       </div>
     ):null
}


  const App = () => {
    return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Login/>}/>
       <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
       <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
       <Route path='*' element={<NotFound/>}/>
       </Routes>
      </BrowserRouter>
    )
  }
  
  export default App*/

  /*import React, { useState, useMemo } from 'react';

  const debounce = (fn, delay) => {
    let timeId;
    return (...args) => {
      if (timeId) {
        clearTimeout(timeId);
      }
      timeId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };
  
  const items = Array.from({length:1000},(_,i)=>`item ${i+1}`)
    
  
  const App = () => {
    const [input, setInput] = useState('');
    const [filteredItems, setFilteredItems] = useState(items);
  
    const handleSearch = (query) => {
      const lowerQuery = query.toLowerCase();
      const results = items.filter(item =>
        item.toLowerCase().includes(lowerQuery)
      );
      setFilteredItems(results);
    };
  
    const debouncedSearch = useMemo(() => debounce(handleSearch, 3000), []);
  
    const handleChange = (e) => {
      const value = e.target.value;
      setInput(value);
      debouncedSearch(value);
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search fruits..."
          value={input}
          onChange={handleChange}
      
        />
        <ul>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => <li key={idx}>{item}</li>)
          ) : (
            <li>No results found</li>
          )}
        </ul>
      </div>
    );
  };
  
  export default App;*/
  

/*import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://jsonplaceholder.typicode.co/users', { signal })
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => setUsers(data))
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setError(err.message);
        }
      });

    return () => {
      controller.abort(); // 🧹 Abort the fetch if component unmounts
    };
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
export default UserList*/

 //useLayout EX-1
   /*import React,{ useState, useEffect } from 'react';

export default function App() {
  const [width, setWidth] = useState();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // Trigger initial set
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ 
      background: width > 600 ? 'lightgreen' : 'lightcoral',
      height: '100vh'
    }}>
      <h1>{width ? `Width: ${width}` : 'Loading...'}</h1>
    </div>
  );
}*/

                 //useLayout EX-2
/*import { useState, useEffect } from 'react';

export default function FlickerEffect() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const h = window.innerHeight;
    setHeight(h);
  }, []);

  return (
    <div
      style={{
        height: height || 0,
        background: 'skyblue',
        transition: 'height 0.3s ease',
      }}
    >
      {height === 0 ? 'Loading layout...' : `Height: ${height}px`}
    </div>
  );
}*/

                  //useLayout EX-3
/*import { useState, useEffect } from 'react';

export default function FlickerEffect() {
  const [color, setColor] = useState('blue');

  useEffect(() => {
    setColor('lightgreen');
  }, []);

  return (
    <div style={{ backgroundColor: color, height: '100vh' }}>
      <h1>Hello</h1>
    </div>
  );
}*/



/*(function() {
  console.log(1); 
  setTimeout(function(){console.log(2)}, 1000); 
  setTimeout(function(){console.log(3)}, 0); 
  new Promise((res,rej)=>{
    console.log('promise');
  });
  console.log(4);
})()*/


  /*import React,{useState,useEffect} from 'react'
    const A = ({onSearch}) => {
    const[input,setInput]=useState('')
    const[debouncedValue,setDebouncedValue]=useState('')
      
    useEffect(()=>{
      let timer =setTimeout(()=>{
         setDebouncedValue(input)
      },3000)

      return ()=>clearTimeout(timer)
    },[input])

    useEffect(()=>{
       onSearch(debouncedValue)
    },[debouncedValue,onSearch])
      return (
      <div>
        <input type='text' placeholder='search...' onChange={(e)=>setInput(e.target.value)}/>

      </div>
    )
  }

  
  const App = () => {
    const handleSearch=(query)=>{
         console.log('search',query)
    }
    return (
      <div>
          <A onSearch={handleSearch}/>
      </div>
    )
  }
  
  export default App*/



  /*import React, { useLayoutEffect } from "react";
  //import "./style.css";
  
  const ScrollRestoration = () => {
    useLayoutEffect(() => {
      window.scrollTo(100, 0); // scroll right 100px instead of down
    }, []);
  
    return (
      <div
        style={{
          width: "200vw", // make the page wide enough to scroll horizontally
          padding: "20px",
      
        }}
      >
        Scroll horizontally restored on mount!
    
      </div>
    );
  };
  
  export default ScrollRestoration;*/


  
  /*import React, { useLayoutEffect } from "react";
  
  const ScrollRestoration = () => {
    useLayoutEffect(() => {
      window.scrollTo(0, 100);
    }, []);
  
    return <div style={{ height: "200vh", padding: "20px" }}>
      Scroll position restored on mount!
      

      </div>;
  };
  
  export default ScrollRestoration*/ 

/*import React, { useState, useEffect } from 'react';
 const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(input);
    }, 3000);

    return () => clearTimeout(timer);
  }, [input]);

  
  useEffect(() => {
    if (debouncedValue !== '') {
      onSearch(debouncedValue);
    }
  }, [debouncedValue, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />
    );
}

const App = () => {
const handleSearch = (query) => {
    console.log('Searching for:', query);
  };
   return (
    <div>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default App;*/


/*import React, { useState, useMemo, useEffect } from 'react';

const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

const App = () => {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);

  const data = useMemo(() => {
    return Array.from({ length: 10000 }, (_, i) => ({
      id: i,
      name: `Item ${i}`,
    }));
  }, []);

  const handleSearch = useMemo(
    () =>
      debounce((searchTerm) => {
        const lower = searchTerm.toLowerCase();
        const result = data.filter((item) =>
          item.name.toLowerCase().includes(lower)
        );
        setFiltered(result);
      }, 3000),
    [data]
  );

  useEffect(() => {
    handleSearch(query);
  }, [query, handleSearch]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search 10,000 items..."
        onChange={(e) => setQuery(e.target.value)}
        />

      <ul>
        {filtered.slice(0, 50).map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      {filtered.length > 50 && (
        <p>Showing first 50 of {filtered.length} results</p>
      )}
    </div>
  );
};

export default App;*/


  /*import React,{useState,useEffect} from 'react'
  
  const App = () => {
    const[data,setData]=useState([])
    const[error,setError]=useState('')
    useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/users').then(
          res=>{
            if(!res.ok){
              throw new Error('http error')
            }
            return res.json()
          }
         ).then(
           json=>setData(json)
        ).catch(
          error=>setError(error.message)
         )
    },[])
    return (
      <div>
        {error && <p>{error}</p>}
        <ul>
        {data.map(i=>(
            <div key={i.id}>
            <li>{i.name}</li>
            <li>{i.username}</li>
           </div>
          ))}
        </ul>
      </div>
    )
  }
  
  export default App*/



  /*import React from 'react';
  import { FixedSizeList as List } from 'react-window';
  
  const MyList = () => {
    const itemCount = 1000;
  
    // Each row renderer
    const Row = ({ index, style })=>(
       <div style={style}>
         Life {index}
      </div>
    );
  
    return (
      <List
        height={400}         // height of the list container
        itemCount={itemCount}
        itemSize={35}        // height of each item
        width={300}          // width of the list container
      >
        {Row}
      </List>
    );
  };
  
  export default MyList;*/


  /*import React, { useState, useMemo } from 'react';
  import { FixedSizeList as List } from 'react-window';
  
  const generateData = (num) => {
    return Array.from({ length: num }, (_, i) => `Item ${i + 1}`);
  };
  
  const VirtualizedSearchList = () => {
    const [search, setSearch] = useState('');
    const data = useMemo(() => generateData(10000000), []);
  
    // Filter the data based on search
    const filteredData = useMemo(() => {
      return data.filter(item =>
        item.toLowerCase().includes(search.toLowerCase())
      );
    }, [search, data]);
  
    const Row = ({ index, style }) => (
      <div style={style}>
        {filteredData[index]}
      </div>
    );
  
    return (
      <div style={{ padding: '1rem' }}>
        <input
          type="text"
          value={search}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '8px',
            width: '100%',
            marginBottom: '1rem',
            fontSize: '16px'
          }}
        />
  
        <List
          height={400}
          itemCount={filteredData.length}
          itemSize={35}
          width={'100%'}
        >
          {Row}
        </List>
      </div>
    );
  };
  
  export default VirtualizedSearchList;*/


  /*import React, { useCallback, useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';

const PAGE_SIZE = 50;

const mockFetchData = async (startIndex, search) => {
  // Simulate delay and generate mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = Array.from({ length: PAGE_SIZE }, (_, i) => {
        const index = startIndex + i;
        return `Item ${index + 1} ${search ? `- match ${search}` : ''}`;
      });
      resolve(data);
    }, 300);
  });
};

const VirtualMillionsList = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [loadedPages, setLoadedPages] = useState(new Set());

  const loadPage = useCallback(async (page) => {
    if (loadedPages.has(page)) return;
    const startIndex = page * PAGE_SIZE;
    const data = await mockFetchData(startIndex, search);
    setItems(prev => {
      const next = [...prev];
      data.forEach((item, i) => next[startIndex + i] = item);
      return next;
    });
    setLoadedPages(prev => new Set(prev).add(page));
  }, [search, loadedPages]);

  useEffect(() => {
    // Reset on new search
    setItems([]);
    setLoadedPages(new Set());
    loadPage(0);
  }, [search]);

  const Row = ({ index, style }) => {
    const page = Math.floor(index / PAGE_SIZE);
    useEffect(() => {
      loadPage(page);
    }, [page]);

    return (
      <div style={style}>
        {items[index] || 'Loading...'}
      </div>
    );
  };

  return (
    <div style={{ padding: '1rem' }}>
      <input
        type="text"
        value={search}
        placeholder="Search millions..."
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: '8px',
          width: '100%',
          marginBottom: '1rem',
          fontSize: '16px'
        }}
      />

      <List
        height={400}
        itemCount={1_000_000}
        itemSize={35}
        width={'100%'}
      >
        {Row}
      </List>
    </div>
  );
};

export default VirtualMillionsList;*/


/*import React, { useEffect, useMemo, useState, useTransition, useDeferredValue } from 'react';
import { FixedSizeList as List } from 'react-window';

const generateLargeData = () => {
  // Simulate 1 million items
  return Array.from({ length: 1_000_000 }, (_, i) => `Item #${i + 1}`);
};

const VirtualizedSearch = () => {
  const [input, setInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isPending, startTransition] = useTransition();
  const deferredInput = useDeferredValue(input);
  const data = useMemo(() => generateLargeData(), []);

  // Simulate expensive filtering
  const filterData = (term) => {
    if (!term) return data;
    return data.filter((item) => item.toLowerCase().includes(term.toLowerCase()));
  };

  // Recompute filteredData when deferred input changes
  useEffect(() => {
    startTransition(() => {
      const results = filterData(deferredInput);
      setFilteredData(results);
    });
  }, [deferredInput]);

  // Initial load: show all
  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  // Row renderer for react-window
  const Row = ({ index, style }) => (
    <div style={style}>{filteredData[index]}</div>
  );

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search..."
        style={{
          padding: '10px',
          width: '100%',
          fontSize: '16px',
          marginBottom: '1rem',
        }}
      />

      {isPending && <div style={{ marginBottom: '1rem' }}>🔄 Filtering...</div>}

      <List
        height={400}
        itemCount={filteredData.length}
        itemSize={35}
        width={'100%'}
      >
        {Row}
      </List>
    </div>
  );
};

export default VirtualizedSearch;*/


/*setTimeout(() => console.log('A'), 0);

Promise.resolve().then(() => console.log('B'));

queueMicrotask(() => console.log('C'));

console.log('D');*/

    



/*import React, { useState } from "react";
import {BrowserRouter, Routes, Route, Navigate, Link, useNavigate, useLocation } from "react-router-dom";

const isAuth = () => !!localStorage.getItem("token");
const PrivateRoute = ({ children }) => {
const location = useLocation();
return isAuth() ? children : <Navigate to="/" state={{ from: location }} replace />;
};
  
  const Login = () => {
  const [email, setEmail] = useState(""); const [pass, setPass] = useState("");
  const navigate = useNavigate(); const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const handleLogin = () => {
    if (email && pass) {
      localStorage.setItem("token", "123"); navigate(from, { replace: true });
    } else alert("Fill credentials");
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="email" onChange={e => setEmail(e.target.value)} /><br />
      <input placeholder="password" onChange={e => setPass(e.target.value)} /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const Dashboard = () => <h2>Dashboard</h2>;
const Profile = () => <h2>Profile</h2>;
const NotFound = () => <h2>404</h2>;

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => { localStorage.removeItem("token"); navigate("/"); };
  return isAuth() ? (
    <nav>
      <Link to="/dashboard">Dashboard</Link> | <Link to="/profile">Profile</Link> | 
      <button onClick={logout}>Logout</button>
    </nav>
  ) : null;
};

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
export default App;*/

 /*import React,{useState} from 'react'
 import {BrowserRouter,Routes,Route,Link,useNavigate,Navigate,useLocation } from 'react-router-dom'
 const isAuth=()=>!!localStorage.getItem('token')
 const PrivateRoute=({children})=>{
 const location=useLocation()
  return isAuth()?children:<Navigate to='/' state={{from:location}} replace/>
 }
 
 const Login=()=>{
 const[email,setEmail]=useState('')
 const[password,setPassword]=useState('')
 const navigate=useNavigate()
 const location=useLocation()
 const from=location.state?.from?.pathname||'/dashboard'
 const handleLogin=()=>{
      if(email && password){
       localStorage.setItem('token',123)
       navigate(from,{replace:true})
      }else{
        alert('enter credentials')
      }
     }

     return(
      <div>
        <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
      </div>
     )

    }

    const Dashboard=()=><h2>Dashboard</h2>
    const Profile=()=><h2>Profile</h2>
    const NotFound=()=><h2>404</h2>
 
  const Navbar=()=>{
    const navigate=useNavigate()
    const logout =() => { localStorage.removeItem('token'); navigate('/');}
    return  isAuth()?(
      <nav>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/profile'>Profile</Link>
        <button onClick={logout}>Logout</button>
        </nav>
    ):null

   }
 

 const App = () => {
      return (
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>} />
      <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
   )
 }
 
 export default App*/


 /*import React, { useState } from 'react';
 import { BrowserRouter, Routes, Route, Link, useNavigate, Navigate, useLocation } from 'react-router-dom';
 import { jwtDecode } from 'jwt-decode';

const isAuth = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    const now = Date.now() / 1000;
    return decoded.exp > now;
  } catch (err) {
    return false;
  }
};

 
 const PrivateRoute = ({ children }) => {
   const location = useLocation();
   return isAuth() ? children : <Navigate to='/' state={{ from: location }} replace />;
 };
 
 const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || '/dashboard';
 
   const handleLogin = () => {
     if (email && password) {
       // Simulated JWT token with expiration in 1 hour
       const fakeJWT = generateFakeJWT({ email }, '1h');
       localStorage.setItem('token', fakeJWT);
       navigate(from, { replace: true });
     } else {
       alert('Enter credentials');
     }
   };
 
   return (
     <div>
       <input type='text' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
       <input type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
       <button onClick={handleLogin}>Login</button>
     </div>
   );
 };
 
 const Dashboard = () => <h2>Dashboard</h2>;
 const Profile = () => <h2>Profile</h2>;
 const NotFound = () => <h2>404</h2>;
 
 const Navbar = () => {
   const navigate = useNavigate();
   const logout = () => {
     localStorage.removeItem('token');
     navigate('/');
   };
   return isAuth() ? (
     <nav>
       <Link to='/dashboard'>Dashboard</Link>
       <Link to='/profile'>Profile</Link>
       <button onClick={logout}>Logout</button>
     </nav>
   ) : null;
 };
 
 const App = () => {
   return (
     <BrowserRouter>
       <Navbar />
       <Routes>
         <Route path='/' element={<Login />} />
         <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
         <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
         <Route path='*' element={<NotFound />} />
       </Routes>
     </BrowserRouter>
   );
 };
 
 export default App;
 
 // --- 🔐 Simulated JWT Generator ---
 function generateFakeJWT(payload, expiresIn = '1h') {
   const header = {
     alg: 'HS256',
     typ: 'JWT',
   };
 
   const now = Math.floor(Date.now() / 1000);
   const exp = now + (expiresIn === '1h' ? 60 * 60 : 60); // support '1h' or '1m'
 
   const tokenPayload = {
     ...payload,
     iat: now,
     exp,
   };
 
   const base64Encode = (obj) => btoa(JSON.stringify(obj)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
 
   return `${base64Encode(header)}.${base64Encode(tokenPayload)}.fake_signature`;
 }*/


   /*import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation, Link } from 'react-router-dom';

// Simulated backend check
const simulateLogin = (email, password) => {
  if (email === 'user@example.com' && password === '123456') {
    const fakeToken = 'FAKE.JWT.TOKEN'; // Simulated JWT
    return fakeToken;
  }
  return null;
};

const isAuth = () => !!localStorage.getItem('token');

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  return isAuth() ? children : <Navigate to="/" state={{ from: location }} replace />;
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  const handleLogin = () => {
    const token = simulateLogin(email, password);
    if (token) {
      localStorage.setItem('token', token);
      navigate(from, { replace: true });
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const Dashboard = () => <h2>Welcome to Dashboard</h2>;
const Profile = () => <h2>Your Profile</h2>;
const NotFound = () => <h2>404 Not Found</h2>;

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return isAuth() ? (
    <nav>
      <Link to="/dashboard">Dashboard</Link>{' '}
      <Link to="/profile">Profile</Link>{' '}
      <button onClick={logout}>Logout</button>
    </nav>
  ) : null;
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;*/


   
  

 
  


/*const RotatingString = () => {
  const [rotated, setRotated] = useState(false);

  const handleClick = () => {
    setRotated(!rotated);
  };

  const style = {
    display: 'inline-block',
    transition: 'transform 0.5s ease-in-out',
    transform: rotated ? 'rotate(360deg)' : 'rotate(0deg)',
    cursor: 'pointer',
  };

  return (
    <div>
      <span style={style} onClick={handleClick}>
        Click me to rotate
      </span>
    </div>
  );
};

export default RotatingString;*/


/*import React, { useState } from 'react';
import couple from './images/couple.jpg'
const RotatingString = () => {
  const [angle, setAngle] = useState(0);
  const [is, setIs] = useState(false);

  const handleClick = () => {
    setAngle(prev => prev + 360); // always clockwise
    // use prev - 360 for anticlockwise
    // or alternate between +360 and -360 for toggling direction
  };

  const style = {
    display: 'inline-block',
    transition: 'transform 0.5s ease-in-out',
    transform: `rotate(${angle}deg)`,
    cursor: 'pointer',
  };
  const handle=()=>{
     setIs(true)
  }

  const style1 = {
      backgroundColor: 'skyblue', borderRadius: '50%'
  }

  return (
    <div>
      <span style={is?style1:style} onClick={handleClick} onMouseOver={handle}>
        <img src={couple} width='400' height='400' alt='madhu'/>
      </span>
    </div>
  );
};

export default RotatingString;*/


/*import React, { useState } from 'react';
import couple from './images/couple.jpg';

const RotatingString = () => {
  const [angle, setAngle] = useState(0);
  const [hasHovered, setHasHovered] = useState(false);

  const handleClick = () => {
    setAngle(prev => prev + 360); // Rotate
  };

  const handleMouseEnter = () => {
    setHasHovered(true);
  };

  const handleMouseLeave = () => {
    setHasHovered(false); // Revert to original style
  };

  const rotatingStyle = {
    display: 'inline-block',
    transition: 'transform 10.5s ease-in-out',
    transform: `rotate(${angle}deg)`,
    cursor: 'pointer',
    borderRadius: '50%',
    overflow: 'hidden',
    width: '400px',
    height: '400px',
  };

  const initialStyle = {
    backgroundColor: 'skyblue',
    borderRadius: '0%',
    overflow: 'hidden',
    cursor: 'pointer',
    width: '400px',
    height: '400px',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  };

  return (
    <div>
      <span
        style={hasHovered ? rotatingStyle : initialStyle}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={couple} style={imageStyle} alt="madhu" />
      </span>
    </div>
  );
};

export default RotatingString;*/



/*import React, { useState } from "react";
export default function App() {
  const [is, setIs] = useState(false);

  const handler = () => {
    setIs(prev => !prev);
  };

  const style = {
    backgroundColor: is ? "black" : "white",
    height: "100vh", // fill the screen height
    //display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.3s ease-in-out"
  };

  return (
    <div style={style}>
      <button onClick={handler}>
        Toggle
      </button>
    </div>
  );
}*/


/*import React,{useState} from "react";
import ReactDOM from "react-dom";
import "./modal.css";

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};


function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <h1>React Portal Example</h1>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Hello from the Portal!</h2>
        </Modal>
      )}
    </div>
  );
}

export default App;*/


  




