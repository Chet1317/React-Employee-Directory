import React, {useState} from 'react';
import SearchName from "./components/SearchName"
import FilterSearch from "./components/FilterSearch"
import EmployeeList from "./components/EmployeeList"
import employees from "./employee.json"
import './App.css';

function App() {
  const [ employeeManager, setList ]= useState( { list: employees, search: '', filter: 'id' } )
    
    function updateSearch( search ){
      const filterList = employees.filter( employee => employee.name.toLowerCase().indexOf( search.toLowerCase() )>-1 )
      setList( { ...employeeManager, search, list: filterList })
    }

    function updateFilter( filter ){
      const newFilterList = employeeManager.list.sort(function(a, b) {
        return a[filter] > b[filter] ? 1 : -1;
      })
      setList( { ...employeeManager, filter, list: newFilterList })
    }
 
  return (
   

      <div>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">Employee List</a>
        </nav>
 
      <div class="container">
        <form>
          <SearchName />
          <FilterSearch />
        </form>
        <EmployeeList employees={employees} />
      </div>
   </div>
  );
}

export default App;
