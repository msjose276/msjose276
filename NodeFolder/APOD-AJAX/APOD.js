$(document).ready(
    function () {
        $("#view_button").click(fetchPicture);
    }
);

function fetchPicture(){
    $.ajax({
        url: "https://api.nasa.gov/planetary/apod",
        type: "GET",
        data: { api_key: "DEMO_KEY",
        date: $("date").val() },
        dataType: "json",
        "success": showPicture,
        "error": noPicture
        });
}

function showPicture(data) {
    $("#pic").attr("src", data.url);
    $("#pageTitle").text(data.title);
};
function noPicture(error) {
    alert(error);
    alert(error.responseText);
};

