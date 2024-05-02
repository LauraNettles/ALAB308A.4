//try{}catch

//https://jsonplaceholder.typicode.com/

///retrieve button

// retrieve text
const searchInput = document.getElementById("search");
const form = document.getElementById("form");

form.addEventListener("submit", e => {
    e.preventDefault();
    getUserData();
});
    async function getUserData(searchInput) {
        try {
            //const getUserData = await postResoponse()
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/")
            const jsonData = await response.json()
            console.log(jsonData)
        } catch(err) {
            console.log(err)
        }
    }

