
const cfg = require("../config.js");
const Tesseract = require('tesseract.js');

// extract text from image
function readImage (imagePath) {
    
    return Tesseract.createWorker({
        langPath: cfg.LANG_PATH,
        logger: msg => console.log(msg),
    })
    .then(worker => {

        return Promise.resolve()
            .then(() => worker.load())
            .then(() => worker.loadLanguage('eng'))
            .then(() => worker.initialize('eng'))
            .then(() => worker.recognize(imagePath))
            .then(res => Promise.resolve(res.data.text))
    
    });
};

module.exports = readImage;