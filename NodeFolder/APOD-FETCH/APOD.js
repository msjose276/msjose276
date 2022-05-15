$(document).ready(
    function () {
        $("#view_button").click(fetchPicture);
    }
);

function fetchPicture(){
    var picturePromise=fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${$('#date').val()}`,{
        type: "GET",
        dataType: "json"
    })
    .then(response=>response.json())
    .then(pic=>showPicture(pic));
}

function showPicture(data) {
    //alert(data.url);
    $("#pic").attr("src", data.url);
    $("#pageTitle").text(data.title);
};
function noPicture(error) {
    alert(error);
    alert(error.responseText);
};

