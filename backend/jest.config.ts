import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest', // Usando ts-jest para permitir testes com TypeScript
    testEnvironment: 'node', // Usando o ambiente de testes do Node.js
    moduleFileExtensions: ['ts', 'js', 'json'], // Extensões de arquivos suportadas
    transform: {
        '^.+\.(t|j)sx?$': 'ts-jest', // Transforma arquivos .ts e .tsx com ts-jest
    },
    testMatch: ['<rootDir>/src/**/*.test.ts'], // Procura arquivos de teste que terminam com .test.ts na mesma pasta
    globals: {
        'ts-jest': {
            isolatedModules: true, // Para melhorar a performance ao rodar testes
        },
    },
};

export default config;