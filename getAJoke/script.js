const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const emoji = document.getElementById("image");

//*Async await
 
async function fetchData(){
    const config = {
        headers: {
            Accept : "application/json",
        },
    }
    const url = "https://icanhazdadjoke.com";

    try{
        const res = await fetch(url,config);
        const data = await res.json();
        emoji.innerHTML = `<img src="https://www.transparentpng.com/thumb/emoticons/helpless-emoji-emoticons-png-icon--bjxlqV.png" alt="helpless emoji emoticons png icon @transparentpng.com">`;

        joke.innerHTML = `<p>${data.joke}</p>`
    }
    catch(e){
       return emoji.innerHTML = `<img src="https://www.transparentpng.com/thumb/emoticons/confused-expression-emoji-emoticons-transparent-hd--qGi6XJ.png" alt="confused expression emoji emoticons transparent hd @transparentpng.com">`
    }
}
fetchData();


jokeBtn.addEventListener("click",fetchData);



//*common method
// function generateJoke(){
//     const url = "https://icanhazdadjoke.com";
//     const config = {
//         headers: {
//             Accept:"application/json",
//         },
//     }

//     fetch(url,config).then((res) => res.json()).then((data) =>{
//         let jokeText = `
//         <p>${data.joke}</p>
//         `;
//         joke.innerHTML = jokeText;
//     })
// }
// generateJoke();

// jokeBtn.addEventListener("click",generateJoke);
