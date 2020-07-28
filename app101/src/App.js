import React from 'react';

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
      <div class="container">
     <div class="form-group">
     <label for="name">Search</label>
     <input type="password" class="form-control" id="name" placeholder="Name"></input>
   </div>
   <button type="submit" class="btn btn-primary">Submit</button>
   </div>
 </form>
 </div>
  );
}

export default App;
