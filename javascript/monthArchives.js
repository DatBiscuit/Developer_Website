$(function () {

    setupPosts();
    loadPosts();

});


function setupPosts() {
    var num = 0;
    var name = 'post';
    var post = 'post1.html'

    var url = location.href;
    var fileName = url.substring(url.lastIndexOf('/')+1);
    console.log(fileName);
    
    while(checkForHTML('../blogFiles/' + post + '.html')) {

        addPost(post);
        num++;
        post = name+ num.toString(); + '.html';
    }
        
}

function addPost(post) {
    var posts = document.getElementById('posts');
    var newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'spacer');
    posts.appendChild(newDiv);
}



// Check if the html file exists
function checkForHTML(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

