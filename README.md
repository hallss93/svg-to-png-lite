# svg-to-png-lite

> Módulo para exclusão de objetos repetidos. O módulo considera key e values idênticos e a estrutura idêntica.

## Como iniciar

_Start:_

1. Instale a dependência com `npm i --save svg-to-png-lite`
2. Importe a biblioteca:
````javascript
import svgpng from 'svg-to-png-lite';
svgpng("svg-id").then(console.log).catch(console.error)