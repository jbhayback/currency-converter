#!/bin/bash

set -e

./currency_converter/manage.py migrate
./currency_converter/manage.py collectstatic --noinput

exec tail -f /dev/null
