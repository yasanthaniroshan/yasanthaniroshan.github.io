---
title: Medibox
summary: Smart pharmaceutical storage on an ESP32 — OLED interface, alarms with NTP time sync, and environment monitoring for safe medicine keeping.
tech: [C++, ESP32, IoT]
github: https://github.com/yasanthaniroshan/Medibox
category: Research & Embedded
order: 4
---

**MediBox** is a smart pharmaceutical storage system that helps users manage their medication reliably. The device combines an **OLED screen**, **buzzer**, **push buttons**, **light-dependent resistors**, and a **servo motor**, all driven by embedded software on an ESP32.

## What it does

- Synchronizes time over an **NTP client** and manages configurable medication alarms
- Monitors **temperature and humidity** to keep storage conditions safe for medicine
- Tracks **light intensity** with LDRs and adjusts a servo-driven shade to protect light-sensitive medication
- Provides an on-device menu interface for configuration and interaction
