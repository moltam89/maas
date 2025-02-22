#/bin/bash

DOMAIN="backend.scholarship.buidlguidl.com"

sudo certbot certonly --standalone -d $DOMAIN --config-dir ~/.certbot/config --logs-dir ~/.certbot/logs --work-dir ~/.certbot/work
sudo cp -f ~/.certbot/config/live/$DOMAIN/privkey.pem server.key;sudo chmod 0777 server.key
sudo cp -f ~/.certbot/config/live/$DOMAIN/fullchain.pem server.cert;sudo chmod 0777 server.cert
