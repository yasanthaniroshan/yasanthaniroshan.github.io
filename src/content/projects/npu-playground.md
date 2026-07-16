---
title: NPU Playground
summary: Experiments with the NPU on the Luckfox Pico Mini B (Rockchip RV1103) — model conversion to RKNN, quantization, and on-device inference.
tech: [Python, RKNN Toolkit, Quantization, Edge AI]
github: https://github.com/yasanthaniroshan/NPU-Playground
category: Research & Embedded
order: 2
article: https://medium.com/@niroshanyi/pushing-a-7-linux-board-to-the-limit-a840ef04d1d1
---

A hands-on exploration of the Neural Processing Unit on the **Luckfox Pico Mini B** (Rockchip RV1103) using the RKNN Toolkit: setting up the cross-development environment, converting trained models to RKNN format, and running accelerated inference on the device.

## Heat-index prediction pipeline

The flagship experiment is an end-to-end pipeline that predicts heat index on the NPU. The model is trained with **quantization-aware training (QAT)** and deployed as a fully quantized **INT8** network, then profiled for inference throughput and memory-access behaviour while maintaining regression accuracy — a study in how much useful ML fits on a sub-$10 board.
