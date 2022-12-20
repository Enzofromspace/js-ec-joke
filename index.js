// Import stylesheets
import './style.css';
const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.Joke p');

// Write Javascript code!
const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

async function fetchJoke(){
  const response = await fetch('https://icanhazdadjoke.com', {
    headers:{
      Accept: 'application/json',
    }
  });
  const data = await response.json();
  return data;
}
 
fetchJoke();