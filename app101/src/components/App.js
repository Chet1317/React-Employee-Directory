import React from 'react';
import SearchName from "./components/SearchName/"
import './App.css';

function App() {
  return (
    <div>
      <div>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">Employee List</a>
        </nav>
      </div>
      <form>
        <SearchName />
        <div class="container">
          <div class="form-group">
            <label for="name">Search</label>
            <input type="password" class="form-control" id="name" placeholder="Name"></input>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Filter</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Name</option>
              <option>Email</option>
              <option>Phone Number</option>
              <option>Position</option>
            </select>
          </div>
        </div>
      </form>
      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Rich Froning</th>
              <td>rich@gmail.com</td>
              <td>905-999-4278</td>
              <td>Accountant</td>
            </tr>
            <tr>
              <th scope="row">Jessica Williams</th>
              <td>j_williams@gmail.com</td>
              <td>705-289-3389</td>
              <td>Sales Representative</td>
            </tr>
            <tr>
              <th scope="row">Bruce Wayne</th>
              <td>brucew@gmail.com</td>
              <td>999-678-4519</td>
              <td>CEO</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
