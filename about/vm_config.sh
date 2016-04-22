#!/usr/bin/env bash

apt-get update -qqy
apt-get install -qqy git
apt-get install -qqy build-essential
curl -sL https://deb.nodesource.com/setup_5.x | bash
apt-get isntall -qqy nodejs
npm install -g bower
