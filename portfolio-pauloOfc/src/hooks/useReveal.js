import { gsap, useGSAP } from "@/lib/gsap";

/*
  Anima com GSAP + ScrollTrigger todos os elementos com [data-reveal] dentro do scope.
  data-reveal="up" | "left" | "right" | "fade"  -> direção da entrada
  data-reveal-stagger                           -> anima os filhos diretos em sequência
  Respeita a preferência de "reduzir movimento" do sistema.
*/
const offsets = {
  up: { y: 48 },
  left: { x: -60 },
  right: { x: 60 },
  fade: {},
};

export function useReveal(scope, deps = []) {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    // Marca o scope para que hooks aninhados (ex.: uma seção dentro da Home) não animem o mesmo elemento duas vezes
    scope.current.setAttribute("data-reveal-scope", "");

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray("[data-reveal]", scope.current).forEach((el) => {
        if(el.parentElement.closest("[data-reveal-scope]") !== scope.current) return;

        const from = offsets[el.dataset.reveal] ?? offsets.up;
        const targets = el.hasAttribute("data-reveal-stagger") ? el.children : el;

        gsap.from(targets, {
          ...from,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });
    });

    return () => mm.revert();
  }, { scope, dependencies: deps, revertOnUpdate: true });
}
