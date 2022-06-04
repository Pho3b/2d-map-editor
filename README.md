
## Project
A 2D grid based drawing system developed using ``Node v12.15.0`` and ``ejs(embedded javascript templating)``.    
A demo of the project can be found --> [2D-map-editor](https://dnd-map-editor.herokuapp.com/) 


#### Features

- Upload your custom images clicking on ``Upload Images`` and use them to draw.
- Use 3 different drawing layers for every tile.
- Delete previously drawn tiles keeping ``Ctrl + Left Mouse click``
- Save the generated grid to JSON clicking on ``Save Map``
- Drag and drop images on third level by keeping the ``Left Mouse click`` clicked and releasing it on different tile.

## Dependencies
1. [Node.js](http://nodejs.org/)
2. [NPM](https://www.npmjs.com/)
3. [TSC](https://www.npmjs.com/package/tsc)

## Local Run
Make sure you have installed all the dependencies.

1. ```git clone git@github.com:Pho3b/2d-map-editor.git```
2. ```cd 2d-map-editor```
3. ```npm install```
4. ```npm start```
5. Visit --> [localhost:3000](http://localhost:3000/)


## Docker Local Run 
- Build: `docker build -t dnd-map-editor .`


- Start (attached): ``docker run -it -p 3000:3000 -v `pwd`/images:/usr/src/app/images -v `pwd`/saved_map:/usr/src/app/saved_map dnd-map-editor``
- Start (production): ``docker run -d --restart always -p 80:3000 -v `pwd`/images:/usr/src/app/images -v `pwd`/saved_map:/usr/src/app/saved_map dnd-map-editor``
- Visit --> [localhost:3000](http://localhost:3000/)
