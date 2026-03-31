# Use the official Ubuntu base image
FROM ubuntu:latest

ENV LANG C.UTF-8

# Update package lists and install development tools
RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    python3-pip \
    nodejs \
    npm \
    git \
    curl \
    vim \
    btop \
    && rm -rf /var/lib/apt/lists/*

RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

RUN curl -LsSf https://astral.sh/uv/install.sh | sh

ENV PATH="/root/.local/bin:/root/.cargo/bin:${PATH}"

# Set the working directory inside the container
WORKDIR /workspace

# Keep the container running
CMD ["/bin/bash"]