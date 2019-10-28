describe("Initial page load", ()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:8100/')
  })
  it("should successfully load home page (feed tab)", ()=>{
    cy.url().should('include','/tabs/feed-tab')
  })

  it('should initialize on feed tab', ()=>{
    cy.contains('Feed').should('be.visible');
  })

  it('should render ion tab bar',()=>{

    cy.get('ion-tab-bar').should('be.visible')

  })

  it('should render query both ionic tab elements navigators', ()=>{

    cy.get('ion-tab-button').should('be.visible')
      .and('have.length', 2)

  })

})





describe("Navigation", ()=>{

})