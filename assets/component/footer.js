class Footer extends HTMLElement {
    constructor() {
      super();
    }
  

  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
      <div class="footer-wrapper">
      <div class="footer__logo">
        <a href="index.html">
        <img src="assets/images/shared/desktop/logo-w.svg" alt="logo">
        </a>
      </div>
      <div class="social-media-links">
        <img src="assets/images/shared/desktop/facebook-w.svg" alt="facebook icon">
        <img src="assets/images/shared/desktop/youtube-w.svg" alt="youtube icon">
        <img src="assets/images/shared/desktop/twitter-w.svg" alt="twitter icon">
        <img src="assets/images/shared/desktop/pinterest-w.svg" alt="pinterest icon">
        <img src="assets/images/shared/desktop/instagram-w.svg" alt="instagram icon">
      </div>
      <ul class="footer__nav">
        <li><a href="index.html">Home</a></li>
        <li><a href="stories.html">Stories</a></li>
        <li><a href="features.html">Features</a></li>
        <li><a href="pricing.html">Pricing</a></li>
      </ul>
      <div class="link-to-detail">
        <h4>GET AN INVITE</h4>
        <img src="assets/images/shared/desktop/arrow.svg" alt="arrow">
      </div>
      <p class="copyright">Copyright 2019. All Rights Reserved</p>
    </div>
  </footer>
    `;
  }
}

  customElements.define('footer-component', Footer);