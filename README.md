# Getting Started with Create React App

ECOMMERCE-GAEMA.
Este Proyecto es un e-commerce de la tienda GAEMA- Productos Saludables.
Fue desarrollado con React JS. 
En dicha página hay información de los productos y en el detalle de los mismos podrá
comprar la cantidad necesaria y luego confirmar la compra en el Checkout delcarrito.
La base de datos donde se encuentran los datos leídos y donde se guardan las consultas y los datos necesarios de los productos comprados para cerrar a operación es Firebase/Firestore.  
Por lo tanto lo primero que debe hacer es instalar React JS de la siguiente manera:
    1) Instalar Node.js (bajar la última versión de https://nodejs.org/en/ y ejecutarlo ) 
    2) Una vez instalado ir a la Terminal de VSC,  Ejjecutar npx create-react-app nombre-aplic (dentro de la carpeta del proyecto  - Se corre una sola vez)
    3) cd nombre-proyecto (para ingresar en la carpeta del proyecto)
    4) npm start (para iniciar) (si se sale de la aplicacion hay que correr desde acá nuevamente).
    5) Luego limpiar los archivos para ir  sacando los que no son necesarios:
	    En el Index.html cambiar el titulo por ecommerce x ej.
	    Borrar: dentro de la carpeta src los archivos: setupTests.js, reportWebVitals.js, App.test.js, 
	    En carpeta public: manifest.json , robots.txt , logo192.png y logo512.png
	    Sacar en el Index.js el import del reportWebVitals 
              y borrar en App.js el header className="App-header" (todo) 
             Sacamos el import del Logo
Una vez iniciado podremos ver nuestro proyecto que está replicado en https://github.com/plmacagno/EntregableCursoReact


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
