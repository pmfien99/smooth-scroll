import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ScrollSmoother } from 'gsap/all';

/* The following plugin is a Club GSAP perk */
window.Webflow ||= [];
window.Webflow.push(() => {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
  const smoother = ScrollSmoother.create({
    smooth: 0.8,
  });
});
