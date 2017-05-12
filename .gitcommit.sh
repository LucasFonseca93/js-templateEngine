#!/usr/bin/env bash

read -p "Set the commit message as: " CMESSAGE

git add --all
git status
git commit -m "$CMESSAGE"
git push origin master
