# exists.js

Difficulty performing an action only after a specific element is inserted into the DOM? exists.js solves this problem for you to worry only about your solution. *[Leia em Português](README.pt.md)

## Usage

exists.js does not depend on any library for its operation.

```
<div id="demo">
	<div class="element1"></div>
</div>
<script src="https://cdn.jsdelivr.net/gh/mathdevelop/exists.js@latest/exists.min.js"></script>
<script>
	setTimeout(function() {
		document.querySelector('#demo').insertAdjacentHTML('beforeend', '<div class="element2"></div>');
	}, 5000);
	
	exists('.element2').then(function() {
		console.log('Element found after 5 seconds');
		
		setTimeout(function() {
			document.querySelector('#demo .element1').insertAdjacentHTML('beforeend', '<div class="element3"></div>');
		}, 5000);
	});
	
	exists('.element3', '.element1').then(function() {
		console.log('Element found after 10 seconds');
	});
</script>
```

The first parameter will always be the element you expect to be inserted. The second parameter is optional, if inserted, the new element will be expected within this existing parent element instead of being monitored throughout the DOM.

## CDN

If you wish, you can use the link below with the most current version or download the file to import into the project.

```bash
https://cdn.jsdelivr.net/gh/mathdevelop/exists.js@latest/exists.min.js
```