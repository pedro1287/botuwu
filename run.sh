#!/bin/bash
sed -i "s/Listen 4000/Listen 0.0.0.0/" /etc/apache2/ports.conf
/etc/init.d/apache2 start
python3 main.py
