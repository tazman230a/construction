const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    
   <footer> 
    <div class="footer">
    <div class="container-footer">
      <div class="row">
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">affilate program</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Get Help</h4>
          <ul>
            <li><a href="#">FQA</a></li>
            <li><a href="#">shipping</a></li>
            <li><a href="#">return</a></li>
            <li><a href="#">order status</a></li>
            <li><a href="#">payment option</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>follow us</h4>
          <div class="social-link">
            <a href="https://facebook.com"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://instagram.com"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://twitter.com"><i class="fa-brands fa-twitter"></i></a>
            <a href="https://linkedin.com"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    `;
}

createFooter();