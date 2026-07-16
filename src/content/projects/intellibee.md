---
title: IntelliBee
summary: Smart beehive monitoring that tracks hive conditions and bee acoustics to protect colony wellness and predict honey yield.
tech: [TinyML, DSP, IoT, Python]
github: https://github.com/yasanthaniroshan/IntelliBee
category: Research & Embedded
order: 3
---

**IntelliBee** is a smart monitoring system for beehives that prioritizes both honey yield and colony wellness. A network of sensors continuously observes hive conditions, bee behaviour, and environmental factors to detect early signs of health issues and provide actionable insights to beekeepers.

## Acoustic TinyML

The core research angle is resource-efficient acoustic monitoring: swarming events are detected from **Linear Predictive Coding (LPC) coefficients**, using the statistical variance of the coefficients as features. This replaces high-compute FFT/spectrogram pipelines, keeping the analysis cheap enough for always-on embedded deployment.

## Dataset

Field recordings collected through this work were released as the openly available <a href="https://doi.org/10.5281/zenodo.19739013" rel="noopener">Bee Acoustic Dataset with Environmental Parameters</a> on Zenodo.
