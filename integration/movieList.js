describe('Movie List', function(){
  beforeEach(() => {
    cy.visit('https://yegor-sytnyk.github.io/movies-list/')

  })

  it ('Finds "12 Angry Men"', function () {
    // Website contains the movie 12 Angry Men
    cy.contains('12 Angry Men')
  })


  it ('Clicks 12 Angry Men"', function () {
    // Click the movie 12 Angry Men
    cy.contains('12 Angry Men').click()

  })


  it ('Finds modal-content pop up window', function () {
    // Click the movie 12 Angry Men
    cy.contains('12 Angry Men').click()

    // Get the pop up window class titled 'modal content'
    cy.get('.modal-content')

  })

  it ('Clicks remove of "12 Angry Men"', function () {
    // Click the movie 12 Angry Men
    cy.contains('12 Angry Men').click()
    // Saves content
    cy.get('.modal-content')
    .contains('Save')
    .click()
    .get('.toast-message')

  })

  it('Searches "12 Angry Men"', () => {
    const typedText = '12 Angry Men'
    cy.get('div.input')
    .type(typedText)
    .should('have.value', typedText)
  })

})
