export function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    Client.checkForName(formText);

    console.log('::: Form 1 Submitted :::');
    fetch('http://localhost:8081/test')
        .then((res) => res.json())
        .then(function (res) {
            document.getElementById('results').innerHTML = res.message;
        });
}

export function handle2ndSubmit(event) {
    event.preventDefault();

    let apiBaseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
    const apiKey = '&appid=3e9b50e1c13c7eaa96c8ec1fa87a57e2&units=imperial';

    // check what text was put into the form field
    let zipCode = document.getElementById('zip').value;

    console.log('::: Form 2 Submitted :::');
    fetch(apiBaseURL + zipCode + apiKey)
        .then((res) => res.json())
        .then(function (res) {
            document.getElementById('results2').innerHTML = res.main.temp;
        });
}
