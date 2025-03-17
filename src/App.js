// App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import CardGrid from './components/CardGrid';
import DataTable from './components/DataTable';
import CustomForm from './components/CustomForm';
import ThemeToggle from './components/ThemeToggle';
import './App.css'; // custom styles including dark/light themes

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="position-fixed top-0 end-0 m-3">
                <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      </div>
      <div className="container-fluid ">      
        <div className="row">
          {/* Main Content Column  */}
          <main className="col-sm-9 col-md-11 col-lg-11">
            <CardGrid />
            <DataTable />
            <CustomForm />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;


































// return (
//   <div className={darkMode ? 'dark-mode' : 'light-mode'}>
//     <div className="container-fluid">
    
//       <div className="row">
//         {/* Sidebar Column */}
//         <div className="col-sm-3 col-md-2 col-lg-2 px-0">
//           <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
//         </div>
//         {/* Main Content Column */}
//         <main className="col-sm-9 col-md-10 col-lg-10 px-5">
//           <div className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
//             <h1 className="h2">Dashboard</h1>
//             <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
//           </div>
//           <CardGrid />
//           <DataTable />
//           <CustomForm />
//         </main>
//       </div>
//     </div>
//   </div>
// );








// // App.js
// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import CardGrid from './components/CardGrid';
// import DataTable from './components/DataTable';
// import CustomForm from './components/CustomForm';
// import ThemeToggle from './components/ThemeToggle';
// import './App.css';  // custom styles including dark/light themes

// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className={darkMode ? 'dark-mode' : 'light-mode'}>
//       <div className="container-fluid">
//         <div className="row">
//           <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
//           <main className="col-md-9 ml-sm-auto col-lg-11 px-5">
//             <div className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
//               <h1 className="h2">Dashboard</h1>
//               <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
//             </div>
//             <CardGrid />
//             <DataTable />
//             <CustomForm />
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
