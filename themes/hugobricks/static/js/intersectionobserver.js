document.querySelectorAll('section, footer').forEach(function(section,index) {
    if(index>0) {
		section.classList.add('opaque');
	}
});

window.addEventListener('DOMContentLoaded', () => {
	function handler(entries, obs) {
		for (const entry of entries) {
            if (entry.isIntersecting || entry.intersectionRatio > 0 || entry.boundingClientRect.top < window.innerHeight) {
                entry.target.classList.remove('opaque');
                obs.unobserve(entry.target);
    		}
		}
	}

	let observer = new IntersectionObserver(handler);
	document.querySelectorAll('section, footer').forEach(function(section,index) {
		if(index>0) observer.observe(section);
	});
});