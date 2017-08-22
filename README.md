Currently Does NOT Function - WIP
====

Freaky Fast Dash
====
This is a node.js application that "hacks" your [Amazon Dash Button](http://www.amazon.com/dashbutton) to order you a [Jimmy John's](https://www.jimmyjohns.com/) sandwich!
This is a continuation of my button series where I already have hacked the Dash Button to order me [Domino's Pizza](https://github.com/bhberson/pizzadash) and [Drizly](https://github.com/bhberson/DrizlyDash) for alcohol!

One idea would be to have this [always running](#always-running) via a local server such as a Raspberry Pi and have on demand sandwich ordering whenever you just need a sub!

I am using Node module [dash-button](https://github.com/ide/dash-button) to intercept the Dash Button ARP Requests on your home network.

Setup/Run
====
*Requirements*: This project runs on Node 8 and up on macOS and Linux. It depends on libpcap:
```
# Ubuntu and Debian
sudo apt-get install libpcap-dev
# Fedora and CentOS
sudo yum install libpcap-devel
```

1. You already need to have setup a Jimmy John's account on their website and have put an order in, sometime in the past.
  - This works best if you have a single saved Credit Card on your account and whatever is in your favorites will be ordered as your Go To Dash button order (so delete everything out of your favorites that you don't want).
2. Setup your Amazon Dash Button on your WiFi network
  - You can quit out of the Amazon app just after it's connected to your WiFi network (before selecting a product).
3. Run ` npm install ` the first time so all npm requirements will be installed.
4. Find your Dash Button's MAC Address
  - Run ` sudo npm run scan ` and press your Dash button
5. Generate your `user.json` file
  - Run the helper` node login.js ` to input your details to automatically generate this file for you.
6. Order your sandwich!
  - Run ` npm start ` and press your Dash Button that you have set up and BAM your sandwich will be coming soon!


Always Running
----
This [article](http://weworkweplay.com/play/raspberry-pi-nodejs/) shows you what you can do with a [Raspberry Pi](https://www.raspberrypi.org/) to set this up as a node server running all the time on your network and it literally would be the press of a button *whenever* you wanted!

Or you can create an AWS Lambda function if you own an Amazon AWS IoT Button. They basically handle the "always on" use case for us!

Contributing
====

1. Pull or Fork code.
2. Do cool stuff.
3. Submit a PR.

To do
----
- Finish Project
- Come up with a Gist for AWS Lambda Function for Amazon AWS IoT Button.
