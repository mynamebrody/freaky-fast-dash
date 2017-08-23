const prompt = require('prompt'),
    request = require('request'),
    prettyjson = require('prettyjson'),
    jsonfile = require('jsonfile');

console.log('Jimmy Johns Login\n');
prompt.message = 'FreakyFast'.red;
prompt.delimiter = ">".cyan;

// Prompt Schema
var prompt_schema = {
    properties: {
        dash: {
            description: 'Enter your Dash Mac Address',
            type: 'string',
            required: true
        },
        email: {
            description: 'Enter your Jimmy Johns Email',
            type: 'string',
            required: true
        },
        password: {
            description: 'Enter your Jimmy Johns Password',
            type: 'string',
            replace: '*',
            required: true,
            hidden: true
        }
    }
};

prompt.start();

// Login
prompt.get(prompt_schema, function (err, result) {
    console.log('Command-line input received:');
    console.log('  dash: ' + result.dash);
    console.log('  email: ' + result.email);
    console.log('  password: ********');

    let req_options = {
        url: 'https://online.jimmyjohns.com/api/Customer/LogIn/',
        headers: {
            'api-key': 'A6750DD1-2F04-463E-8D64-6828AFB6143D',
            'User-Agent': 'Freaky Fast Dash'
        },
        json:true,
        body: {
            "Email":result.email,
            "Password":result.password,
            "RememberMe":false
        }
    };
    function reqCallback(err, httpResponse, body) {
        if (err) {
            return console.error('\nAccount Login failed:', err);
        }

        let jsonOptions = {
                keysColor: 'magenta',
                dashColor: 'red',
                stringColor: 'white',
                numberColor: 'green'
            };
        console.log('\nAccount Login successful! API responded with: \n', prettyjson.render(body.Customer, jsonOptions));

        let file = './data.json'
        var write_obj = {
            DashMacAdd: result.dash,
            Customer: body.Customer
        };
         
        jsonfile.writeFile(file, write_obj, {spaces: 2}, function (err) {
          console.error(err)
        })

        // TODO: Generate ./user.json File
    };
    request.post(req_options, reqCallback);
});
