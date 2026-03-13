import { useState, useEffect } from 'react';
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

    // --- 4. SCROLL LOGIC (ScrollTop & Scrollspy) ---
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

    // --- 5. INITIALIZE ---
    if (window.AOS) window.AOS.init({ duration: 600, easing: 'ease-in-out', once: true });
    window.addEventListener('scroll', handleGlobalScroll);
    handleGlobalScroll(); // Run once on load to set active state

    // --- 6. CLEANUP ---
    return () => window.removeEventListener('scroll', handleGlobalScroll);


      const scrollToTop = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // --- 1. TYPED.JS ---
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

    // --- 2. PURE COUNTER (For stats) ---
    if (window.PureCounter) {
      new window.PureCounter();
    }

    // --- 3. SKILLS ANIMATION (Progress Bars) ---
    let skillsAnimation = document.querySelectorAll('.skills-animation');
    skillsAnimation.forEach((item) => {
      if (window.Waypoint) {
        new window.Waypoint({
          element: item,
          offset: '80%',
          handler: function(direction) {
            let progress = item.querySelectorAll('.progress .progress-bar');
            progress.forEach(el => {
              el.style.width = el.getAttribute('aria-valuenow') + '%';
            });
          }
        });
      }
    });

    // --- 4. GLIGHTBOX (Image Popups) ---
    if (window.GLightbox) {
      window.GLightbox({ selector: '.glightbox' });
    }

    // --- 5. ISOTOPE (Portfolio Filtering) ---
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
  }
    }, []);
  


      return (
    <>
    <main id="main" style={{ paddingLeft: '590px' }}>
        <Sidebar />
         <Home />
        <About />
        <Resume />
        <Portfolio />
         <Services />
         <Projects />
         <Contact /> 
     </main>
    </>
  )
  };

      
  




export default App;
