describe('Login tests', () => {

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

   
  it('Login & logout from the system', () => {  

      cy.xpath("//a[@id='profile_icon_ref']//div[@as='div']").click()
      cy.get('.option-container').eq(5).click()

     });

// this test script for Creating patient and some other actions would be perform

    it('patient create', ()=>{
        
      cy.xpath("//body/div[@id='root']/div/div/div/div/div[@id='channel-listings']/div[3]/div[1]/img[1]").click()
      cy.contains('Create Patient').click()
      cy.xpath("//button[@type='submit']").click ()
      cy.xpath("//body/div/div[@id='create-patient-modal']/div/form/div/div[1]/div[2]").should("have.text","First name is required.")
      cy.xpath("//div[normalize-space()='Last name is required.']").should("have.text","Last name is required.")
      cy.xpath("//div[normalize-space()='Date of birth is required.']").should("have.text","Date of birth is required.")
      cy.get('input[name="first_name"]').type("akkkka")
      cy.get('input[name="last_name"]').type("annmma")
      cy.get('input[name="dob"]').type("12/12/2022")
      cy.xpath("//i[@class='dropdown icon']").click()
      cy.xpath("//span[normalize-space()='Male']").click()
      cy.xpath("//button[@type='submit']").click()
      cy.get('input[name="admission_date"]').type("12/12/2022")
      cy.xpath("//div[@title='United States: + 1']//div[@class='flag us']").click()
      cy.xpath("//li[@role='option']//div[@class='flag pk']").click()
      cy.xpath("//input[@value='+92']").type('300 5851171')
        cy.wait(10000)
        cy.xpath("//button[@class='ui basic button actions_btn']").click()

        cy.xpath("//button[@class='ui primary button']").click()
        cy.xpath("//button[@class='ui tiny icon primary button send-button']//img[@class='ui image']").click()
        cy.wait(5000)
        cy.xpath("//button[@class='VoiceClipRecorder_buttonOK__1xIoQ']//img[@class='ui image']").click()
        cy.wait(10000)
        cy.xpath("//button[@class='ui tiny icon primary button send-button']//img[@class='ui image']").click()
        cy.wait(10000)
        cy.xpath("//button[@class='ui tiny icon primary button']").click()

      });

      it.only('patient already exist', ()=>{

        cy.xpath("//body/div[@id='root']/div/div/div/div/div[@id='channel-listings']/div[3]/div[1]/img[1]").click()
        cy.contains('Create Patient').click()
        cy.xpath("//button[@type='submit']").click ()
        cy.xpath("//body/div/div[@id='create-patient-modal']/div/form/div/div[1]/div[2]").should("have.text","First name is required.")
        cy.xpath("//div[normalize-space()='Last name is required.']").should("have.text","Last name is required.")
        cy.xpath("//div[normalize-space()='Date of birth is required.']").should("have.text","Date of birth is required.")
        cy.get('input[name="first_name"]').type("akkkka")
        cy.get('input[name="last_name"]').type("annmma")
        cy.get('input[name="dob"]').type("12/12/2022")
        cy.xpath("//i[@class='dropdown icon']").click()
        cy.xpath("//span[normalize-space()='Male']").click()
        cy.xpath("//button[@type='submit']").click()
        cy.get('input[name="admission_date"]').type("12/12/2022")
        cy.xpath("//div[@title='United States: + 1']//div[@class='flag us']").click()
        cy.xpath("//li[@role='option']//div[@class='flag pk']").click()
        cy.xpath("//input[@value='+92']").type('300 5851171')

        cy.xpath("//button[normalize-space()='Join Channel']").click()
        cy.xpath("//button[@class='ui basic button actions_btn']").click()

      });
     });


