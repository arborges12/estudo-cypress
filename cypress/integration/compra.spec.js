/// <reference types="cypress" />

context('Compra', () => {
     
    it('Efetuar uma compra de produto', () => {
    //cy.backgroundLogin() 
       cy.visit('/')
       //cy.pause()
       cy.contains('Faded Short Sleeve T-shirts').trigger('mouseover')
       cy.contains('Faded Short Sleeve T-shirts')
       .parent() //h5
       .siblings('div.button-container')
       .children('a')
       .first() //add to cart
       .click()
       //Validação do produto adicionado
       cy.get('.icon-ok')
       .parent() //h2
       .should('contain.text','Product successfully added to your shopping cart')
       cy.get('span#layer_cart_product_title').should('contain.text','Faded Short Sleeve T-shirts')
       cy.get(".button-container a[href$='controller=order']").click()
       cy.get(".cart_navigation a[href$='order&step=1']").click()
       cy.get('#email').type('arborges.12@gmail.com')
       cy.get('#passwd').type('123456')
       cy.get('button#SubmitLogin').click()
       //Validando se o endereço de entrega é igual ao de cobrança
       cy.get('[type=checkbox]#addressesAreEquals').should('have.attr', 'checked','checked')
       //cy.get('[type=checkbox]#addressesAreEqulas').should('have.attr', 'name', 'same')
       cy.get('[name=processAddress]').click()
       cy.get('[type=checkbox]#cgv').click()
       cy.get('button[name=processCarrier]').click()
       cy.get('.bankwire').click()
       cy.get('.cart_navigation button[type=submit]')
       .find('span')
       .contains('I confirm my order')
       .click()
       cy.get('.cheque-indent strong')
       .should('contain.text', 'Your order on My Store is complete.')  
       //Identificando um código especifico dentro de um texto.  
       cy.get('div.box').invoke('text').then((text) => { //capturando um texto para validação de conteudo
           console.log(text)
           console.log(text.match(/[A-Z][A-Z]+/g)[1]) //expressão para localizar o codigo
           cy.writeFile('cypress/fixtures/pedido.json', {id: `${text.match(/[A-Z][A-Z]+/g)[1]}`})//armazenando o código em um arquivo      
       })
       cy.get(".cart_navigation a[href$='controller=history']").click() //retornando a list de pedido
       cy.readFile('cypress/fixtures/pedido.json').then((pedido) =>{ //verificando se o código do texto, armazenado no arquivo é o mesmo que consta em tela
        cy.get('tr.first_item .history_link a').should('contain.text', pedido.id)

       })  
       


    })
})