/**
 * Portrait cycle.
 *
 * Cross-fades the hero portrait between however many photographs are in
 * src/assets/me/. Deliberately slow and low-contrast in behaviour: this page is
 * built around a single authored motion (the raking light), so this one stays
 * quiet enough to read as the same material breathing rather than as a second
 * effect competing for attention.
 *
 * Does nothing at all when there is only one photograph, when the viewer has
 * asked for reduced motion, or while the portrait is off-screen.
 */

const INTERVAL_MS = 5000;

export function portraitCycle(): void {
	const frame = document.querySelector<HTMLElement>('[data-portrait]');
	if (!frame) return;

	const shots = Array.from(frame.querySelectorAll<HTMLElement>('[data-shot]'));
	if (shots.length < 2) return;

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	let index = 0;
	let timer: number | undefined;

	const advance = () => {
		shots[index].classList.remove('is-active');
		index = (index + 1) % shots.length;
		shots[index].classList.add('is-active');
	};

	const start = () => {
		if (timer !== undefined) return;
		timer = window.setInterval(advance, INTERVAL_MS);
	};

	const stop = () => {
		if (timer === undefined) return;
		window.clearInterval(timer);
		timer = undefined;
	};

	// Run only while the portrait is on screen AND the tab is in front.
	let onScreen = false;

	const sync = () => {
		if (onScreen && !document.hidden) start();
		else stop();
	};

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) onScreen = entry.isIntersecting;
			sync();
		},
		{ threshold: 0.2 }
	);
	observer.observe(frame);

	document.addEventListener('visibilitychange', sync);
}
