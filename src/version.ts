import packageJson from '../package.json';

export const APP_VERSION = packageJson.version;

console.info(`Grupo JPM - Versão ${APP_VERSION} - Build ${new Date().toLocaleString('pt-BR')}`);
