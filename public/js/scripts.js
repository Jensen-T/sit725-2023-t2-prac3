const clickMe = () => {
    alert("This application is being worked on and is coming soon! Thank you for your interest!!")
}
$(document).ready(function () {
    // $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMe();
    })
});