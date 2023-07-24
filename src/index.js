
const cfg = require("../config.js");

const path = require("path");
const fs = require("fs");
const readImage = require("./read-image");

// show folders
console.log(
    "Processing images..." + 
    "\n* from " + cfg.INPUT_PATH + 
    "\n* to " + cfg.OUTPUT_PATH +
    "\n"
);

// create folders if not exists
if (!fs.existsSync(cfg.INPUT_PATH)) fs.mkdirSync(cfg.INPUT_PATH);
if (!fs.existsSync(cfg.OUTPUT_PATH)) fs.mkdirSync(cfg.OUTPUT_PATH);

// get images path
let imagesList = fs.readdirSync(cfg.INPUT_PATH);
let promise = Promise.resolve();

imagesList.sort();


//
// read and scan each image
//
imagesList.forEach((name, index) => {
    let imagePath = path.join(cfg.INPUT_PATH, name);
    let textPath = path.join(cfg.OUTPUT_PATH, name + ".txt");
    
    // stop if file exist
    if (fs.existsSync(textPath)) return;
    
    // add each worker in Promise
    promise = promise.then(() => new Promise((resolve) => {
        console.log(" == " + imagePath);
            
        readImage(imagePath)
        .then(text => {
            console.log("End\n");
            fs.writeFileSync(textPath, text);
            resolve();
        });
    }));
    
});
