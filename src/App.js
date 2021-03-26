import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
  } from 'react-router-dom';
  import Home from './pages/Home.js';
  import About from './pages/About.js';
  import Projects from './pages/Projects.js';
  import Contact from './pages/Contact.js';
  import './App.css';
  import 'bootstrap/dist/css/bootstrap.min.css';
 
  
  export default function App() {
  return (
  <Router>
    <div class=" d-flex w-100 h-100 p-3 mx-auto flex-column">

<header>
  <nav className="navbar navbar-expand navbar-dark fixed-top  bg-light  ">
    <div className="container">
      <a className="navbar-brand" href="#">DarkSky</a>
      
      <div className="headnav " >
        <ul className="navbar-nav  me-auto mb-2 mb-md-0  ">
          <li className="nav-item m-2  ">
          <NavLink exact to="/"   activeStyle={{
    fontWeight: "bold",
    color: "black"
  }} >
                 Home </NavLink>
          </li>
          <li className="nav-item m-2">
          <NavLink exact  to="/about" activeStyle={{
    fontWeight: "bold",
    color: "black"
  }}>
                 About</NavLink>
          </li>
          <li className="nav-item m-2">
          <NavLink exact  to="/Contact" activeStyle={{
    fontWeight: "bold",
    color: "black"
  }}>
                 Contact</NavLink>
          </li>
          <li className="nav-item m-2">
          <NavLink exact  to="/Projects" activeStyle={{
    fontWeight: "bold",
    color: "black"
  }}  >
                 Projects</NavLink>
          </li>
        </ul>
     </div>
    </div>
  </nav>


</header>


     <main>









        {/* A 
        <Switch>
        looks through its children 
        <Route>
        s and
        renders the first one that matches the current URL. */}
        <Switch>
           <Route path="/about">
              <About />
           </Route>
           <Route path="/Contact">
              <Contact />
           </Route>
           <Route path="/Projects">
              <Projects />
           </Route>
           <Route path="/">
              <Home />
           </Route>
        </Switch>
     </main>
     <footer class="container">
    <p class="float-end"><a href="#">Back to top</a></p>
    <p>&copy; 2017–2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
  </footer>
     </div>
  </Router>
  );
  }