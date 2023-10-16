import './App.css';
import { useEffect, useState } from 'react'; 

async function App() {
  // My CRUD OPERATIONS HERE
  //characters is storing everything in API
  const [characters, setCharacters] = useState(['']); 

  const url = 'https://game-of-thrones1.p.rapidapi.com/Characters';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6f53b055dfmshfeabeeba9fa9381p173118jsnee5a73cee9c9',
      'X-RapidAPI-Host': 'game-of-thrones1.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }

function getCharacters() {
  fetch(url)
  .then(data => data.json())
  .then(data => setCharacters(data))
}

useEffect(() => {
  getCharacters()
}, [])

function deleteCharacter(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE", 
  }).then(() => getCharacters())
}


console.log('Hello World'); 

  return (
    <div className="App">
      Hi Princess!
      <h2>Characters: </h2>
        {characters.map((character, index) => (
          <div key={index}>
            {/* This will be a container for all our info */}
            <div>
              <p>This is just a test! </p>
            </div>
          </div>
        ))}
    </div> 
  )
}
      
export default App;
