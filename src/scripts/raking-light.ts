/**
 * Raking light — the page's one authored motion.
 *
 * Every raised plane on this page catches a light source that tracks the
 * pointer: the 1px top edge brightens where the light passes, and a soft wash
 * follows across the surface. It is material behaviour, not a cursor effect —
 * nothing moves, nothing fades in, and the page is fully legible before it runs.
 *
 * Writes two custom properties per hovered plane. No rAF loop, no layout reads
 * outside a single getBoundingClientRect on enter, no work at all on touch
 * devices or under prefers-reduced-motion.
 */

const FINE_POINTER = '(hover: hover) and (pointer: fine)';

export function rakingLight(): void {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	if (!window.matchMedia(FINE_POINTER).matches) return;

	const planes = Array.from(document.querySelectorAll<HTMLElement>('.plane'));
	if (planes.length === 0) return;

	for (const plane of planes) {
		let rect: DOMRect | null = null;
		let frame = 0;

		const track = (event: PointerEvent) => {
			if (frame) return;
			frame = requestAnimationFrame(() => {
				frame = 0;
				if (!rect) rect = plane.getBoundingClientRect();
				plane.style.setProperty('--lx', `${event.clientX - rect.left}px`);
				plane.style.setProperty('--ly', `${event.clientY - rect.top}px`);
			});
		};

		plane.addEventListener('pointerenter', (event) => {
			rect = plane.getBoundingClientRect();
			plane.style.setProperty('--lit', '1');
			track(event);
		});

		plane.addEventListener('pointermove', track, { passive: true });

		plane.addEventListener('pointerleave', () => {
			if (frame) cancelAnimationFrame(frame);
			frame = 0;
			rect = null;
			plane.style.setProperty('--lit', '0');
		});
	}
}
