# Docker

## Terminal 1

`docker run -it -v "$(pwd):/workspace" ubuntu-dev`

## Terminal 2

`docker ps`
`docker exec -it <Container ID> /bin/bash`

# Javascript

## Install

In Javascript/javascript-demo: `npm install -g .`

## Uninstall

In Javascript/javascript-demo: `npm uninstall -g javascript-demo`

## Run

`javascriptdemo`

# Python

## Install

In Python/python-demo: `pip install . --break-system-packages`

## Uninstall

In Python/python-demo: `pip uninstall python-demo --break-system-packages`

## Run

`pythondemo`

# Rust

## Install

In Rust/rust-demo: `cargo install --path .`

## Uninstall

In Rust/rust-demo: `cargo uninstall rust-demo`

## Run

`rust-demo`
