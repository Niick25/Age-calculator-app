document.addEventListener('DOMContentLoaded', function() {
    // Step 1: Select the necessary elements
    const dateInput = document.getElementById('date');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const calculateButton = document.querySelector('.middle-cestion img');
    const errorMessageDay = document.querySelector('#input-container #date + .eror-meassage');
    const errorMessageMonth = document.querySelector('#input-container #month + .eror-meassage');
    const errorMessageYear = document.querySelector('#input-container #year + .eror-meassage');
    const resultYears = document.querySelector('.result-years');
    const resultMonths = document.querySelector('.result-months');
    const resultDays = document.querySelector('.result-days');

    // Step 2: Define a function to calculate the age
    function calculateAge() {
        // Get current date
        const currentDate = new Date();

        // Get input values
        const day = parseInt(dateInput.value);
        const month = parseInt(monthInput.value);
        const year = parseInt(yearInput.value);

        // Calculate age
        const birthDate = new Date(year, month - 1, day);
        const ageInMilliseconds = currentDate - birthDate;
        const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
        const ageInMonths = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
        const ageInDays = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));

        // Display age
        resultYears.textContent = ageInYears;
        resultMonths.textContent = ageInMonths;
        resultDays.textContent = ageInDays;
    }

    // Step 3: Attach an event listener to the calculate button
    calculateButton.addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Validate inputs before calculating age
        validateInputs();
    });

    // Step 4: Define a function to validate the input values
    function validateInputs() {
        // Get input values
        const day = parseInt(dateInput.value);
        const month = parseInt(monthInput.value);
        const year = parseInt(yearInput.value);

        // Reset input borders
        dateInput.classList.remove('error');
        monthInput.classList.remove('error');
        yearInput.classList.remove('error');

        // Validate day
        if (!dateInput.value || isNaN(day) || day < 1 || day > 31) {
            errorMessageDay.textContent = 'Must be a valid day';
            dateInput.classList.add('error');
        } else {
            errorMessageDay.textContent = '';
        }

        // Validate month
        if (!monthInput.value || isNaN(month) || month < 1 || month > 12) {
            errorMessageMonth.textContent = 'Please enter a valid month (1-12)';
            monthInput.classList.add('error');
        } else {
            errorMessageMonth.textContent = '';
        }

        // Validate year
        if (!yearInput.value || isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
            errorMessageYear.textContent = 'Please enter a valid year (1900-present)';
            yearInput.classList.add('error');
        } else {
            errorMessageYear.textContent = '';
        }

        // Check if any input fields are empty
        if (!dateInput.value) {
            errorMessageDay.textContent = 'This Field is required';
            dateInput.classList.add('error');
        }
        if (!monthInput.value) {
            errorMessageMonth.textContent = 'This Field is required';
            monthInput.classList.add('error');
        }
        if (!yearInput.value) {
            errorMessageYear.textContent = 'This Field is required';
            yearInput.classList.add('error');
        }

        // Check if any error messages are displayed
        const errorMessages = [errorMessageDay.textContent, errorMessageMonth.textContent, errorMessageYear.textContent];
        const hasErrors = errorMessages.some(message => message !== '');

        // If no errors, calculate age
        if (!hasErrors) {
            calculateAge();
        }
    }
});
