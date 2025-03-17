// CardGrid.js
import React from 'react';
import './CardGrid.css';

function CardGrid() {
  const widgets = [
    { id: 1, title: 'Total Users', text: '5' },
    { id: 2, title: 'Male Users', text: '3' },
    { id: 3, title: 'Female Users', text: '2' },
    { id: 4, title: 'Persons Visted', text: '11, 253'},
    { id: 5, title: 'Registration Opened on', text: '05/03/2025' },
    { id: 6, title: 'Registration Ends on', text: '24/06/2025' },
  ];

  return (
    <div
  id="widgets"
  style={{
    padding: '20px',
    borderRadius: '8px',
    width: '60%',
    marginLeft: '25%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '15%',
    marginTop: '5%'
  }}
>
  <h2 className="text-center mb-5">Widgets</h2>

  <div className="container">
    <div className="row justify-content-center g-3">
      {widgets.map((widget) => (
        <div key={widget.id} className="col-10 col-md-5 col-lg-4">
          <div
            className="card shadow-sm hover-effect"
            style={{
              border: '5px solid',
              borderRadius: '8px',
              height: '200px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <h5 className="card-title">{widget.title}</h5>
            <p className="card-text"><b>{widget.text}</b></p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}

export default CardGrid;












































// <div id="widgets" style={{ backgroundColor: 'lightblue', padding: '20px', borderRadius: '8px', width: '650px', height: '450px'}}>
    //   <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Widgets</h2>
    //   <div className="row g-1">
    //     {widgets.map(widget => (
    //       <div key={widget.id} className="col-sm-1 col-md-6 mb-1">
    //         <div className="card shadow-sm hover-effect" style={{ width: '300px', height: '200px'}}>
    //           <div className="card-body" style={{ backgroundColor: 'blue', borderRadius: '8px', padding: '10px', border: '5px solid red'}}>
    //             <h5 className="card-title text-center">{widget.title}</h5>
    //             <p className="card-text text-center">{widget.text}</p>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>