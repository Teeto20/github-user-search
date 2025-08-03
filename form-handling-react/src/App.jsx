import FormikForm from "./components/formikForm";
import RegistrationForm from "./components/RegistrationForm";
import React from "react";

function App() {
  return (
    <div style={{textAlign: "center", maxWidth: "400px", margin: "0 auto"}}>
      <h1>React</h1>
      <h2>Registration</h2>
      <RegistrationForm/>
      <hr style={{ margin: "20px 0" }}/>
      <h2>Using Formik</h2>
      <FormikForm />
    </div>
  );
}

export default App;