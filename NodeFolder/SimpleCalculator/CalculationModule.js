

exports.addition = function (req,res,vals) {
    var sum = parseInt(vals.first) + parseInt(vals.second);

    res.write(`<!DOCTYPE html>
        <html>
        <head><meta charset=\"utf-8\"/>
        <title>Calculator Web Site</title>
        </head>
        <body>
        <p>The sum is: ${String(sum)}</p>
        </body>
        </html> ` ); 
    return res.end();
};

exports.subtruction = function (req,res,vals) {
    var sum = parseInt(vals.first) - parseInt(vals.second);

    res.write(`<!DOCTYPE html>
        <html>
        <head><meta charset=\"utf-8\"/>
        <title>Calculator Web Site</title>
        </head>
        <body>
        <p>The sum is: ${String(sum)}</p>
        </body>
        </html> ` ); 
    return res.end();
};

exports.division = function (req,res,vals) {
    var sum = parseInt(vals.first) / parseInt(vals.second);

    res.write(`<!DOCTYPE html>
        <html>
        <head><meta charset=\"utf-8\"/>
        <title>Calculator Web Site</title>
        </head>
        <body>
        <p>The sum is: ${String(sum)}</p>
        </body>
        </html> ` ); 
    return res.end();
};

exports.multiplication = function (req,res,vals) {
    var sum = parseInt(vals.first) * parseInt(vals.second);

    res.write(`<!DOCTYPE html>
        <html>
        <head><meta charset=\"utf-8\"/>
        <title>Calculator Web Site</title>
        </head>
        <body>
        <p>The sum is: ${String(sum)}</p>
        </body>
        </html> ` ); 
    return res.end();
};
    