#!/bin/sh

set -e

gunicorn --bind 0.0.0.0:8000 -w 4 --limit-request-line 6094 --access-logfile - currency_converter.wsgi:application
