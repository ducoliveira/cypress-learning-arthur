class Form{
    openSite(){
        cy.visit('https://demoqa.com/automation-practice-form')
    }
    fillName(firstName, lastName){
        cy.get('#firstName').type(firstName)
        cy.get('#lastName').type(lastName)
    }
    fillEmail(email){
        cy.get('#userEmail').type(email)
    }
    selectGender(gender){
        cy.get('.custom-control-label').contains(gender).click({force:true})
    }
    fillMobile(mobile){
        cy.get('#userNumber').type(mobile)
    }
    selectBirth(year, month, day){
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__year-select').select(year)
        cy.get('.react-datepicker__month-select').select(month)
        cy.get('.react-datepicker__day:not(.react-datepicker__day--outside-month)').contains(day).click()
    }
    selectSubjects(subject){
        cy.get('#subjectsInput').type(subject)
        cy.get('.subjects-auto-complete__menu-list')
          .contains(subject)
          .click()
    }
    selectHobbies(hobbie){
        cy.get('.custom-control-label').contains(hobbie).click({force:true})
    }
    uploadPicture(){
        cy.get('#uploadPicture').selectFile('example-image.jpg')
    }
    fillAddress(address){
        cy.get('#currentAddress').type(address)
    }
    fillCityState(city, state){
        cy.get('#state').click()
        cy.get('.css-yt9ioa-option').contains(state).click()
        cy.get('#city').click()
        cy.get('.css-1n7v3ny-option').contains(city).click()
    }
    submit(){
        cy.get('#submit').click({force:true})
    }
    checkMessage(){
        cy.get('.modal-content').should('contain.text', 'Thanks for submitting the form')
    }

    validateName(firstName, lastName){
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text', `${firstName} ${lastName}`)
    }
    validateEmail(email){
        cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', email)
    }
    validateGender(gender){
        cy.get('tbody > :nth-child(3) > :nth-child(2)').should('have.text', gender)
    }
    validateMobile(mobile){
        cy.get('tbody > :nth-child(4) > :nth-child(2)').should('have.text', mobile)
    }
    validateBirth(year, month, day){
        cy.get('tbody > :nth-child(5) > :nth-child(2)').should('contain.text', `${day} ${month},${year}`)
    }
    validateSubjects(subject){
        cy.get('tbody > :nth-child(6) > :nth-child(2)').should('contain.text', subject)
    }
    validateHobbies(hobbie){
        cy.get('tbody > :nth-child(7) > :nth-child(2)').should('contain.text', hobbie)
    }
    validateAddress(address){
        cy.get('tbody > :nth-child(9) > :nth-child(2)').should('have.text', address)
    }
    validateStateCity(state, city){
        cy.get('tbody > :nth-child(10) > :nth-child(2)').should('have.text', `${state} ${city}`)
    }
}

    export default Form