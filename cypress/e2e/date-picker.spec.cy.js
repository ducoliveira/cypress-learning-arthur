/// <reference types = "cypress" />

import datePicker from "../support/date-picker"

describe('Date Picker', () => {

    Cypress.on('uncaught:exception', () => {
        return false
    })

    it('Date picker generic function', () => {
        
        const datepicker = new datePicker()

        var pickerSelector = '#datePickerMonthYearInput'
        var yearSelector = '.react-datepicker__year-select'
        var monthSelector = '.react-datepicker__month-select'
        var daySelector = '.react-datepicker__day:not(.react-datepicker__day--outside-month)'

        cy.visit('https://demoqa.com/date-picker')

        datepicker.setLocators(pickerSelector, yearSelector, monthSelector, daySelector)

        datepicker.selectDate('1999-08-06')

    })

})