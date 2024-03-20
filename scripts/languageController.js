loadContent("../content/pt-br.html")

function loadContent(pageName) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById("body").innerHTML = xhr.responseText;
            } else {
                console.error("Error loading content:", xhr.status);
            }
        }
    };
    xhr.open("GET", pageName, true);
    xhr.send();
}
