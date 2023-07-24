# Image Scanner

This is a NodeJS project that scans images located in the `images/` folder and extracts text from them. 
The extracted text is then saved in the `output/` folder in a .txt format. 
This project utilizes the [tesseract.js](https://github.com/naptha/tesseract.js) module for image processing.

## Project Structure
```
.
├── .gitignore
├── config.js
├── package.json
├── README.es.md
├── README.md
├── data-lang
│   └── eng.traineddata.gz
├── images
├── output
└── src
    ├── index.js
    └── read-image.js
```

## Installation

To get started with the project, please follow these steps:

1. Clone the repository using the command `git clone https://github.com/rodnye/image-scanner.git`.
2. Navigate to the project directory with `cd image-scanner`.
3. Install the required dependencies by running `npm install`.

## Usage

1. Make sure you have your images placed in the `images/` folder.
2. Run the project by executing the command `npm start`.
3. The text extracted from the images will be stored as .txt files in the `output/` folder.

## Configuration

The project uses a configuration file called `config.js` to define certain settings. You can modify the following configurations:

- `INPUT_PATH`: Path of the folder containing the images to be scanned.
- `OUTPUT_PATH`: Path of the folder where the resulting text files will be stored.
- `LANG_PATH`: Path to the location of the trained language data. By default, it is set to `data-lang/eng.traineddata.gz`.

## License

This project is licensed under the MIT License. You can find more details in the [LICENSE](LICENSE) file.


## Contributing

Contributions are welcome! If you encounter any issues or have improvements in mind, feel free to open a new issue or submit a pull request.