import { isContext } from "vm"
import { AssertionError } from "assert"


describe("Initial page and components load", ()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:8100/')
  })
  it("should successfully load home page (feed tab)", ()=>{
    cy.url().should('include','/tabs/feed-tab')
  })

  it("should have a title", ()=>{
    cy.title().should('be', 'OpenForce Ionic Assignment')
  })

  it('should initialize on feed tab', ()=>{
    cy.contains('Feed').should('be.visible');
  })

  it('should render ion tab bar',()=>{
    cy.get('ion-tab-bar').should('be.visible')
  })

  it('should query and render both ionic tab navigator ', ()=>{
    cy.get('ion-tab-button').should('be.visible')
      .and('have.length', 2)
  })

  it('should correctly reload page', ()=>{
    cy.reload()
    cy.url().should('include', 'tabs/feed-tab')
  })

})

describe('GitHub API', ()=>{
  it ('should make requests to GitHub API', ()=>{
    cy.request({
      method: 'get',
      url: 'https://api.github.com/users?rel=0&per_page=100',
      headers:{
        'accept':'application/json'
      },
      response: []
    })
      .then((res)=>{
        cy.log(res.body)
        assert.equal(res.status, 200);
        expect(res.body).to.not.be.null;
        expect(res.body).to.be.a('array')
        expect(res.body).to.have.length(100)
      })
  })
})

describe('Navigation', ()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:8100/')
  })

  it('should go feed tab and successfully load content', ()=>{
    let user;

    //navigate to feed-tab
    cy.visit('http://localhost:8100/tabs/feed-tab/')
    cy.get('ion-item').should('have.length.greaterThan', 10)

    cy.request({
      method: 'get',
      url: 'https://api.github.com/users?rel=0&per_page=100',
      headers:{
        'accept':'application/json'
      },
      response: []
    })
      .then((res)=>{
        user = res.body[0].login //'mojombo'
        cy.get('ion-item').should('contain', user)
      })

    //should go to correct endpoint
    cy.url().should('include', 'tabs/feed-tab')
  })

  it('should navigate to User/Search tab and successfully load content', ()=>{
    //navigate to feed-tab
    cy.get('ion-tab-button[tab="users-tab"]').click();
    cy.contains('User/Search').should('be.visible')

    cy.url().should('include', 'tabs/users-tab')

    //successfull load search bar
    cy.get('ion-searchbar').should('be.visible')
  })

  it('should navigate back to Feed tab and successfully load content', ()=>{
    //navigate to feed-tab
    cy.get('ion-tab-button[tab="feed-tab"]').click();
    cy.contains('Users Feed').should('be.visible')

    cy.url().should('include', 'tabs/feed-tab')

    //successfully loaded entries
    cy.get('ion-item').should('have.length.greaterThan', 10)
  })

})

describe('Actions', ()=>{

})

describe('Search input form', ()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:8100')
    cy.get('ion-tab-button[tab="users-tab"]').click();
  })

  const typedText = "mojombo"

  it ('should not display a user card upon initial load', ()=>{
    cy.get('ion-card').should('not.be.visible')
  })

  it ('should accept text input', ()=>{

    cy.get('ion-searchbar')
      .type(typedText) //chain type command onto the get
      .should('be.visible')
      .and('have.value', typedText) //ensure field's value matches the type
  })

  context('should properly handle submission of search input', ()=>{
    beforeEach (()=>{
      cy.get('ion-searchbar')
        .type(typedText)
        .type('{enter}')
    })

    it ('should display correct user card upon submission', ()=>{
      cy.get('ion-card').should('be.visible')
        .and('contain', typedText)
    })
  })

})