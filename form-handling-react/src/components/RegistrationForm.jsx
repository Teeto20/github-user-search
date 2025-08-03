import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!formData.username) {
      validationErrors.username = "Username is required";
    }
    if (!formData.email) {
      validationErrors.email = "Email is required";
    }
    if (!formData.password) {
      validationErrors.password = "Password is required";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log(
      "username:", formData.username, "\n",
      "email:", formData.email, "\n",
      "password:", formData.password, "\n"
    );
    setErrors({});
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        {errors.username && (
          <span style={{ color: "red" }}>{errors.username}</span>
        )}
      </div>
      <br />
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </div>
      <br />
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password}</span>
        )}
      </div>
      <br />
      <button type="submit">Register</button>
      <br />
      <button
        type="reset"
        onClick={() => setFormData({ username: "", email: "", password: "" })}
      >
        Reset
      </button>
    </form>
  );
}
export default RegistrationForm;
