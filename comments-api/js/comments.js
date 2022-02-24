//load api from jsonplaceholder

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayLoadData(data));
}
// loadData();

// display loaded data
function displayLoadData(comments) {

    //get UI section for display data
    const commentSection = document.getElementById('comment');
    for (const comment of comments) {
        console.log(comment);
        const div = document.createElement('div');
        div.classList.add("comment-div");
        div.innerHTML = `
            <h4>${comment.name}</h4>
            <h5>${comment.email}</h5>
            <p>${comment.body}</p>
        `;
        commentSection.appendChild(div);

    }
}