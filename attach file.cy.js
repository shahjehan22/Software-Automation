describe('test',()=>{

  // this before each block will be executed for each test script
  
  beforeEach(() => {
     
      cy.visit('webapp.hucu.us')
      cy.get('input[name="username"]').type("auser")
      cy.get('button').contains('Log In').click()
      cy.get('input[type="password"]').type("Shah123!")
      cy.get('button').contains('Log In').click()
      cy.get('input[class="pincode-input-text"]').eq(0).type("1")
      cy.get('input[class="pincode-input-text"]').eq(1).type("2")
      cy.get('input[class="pincode-input-text"]').eq(2).type("3")
      cy.get('input[class="pincode-input-text"]').eq(3).type("4")
      cy.get('input[class="pincode-input-text"]').eq(0).type("1")
      cy.get('input[class="pincode-input-text"]').eq(1).type("2")
      cy.get('input[class="pincode-input-text"]').eq(2).type("3")
      cy.get('input[class="pincode-input-text"]').eq(3).type("4")
  
    });
  it('Attach file in chat', () => { 

   cy.wait(10000)
   cy.xpath("//div[@class='left-menu']//div[5]//div[1]//a[1]").click()
   cy.wait(10000)
   cy.xpath("//input[@id='attachInput']").attachFile('ww.png')
   cy.wait(5000)
   cy.xpath("//button[@class='ui tiny icon primary button send-button']").type('{ctrl}+{enter}')

  
  })
  
  
  })