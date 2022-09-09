# Desafio do processo seletivo da Linx Impulse

<div id="inicio" align=center>
<h2><strong>Status do Projeto</strong></h2>

![Badge](https://img.shields.io/website?down_message=em%20andamento&label=STATUS&style=for-the-badge&up_message=conclu%C3%ADdo&url=https%3A%2F%2Fytallobruno.github.io%2FProjetoFinalModulo2%2F)

</div>

# **Sobre**

O desafio consiste no desenvolvimento do _layout_ de uma _landing page_ com uma grade de produtos e um formulário de _newsletter_. Seu principal objetivo é transformar este _layout_ em uma página funcional usando React.

<p align="center">
    <img src= "./src/assets/linx-impulse.gif" alt="Linx Impulse">
</p>

**Link do página**: https://fabulous-custard-9e202c.netlify.app/

**Link do layout**: https://xd.adobe.com/spec/4025e242-a495-4594-71d2-5fd89d774b57-3614

**Endpoint da API**: https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1

## **Layout**

Você terá que implementar o _layout_ de acordo com esse **[mock](https://xd.adobe.com/spec/4025e242-a495-4594-71d2-5fd89d774b57-3614)**. O _mock_ contém a estrutura do layout e todo o estilo da página.

É importante se ater aos detalhes de tamanho e espaçamento entre os elementos da página, construindo o HTML mais semântico possível utilizando-se das tags do HTML5.

## **Comportamento**:

Para preencher a página com as informações dos produtos, você terá que consultar esta **[API](https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1)** de forma paginada, sendo que cada página consultada retornará as informações de **8 produtos** e um **link para a próxima página**.

## **Funcionalidades**

Assim que obter os dados, você deverá implementar os seguintes pontos:

- Para cada produto retornado pela API, um card de produto com as respectivas
  informações deve ser criado na grade de produtos;
- Ao clicar no botão Ainda mais produtos aqui! a próxima página da API deve ser
  consultada, gerando mais 8 produtos na grade existente, abaixo dos produtos já
  carregados pela primeira requisição;
- Os formulários devem ter seus campos de input validados de acordo com o
  conteúdo (ex: O campo de email deve conter um email válido);

<br>
