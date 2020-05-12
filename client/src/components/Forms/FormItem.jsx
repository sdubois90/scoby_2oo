import React, { Component } from "react";
import LocationAutoComplete from "../LocationAutoComplete";
import apiHandler from "../../api/apiHandler";
import "../../styles/form.css";

class ItemForm extends Component {
  state = {
    name: "",
    description: "",
    image: "",
    category: "Plant",
    quantity: 0,
    address: "",
    location: "",
  };

  handleChange = (event) => {
    let value;
    if (event.target.type === "file") {
      value = event.target.files[0];
    } else {
      value = event.target.value;
    }
    this.setState({ [event.target.name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // function jsonToFormData(inJSON, inTestJSON, inFormData, parentKey) {
    //   // http://stackoverflow.com/a/22783314/260665
    //   // Raj: Converts any nested JSON to formData.
    //   var form_data = inFormData || new FormData();
    //   var testJSON = inTestJSON || {};
    //   for (var key in inJSON) {
    //     // 1. If it is a recursion, then key has to be constructed like "parent.child" where parent JSON contains a child JSON
    //     // 2. Perform append data only if the value for key is not a JSON, recurse otherwise!
    //     var constructedKey = key;
    //     if (parentKey) {
    //       constructedKey = parentKey + "." + key;
    //     }

    //     var value = inJSON[key];
    //     if (value && value.constructor === {}.constructor) {
    //       // This is a JSON, we now need to recurse!
    //       jsonToFormData(value, testJSON, form_data, constructedKey);
    //     } else {
    //       form_data.append(constructedKey, inJSON[key]);
    //       testJSON[constructedKey] = inJSON[key];
    //     }
    //   }
    //   return form_data;
    // }
    // var testJSON = {};
    // var formdata = jsonToFormData(jsonForPost, testJSON);

    const fd = new FormData();

    fd.append("name", this.state.name);
    fd.append("description", this.state.description);
    fd.append("image", this.state.image);
    fd.append("category", this.state.category);
    fd.append("quantity", this.state.quantity);
    fd.append("address", this.state.address);
    fd.append("location", this.state.location);
    apiHandler
      .post("/api/items", fd)
      .then((apiResponse) => {
        console.log(apiResponse)
        this.props.history.push("/items");
      })
      .catch((apiError) => {
        console.log(apiError)
        console.log(apiError.response.data.message);
      });
  };

  // In order to send back the data to the client, since there is an input type file you have to send the
  // data as formdata.
  // The object that you'll be sending will maybe be a nested object, in order to handle nested objects in our form data
  // Check out the stackoverflow solution below : )

  // Nested object into formData by user Raj Pawam Gumdal @stackoverflow : ) => https://stackoverflow.com/a/42241875/13374041

  handlePlace = (place) => {
    console.log(place)
    // This handle is passed as a callback to the autocomplete component.
    // Take a look at the data and see what you can get from it.
    // Look at the item model to know what you should retrieve and set as state.
    // this.props.
    console.log(place.properties);
  };

  render() {
    return (
      <div className="ItemForm-container">
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <form
          className="form"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          <h2 className="title">Add Item</h2>

          <div className="form-group">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="input"
              type="text"
              placeholder="What are you giving away ?"
              name="name"
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="category">
              Category
            </label>

            <select id="category" defaultValue="-1" name="category">
              <option value="-1" disabled>
                Select a category
              </option>
              <option value="Plant">Plant</option>
              <option value="Kombucha">Kombucha</option>
              <option value="Vinegar">Vinegar</option>
              <option value="Kefir">Kefir</option>
            </select>
          </div>

          <div className="form-group">
            <label className="label" htmlFor="quantity">
              Quantity
            </label>
            <input className="input" id="quantity" type="number" name="quantity" />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="location">
              Address
            </label>
            <LocationAutoComplete onSelect={this.handlePlace} name="location" />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              className="text-area"
              placeholder="Tell us something about this item"
              name = "description"
            ></textarea>
          </div>

          <div className="form-group">
            <label className="custom-upload label" htmlFor="image">
              Upload image
            </label>
            <input className="input" id="image" type="file" name="image" />
          </div>

          <h2>Contact information</h2>

          <div className="form-group">
            <label className="label" htmlFor="contact">
              How do you want to be reached?
            </label>
            <div>
              <input type="radio" />
              user email
            </div>
            <input type="radio" />
            contact phone number
          </div>

          <p className="message">
            <img src="/media/info.svg" alt="info" />
            Want to be contacted by phone? Add your phone number in your
            personal page.
          </p>

          <button className="btn-submit">Add Item</button>
        </form>
      </div>
    );
  }
}

export default ItemForm;
