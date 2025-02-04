import { readFileContent, getWordCounts, colorWord, printColoredLines, processFile } from './app.js';
import { jest } from '@jest/globals';

// Mock file reading function
jest.mock('fs', () => ({
    readFileSync: jest.fn(() => "hello world hello"),
}));

describe('File Processing', () => {
    test('should read file content', () => {
        const content = readFileContent();
        expect(content).toBe("hello world hello");
    });

    test('should count words correctly', () => {
        const wordCounts = getWordCounts('hello world hello');
        expect(wordCounts).toEqual({ hello: 2, world: 1 });
    });

    test('should color words correctly based on frequency', () => {
        expect(colorWord('test', 1)).toBeDefined();
        expect(colorWord('test', 3)).toBeDefined();
        expect(colorWord('test', 6)).toBeDefined();
    });

    test('should print colored lines without error', () => {
        console.log = jest.fn(); // Mock console.log
        printColoredLines("hello world hello\nnew line here", { hello: 2, world: 1, new: 1, line: 1, here: 1 });
        expect(console.log).toHaveBeenCalled();
    });

    test('should execute processFile without errors', () => {
        expect(() => processFile()).not.toThrow();
    });
});
