Vue.component('header-component', {
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
          </li>
        </ul>
      </div>
    </nav>
  `
});

Vue.component('footer-component', {
  template: `
    <footer class="footer bg-light text-center">
      <div class="container">
        <span class="text-muted">© 2024 Your Company</span>
      </div>
    </footer>
  `
});

Vue.component('home-component', {
  template: `
    <div class="container">
      <h1>Welcome to Home Page</h1>
      <p>This is the home page content.</p>
    </div>
  `
});

Vue.component('about-component', {
  template: `
    <div class="container">
      <h1>About Us</h1>
      <p>This is the about page content.</p>
    </div>
  `
});

new Vue({
  el: '#app'
});
