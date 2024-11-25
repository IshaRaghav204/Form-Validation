/* eslint-disable no-unused-vars */
import { useState } from "react";
import Gender from "./Gender";

const FormInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation Function
  const validate = () => {
    const validateErrors = {};
    if (!name) validateErrors.name = "Name is required";
    if (!email) {
      validateErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validateErrors.email = "Email is invalid";
    }
    if (!password) {
      validateErrors.password = "Password is required";
    } else if (password.length < 6) {
      validateErrors.password = "Password must be at least 6 characters";
    }

    if (!phone) {
      validateErrors.phone = "Phone Number is required";
    } else if (phone.length < 10) {
      validateErrors.phone = "Enter a valid 10 digit phone number";
    }

    if (!dob) {
      validateErrors.dob = "Date of Birth is required";
    }

    if (!address) {
      validateErrors.address = "Address is required";
    }

    if (!termsAccepted) {
      validateErrors.termsAccepted = "You must agree to the terms and conditions";
    }

    return validateErrors;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsSubmitting(true);
      console.log("Form Submitted Successfully");
      setErrors({});

      // Simulate server submission delay
      setTimeout(() => {
        // Reset fields after successful submission
        setName("");
        setEmail("");
        setPassword("");
        setPhone("");
        setDob("");
        setAddress("");
        setTermsAccepted(false);
        setIsSubmitting(false);
      }, 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="nameInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <div className="text-danger">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div className="text-danger">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div className="text-danger">{errors.password}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="phoneNo" className="form-label">
          Phone Number
        </label>
        <input
          type="tel"
          className="form-control"
          id="phoneNo"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <div className="text-danger">{errors.phone}</div>}
      </div>

      <Gender />

      <div className="mb-3">
        <label htmlFor="Dob" className="form-label">
          Date of Birth
        </label>
        <input
          type="date"
          className="form-control"
          id="Dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        {errors.dob && <div className="text-danger">{errors.dob}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {errors.address && <div className="text-danger">{errors.address}</div>}
        <div id="emailHelp" className="form-text">
          Enter Full Address (Street, City, State, PinCode, Country)
        </div>
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Select to Agree to all terms and conditions
        </label>
        {errors.termsAccepted && (
          <div className="text-danger">{errors.termsAccepted}</div>
        )}
      </div>

      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default FormInfo;
