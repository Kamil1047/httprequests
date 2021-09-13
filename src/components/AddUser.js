import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
// import "./AddUser.css";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("India");
  const [password, setPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(() => {
    const Authentication = setTimeout(() => {
      setFormIsValid(
        name.trim().length > 0 &&
          email.includes("@") &&
          phone.trim().length > 0 &&
          age.trim().length > 0 &&
          gender.trim().length > 0 &&
          country.trim().length > 0 &&
          password.trim().length > 6
      );
    }, 500);

    return () => {
      clearTimeout(Authentication);
    };
  }, [name, email, phone, age, gender, country, password]);
  const onSubmitData = (event) => {
    event.preventDefault();
    const infoData = {
      name: name,
      email: email,
      phone: phone,
      age: age,
      gender: gender,
      country: country,
      password: password,
    };
    fetch("http://localhost:4000/users", {
      method: "POST",
      body: JSON.stringify(infoData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        response.json();
      })
      .then(() => {
        window.location.href = "/";
      });
    document.form.reset();
    setName("");
    setEmail("");
    setPhone("");
    setAge("");
    setGender("");
    setCountry("");
    setPassword("");
  };

  return (
    <div className="center">
      <h2>Add User</h2>
      <form name="form" onSubmit={onSubmitData}>
        <div>
          <div>
            <label>Name : </label>
            <input
              autoComplete="name"
              type="text"
              onChange={(nameChangeEvent) =>
                setName(nameChangeEvent.target.value)
              }
              autoFocus
            />
          </div>
          <div>
            <label>Email : </label>
            <input
              autoComplete="email"
              type="email"
              onChange={(emailChangeEvent) =>
                setEmail(emailChangeEvent.target.value)
              }
            />
          </div>
          <div>
            <label>Phone : </label>
            <input
              autoComplete="phone"
              type="number"
              onChange={(phoneChangeEvent) =>
                setPhone(phoneChangeEvent.target.value)
              }
            />
          </div>
          <div>
            <label>Age : </label>
            <input
              autoComplete="age"
              type="number"
              onChange={(ageChangeEvent) => setAge(ageChangeEvent.target.value)}
            />
          </div>
          <div
            autoComplete="gender"
            onChange={(genderChangeEvent) =>
              setGender(genderChangeEvent.target.value)
            }
          >
            <label>Gender : </label>
            <input type="radio" name="gender" value="Male" />
            <label>Male</label>
            <input type="radio" name="gender" value="Female" />
            <label>Female</label>
          </div>

          <div
            autoComplete="country"
            onChange={(countryChangeEvent) =>
              setCountry(countryChangeEvent.target.value)
            }
          >
            <label>Country: </label>
            <select id="country" name="country">
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="London">London</option>
            </select>
          </div>
          <div>
            <label>Password: </label>
            <input
              autoComplete="password"
              type="password"
              onChange={(passwordChangeEvent) =>
                setPassword(passwordChangeEvent.target.value)
              }
            />
          </div>
          <Button type="submit" disabled={!formIsValid}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
