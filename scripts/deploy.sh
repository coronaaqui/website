#!/bin/bash

# print outputs and exit on first failure
set -xe

git pull origin master -X theirs
yarn build