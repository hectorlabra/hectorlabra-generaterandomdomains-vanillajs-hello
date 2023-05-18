//Arrays
let pronoun = ['anything', 'everybody', 'another', 'each', 'few', 'many', 'none', 'some', 'all', 'any', 'anybody', 'anyone', 'everyone', 'everything', 'noone', 'nobody', 'nothing', 'none', 'other', 'others', 'several', 'somebody', 'someone', 'something', 'most', 'enough', 'little', 'more', 'both', 'either', 'neither', 'one', 'much', 'such'];
let adj = ['adorable', 'adventurous', 'aggressive', 'agreeable', 'alert', 'alive', 'amused', 'angry', 'annoyed', 'annoying', 'anxious', 'arrogant', 'ashamed', 'attractive', 'average', 'awful', 'bad', 'beautiful', 'better', 'bewildered', 'black', 'bloody', 'blue', 'blue-eyed', 'blushing', 'bored', 'brainy', 'brave', 'breakable', 'bright', 'busy', 'calm', 'careful', 'cautious', 'charming', 'cheerful', 'clean', 'clear', 'clever', 'cloudy', 'clumsy', 'colorful', 'combative', 'comfortable', 'concerned', 'condemned', 'confused', 'cooperative', 'courageous', 'crazy', 'creepy', 'crowded', 'cruel', 'curious', 'cute', 'dangerous', 'dark', 'dead', 'defeated', 'defiant', 'delightful', 'depressed', 'determined', 'different', 'difficult', 'disgusted', 'distinct', 'disturbed', 'dizzy', 'doubtful', 'drab', 'dull'];
let noun = ['Teacher' ,'Doctor' ,'Chef' ,'Student' ,'Pilot' ,'Firefighter' ,'Lawyer' ,'Mechanic' ,'Engineer' ,'Farmer' ,'School' ,'Hospital' ,'Restaurant' ,'Airport' ,'Office' ,'Beach' ,'Forest' ,'Church' ,'Library' ,'Theate' ,'Pencil' ,'Phone' ,'Computer' ,'Chair' ,'Table' ,'Carpet' ,'Bookshelf' ,'Lamp' ,'Clock' ,'Window' ,'Cat' ,'Dog' ,'Horse' ,'Bird' ,'Fish' ,'Snake' ,'Rabbit' ,'Elephant' ,'Squirrel' ,'Fox'];
let tlds = ['.com', '.io', '.ai', '.cl', '.net', '.org']

//Lista de opciones = Arrays
const listOptions = [pronoun, adj, noun, tlds];

//Botón y parrafo de excusas
window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateDomains();
  });
};


function getRandomElementOfAnArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//bucle que genera la excusa recorriendo aleatoreamente los array
let generateDomains = () => {
  let domains = " ";

  for (let i = 0; i < listOptions.length; i++) {
    domains = domains.concat("", getRandomElementOfAnArray(listOptions[i]));
  }

  return domains;
};
