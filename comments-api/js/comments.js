//load api from jsonplaceholder

function loadData(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayLoadData(data));
}
loadData();

// display loaded data
function displayLoadData(comments){
    console.log(comments);
}