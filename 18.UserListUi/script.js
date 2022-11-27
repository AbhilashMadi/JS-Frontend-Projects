const result = document.getElementById("result") //ul
const filter = document.getElementById("filter") //input
const listItems = [];
const users = 500;

//GET Data from the randomuser.me api service...
async function fetchData(){
    const response = await fetch(`https://randomuser.me/api?results=${users}`);
    
    //destructuring the api given data and taking results from it
    const { results } = await response.json();

    setTimeout(() => result.innerHTML = "",1000);

    results.forEach((user) => {
        const li = document.createElement("li");
        listItems.push(li);
        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}" class="user-image">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p><span>${user.location.state}</span>,<span class="country">${user.location.country}</span></p>
        </div>
        `;
    setTimeout(() => result.appendChild(li), 1001);
        
    })
}
fetchData();

//funciton to get Input for filtering the users

function filterData(searchTerm){
    listItems.forEach((item) => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove("hide");
        } else {
            item.classList.add("hide")
        }
    })
}

filter.addEventListener("input",(e) => filterData(e.target.value));
