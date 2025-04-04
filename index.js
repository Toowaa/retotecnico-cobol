// Importación de módulos necesarios csv y fs
// fs es para leer archivos de texto
// csv es para leer archivos de texto en formato CSV
const fs = require("fs");
const csv = require("csv-parser");

// Función que lee un archivo CSV defino en el filePath y devuelve una promesa que se resuelve con el resultado
async function readCSV(filePath) {
  // La promesa se resuelve con un array de objetos que representan las filas del archivo CSV
  return new Promise((resolve, reject) => {
    const results = [];
    // Lee el archivo CSV y devuelve el resultado en la promesa
    fs.createReadStream(filePath)
      //Separamos las filas con el caracter ";" y elminamos los espacios en blanco
      .pipe(csv({ separator: ";", mapHeaders: ({ header }) => header.trim() }))
      // La data se pushea en row cada vez que se reciba una fila del archivo CSV
      .on("data", (row) => results.push(row))
      // La promesa se resuelve cuando se reciba el fin del archivo CSV
      .on("end", () => resolve(results))
      .on("error", (error) => reject(error));
  });
}

// Función principal que llama a la función readCSV y realiza las operaciones necesarias
async function main(Path) {
  try {
    //Llamada a la función readCSV con el argumento Path
    const data = await readCSV(Path);

    let totalCredito = 0;
    let totalDebito = 0;
    let maxCredito = 0;
    let maxDebito = 0;
    let contadorcreditos = 0;
    let contadordebitos = 0;
    let idcredito = null;
    let iddebito = null;
    //Recorremos cada fila del archivo CSV y sumamos los montos de cada tipo de operación
    data.forEach((row) => {
      const monto = parseFloat(row.monto);
      if (row.tipo === "Credito") {
        totalCredito += monto;
        contadorcreditos++;
        monto > maxCredito
          ? ((maxCredito = monto), (idcredito = row.id))
          : (maxCredito = maxCredito);
      } else if (row.tipo === "Debito") {
        totalDebito += monto;
        monto > maxDebito
          ? ((maxDebito = monto), (iddebito = row.id))
          : (maxDebito = maxDebito);
        contadordebitos++;
      }
    });
    //Maximo de los montos de cada tipo de operación comparados usando ternarios
    maxCredito > maxDebito
      ? ((maximo = maxCredito), (idmaximo = idcredito))
      : ((maximo = maxDebito), (idmaximo = iddebito));

    // Calculamos el resultado (Crédito - Débito)
    const resultado = totalCredito - totalDebito;
    // Imprimimos los resultados
    console.log("Reporte de Transacciones:");
    console.log("---------------------------------------------");
    console.log("Balance Final:", "ID" + resultado, "-", resultado);
    console.log("Transacción de Mayor Monto:", "ID :" , idmaximo, "-", maximo);

    console.log(
      "Conteo de Transacciones:",
      "Crédito:",
      contadorcreditos,
      "Débito:",
      contadordebitos
    );
  } catch (error) {
    // Si ocurre algún error, imprimimos el error
    console.error("Error al leer el archivo CSV:", error);
  }
}

main("./cobol.csv");
