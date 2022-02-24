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
    comments.forEach( comment => {
        console.log(comment);
        const div = document.createElement('div');
        div.classList.add("comment-div");
        div.innerHTML = `
            <h4 class = "head-name">${comment.name}</h4>
            <h5 class = "text-secondary">${comment.email}</h5>
            <p class = "ms-2">${comment.body}</p>
        `;
        commentSection.appendChild(div);
    })
}