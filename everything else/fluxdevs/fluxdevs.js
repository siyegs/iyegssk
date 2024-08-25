
    // aos initialization
    AOS.init();

    AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });


    // embla carousel initialization
    let emblaNode = document.querySelector('.embla')
    let options = { loop: false }
    let plugins = [EmblaCarouselAutoplay()]
    let emblaApi = EmblaCarousel(emblaNode, options, plugins) 



    // tab and mobile dropdown
    function toggleDropdown() {
        var dropdown = document.getElementById("dropdownMenu");
        var bardiv2 = document.querySelector('.bardiv2')
        if (dropdown.style.display === "flex") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "flex";
            // bardiv2.style.display = "none"
        }
    }

    
    // dark mode
    let dmToggle = document.querySelector('.dmToggle')
    dmToggle.addEventListener("click", function name(params) {
        document.body.classList.toggle("dark-theme")
        console.log("svsv");

    })

    function letUsSee(params) {
        document.body.classList.toggle("dark-theme")
        console.log("svsv");
    }