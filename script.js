gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

// span effect on texts
gsap.utils.toArray("p sub").forEach((el) => {
  gsap.fromTo(
    el,
    {
      backgroundPosition: "-0% 0"
    },
    {
      duration: 1,
      backgroundPosition: "-99.9% 0",
      ease: "sine.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    }
  );
});

// heart animation contact form
gsap.to(".contact_form-illustration", {
  scrollTrigger: {
    trigger: ".section.is-contactform",
    start: "top center"
  },
  scaleX: 1.05,
  scaleY: 1.05,
  ease: Elastic.easeOut,
  duration: 0.8,
  repeat: 2
});

// tumor growth landing
gsap.to(".lmlk-tumor.is-mag", {
  scrollTrigger: {
    trigger: "#aboutteaser",
    start: "top bottom",
    end: "top top",
    scrub: 2
  },
  scale: 2,
  rotation: 45,
  ease: Linear.easeNone
});

mm.add("(min-width: 768px)", () => {
  // desktop setup code here...
  // Loader
  let tlloading = gsap.timeline();
  tlloading
    .from(".nav_brand", {
      yPercent: -100,
      opacity: 0,
      duration: 0.8,
      ease: Power2.easeOut
    })
    .from(
      ".nav_menu-link, .nav-button-wrapper",
      {
        yPercent: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: Power2.easeOut
      },
      "<0.2"
    );
  // hero illustration
  gsap.to(".hero_illustration", {
    scrollTrigger: {
      trigger: ".hero_heading-wrapper",
      start: "top top",
      end: "bottom top",
      scrub: 2
    },
    yPercent: 60,
    ease: Power1.easeOut
  });

  // hero illustration Berichte
  gsap.to(".hero_illustration-berichte", {
    scrollTrigger: {
      trigger: ".is-article-hero",
      start: "top top",
      end: "bottom top",
      scrub: 2
    },
    yPercent: 100,
    ease: Power1.easeOut
  });

  // landing page animation

  // parallex stat numbers
  gsap.to("#stat1", {
    scrollTrigger: {
      trigger: "#scrolltrigger1",
      start: "top center",
      end: "bottom center",
      scrub: 3
    },
    yPercent: 100,
    ease: Linear.easeNone
  });

  gsap.to("#stat2", {
    scrollTrigger: {
      trigger: "#scrolltrigger2",
      start: "top center",
      end: "bottom center",
      scrub: 3
    },
    yPercent: 100,
    ease: Linear.easeNone
  });
});
</script>
<script src="https://unpkg.com/split-type"></script>
<script>
let typeSplit;
// Split the text up
function runSplit() {
  typeSplit = new SplitType(".heading-huge", {
    types: "lines"
  });
}
runSplit();
// Update on window resize
let windowWidth = $(window).innerWidth();
window.addEventListener("resize", function () {
  if (windowWidth !== $(window).innerWidth()) {
    windowWidth = $(window).innerWidth();
    typeSplit.revert();
    runSplit();
  }
});
// no scroll on menu click
$('.menu-button').on('click', function() {
  $('body').toggleClass('overflow-hidden');
});
  </script>
<script>
  // page transition t.ricks
let transitionTrigger = $(".transition-trigger");
let introDurationMS = 1200;
let exitDurationMS = 1000;
let excludedClass = "no-transition";
  
// On Page Load
if (transitionTrigger.length > 0) {
	transitionTrigger.click();
	$("body").addClass("no-scroll-transition");
	setTimeout(() => {$("body").removeClass("no-scroll-transition");}, introDurationMS);
}
// On Link Click
$("a").on("click", function (e) {
  if ($(this).prop("hostname") == window.location.host && $(this).attr("href").indexOf("#") === -1 &&
      !$(this).hasClass(excludedClass) && $(this).attr("target") !== "_blank" && transitionTrigger.length > 0) {
    e.preventDefault();
		$("body").addClass("no-scroll-transition");
    let transitionURL = $(this).attr("href");
    transitionTrigger.click();
    setTimeout(function () {window.location = transitionURL;}, exitDurationMS);
  }
});
// On Back Button Tap
window.onpageshow = function(event) {if (event.persisted) {window.location.reload()}};
// Hide Transition on Window Width Resize
setTimeout(() => {$(window).on("resize", function () {
setTimeout(() => {$(".transition").css("display", "none");}, 50);});
}, introDurationMS);


