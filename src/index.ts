import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

/* The following plugin is a Club GSAP perk */
window.Webflow ||= [];
window.Webflow.push(() => {
  gsap.registerPlugin(ScrollSmoother);
  const _smoother = ScrollSmoother.create({
    smooth: 0.8,
  });
});
