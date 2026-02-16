import type { App } from "vue";
import Lenis from "lenis";

export default {
  install(app: App) {
    const lenis = new Lenis({
      duration: 0.5,
      smoothWheel: true,
      lerp: 0.1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // expose lenis globally
    app.config.globalProperties.$lenis = lenis;
  },
};

// Augment Vue's type definition so `$lenis` is recognized
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $lenis: Lenis;
  }
}
