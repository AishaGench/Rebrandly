// Information to reach API
const apiKey = '0b3789904f7e484b9e28f249b191897c';
const url = 'https://api.rebrandly.com/v1/links';
const shortenButton = document.getElementById('shorten');
const inputField = document.getElementById('input');
const responseField = document.getElementById('responseField')


// page elements
const shortenUrl=()=>{
    const urlToShorten = inputField.value;
    const data = JSON.stringify({destination: urlToShorten});
    const xhr = new XMLHttpRequest;
    xhr.responseType ='json';

    xhr.onreadystatechange =()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            renderResponse(xhr.response)
        }
    };
    xhr.open('POST',url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('apikey', apiKey);
    xhr.send(data);


}
shortenButton.addEventListener('click', displayShortUrl);
