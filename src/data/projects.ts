/**
 * Curated projects shown on /projects.
 * To add a project: paste a new object into the array below.
 * Projects render grouped by `category`, in the order they appear here.
 */

export type Category = 'Research & Embedded' | 'Systems' | 'Software';

export interface Project {
	name: string;
	description: string;
	tech: string[];
	github: string;
	category: Category;
	highlight?: string;
}

export const projects: Project[] = [
	// ── Research & Embedded ────────────────────────────────────────────
	{
		name: 'NanoProcessor',
		description:
			'A nanoprocessor designed in VHDL and deployed on a Basys3 FPGA — registers, add/sub unit, decoders, and multiplexers implemented from scratch in Xilinx Vivado.',
		tech: ['VHDL', 'FPGA', 'Xilinx Vivado'],
		github: 'https://github.com/yasanthaniroshan/NanoProcessor',
		category: 'Research & Embedded',
	},
	{
		name: 'MNIST SNN Classification',
		description:
			'Classifying MNIST digits with spiking neural networks — exploring neuromorphic approaches to energy-efficient inference.',
		tech: ['Python', 'Spiking Neural Networks'],
		github: 'https://github.com/yasanthaniroshan/MINST-SNN-Classification',
		category: 'Research & Embedded',
	},
	{
		name: 'tinytorch',
		description:
			'A minimal deep-learning framework built from first principles to understand autograd and training loops from the ground up.',
		tech: ['Python', 'Deep Learning'],
		github: 'https://github.com/yasanthaniroshan/tinytorch',
		category: 'Research & Embedded',
	},
	{
		name: 'NPU Playground',
		description:
			'Experiments with neural processing units and accelerated inference on edge hardware.',
		tech: ['Jupyter', 'Edge AI'],
		github: 'https://github.com/yasanthaniroshan/NPU-Playground',
		category: 'Research & Embedded',
	},
	{
		name: 'Bare-Metal Microcontroller Programming',
		description:
			'Register-level microcontroller programming in C without vendor HALs — startup code, linker scripts, and peripheral drivers from scratch.',
		tech: ['C', 'ARM Cortex-M'],
		github: 'https://github.com/yasanthaniroshan/Bare-Metal-Microcontroller-Programming',
		category: 'Research & Embedded',
	},
	{
		name: 'Medibox',
		description:
			'A smart pharmaceutical storage device integrating OLED display, sensors, and a buzzer with scheduling software for medication management.',
		tech: ['C++', 'ESP32', 'IoT'],
		github: 'https://github.com/yasanthaniroshan/Medibox',
		category: 'Research & Embedded',
	},

	// ── Systems ────────────────────────────────────────────────────────
	{
		name: 'Octa-Print',
		description:
			'A centralized print-management system: clients upload files and select configurations, and jobs are routed to the nearest available printer.',
		tech: ['Svelte', 'Distributed Systems'],
		github: 'https://github.com/yasanthaniroshan/Octa-Print',
		category: 'Systems',
	},
	{
		name: 'WinZigC Parser',
		description:
			'A compiler front end for the WinZigC language — lexer, recursive-descent parser, and AST construction (CS4543 Compiler Design).',
		tech: ['C++', 'Compilers'],
		github: 'https://github.com/yasanthaniroshan/WinZigC-Parser',
		category: 'Systems',
	},
	{
		name: 'CoAP',
		description:
			'Constrained Application Protocol experiments for lightweight machine-to-machine communication on embedded networks.',
		tech: ['C++', 'Networking'],
		github: 'https://github.com/yasanthaniroshan/CoAP',
		category: 'Systems',
	},

	// ── Software ───────────────────────────────────────────────────────
	{
		name: 'Bus Tracking System',
		description:
			'A real-time bus tracking system built with Django — live location updates, schedule management, and dashboards.',
		tech: ['Django', 'JavaScript'],
		github: 'https://github.com/yasanthaniroshan/Bus-Tracking-System',
		category: 'Software',
		highlight: '31 stars',
	},
	{
		name: 'FastAPI + SQL Databases',
		description:
			'A worked guide to using SQL databases with FastAPI — models, sessions, and CRUD patterns.',
		tech: ['Python', 'FastAPI', 'SQL'],
		github: 'https://github.com/yasanthaniroshan/FastAPI_SQL_Databases',
		category: 'Software',
	},
	{
		name: 'Telegram Bot with Django',
		description:
			'A guide to building scalable Telegram bot backends on Django.',
		tech: ['Python', 'Django', 'Telegram API'],
		github: 'https://github.com/yasanthaniroshan/TelegramBot_with_Django',
		category: 'Software',
	},
];

export const categories: Category[] = ['Research & Embedded', 'Systems', 'Software'];
