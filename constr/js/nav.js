const createNav = () => {
    let nav = document.querySelector('nav');

    nav.innerHTML = `
    
   
    <div class="container">
      <div class="navbar navbar-2">
        <img src="img/logo.png" class="logo">
        <nav>
          <ul id="MenuItems">
            <li><a href="./index.html">Home</a></li>
            <li><a href="./bedroom.html">Bedroom</a></li>
            <li><a href="./dining.html">Dining</a></li>
            <li><a href="./kitchen.html">Kitchen</a></li>
            <li><a href="./livingroom.html">Living Room</a></li>
          </ul>
        </nav> 
        <img src="img/menu.png" class="menu-icon" onclick="menutoggle()">       
      
      </div>
    </div>
  
    
    `;
}

createNav();