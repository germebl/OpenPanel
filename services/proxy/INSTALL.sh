#!/bin/bash

# FILES


# CADDY
mv caddy/fullchain.pem  /etc/caddy/certs/fullchain.pem 
mv caddy/privkey.pem /etc/caddy/certs/privkey.pem
mv caddy/Caddyfile /etc/caddy/Caddyfile


service caddy restart

# PHP
chown caddy:caddy  /run/php-fpm/www.sock
sed -i 's/^user = .*/user = caddy/' /etc/php-fpm.d/www.conf
sed -i 's/^group = .*/group = caddy/' /etc/php-fpm.d/www.conf
service php-fpm restart

