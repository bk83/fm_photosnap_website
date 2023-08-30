class Header extends HTMLElement {
    constructor() {
      super();
    }
  

  connectedCallback() {
    this.innerHTML = `
    <header class="header">
        <div class="header__logo">
            <a href="index.html">
            <img src="assets/images/shared/desktop/logo.svg" alt="logo">
            </a>
        </div>
        <nav class="header__nav">
            <ul>
                <li><a href="stories.html">Stories</a></li>
                <li><a href="features.html">Features</a></li>
                <li><a href="pricing.html">Pricing</a></li>
            </ul>
            <div class="header__cta">GET AN INVITE</div>
        </nav>
        <div class="header__menu-icon">
            <img src="assets/images/shared/mobile/menu.svg" alt="menu">
            <img class="none" src="assets/images/shared/mobile/close.svg" alt="close">
        </div>
    </header>
    `;
  }
}

  customElements.define('header-component', Header);