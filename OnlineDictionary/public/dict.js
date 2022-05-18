
$(document).ready(
    function () {
        $("#lookup").click(lookup);
    }
);


function lookup(){
    var lookupWord = $('#lookupWord').val();

    if($('#lookupWord').val()===''){
        alert('fill up the input word');
        return;
    }

    $('#word').empty();
    $('#word').append('<strong>WORD : </strong>'+$('#lookupWord').val());
    $('#lookupWord').val('');
    
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
    $("#resultList").empty()

    if(data.length<1 || data==null){
        $("#resultList").append('<p>not result for the word</p>');
    }
    for (let i = 0; i < data.length; i++) {
        if((i+1)%2==0)
            $("#resultList").append(`<li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                    <div class="fw-bold">(${data[i].wordtype})</div>
                                    ${data[i].definition}
                                    </div>
                                    
                                </li>`);
        else
            $("#resultList").append(`<li class="list-group-item list-group-item-secondary d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                            <div class="fw-bold">(${data[i].wordtype})</div>
                            ${data[i].definition}
                            </div>
                            
                        </li>`);
    }
}

function errorRequest(err){
    console.log(JSON.stringify(err));
    alert(JSON.stringify(err));
}
