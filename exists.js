function exists(selector, parentElement = null) {
	return new Promise(function(resolve) {
		var observer = new MutationObserver(function() {
			if(document.querySelector(selector)) {
				observer.disconnect();

				resolve();
			} 
		}),
		target = parentElement ? document.querySelector(parentElement) ?? document : document;

		observer.observe(target, { childList: true, subtree: true });
	});
}