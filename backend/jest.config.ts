import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js', 'json'],
    transform: {
        '^.+\\.(t|j)sx?$': ['ts-jest', { isolatedModules: true }],
    },
    testMatch: ['<rootDir>/src/**/*.test.ts'],
};

export default config;
