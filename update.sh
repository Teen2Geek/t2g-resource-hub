#!/bin/bash

echo 'Compiling Assets...';
echo '';
harp compile _harp .;
echo '';
echo 'Assets Compiled!';
echo '';
echo 'Pushing to server...'
echo '';
git add .;
git commit -m "$1";
git push origin gh-pages;
echo '';
echo 'Pushed to server!';