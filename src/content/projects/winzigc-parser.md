---
title: WinZigC Compiler
summary: A five-stage compiler for the WinZigC language — tokenize, parse, semantic analysis, optimize, and generate stack-machine assembly.
tech: [C++, Compilers]
github: https://github.com/yasanthaniroshan/WinZigC-Parser
category: Systems & Software
order: 1
---

A compiler for the **WinZigC** language, built for CS4543 Compiler Design. It runs a five-stage pipeline — **tokenize → parse → semantic analysis → optimize → code generation** — turning a `.winzig` source file into stack-machine assembly.

## Engineering

The project is built like production software: continuous integration and automated releases via GitHub Actions, with Linux, macOS, and Windows all supported. The abstract syntax tree is constructed by a hand-written recursive-descent parser.
