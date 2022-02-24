//load api from jsonplaceholder

const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayLoadData(data));
}
// loadData();

// display loaded data
const displayLoadData = (comments) => {

    //get UI section for display data
    const commentSection = document.getElementById('comment');
    comments.forEach(comment => {
        // console.log(comment);
        const div = document.createElement('div');
        div.classList.add("comment-div");
        div.innerHTML = `
            <h4 class = "head-name">${comment.name}</h4>
            <h5 class = "text-secondary">${comment.email}</h5>
            <p class = "ms-2">${comment.body}</p>
            <button onclick = "loadUserDataById('${comment.id}')" class = "btn btn-outline-primary">view user profile</button>
        `;
        commentSection.appendChild(div);
    })
}

// load data for user profile
const loadUserDataById = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(res => res.json())
        .then(data => displayUserProfile(data));
}

// display user profile data on UI
const displayUserProfile = (userInfo) => {
    const userInformation = document.getElementById('user-Info');
    userInformation.textContent = '';
    // console.log(userInfo)
    const div = document.createElement('div');
    div.classList.add("user-details");
    div.innerHTML = `
            <h3 class = "text-success text-center">User Profile</h3>
            <h4>User Name: ${userInfo.name}</h4>
            <h5 class = "text-secondary">User Email: ${userInfo.email}</h5>
        `;
    userInformation.appendChild(div);

}