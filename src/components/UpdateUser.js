import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("India");
  const [password, setPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    fetch("http:localhost:4000/users/" + id)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setName(result.name);
        setEmail(result.user.email);
        setPhone(result.user.phone);
        setAge(result.user.age);
        setGender(result.user.gender);
        setCountry(result.user.country);
        setPassword(result.user.password);
      });
  }, [id]);
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
    fetch(`http://localhost:4000/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(infoData),
      headers: {
        "Content-Type": "application/json",
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
              type="text"
              value={name}
              onChange={(nameChangeEvent) =>
                setName(nameChangeEvent.target.value)
              }
            />
          </div>
          <div>
            <label>Email : </label>
            <input
              type="email"
              value={email}
              onChange={(emailChangeEvent) =>
                setEmail(emailChangeEvent.target.value)
              }
            />
          </div>
          <div>
            <label>Phone : </label>
            <input
              type="number"
              value={phone}
              onChange={(phoneChangeEvent) =>
                setPhone(phoneChangeEvent.target.value)
              }
            />
          </div>
          <div>
            <label>Age : </label>
            <input
              value={age}
              type="number"
              onChange={(ageChangeEvent) => setAge(ageChangeEvent.target.value)}
            />
          </div>
          <div
            value={gender}
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
            value={country}
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
              value={password}
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

export default UpdateUser;
