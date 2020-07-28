import React from 'react';
import SearchName from "./components/SearchName"
import FilterSearch from "./components/FilterSearch"
import EmployeeList from "./components/EmployeeList"
import employees from './employees.json'
import './App.css';

function App() {
  return (
   
      <div>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">Employee List</a>
        </nav>
      </div>
      <div class="container">
        <form>
          <SearchName />
          <FilterSearch />
        </form>
        <EmployeeList employees={employees} />
      </div>
  );
}

export default App;
