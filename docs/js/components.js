// Web Components for Chapel Hill Cheetahs site

class SiteHeader extends HTMLElement {
    connectedCallback() {
        const active = this.getAttribute('active') || '';

        // Detect if we're in a subdirectory based on path depth
        const pathDepth = window.location.pathname.split('/').filter(p => p && p !== 'docs').length;
        const base = pathDepth > 1 ? '../' : '';

        this.innerHTML = `
        <header>
            <nav>
                <a href="${base}index.html" class="logo">Chapel Hill <span>Cheetahs</span></a>
                <div class="menu-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul class="nav-links">
                    <li><a href="${base}index.html"${active === 'home' ? ' class="active"' : ''}>Home</a></li>
                    <li><a href="${base}about.html"${active === 'about' ? ' class="active"' : ''}>About</a></li>
                    <li><a href="${base}xc/index.html"${active === 'xc' ? ' class="active"' : ''}>Cross Country</a></li>
                    <li><a href="${base}track/index.html"${active === 'track' ? ' class="active"' : ''}>Outdoor Track</a></li>
                    <li><a href="${base}gallery.html"${active === 'gallery' ? ' class="active"' : ''}>Gallery</a></li>
                </ul>
            </nav>
        </header>`;

        // Add click handler for mobile menu toggle
        this.querySelector('.menu-toggle').addEventListener('click', () => {
            this.querySelector('.nav-links').classList.toggle('active');
        });
    }
}

customElements.define('site-header', SiteHeader);

class SiteFooter extends HTMLElement {
    connectedCallback() {
        // Detect if we're in a subdirectory based on path depth
        const pathDepth = window.location.pathname.split('/').filter(p => p && p !== 'docs').length;
        const base = pathDepth > 1 ? '../' : '';

        this.innerHTML = `
        <footer>
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h4>Chapel Hill Cheetahs</h4>
                    </div>
                    <div class="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="${base}about.html">About Us</a></li>
                            <li><a href="${base}xc/index.html">Cross Country</a></li>
                            <li><a href="${base}track/index.html">Outdoor Track</a></li>
                            <li><a href="${base}gallery.html">Gallery</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Contact</h4>
                        <p><a href="https://nc.milesplit.com/teams/53214-chapel-hill-cheetahs">Find us on Milesplit</a></p>
                        <p><a href="https://gmail.us14.list-manage.com/subscribe?u=c277dca663fbde3d6f9ecedac&id=9f4f080c1f">Sign-up for our mailing list</a></p>
                        <p><a href="mailto:pmccall777+chc@gmail.com">pmccall777+chc@gmail.com</a></p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2026 Chapel Hill Cheetahs</p>
                </div>
            </div>
        </footer>`;
    }
}

customElements.define('site-footer', SiteFooter);
