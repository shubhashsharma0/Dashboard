// CustomForm.js
import React, { useState } from 'react';
import './CustomForm.css';

function CustomForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: '',
    agree: false
  });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error;
    switch (name) {
      case 'username':
        if (!value) {
          error = 'Username is required';
        }
        break;
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Email is invalid';
        }
        break;
      case 'age':
        if (!value) {
          error = 'Age is required';
        } else if (isNaN(value) || value <= 0) {
          error = 'Age must be a positive number';
        }
        break;
      case 'password':
        if (!value) {
          error = 'Password is required';
        } else if (value.length < 6) {
          error = 'Password must be at least 6 characters';
        }
        break;
      case 'confirmPassword':
        if (value !== formData.password) {
          error = 'Passwords do not match';
        }
        break;
      case 'agree':
        if (!value) {
          error = 'You must agree to continue';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, fieldValue)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields before submit
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div
      id="form"
      style={{
        padding: '20px',
        borderRadius: '8px',
        width: '60%',
        marginLeft: '25%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h3 style={{ textAlign: 'center', marginBottom: '30px' }}>Custom Form</h3>
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group mb-3">
            <label>Username</label>
            <input
              type="text"
              className={`form-control ${errors.username ? 'is-invalid' : ''}`}
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <div className="invalid-feedback">{errors.username}</div>}
          </div>
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="form-group mb-3">
            <label>Age</label>
            <input
              type="number"
              className={`form-control ${errors.age ? 'is-invalid' : ''}`}
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            {errors.age && <div className="invalid-feedback">{errors.age}</div>}
          </div>
          <div className="form-group mb-3">
            <label>Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>
          <div className="form-group mb-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
          </div>
          <div className="form-group form-check mb-3">
            <input
              type="checkbox"
              className={`form-check-input ${errors.agree ? 'is-invalid' : ''}`}
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <label className="form-check-label">I agree to the terms</label>
            {errors.agree && <div className="invalid-feedback d-block">{errors.agree}</div>}
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomForm;













































// // CustomForm.js
// import React, { useState } from 'react';

// function CustomForm() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     age: '',
//     password: '',
//     confirmPassword: '',
//     agree: false
//   });
//   const [errors, setErrors] = useState({});

//   const validateField = (name, value) => {
//     let error;
//     switch(name) {
//       case 'username':
//         if (!value) {
//           error = 'Username is required';
//         }
//         break;
//       case 'email':
//         if (!value) {
//           error = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(value)) {
//           error = 'Email is invalid';
//         }
//         break;
//       case 'age':
//         if (!value) {
//           error = 'Age is required';
//         } else if (isNaN(value) || value <= 0) {
//           error = 'Age must be a positive number';
//         }
//         break;
//       case 'password':
//         if (!value) {
//           error = 'Password is required';
//         } else if (value.length < 6) {
//           error = 'Password must be at least 6 characters';
//         }
//         break;
//       case 'confirmPassword':
//         if (value !== formData.password) {
//           error = 'Passwords do not match';
//         }
//         break;
//       case 'agree':
//         if (!value) {
//           error = 'You must agree to continue';
//         }
//         break;
//       default:
//         break;
//     }
//     return error;
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     const fieldValue = type === 'checkbox' ? checked : value;
//     setFormData(prev => ({
//       ...prev,
//       [name]: fieldValue
//     }));
//     setErrors(prev => ({
//       ...prev,
//       [name]: validateField(name, fieldValue)
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Validate all fields before submit
//     const newErrors = {};
//     Object.keys(formData).forEach(key => {
//       const error = validateField(key, formData[key]);
//       if (error) {
//         newErrors[key] = error;
//       }
//     });
//     setErrors(newErrors);
//     if (Object.keys(newErrors).length === 0) {
//       alert('Form submitted successfully!');
//     }
//   };

//   return (
//     <div id="form">
//       <h3>Custom Form</h3>
//       <form onSubmit={handleSubmit} noValidate>
//         <div className="form-group">
//           <label>Username</label>
//           <input 
//             type="text" 
//             className={`form-control ${errors.username ? 'is-invalid' : ''}`}
//             name="username" 
//             value={formData.username} 
//             onChange={handleChange} />
//           {errors.username && <div className="invalid-feedback">{errors.username}</div>}
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input 
//             type="email" 
//             className={`form-control ${errors.email ? 'is-invalid' : ''}`}
//             name="email" 
//             value={formData.email} 
//             onChange={handleChange} />
//           {errors.email && <div className="invalid-feedback">{errors.email}</div>}
//         </div>
//         <div className="form-group">
//           <label>Age</label>
//           <input 
//             type="number" 
//             className={`form-control ${errors.age ? 'is-invalid' : ''}`}
//             name="age" 
//             value={formData.age} 
//             onChange={handleChange} />
//           {errors.age && <div className="invalid-feedback">{errors.age}</div>}
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input 
//             type="password" 
//             className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//             name="password" 
//             value={formData.password} 
//             onChange={handleChange} />
//           {errors.password && <div className="invalid-feedback">{errors.password}</div>}
//         </div>
//         <div className="form-group">
//           <label>Confirm Password</label>
//           <input 
//             type="password" 
//             className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
//             name="confirmPassword" 
//             value={formData.confirmPassword} 
//             onChange={handleChange} />
//           {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
//         </div>
//         <div className="form-group form-check">
//           <input 
//             type="checkbox" 
//             className={`form-check-input ${errors.agree ? 'is-invalid' : ''}`}
//             name="agree" 
//             checked={formData.agree} 
//             onChange={handleChange} />
//           <label className="form-check-label">I agree to the terms</label>
//           {errors.agree && <div className="invalid-feedback d-block">{errors.agree}</div>}
//         </div>
//         <button type="submit" className="btn btn-success">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default CustomForm;
