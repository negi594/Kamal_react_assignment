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
  
import { Navbar, Nav } from 'react-bootstrap';
 
 
  
  export default function App() {
  return (
  <Router>
    <div class=" d-flex w-100 h-100 p-3 mx-auto flex-column">

<header>
<div>
      
      <Navbar class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
     <Navbar.Brand className="logo1" href="#home"> Stayfit </Navbar.Brand>
     
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="m-auto">


         <NavLink className="nav-item m-2" exact to="/home" activeStyle={{
           fontWeight: "bold",
           color: "grey"
         }} >
           Home </NavLink>

           <NavLink className="nav-item m-2" exact to="/projects" activeStyle={{
           fontWeight: "bold",
           color: "grey"
         }} >
           Projects </NavLink>


         <NavLink className="nav-item m-2" exact to="/about" activeStyle={{
           fontWeight: "bold",
           color: "grey"
         }} >
           About </NavLink>

         <NavLink className="nav-item m-2" exact to="/contact" activeStyle={{
           fontWeight: "bold",
           color: "grey"
         }} >
           Contact </NavLink>


        





       </Nav>
     
     </Navbar.Collapse>
   </Navbar>
</div>

</header>
   
    <main>
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
     <footer>
     <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
   
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">Scanfcode</a>.
            </p>
          </div>
</div>
      </div>
  </footer>
     </div>
  </Router>

  );
  }