// DataTable.js
import React, { useState, useMemo } from 'react';
import './DataTable.css';

function DataTable() {
  // Sample data
  const initialData = [
    { id: 1, name: 'Amrit Kumar', age: 28, email: 'amrit@gmail.com' },
    { id: 2, name: 'Prerna Kumari', age: 34, email: 'prerna@gmail.com' },
    { id: 3, name: 'Prince Raj', age: 45, email: 'prince@gmail.com' },
    { id: 4, name: 'Anjali Kumari', age: 23, email: 'anjali@gmail.com' },
    { id: 5, name: 'Raju Verma', age: 39, email: 'raju@gmail.com' },
    // More data can be added here
  ];

  const [data] = useState(initialData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;

  const sortedData = useMemo(() => {
    let sortableData = [...data];
    if (filter) {
      sortableData = sortableData.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.email.toLowerCase().includes(filter.toLowerCase())
      );
    }
    if (sortConfig.key !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig, filter]);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Pagination calculations
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  return (
    <div
      id="datatable" 
      style={{
        padding: '20px',
        borderRadius: '8px',
        width: '60%',
        marginLeft: '25%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '15%'
      }}
    >
      <h3 style={{ textAlign: 'center', marginBottom: '50px' }}>Data Table</h3>
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search by name or email..."
          value={filter}
          onChange={(e) => { setFilter(e.target.value); setCurrentPage(1); }}
          style={{ borderRadius: '8px' }}
        />

        <div className="card shadow-sm" style={{ borderRadius: '8px' }}>
  {/* Add table-responsive around the table */}
  <div className="table-responsive">
    <table className="table table-striped table-hover" style={{ marginBottom: '0' }}>
      <thead>
        <tr>
          <th onClick={() => handleSort('id')} style={{ cursor: 'pointer' }}>ID</th>
          <th onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>Name</th>
          <th onClick={() => handleSort('age')} style={{ cursor: 'pointer' }}>Age</th>
          <th onClick={() => handleSort('email')} style={{ cursor: 'pointer' }}>Email</th>
        </tr>
      </thead>
      <tbody>
        {currentRows.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

        {/* Pagination Controls */}
        <nav>
          <ul className="pagination justify-content-center mt-3">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default DataTable;















































// // DataTable.js
// import React, { useState, useMemo } from 'react';

// function DataTable() {
//   // Sample data
//   const initialData = [
//     { id: 1, name: 'Amrit Kumar', age: 28, email: 'amrit@gmail.com' },
//     { id: 2, name: 'Prem Kumar', age: 34, email: 'prem@gmail.com' },
//     { id: 3, name: 'Prince Raj', age: 45, email: 'prince@gmail.com' },
//     { id: 4, name: 'Aniket Shahu', age: 23, email: 'aniket@gmail.com' },
//     { id: 5, name: 'Raju Verma', age: 39, email: 'raju@gmail.com' },
//     // More data can be added here
//   ];

//   const [data] = useState(initialData);
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
//   const [filter, setFilter] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 3;

//   const sortedData = useMemo(() => {
//     let sortableData = [...data];
//     if (filter) {
//       sortableData = sortableData.filter(item =>
//         item.name.toLowerCase().includes(filter.toLowerCase()) ||
//         item.email.toLowerCase().includes(filter.toLowerCase())
//       );
//     }
//     if (sortConfig.key !== null) {
//       sortableData.sort((a, b) => {
//         if (a[sortConfig.key] < b[sortConfig.key]) {
//           return sortConfig.direction === 'ascending' ? -1 : 1;
//         }
//         if (a[sortConfig.key] > b[sortConfig.key]) {
//           return sortConfig.direction === 'ascending' ? 1 : -1;
//         }
//         return 0;
//       });
//     }
//     return sortableData;
//   }, [data, sortConfig, filter]);

//   const handleSort = (key) => {
//     let direction = 'ascending';
//     if (sortConfig.key === key && sortConfig.direction === 'ascending') {
//       direction = 'descending';
//     }
//     setSortConfig({ key, direction });
//   };

//   // Pagination calculations
//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);
//   const totalPages = Math.ceil(sortedData.length / rowsPerPage);

//   return (
//     <div id="datatable">
//       <h3>Data Table</h3>
//       <input
//         type="text"
//         className="form-control mb-3"
//         placeholder="Search by name or email..."
//         value={filter}
//         onChange={(e) => { setFilter(e.target.value); setCurrentPage(1); }}
//       />
//       <table className="table table-striped table-hover">
//         <thead>
//           <tr>
//             <th onClick={() => handleSort('id')} style={{cursor: 'pointer'}}>ID</th>
//             <th onClick={() => handleSort('name')} style={{cursor: 'pointer'}}>Name</th>
//             <th onClick={() => handleSort('age')} style={{cursor: 'pointer'}}>Age</th>
//             <th onClick={() => handleSort('email')} style={{cursor: 'pointer'}}>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentRows.map(item => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.age}</td>
//               <td>{item.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {/* Pagination Controls */}
//       <nav>
//         <ul className="pagination">
//           <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
//             <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
//           </li>
//           {[...Array(totalPages)].map((_, index) => (
//             <li key={index} className={`page-item ${currentPage === index + 1 && 'active'}`}>
//               <button className="page-link" onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
//             </li>
//           ))}
//           <li className={`page-item ${currentPage === totalPages && 'disabled'}`}>
//             <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default DataTable;
