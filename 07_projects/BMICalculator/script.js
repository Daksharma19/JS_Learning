const form = document.querySelector('form')

// this usecase will give you empty because the value is not updated as the script will run before the event happened
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit',function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = (document.querySelector('#results'))
    
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `${height} is not a valid height`;
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `${weight} is not a valid weight`;
    }
    else {
        const bmi = (weight / ((height/100) ** 2)).toFixed(2)
        // show the result
        results.innerHTML = `<span>${bmi}</span>`;
        // show the weight guide
        results.innerHTML += `<p>${weightGuide(bmi)}</p>`;
    }

});
function weightGuide(bmi) {
    if(bmi < 18.5){
        return 'Underweight'
    } else if(bmi >= 18.5 && bmi <= 24.9){
        return 'Normal weight'
    } else if(bmi >= 25 && bmi <= 29.9){
        return 'Overweight'
    } else {
        return 'Obese'
    }
}