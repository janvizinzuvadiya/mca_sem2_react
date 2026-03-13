import React  from "react";
import { useState } from "react";

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        const headerToggleBtn = document.querySelector('.header-toggle');

    /**
     * Header toggle
     */
    function headerToggle() {
        document.querySelector('#header').classList.toggle('header-show');
        headerToggleBtn.classList.toggle('bi-list');
        headerToggleBtn.classList.toggle('bi-x');
    }
    headerToggleBtn.addEventListener('click', headerToggle);

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.addEventListener('click', () => {
        if (document.querySelector('.header-show')) {
            headerToggle();
        }
        });

    });

    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
        navmenu.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
        });
    });

     /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);



    };
   
    
    return (
        <div className="sidebar">
            <header id="header" className={`header dark-background d-flex flex-column justify-content-center ${isOpen ? 'header-show' : ''}`}>
                <i className={`header-toggle d-xl-none bi ${isOpen ? 'bi-x' : 'bi-list'}`} onClick={toggleMenu} ></i>

            <div className="header-container d-flex flex-column align-items-start">

            <nav id="navmenu" className="navmenu">
                <ul>
                <li><a href="#hero" className="active" onClick={() => setIsOpen(false)}><i className="bi bi-house navicon"></i>Home</a></li>
                <li><a href="#about" onClick={() => setIsOpen(false)}><i className="bi bi-person navicon"></i> About</a></li>
                <li><a href="#resume" onClick={() => setIsOpen(false)}><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
                <li><a href="#portfolio" onClick={() => setIsOpen(false)}><i className="bi bi-images navicon"></i> Portfolio</a></li>
                <li><a href="#services" onClick={() => setIsOpen(false)}><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
                <li className="dropdown"><a href="#" onClick={() => setIsOpen(false)}><i className="bi bi-menu-button navicon"></i> <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                    <li><a href="#">Dropdown 1</a></li>
                    <li className="dropdown"><a href="#" onClick={() => setIsOpen(false)}><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                        <li><a href="#" onClick={() => setIsOpen(false)}>Deep Dropdown 1</a></li>
                        <li><a href="#" onClick={() => setIsOpen(false)}>Deep Dropdown 2</a></li>
                        <li><a href="#" onClick={() => setIsOpen(false)}>Deep Dropdown 3</a></li>
                        <li><a href="#" onClick={() => setIsOpen(false)}>Deep Dropdown 4</a></li>
                        <li><a href="#" onClick={() => setIsOpen(false)}>Deep Dropdown 5</a></li>
                        </ul>
                    </li>
                    <li><a href="#" onClick={() => setIsOpen(false)}>Dropdown 2</a></li>
                    <li><a href="#" onClick={() => setIsOpen(false)}>Dropdown 3</a></li>
                    <li><a href="#" onClick={() => setIsOpen(false)}>Dropdown 4</a></li>
                    </ul>
                </li>
                <li><a href="#contact" onClick={() => setIsOpen(false)}><i className="bi bi-envelope navicon"></i> Contact</a></li>
                </ul>
            </nav>
            <div class="social-links text-center">
                <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
                <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="#" class="google-plus"><i class="bi bi-skype"></i></a>
                <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>
        </div>
        </header>
        </div>
    )
}

export default Sidebar;