import fs from "fs";
import path from "path";
import JavaScriptObfuscator from "javascript-obfuscator";

const distDir = "./dist";
const excludeFiles = ["polyfills", "common", "runtime", "scripts"];

/**
 * Función para verificar si un nombre de archivo está en la lista de exclusión
 *
 * @param {*} fileName
 * @return {*}
 */
function isExcluded(fileName) {
  return excludeFiles.some((excludeName) => fileName.includes(excludeName));
}

/**
 * Función para ofuscar un archivo JavaScript
 *
 * @param {*} filePath
 * @return {*}
 */
function obfuscateFile(filePath) {
  const fileName = path.basename(filePath);
  if (isExcluded(fileName)) {
    console.log(`El archivo ${fileName} está excluido de la ofuscación.`);
    return;
  }

  const code = fs.readFileSync(filePath, "utf8");
  const obfuscationResult = JavaScriptObfuscator.obfuscate(code, {
    compact: true,
    controlFlowFlattening: false,
    deadCodeInjection: false,
    debugProtection: false,
    debugProtectionInterval: 0,
    disableConsoleOutput: false,
    identifierNamesGenerator: "hexadecimal",
    log: false,
    numbersToExpressions: false,
    renameGlobals: false,
    selfDefending: false,
    simplify: true,
    splitStrings: false,
    stringArray: true,
    stringArrayCallsTransform: false,
    stringArrayCallsTransformThreshold: 0.5,
    stringArrayEncoding: [],
    stringArrayIndexShift: true,
    stringArrayRotate: true,
    stringArrayShuffle: true,
    stringArrayWrappersCount: 1,
    stringArrayWrappersChainedCalls: true,
    stringArrayWrappersParametersMaxCount: 2,
    stringArrayWrappersType: "variable",
    stringArrayThreshold: 0.75,
    unicodeEscapeSequence: false,
  });

  fs.writeFileSync(filePath, obfuscationResult.getObfuscatedCode(), "utf8");
}

/**
 * Función para ofuscar todos los archivos JavaScript en un directorio
 *
 * @param {*} dirPath
 */
function obfuscateDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      obfuscateDirectory(filePath);
    } else if (filePath.endsWith(".js")) {
      obfuscateFile(filePath);
    }
  });
}

obfuscateDirectory(distDir);

console.log(
  "La ofuscación de los archivos JavaScript en el directorio dist se ha completado."
);
