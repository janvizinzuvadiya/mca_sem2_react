import { useState, useEffect } from 'react';
// import './assets/css/main.css  ';

import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Sections/Home';
import About from './components/Sections/About';
import Portfolio from './components/Sections/Portfolio';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';  
import Resume from './components/Sections/Resume';
import Services from './components/Sections/Services';
import Testimonials from './components/Sections/Testimonials';

function App() {

const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    // --- 1. PRELOADER ---
    const preloader = document.querySelector('#preloader');
    if (preloader) preloader.remove();  
    
    // --- 2. TYPED.JS ---
    const selectTyped = document.querySelector('.typed');
    if (selectTyped && window.Typed) {
      let typed_strings = selectTyped.getAttribute('data-typed-items').split(',');
      new window.Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }

    // --- 3. SWIPER ---
    const initSwiper = () => {
      document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
        let config = JSON.parse(swiperElement.querySelector(".swiper-config").innerHTML.trim());
        if (window.Swiper) new window.Swiper(swiperElement, config);
      });
    };
    initSwiper();

    // --- 4. PURE COUNTER ---
    if (window.PureCounter) {
      new window.PureCounter();
    }

    // --- 5. SKILLS ANIMATION (Progress Bars) ---
    let skillsAnimation = document.querySelectorAll('.skills-animation');
    skillsAnimation.forEach((item) => {
      if (window.Waypoint) {
        new window.Waypoint({
          element: item,
          offset: '80%',
          handler: function() {
            let progress = item.querySelectorAll('.progress .progress-bar');
            progress.forEach(el => {
              el.style.width = el.getAttribute('aria-valuenow') + '%';
            });
          }
        });
      }
    });

    // --- 6. GLIGHTBOX ---
    if (window.GLightbox) {
      window.GLightbox({ selector: '.glightbox' });
    }

    // --- 7. ISOTOPE (Portfolio Filtering) ---
    document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      if (window.imagesLoaded && window.Isotope) {
        window.imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
          let initIsotope = new window.Isotope(isotopeItem.querySelector('.isotope-container'), {
            itemSelector: '.isotope-item',
            layoutMode: layout,
            filter: filter,
            sortBy: sort
          });

          isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
            filters.addEventListener('click', function() {
              isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
              this.classList.add('filter-active');
              initIsotope.arrange({ filter: this.getAttribute('data-filter') });
            }, false);
          });
        });
      }
    });

    // --- 8. GLOBAL SCROLL LOGIC ---
    const handleGlobalScroll = () => {
      // Toggle ScrollTop Button
      window.scrollY > 100 ? setShowScrollTop(true) : setShowScrollTop(false);

      // Navmenu Scrollspy
      let navmenulinks = document.querySelectorAll('.navmenu a');
      navmenulinks.forEach(link => {
        if (!link.hash) return;
        let section = document.querySelector(link.hash);
        if (!section) return;
        let position = window.scrollY + 200;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          document.querySelectorAll('.navmenu a.active').forEach(active => active.classList.remove('active'));
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    // --- 9. INITIALIZE GLOBAL LISTENERS ---
    if (window.AOS) window.AOS.init({ duration: 600, easing: 'ease-in-out', once: true });
    window.addEventListener('scroll', handleGlobalScroll);
    handleGlobalScroll(); 

    // --- 10. CLEANUP ---
    return () => window.removeEventListener('scroll', handleGlobalScroll);
  }, []);

  // --- 11. SCROLL TO TOP ACTION (Moved outside useEffect) ---
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


      return (
    <>
      <div id="preloader"></div>     
              <Sidebar />
    <main id="main" className="main">
              {/* <!-- Preloader --> */}
            
              <Home />
              <About />
              <Resume />
              <Portfolio />
              <Services />
              <Testimonials />
              <Projects />
              <Contact /> 


         <footer id="footer" className="footer position-relative">

          <div className="container">
              <div className="copyright text-center ">
                <p>© <span>Copyright</span> <strong className="px-1 sitename">iPortfolio</strong> <span>All Rights Reserved</span></p>
              </div>
              <div className="credits">
                 {/* <!-- All the links in the footer should remain intact. -->
                      <!-- You can delete the links only if you've purchased the pro version. -->
                      <!-- Licensing information: https://bootstrapmade.com/license/ -->
                      <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] --> */}
                  Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> | <a href="https://bootstrapmade.com/tools/">DevTools</a>
              </div>
          </div>

      </footer>
     </main>
      <a 
        href="#" 
        id="scroll-top" 
        className={`scroll-top d-flex align-items-center justify-content-center ${showScrollTop ? 'active' : ''}`}
        onClick={scrollToTop}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  )
  };

      
  




export default App;
