# svg-to-png-lite

> Converter SVG para PNG.

## Como iniciar

_Start:_

1. Instale a dependência com `npm i --save svg-to-png-lite`
2. Importe a biblioteca:
````javascript
import svgpng from 'svg-to-png-lite';
````
Exemplo 1:
````javascript
// Passe o ID do SVG
svgpng("svg-id").then(console.log).catch(console.error)
````

Exemplo 2:
````javascript
// Determinando Width e Height - Passando ID e Opções
svgpng("svg-id", {width:300, height:300}).then(console.log).catch(console.error)
````
## OPÇÕES

### WIDTH `Number`.  Default `largura do SVG`

Determina a largura da imagem.

### HEIGHT `Number`. Default `altura do SVG`

Determina a altura da imagem.

### EXT `String`. Default `PNG`

Determina a extensão da imagem\: PNG ou JPEG