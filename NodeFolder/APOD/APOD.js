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


function getPicture () {
    /*
    $.ajax({
        url: "https://api.nasa.gov/planetary/apod",
        type: "GET",
        data: { api_key: "DEMO_KEY",
        date: $("date").val() },
        dataType: "json",
        "success": showPicture,
        "error": noPicture
    });
 
   
    info = { 
            api_key: "DEMO_KEY",
            date: $("date").val() 
            };

            ?param1=value1&param2=value2'
            */    
    //var par = '?api_key=DEMO_KEY&date='+$("date").val();
    /*var par = 'https://api.nasa.gov/planetary/apod/?api_key=DEMO_KEY&date=20190202';

    fetch( 'https://api.nasa.gov/planetary/apod/?api_key=DEMO_KEY&date=20190202' )
    .then(data => {
        showPicture(data);
      })
    .catch((error) => {
        noPicture(error);
    });

    */
    //fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${$('#date').val()}`,{
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-02-02',{
        type: "GET"
        ,dataType: "json"
    })
    .then((response)=>{
        //showPicture(response);
    })
    .then(pic=>showPicture(pic))
    .catch((error) => {
        noPicture(error);
    });

    /*
    fetch(par, {
        method: 'GET', 
        //data: { api_key: "DEMO_KEY",
        //date: $("date").val() }
        headers: {'Content-Type': 'application/json'}//,
        //body: JSON.stringify(info),
        })
        .then(data => {
            showPicture(data);
          })
        .catch((error) => {
            noPicture(error);
        });
        */
};


function showPicture(data) {
    //alert(data.url);
    $("#pic").attr("src", data.url);
    $("#pageTitle").text(data.title);
};
function noPicture(error) {
    alert(error);
    alert(error.responseText);
};

