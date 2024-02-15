import React, { useState } from "react";
import "./NavBar.css";

const NavBar = ({onSubmit}) => {
    const [searchValue, setSearchValue] = useState('')
    const changeHandler = (e) => {
        setSearchValue(e.target.value)
        // console.log(searchValue)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        onSubmit(searchValue)
    }
  return (
    <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Gallery</a>
    <form className="d-flex" role="search" onSubmit={submitHandler}>
      <input className="form-control me-2" onChange={changeHandler} type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" disabled={searchValue === ''} type="submit">Search</button>
    </form>
  </div>
</nav>
  );
};

export default NavBar;
