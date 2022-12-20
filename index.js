// Import stylesheets
import './style.css';
const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');

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
// call API
async function fetchJoke(){
  // turn on loader CSS animation
  loader.classList.remove('hidden');
  //remove joke button while loading
  jokeButton.classList.add('hidden');
  const response = await fetch('https://icanhazdadjoke.com', {
    headers:{
      Accept: 'application/json',
    }
  });
  const data = await response.json();
  loader.classList.add('hidden');
  jokeButton.classList.remove('hidden');
  return data;
}
// Loop over options in buttonText object
function randomItemFromArray(arr, not){
  const item = arr[Math.floor(Math.random() * arr.length)];
  if(item === not){
    return randomItemFromArray(arr, not);
  }
  return item;
}
//What happens when HTML +button is cliked
async function handleClick(){
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent);
}
//event for button click to call other functions
jokeButton.addEventListener('click', handleClick);
fetchJoke();  