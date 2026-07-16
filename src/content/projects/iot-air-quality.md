---
title: IoT Air Quality Node
summary: ESP32 sensor node measuring dust, TVOC/CO₂, temperature, and humidity, with a live Node-RED dashboard for interactive control.
tech: [C++, ESP32, Node-RED, Sensors]
github: https://github.com/yasanthaniroshan/IOT_Air_Quality
category: Research & Embedded
order: 5
---

An IoT device that monitors indoor air quality and notifies users of the current air-quality level, paired with an interactive dashboard built in **Node-RED**.

## Hardware

The sensor node integrates an **ESP32** with a **Plantower PMS7003** dust/particulate sensor, a **DHT22** temperature and humidity sensor, and an **SGP30** TVOC/CO₂ sensor.

## Engineering focus

Beyond the prototype, the work concentrated on making the node practical for long-term deployment: tuning data-logging intervals and transmission behaviour to keep power consumption low while streaming measurements to the dashboard in real time.
