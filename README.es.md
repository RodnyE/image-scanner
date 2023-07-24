# Image Scanner

Esta es una pequeña herramienta de NodeJS que escanea imágenes ubicadas en la carpeta `images/` y extrae el texto de ellas.
El texto extraído se guarda en la carpeta `output/` en un formato .txt.
Este proyecto utiliza el módulo [tesseract.js](https://github.com/naptha/tesseract.js) para el procesamiento de imágenes.

## Estructura del proyecto
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

## Instalación

Para comenzar con el proyecto, por favor sigue estos pasos:

1. Clona el repositorio usando el comando `git clone https://github.com/rodnye/image-scanner.git`.
2. Navega al directorio del proyecto con `cd image-scanner`.
3. Instala las dependencias requeridas ejecutando `npm install`.

## Uso

1. Asegúrate de tener tus imágenes ubicadas en la carpeta `images/`.
2. Ejecuta el proyecto ejecutando el comando `npm start`.
3. El texto extraído de las imágenes se almacenará como archivos .txt en la carpeta `output/`.

## Configuración

El proyecto utiliza un archivo de configuración llamado `config.js` para definir ciertos ajustes. Puedes modificar las siguientes configuraciones:

- `INPUT_PATH`: Ruta de la carpeta que contiene las imágenes a escanear.
- `OUTPUT_PATH`: Ruta de la carpeta donde se almacenarán los archivos de texto resultantes.
- `LANG_PATH`: Ruta a la ubicación de los datos del lenguaje entrenado. Por defecto, está configurado en `data-lang/eng.traineddata.gz`.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Puedes encontrar más detalles en el archivo [LICENSE](LICENSE).