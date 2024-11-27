#!/bin/bash

set -e

pip install flake8

flake8 "${1:-.}"
