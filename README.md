
=======

<a href="https://github.com/tuusuario/procesador-csv">
  <img width="300px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Logo" width="800" />
</a>

## Procesador de Transacciones CSV

Una herramienta Node.js para procesar archivos CSV con transacciones financieras y calcular balances de crédito/débito · [Reportar error](https://github.com/tuusuario/procesador-csv/issues) · [Sugerir algo](https://github.com/tuusuario/procesador-csv/issues)

</div>

<details>
<summary>Tabla de contenidos</summary>

- [Procesador de Transacciones CSV](#procesador-de-transacciones-csv)
- [Características principales](#características-principales)
  - [Capturas de pantalla del procesador](#capturas-de-pantalla-del-procesador)
- [Para empezar](#para-empezar)
  - [Prerequisitos](#prerequisitos)
  - [Instalación](#instalación)
- [Uso del procesador](#uso-del-procesador)
  - [Formato del archivo CSV](#formato-del-archivo-csv)
  - [Ejemplos de uso](#ejemplos-de-uso)
- [Contribuir al proyecto](#contribuir-al-proyecto)
- [🛠️ Stack](#️-stack)

</details>

## Características principales

- **Lectura eficiente**: Procesamiento optimizado de archivos CSV con manejo de errores robusto.
- **Cálculo automático**: Suma automática de transacciones por tipo (Crédito/Débito).
- **Balance final**: Cálculo del saldo final entre créditos y débitos.
- **Personalizable**: Soporte para diferentes formatos y separadores en archivos CSV.
- **Fácil integración**: Funciona como módulo independiente o como parte de un sistema más grande.

### Capturas de pantalla del procesador

![image](https://github.com/user-attachments/assets/8d4c539a-d075-4a1a-8a33-c0670e89b11d)



<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## Para empezar

### Prerequisitos

- Node.js (versión 14.x o superior)

  ```sh
  # Verificar versión de Node
  node --version
  ```

- Gestor de paquetes (npm o yarn)

  ```sh
  # Para npm
  npm --version
  
  # Para yarn
  yarn --version
  ```

### Instalación

1. Clona el repositorio

   ```sh
   git clone https://github.com/tuusuario/procesador-csv.git
   ```

2. Instala los paquetes de NPM

   ```sh
   cd procesador-csv
   npm install
   # o con yarn
   yarn install
   ```

3. Configura la ruta de tu archivo CSV

   ```javascript
   // En index.js, modifica la última línea con la ruta de tu archivo
   main("ruta/a/tu/archivo.csv");
   ```

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## Uso del procesador

El procesador está diseñado para analizar archivos CSV que contienen registros de transacciones financieras divididas en créditos y débitos.

### Formato del archivo CSV

El archivo CSV debe tener el siguiente formato:

```csv
id;tipo;monto
1;Credito;1000.00
2;Debito;500.00
3;Credito;750.50
4;Debito;320.75
```

Donde:
- La primera línea es el encabezado 
- `tipo`: Puede ser "Credito" o "Debito" (sensible a mayúsculas)
- `monto`: Valor numérico de la transacción



## 🛠️ Stack

- [![Node.js][node-badge]][node-url] - Entorno de ejecución para JavaScript del lado del servidor.
- [![JavaScript][javascript-badge]][javascript-url] - Lenguaje de programación interpretado.
- [![CSV Parser][csv-badge]][csv-url] - Librería para procesamiento eficiente de archivos CSV.
- [![fs (File System)][fs-badge]][fs-url] - Módulo nativo de Node.js para manipulación de archivos.

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

[node-url]: https://nodejs.org/
[javascript-url]: https://developer.mozilla.org/es/docs/Web/JavaScript
[csv-url]: https://www.npmjs.com/package/csv-parser
[fs-url]: https://nodejs.org/api/fs.html
[node-badge]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[javascript-badge]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[csv-badge]: https://img.shields.io/badge/CSV_Parser-4B32C3?style=for-the-badge&logo=npm&logoColor=white
[fs-badge]: https://img.shields.io/badge/File_System-539E43?style=for-the-badge&logo=node.js&logoColor=white
[contributors-shield]: https://img.shields.io/github/contributors/tuusuario/procesador-csv.svg?style=for-the-badge
[contributors-url]: https://github.com/tuusuario/procesador-csv/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tuusuario/procesador-csv.svg?style=for-the-badge
[forks-url]: https://github.com/tuusuario/procesador-csv/network/members
[stars-shield]: https://img.shields.io/github/stars/tuusuario/procesador-csv.svg?style=for-the-badge
[stars-url]: https://github.com/tuusuario/procesador-csv/stargazers
[issues-shield]: https://img.shields.io/github/issues/tuusuario/procesador-csv.svg?style=for-the-badge
[issues-url]: https://github.com/tuusuario/procesador-csv/issues
>>>>>>> master
