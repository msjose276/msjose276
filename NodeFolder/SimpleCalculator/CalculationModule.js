
const ResultPage1 = `<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
        <title>Simple Calculator</title>
        <link href="./SimpleCalculator.css" type="text/css" rel="stylesheet">
    </head>
    <body>
        <h2>Simple Calculator</h2>
        <div class="form">
            <div class="container">
                <div class="col-50">
                    <h3>The Answer is `;

var  ResultPage2= `
                    </h3>
                </div>

                <div class="col-50">                   
                    <a href="./SimpleCalculator.html"><button class="button" type="">Another calculation</button></a>
                </div>
            </div>
        </div>
    </body>
</html> `;

exports.addition = function (req,res,vals) {
    var result = parseInt(vals.first) + parseInt(vals.second);
    res.write(ResultPage1  + String(result) + ResultPage2);
    return res.end();
};

exports.subtruction = function (req,res,vals) {
    var result = parseInt(vals.first) - parseInt(vals.second);
    res.write(ResultPage1  + String(result) + ResultPage2);
    return res.end();
};

exports.division = function (req,res,vals) {
    var result = parseFloat(vals.first) / parseFloat (vals.second);
    res.write(ResultPage1  + String(result) + ResultPage2);
    return res.end();
};

exports.multiplication = function (req,res,vals) {
    var result = parseInt(vals.first) * parseInt(vals.second);
    res.write(ResultPage1  + String(result) + ResultPage2);
    return res.end();
};
    