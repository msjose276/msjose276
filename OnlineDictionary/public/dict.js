
$(document).ready(
    function () {
        $("#lookup").click(lookup);
    }
);


function lookup(){
    var lookupWord = $('#lookupWord').val();
    $.ajax({
        url: "http://localhost:3000/lookup",
        type: "POST",
        data: {word: lookupWord},
        dataType: "json",
        "success": successRequest,
        "error": errorRequest
        });
}

function successRequest(data){

    //$("#myResultList").remove();
    //$("#resultListDiv").append(`<ol class="myResultList" id="myResultList" name="myResultList"></ol>`);
    $("#resultList").empty()
    set(data);
}

function set(data){
    for (let i = 0; i < data.length; i++) {
        //$("#myResultList").append(`<li class="listItem">(${data[i].wordtype}) ${data[i].definition}</li>`);
        //$("#myResultList").append(`<li class="listItem"><dl><dt>(${data[i].wordtype})</dt><dd>${data[i].definition}</dd></dl>  </li>`);
        //$("#resultList").append(`<div id="sed" class="itemList"><zero>${i+1} - </zero><frs>(${data[i].wordtype})</frs> <sec>${data[i].definition}</sec></div>`);
        $("#resultList").append(`<div id="itemList-${i+1}" class="itemList"><dl><dt>${i+1} - (${data[i].wordtype})</dt><dd>${data[i].definition}</dd></dl>  </div>`);
    }
}

function errorRequest(err){
    console.log(JSON.stringify(err));
    alert(JSON.stringify(err));
}
