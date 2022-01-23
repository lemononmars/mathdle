#!/usr/bin/env sh

set -e
npm run build
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:lemononmars/mathdle.git main:gh-pages

cd -