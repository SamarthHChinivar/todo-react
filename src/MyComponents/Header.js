import React from 'react'
import PropTypes from 'prop-types' // for setting data/property type of objects

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            { props.searchBar? <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>: ""}
          </div>
        </div>
      </nav>
    )
}
Header.defaultProps = {
  title: "Your Title Here", //no semicolon is required in properties
  searchBar: true
}

//setting the datatype/proptype of Header object
Header.propTypes = { //propTypes is an optional name here
  title: PropTypes.string, //PropTypes is the pre-defined word here
  searchBar: PropTypes.bool.isRequired
}