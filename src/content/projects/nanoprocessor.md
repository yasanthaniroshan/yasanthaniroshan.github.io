---
title: NanoProcessor
summary: A nanoprocessor designed in VHDL and synthesized for the Basys3 FPGA — registers, add/sub unit, decoders, and multiplexers implemented from scratch.
tech: [VHDL, FPGA, Xilinx Vivado]
github: https://github.com/yasanthaniroshan/NanoProcessor
category: Research & Embedded
order: 1
---

A simplified nanoprocessor designed to run on the Basys3 FPGA, built in VHDL with Xilinx Vivado. Every building block — registers, an add/subtract unit, decoders, and multiplexers — is implemented as a separate component and composed into the processor.

## Instruction set

The processor supports four instructions: **MOV**, **ADD**, **NEG**, and **JZR** (jump if zero). Programs are hardcoded into ROM and loaded at runtime.

## Demonstration

The sample program sums the integers 1 through 3 and maps the result (6) onto the Basys3's seven-segment display. The repository includes the full schematic, the instruction encoding, and the simulated timing diagram of the program's execution.
