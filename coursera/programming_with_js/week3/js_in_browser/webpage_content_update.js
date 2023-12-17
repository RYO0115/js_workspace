
// Paste below to your browser console.

let answer = prompt('whats your name?');
if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1')
    h1.innerText = answer;
    document.body.innerText = '';
    document.body.appendChild(h1);
}

var h1 = document.createElement('h1');
h1.innerText = "Type to change this text";

var input = document.createElement('input');
input.setAttribute('type','text');

document.body.innerText="";
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    console.log(input.value)
    h = document.querySelector('h1');
    h.innerText = "Change to : " + input.value;
})