/// <reference types="cypress" />

import Form from "../support/form-objects"

describe('Form Automation', () => {
  
    Cypress.on("uncaught:exception", (e, runnable) => {
      return false
    })
  
    it('Fill the form', () => {

      const form = new Form()

      cy.fixture('user').then((user) =>{

        var firstName = user.firstName
        var lastName = user.lastName
        var email = user.email
        var gender = user.gender
        var mobile = user.mobile
        var year = user.year
        var month = user.month
        var day = user.day
        var subject = user.subject
        var hobbie = user.hobbie
        var address = user.address
        var city = user.city
        var state = user.state

        form.openSite()

        form.fillName(firstName, lastName)

        form.fillEmail(email)

        form.selectGender(gender)

        form.fillMobile(mobile)

        form.selectBirth(year, month, day)

        form.selectSubjects(subject)

        form.selectHobbies(hobbie)

        form.uploadPicture()

        form.fillAddress(address)

        form.fillCityState(city, state)

        form.submit()

        form.checkMessage()

        form.validateName(firstName, lastName)
        form.validateEmail(email)
        form.validateGender(gender)
        form.validateMobile(mobile)
        form.validateBirth(year, month, day)
        form.validateSubjects(subject)
        form.validateHobbies(hobbie)
        form.validateAddress(address)
        form.validateStateCity(state, city)

      }) 
      
    })
  
  })