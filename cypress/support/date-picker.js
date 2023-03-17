class datePicker{

    locators = {
        datepicker: '',
        year: '',
        month: '',
        day: ''
    }

    setLocators(datePicker, year, month, day){
        this.locators.datepicker = datePicker
        this.locators.year = year
        this.locators.month = month
        this.locators.day = day
    }

    selectDate(data){
        const[year, month, day] = data.split('-')
        cy.get(this.locators.datepicker).click()
        cy.get(this.locators.year).select(year)
        cy.get(this.locators.month).select(month - 1)
        cy.get(this.locators.day)
          .contains(parseInt(day))
          .click()
    }

}
    export default datePicker