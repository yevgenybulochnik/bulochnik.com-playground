#!/usr/bin/env bash

apt-get update -qqy
apt-get install -qqy git
apt-get install -qqy build-essential
curl -sL https://deb.nodesource.com/setup_5.x | bash
apt-get install -qqy nodejs

npm install -g bower
npm install -g forever

cd /bulochnik.com
forever start server.js
echo "Forever is now running server.js on 172.69.69.69:3000" > /etc/motd
