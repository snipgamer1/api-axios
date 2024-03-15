# Integración de Axios en una Aplicación Next.js

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm install`

Para instalar las todas dependecias en la carpeta /nodemodules

### `npm run dev`

Ejecuta la aplicación en modo de desarrollo.
Abra [http://localhost:3000](http://localhost:3000) para verlo en su navegador.

### `code .`
Para abrir la carpeta de proyecto

## Detalles
integracion de axios en el proyecto
Conexión a una API Externa:

![Agregar](https://github.com/snipgamer1/api-axios/blob/main/public/axios.png)

Visualización de Datos:

![Agregar](https://github.com/snipgamer1/api-axios/blob/main/public/list.png)

Gestión de Errores y Excepciones:

![Agregar](https://github.com/snipgamer1/api-axios/blob/main/public/manejo%20de%20errores.png)

Integrar Axios en tu proyecto es un proceso sencillo. Aquí te dejo los pasos a seguir:

1. **Instalación**: Primero, necesitas instalar Axios en tu proyecto. Puedes hacerlo utilizando npm o yarn. Aquí te dejo los comandos para ambos:

```bash
npm install axios
# o
yarn add axios
```

2. **Importación**: Una vez que Axios esté instalado, puedes importarlo en cualquier archivo donde quieras hacer solicitudes HTTP. Aquí te dejo un ejemplo de cómo hacerlo:

```javascript
import axios from 'axios';
```

3. **Uso**: Ahora puedes usar Axios para hacer solicitudes HTTP. Aquí te dejo un ejemplo de cómo hacer una solicitud GET:

```javascript
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

4. **Configuración**: Axios también te permite configurar instancias de Axios con valores predeterminados. Esto puede ser útil si estás haciendo muchas solicitudes al mismo servidor, por ejemplo:

```javascript
const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```


