/* User Account component */

import React, { Component } from "react";
import PropTypes from "prop-types";
import User from "./User";
import styled, { keyframes } from "styled-components";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import Error from "../ErrorMessage";

/* User - is a Query pulling particular user info */

/* Our update user mutation */
const EDIT_USER_MUTATION = gql`
  mutation EDIT_USER_MUTATION(
    $id: ID!
    $email: String
    $companyName: String
    $address: String
    $state: String
    $country: String
    $phoneNo: String
  ) {
    updateUser(
      id: $id
      email: $email
      companyName: $companyName
      address: $address
      state: $state
      country: $country
      phoneNo: $phoneNo
    ) {
      id
      email
      companyName
      address
      state
      country
      phoneNo
    }
  }
`;

class Account extends Component {
  state = {};
  updateState = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  // form onSubmit function for updating user info
  updateAccount = async (e, updateUserMutation) => {
    e.preventDefault();
    console.log("Updating user!!");
    console.log(this.state);
    const res = await updateUserMutation({
      variables: {
        id: this.props.id,
        ...this.state,
      },
    });
  };
  states = [
    "Abia",
    "Adamawa",
    "Anambra",
    "Akwa Ibom",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Enugu",
    "Edo",
    "Ekiti",
    "FCT - Abuja",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];
  countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegowina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, the Democratic Republic of the",
    "Cook Islands",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia (Hrvatska)",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "France Metropolitan",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard and Mc Donald Islands",
    "Holy See (Vatican City State)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, Democratic People's Republic of",
    "Korea, Republic of",
    "Kuwait",
    "Kyrgyzstan",
    "Lao, People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libyan Arab Jamahiriya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia, The Former Yugoslav Republic of",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova, Republic of",
    "Monaco",
    "Mongolia",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia (Slovak Republic)",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "Spain",
    "Sri Lanka",
    "St. Helena",
    "St. Pierre and Miquelon",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen Islands",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan, Province of China",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "United States Minor Outlying Islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna Islands",
    "Western Sahara",
    "Yemen",
    "Yugoslavia",
    "Zambia",
    "Zimbabwe",
  ];
  render() {
    const { id } = this.props;
    console.log(id);
    return (
      <MainWrapper>
        <h2>Account Information</h2> <br />
        <User>
          {({ data: { currentUser } }) => {
            if (!currentUser) return null;
            return (
              <Mutation mutation={EDIT_USER_MUTATION} variables={this.state}>
                {(updateUser, { loading, error }) => (
                  <Form>
                    <div className="formStyle">
                      <form onSubmit={e => this.updateAccount(e, updateUser)}>
                        <Error error={error} />
                        <fieldset disabled={loading} aria-busy={loading}>
                          <div className="section">
                            <span>1</span>First Name & Address
                          </div>
                          <div className="inner-wrap">
                            <label htmlFor="name">
                              Your Full Name{" "}
                              <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="First, then Last Name"
                                required
                                defaultValue={currentUser.name}
                                onChange={this.updateState}
                              />
                            </label>
                            <label htmlFor="companyName">
                              Organization Name{" "}
                              <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                placeholder="Organization Name"
                                defaultValue={currentUser.companyName}
                                onChange={this.updateState}
                              />
                            </label>
                            <label htmlFor="address">
                              Address{" "}
                              <textarea
                                id="address"
                                name="address"
                                placeholder="Enter an address"
                                defaultValue={currentUser.address}
                                onChange={this.updateState}
                              />
                            </label>
                            <label htmlFor="state">
                              State{" "}
                              <select
                                name="state"
                                id="state"
                                placeholder="Select State"
                                defaultValue={currentUser.state}
                                value={this.state.state}
                                onChange={this.updateState}
                              >
                                {this.states.map(states => (
                                  <option value={states} key={states}>
                                    {states}
                                  </option>
                                ))}
                              </select>
                            </label>
                            <label htmlFor="country">
                              Country{" "}
                              <select
                                name="country"
                                id="country"
                                placeholder="Select Country"
                                defaultValue={currentUser.country}
                                value={this.state.country}
                                onChange={this.updateState}
                              >
                                {this.countries.map(selection => (
                                  <option value={selection} key={selection}>
                                    {selection}
                                  </option>
                                ))}
                              </select>
                            </label>
                          </div>

                          <div className="section">
                            <span>2</span>Email & Phone
                          </div>
                          <div className="inner-wrap">
                            <label htmlFor="email">
                              Email{" "}
                              <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                defaultValue={currentUser.email}
                                onChange={this.updateState}
                              />
                            </label>
                            <label htmlFor="phoneNo">
                              Telephone{" "}
                              <input
                                type="tel"
                                id="phoneNo"
                                pattern="/^234[0-9]{11}/"
                                name="phoneNo"
                                placeholder="Phone Number"
                                defaultValue={currentUser.phoneNo}
                                onChange={this.updateState}
                              />
                            </label>
                          </div>

                          <div className="button-section">
                            <button type="submit">
                              {" "}
                              Sav{loading ? "ing" : "e"}
                            </button>
                          </div>
                          <br />
                        </fieldset>
                      </form>
                    </div>
                  </Form>
                )}
              </Mutation>
            );
          }}
        </User>
      </MainWrapper>
    );
  }
}
const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;
const Form = styled.div`
  margin-bottom: 30px;
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: "";
      display: block;
      margin: 10px;
      background-image: linear-gradient(
        to right,
        #ff3019 0%,
        #e2b04a 50%,
        #ff308d 100%
      );
    }
    &[aria-busy="true"]::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
  .formStyle {
    max-width: 450px;
    padding: 20px;
    margin-left: 15px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
  }
  .formStyle .inner-wrap {
    padding: 40px;
    background: #f8f8f8;
    border-radius: 6px;
    margin-bottom: 10px;
  }
  .formStyle label {
    display: block;
    font: 13px Arial, Helvetica, sans-serif;
    color: #888;
    outline: none;
    margin-bottom: 15px;
  }
  .formStyle input[type="text"],
  .formStyle input[type="email"],
  .formStyle input[type="number"],
  .formStyle input[type="tel"],
  .formStyle textarea,
  .formStyle select {
    display: block;
    outline: none;
    box-sizing: border-box;
    width: 100%;
    padding: 8px;
    border-radius: 6px;
    border: 2px solid #fff;
    box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);
  }

  .formStyle .section {
    font: normal 20px "Bitter", serif;
    color: ${props => props.theme.red};
    margin-bottom: 5px;
  }
  .formStyle .section span {
    background: ${props => props.theme.red};
    padding: 5px 10px 5px 10px;
    position: absolute;
    border-radius: 50%;
    border: 4px solid #fff;
    font-size: 14px;
    margin-left: -45px;
    color: #fff;
    margin-top: -3px;
  }
  .formStyle input[type="button"],
  .formStyle button[type="submit"] {
    width: auto;
    background: red;
    color: white;
    border: 0;
    border-radius: 20px;
    font-size: 1.5rem;
    font-weight: 300;
    padding: 0.7rem 1.5rem;
    margin-right: 10px;
    float: right;
  }
  .formStyle input[type="button"]:hover,
  .formStyle button[type="submit"]:hover {
    background: ${props => props.theme.red};
    color: white;
  }
`;
const MainWrapper = styled.div`
  margin-top: 0px;
  margin-bottom: 20px;
  margin-left: 50px;
  margin-right: 50px;
  padding-bottom: 10px;
`;

export default Account;
