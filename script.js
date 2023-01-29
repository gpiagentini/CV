const BIRTHDAY = new Date("1999-02-02")

document.getElementById("age").innerText = calculateAge()

function openNewTab(url) {
    window.open(url, '_blank')
}

function calculateAge() {
    var yearDiff = new Date(Date.now() - new Date(BIRTHDAY)).getFullYear()
    return yearDiff - 1970
}