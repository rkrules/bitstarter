#!/bin/bash
git status
git add index.html && git commit -m "Changes to index.html"
git push origin master
git push heroku master

