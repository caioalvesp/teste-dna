## Página de Produtos - Teste DNA For Marketing

Página desenvolvida em Vue.js que exibe uma lista de produtos.

## Tecnologias e metodologias utilizadas

- Vue.js
- Vite
- Vue GTM
- Lodash Debounce
- Font Awesome

## Passo a passo para execução do projeto

Essas instruções farão com que você tenha uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste.

## Pré-Requisitos

```
- Node >= 20.18.0
- NPM >= 10.8.2
```

## Instalação

**1 - Clonar o projeto**

```
git clone https://github.com/caioalvesp/teste-dna.git
```

**2 - Entrar na raiz do projeto e instalar dependências**

```
- cd teste-dna
- npm install
```

**3 - Rodar em modo de desenvolvimento**

```
npm run dev
```

OBS: ao rodar o comando npm run dev, será aberta automaticamente uma página no seu navegador, apontando para http://localhost:5173, caso isso não aconteça, basta acessar a url manualmente. A página irá recarregar automaticamente caso haja alguma edição.

**4 - Build da aplicação para produção**

```
npm run build
```

OBS: Cria o aplicativo para produção na pasta `dist`.
Ele agrupa corretamente o Vue no modo de produção e otimiza o build para obter o melhor desempenho.
A compilação é reduzida e os nomes dos arquivos incluem os hashes. <br>

**5 - Encontrar informações enviadas ao Google Tag Manager**

```
Acessar o console do navegador apertando a tecla F12
```

OBS: ao abrir o console, digitar o comando `dataLayer` para acessar o objeto com as informações enviadas ao GTM.
Estão sendo rastreados os eventos de busca e clique no produto.
