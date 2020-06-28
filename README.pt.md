# exists.js

Dificuldade para executar uma ação somente após algum elemento específico ser inserido no DOM ? exists.js resolve esse problema para você se preocupar apenas com sua solução. *[Read in English](README.md)

## Uso

exists.js não depende de nenhuma biblioteca para o seu funcionamento.

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
		console.log('Elemento encontrado após 5 segundos');
		
		setTimeout(function() {
			document.querySelector('#demo .element1').insertAdjacentHTML('beforeend', '<div class="element3"></div>');
		}, 5000);
	});
	
	exists('.element3', '.element1').then(function() {
		console.log('Elemento encontrado após 10 segundos');
	});
</script>
```

O primeiro parâmetro sempre será o elemento que esperamos que seja inserido. O segundo parâmetro é opcional, se for inserido, o novo elemento vai ser esperado dentro desse elemento pai existente ao invés de ser monitorado em todo o DOM.

## CDN

Caso você desejar, poderá utilizar o Link abaixo com a versão mais atual ou baixar o arquivo para importar no projeto.

```bash
https://cdn.jsdelivr.net/gh/mathdevelop/exists.js@latest/exists.min.js
```