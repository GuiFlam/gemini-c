# Gemini to HTML Static Site Generator

This project is a static site generator that converts Gemini files (`.gmi`) into HTML files and serves them over HTTP. It allows you to maintain a Gemini capsule and automatically generate a corresponding website from it.

The project consists of two main components:
1.  A C program that parses `.gmi` files from the `gemtext/` directory and generates `.html` files in the `html/` directory.
2.  A Node.js server that serves the generated HTML files.

## What is the Gemini Protocol?

The Gemini protocol is a lightweight, request/response internet protocol for distributing documents, positioned as an alternative to HTTP and Gopher. It is designed to be simpler, more private, and more focused on text-based content than the modern web.

Key features of the Gemini protocol:

*   **Simplicity**: The protocol is intentionally simple, making it easy to implement clients and servers.
*   **Privacy**: There are no cookies, tracking mechanisms, or complex headers that can compromise user privacy.
*   **Text-centric**: The native content format, `text/gemini`, is a line-based format similar to a simplified Markdown, designed for easy reading and writing.
*   **Focus on Content**: Gemini spaces ("capsules") are primarily for serving documents and encouraging exploration, rather than for web applications.
*   **Mandatory Security**: All connections are secured with TLS.

This project allows you to write content in the simple `text/gemini` format and make it accessible on the traditional web.

## Project Structure

```
/
├── gemtext/              # Source Gemini files (.gmi)
│   ├── index.gmi
│   └── ...
├── html/                 # Generated HTML files
│   ├── index.html
│   └── ...
├── gemini-parser         # The compiled C parser
├── gemini-parser.c       # Source code for the parser
├── server.js             # Node.js HTTP server
├── Makefile              # Build instructions for the parser
├── LICENSE
└── README.md
```

## Getting Started

### Prerequisites

*   `gcc` and `make` to build the parser.
*   `node` and `npm` to run the server.

### Build and Run

1.  **Build the parser**:
    Compile the C program to create the `gemini-parser` executable.
    ```bash
    make
    ```

2.  **Generate the HTML files**:
    Run the parser to convert your `.gmi` files from `gemtext/` to `.html` files in `html/`.
    ```bash
    ./gemini-parser
    ```

3.  **Start the server**:
    Run the Node.js server to serve the `html/` directory.
    ```bash
    node server.js
    ```
    The server will be running at `http://localhost:8080`.

## How it Works

1.  You create or modify `.gmi` files in the `gemtext/` directory.
2.  You run `make` and then `./gemini-parser` to regenerate the HTML files.
3.  The `server.js` serves the generated HTML. When a request for a `.gmi` file is made, it transparently serves the corresponding `.html` file.

## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.