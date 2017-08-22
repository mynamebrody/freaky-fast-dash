const dash_button = require('dash-button'),
	prettyjson = require('prettyjson');
const user_config = require('./user.json');

const DASH_BUTTON_MAC_ADDRESS = user_config["DashMacAddress"];

let button = new DashButton(DASH_BUTTON_MAC_ADDRESS);


let subscription = button.addListener(async () => {
	let user_data = [];
	let order_items = [];

	let req_options = {
        url: 'https://online.jimmyjohns.com/api/Order/Submit',
        headers: {
            'api-key': 'A6750DD1-2F04-463E-8D64-6828AFB6143D',
            'User-Agent': 'Freaky Fast Dash'
        }
    };
    function reqCallback(err, httpResponse, body) {
        if (err) {
            return console.error('\nOrder Failed:', err);
        }

        let jsonOptions = {
                keysColor: 'magenta',
                dashColor: 'red',
                stringColor: 'white',
                numberColor: 'green'
            };
        console.log('\nOrder successful! API responded with: \n', prettyjson.render(body, jsonOptions));
    };
    request.get(req_options, reqCallback);
});
