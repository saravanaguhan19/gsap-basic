var tl = gsap.timeline();

tl.from("#nav h3", {
  y: -50,
  opacity: 0,
  duration: 0.4,
  delay: 0.1,
  stagger: 0.2,
});

tl.from("#main h1", {
  x: -200,
  opacity: 0,
  duration: 0.8,
  stagger: 0.4,
});

tl.from("img", {
  x: 100,
  rotate: 45,
  stagger: 0.5,
  opacity: 0,
  duration: 0.5,
});

tl.from("#footer h3", {
  y: 50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
});
