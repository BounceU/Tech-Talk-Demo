#!/usr/bin/env node
const process = require('process');
const path = require('path');
const readline = require('readline');

console.log("--- JAVASCRIPT ---\n");

console.log(`Node Executable: ${process.argv[0]}`);
console.log(`Entry Point Script: ${process.argv[1]}\n`);

console.log("--- System PATH Variables ---");
const pathVar = process.env.PATH;

if (pathVar) {
    const paths = pathVar.split(path.delimiter);
    paths.forEach((p, index) => {
        console.log(`${String(index + 1).padStart(2, '0')}: ${p}`);
    });
} else {
    console.log("No PATH variable found.");
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Press Enter to exit...', () => {
    rl.close(); 
});