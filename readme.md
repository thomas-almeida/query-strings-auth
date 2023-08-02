# Query strings

### Exemplo deste repositório:
Introduzir exemplo de como query strings funcionam, como podem ser aproveitadas e usadas para chamadas específicas, no caso deste repositório, estamos simulando um login que é feito diretamente através de uma URL externa dentro de um time, onde quando o usuário acessa o link de login de uma plataforma e não está passando os acessos em uma query string, o login é automaticamente barrado.

Para que o usuário seja logado com sucesso no primeiro acesso, o link de acesso deve conter uma query string com as variáveis e dados necessários para o acesso normal, para que após isso a sessão seja salva em local storage no navegador para futuras sessões naquela máquina. Mas afinal, o que são query strings e como tratá-las no JS?

query strings são dados passados através de uma url, após o caractere __*?*__, geralmente usados para passar informações através de páginas, compostas sempre por dados de __chave__ e __valor__ com:

```
  https://www.tabnews.com.br/search?subject=Javascript
```

onde a url passa como dados __assunto=Javascrpit__ através da url da rota de pesquisa de um site de notícias e posts.

Para obtermos os valores da query string, devemos capturar os valores brutos da url e usar a função __URLSearchParams()__ do js.

### window.location.href vs window.location.search

```javascript
window.location.href
```
retorna a url bruta do DOM

```javascript
window.location.search
```
retorna a url bruta do DOM, a partir do caractere __?__

### Capturando e tratando valores de uma query string

para usar o método de tratamento de query strings, a classe __URLSearchParams__ recebe um parametro que deve ser o valor da query string, que no caso é mais simples de ser entregue quando usamos *window.location.search*

```javascript
//url:  https://www.tabnews.com.br/search?subject=Javascript&status=recents
const queryString = window.location.search;
const params = new URLSearchParams(queryString)
```
método get para retornar valores com base na chave

```javascript
const subject = params.get('subject') 
const status = params.get('status') 
```

ou, se caso ele possa vir a existir ou não
```javascript
const hasSubject = params.has('subject')
const hasStatus = params.has('status')
```

obtendo todos os dados da query string num objeto
```javascript

let queryItems = {}

for(const [key, value] of params){
 queryItems[key] = value
}

/*
valor de queryItems após iteração:
{
  subject: Javascript,
  status: Recents
}
*/
```




