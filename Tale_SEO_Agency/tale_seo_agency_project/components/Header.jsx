export default function Header() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* ***** Logo Start ***** */}
              <a href="index.html" className="logo">
                <img
                  src="assets/images/logo.png"
                  alt=""
                  style={{ maxWidth: 112 }}
                />
              </a>
              {/* ***** Logo End ***** */}
              {/* ***** Menu Start ***** */}
              <ul className="nav">
                <li className="scroll-to-section">
                  <a href="#top" className="active">
                    Home
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#services">Services</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#projects">Projects</a>
                </li>
                <li className="has-sub">
                  <a href="javascript:void(0)">Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="faqs.html">FAQs</a>
                    </li>
                  </ul>
                </li>
                <li className="scroll-to-section">
                  <a href="#infos">Infos</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
              {/* ***** Menu End ***** */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
