import React, { useState } from 'react';
import SearchName from "./components/SearchName"
import FilterSearch from "./components/FilterSearch"
import EmployeeList from "./components/EmployeeList"
import employees from "./employee.json"
import './App.css';
import "./index.css"
function App() {

  const [tableManager, setList] = useState({ list: employees, search: '', filter: 'id' })
  function updateSearch(search) {
    const filterList = employees.filter(employee => employee.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
    setList({ ...tableManager, search, list: filterList })
  }

  function updateFilter(filt) {
    const newOrderForList = tableManager.list.sort(function (a, b) {
      return a[filt] > b[filt] ? 1 : -1;
    })
    setList({ ...tableManager, filt, list: newOrderForList })
  }

  return (
    <div>
      <nav class="navbar navbar-light">
        <a href="#">Employee List</a>
      </nav>

      <div style={{marginTop:"2rem"}}  class="container">
        <form>
          <SearchName search={tableManager.search} updateSearch={updateSearch}/>
          <FilterSearch filter={tableManager.filter} updateFilter={updateFilter}/>
        </form>
        <EmployeeList employees={tableManager.list}  />
        </div>
      </div>
  );
}

export default App;
