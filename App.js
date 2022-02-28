import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialValues = {FirstName: "",LastName:"", email: "",ClgName: "",CGPA: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.FirstName) {
      errors.FirstName = "FirstName is required!";
    }
     if (!values.LastName) {
      errors.LastName = "LastName is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.ClgName) {
      errors.ClgName = "ClgName is required!";
    }
    if (!values.CGPA) {
      errors.CGPA = "CGPA is required!";
    }
    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1>ONLINE EXAMINATION</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>FirstName</label>
            <input
              type="text"
              name="FirstName"
              placeholder="FirstName"
              value={formValues.FirstName}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.FirstName}</p>
          <div className="field">
            <label>LastName</label>
            <input
              type="text"
              name="LastName"
              placeholder="LastName"
              value={formValues.LastName}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.LastName}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>ClgName</label>
            <input
              type="text"
              name="ClgName"
              placeholder="ClgName"
              value={formValues.ClgName}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.ClgName}</p>
          <div className="field">
            <label>CGPA</label>
            <input
              type="text"
              name="CGPA"
              placeholder="CGPA"
              value={formValues.CGPA}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.CGPA}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
