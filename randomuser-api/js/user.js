// load randon user api
const loadUserData = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayUserData(data.results));
}
loadUserData();

// display data on UI

const displayUserData = (users) => {
    const userInfo = document.getElementById('user-info');
    users.forEach(user => {
        console.log(user.location);
        const div = document.createElement('div');
        div.classList.add("col")
        div.innerHTML = `
        <div class="card-style card shadow-lg">
            <img src="${user.picture.large}" class="card-img-top" alt="...">
             <div class="card-body">
                <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
                <p class="card-text"><span class ="badge bg-primary">Street</span> : ${user.location.street.number}, ${user.location.street.name}</p>
                <p class="card-text">City : ${user.location.city}</p>
                <p class="card-text">Cordinates : latitude-${user.location.coordinates.latitude}, longitude${user.location.coordinates.longitude}</p>
                <p class="card-text">Country : ${user.location.country}</p>
                <p class="card-text">Timezone : ${user.location.timezone.description}, ${user.location.timezone.offset}</p>
            </div>
        </div>
        `;
        userInfo.appendChild(div);
    })
}