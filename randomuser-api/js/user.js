// load randon user api
const loadUserData = () =>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => console.log(data));
}
loadUserData();

// display data on UI