/**
 * Teaching & mentoring shown on the home page.
 * To add a mentored project: paste an object into the module's `projects` array.
 * Set `coAuthor: true` on a paper only when you are an author on it.
 */

export interface MentoredPaper {
	title: string;
	summary: string;
	link: string;
	doi?: string;
	coAuthor?: boolean;
}

export interface MentoredProject {
	name: string;
	description: string;
	repo: string;
	paper?: MentoredPaper;
}

export interface MentoringModule {
	code: string;
	title: string;
	meta: string;
	projects: MentoredProject[];
}

export const mentoring: MentoringModule[] = [
	{
		code: 'CS3283',
		title: 'Embedded Systems Project — intake 23',
		meta: 'Currently co-mentoring 2 ongoing project teams.',
		projects: [
			{
				name: 'Sim-to-Real Deployment Framework for RL-based Robots',
				description:
					'Reusable framework that automatically converts robot policies trained in simulation (MuJoCo + PPO/Stable-Baselines3) into deployable code for ESP32-class microcontrollers, replacing today’s manual sim-to-real conversion process.',
				repo: 'https://github.com/NidharVignesh/sim2real-framework',
			},
			{
				name: 'Proactive Social Navigation for 2D LiDAR Mobile Robots',
				description:
					'Navigation approach for 2D-LiDAR mobile robots that anticipates the motion of people nearby to plan socially aware, non-disruptive paths.',
				repo: 'https://github.com/nilum2002/proactive-social-nav',
			},
		],
	},
	{
		code: 'CS3283',
		title: 'Embedded Systems Project — intake 22',
		meta: 'Mentored ~16 student teams through the full embedded product cycle — 5 of the teams below published at the ERU Symposium 2025.',
		projects: [
			{
				name: 'ASCILAM',
				description:
					'Collaborative terrain-mapping system in which LiDAR-equipped M-Bot scouts stream scan and odometry data over Wi-Fi (UDP) to a Raspberry Pi coordinator that fuses everything into a global map in real time.',
				repo: 'https://github.com/CSE-ICE-22/ASCILAM',
			},
			{
				name: 'DropToPrint',
				description:
					'ESP32 module that retrofits stock 3D printers: G-code uploads over Wi-Fi straight to the printer’s microSD card plus remote serial control from a web UI — no firmware modifications or OctoPrint required.',
				repo: 'https://github.com/CSE-ICE-22/DropToPrint',
			},
			{
				name: 'Respiration Monitor',
				description:
					'In-mask embedded tag that measures CO₂ concentration, temperature, and humidity in real time, monitoring respiration patterns with smartphone connectivity.',
				repo: 'https://github.com/CSE-ICE-22/respiration-monitor',
				paper: {
					title: 'A smart mask for wireless, real-time monitoring of CO₂ and humidity',
					summary:
						'Introduces the embedded sensing device and alerting pipeline for detecting unsafe CO₂ and humidity build-up inside face masks.',
					link: 'https://dl.lib.uom.lk/items/6d7048aa-743f-470d-b7a8-65941aa91edb',
					doi: '10.31705/ERU.2025.6',
					coAuthor: true,
				},
			},
			{
				name: 'Shadow',
				description:
					'Privacy-conscious wellness platform that fuses wrist-wearable, phone, and laptop signals through a hybrid CNN trained on WESAD for real-time TinyML stress detection.',
				repo: 'https://github.com/CSE-ICE-22/Shadow',
			},
			{
				name: 'Smart River Water-Level Monitoring',
				description:
					'Low-cost, energy-efficient water-level gauge with threshold alerts and cloud logging, built for remote riverbank communities where GSM-based flood warning is impractical.',
				repo: 'https://github.com/CSE-ICE-22/Smart-River-Water-Level-Monitoring-and-Alert-System',
				paper: {
					title: 'IoT-based river water level monitoring system using LoRa technology',
					summary:
						'Presents the LoRa sensing-node and network design that delivers reliable early flood warning at a fraction of the cost and power of GSM alternatives.',
					link: 'https://dl.lib.uom.lk/items/6cde67ac-70ab-412d-aa09-b9505e9e6a0b',
					doi: '10.31705/ERU.2025.8',
				},
			},
			{
				name: 'GuitarPal',
				description:
					'Guitar-learning assistant that lights addressable LEDs under every string and fret and senses finger placement, giving beginners real-time visual guidance and feedback via a Flutter app.',
				repo: 'https://github.com/CSE-ICE-22/Guitar-Pal',
				paper: {
					title: 'Guitar-Pal: smart guitar learning assistant',
					summary:
						'Describes the interactive LED-fret guidance hardware aimed at the steep early learning curve behind first-year dropout among novice guitarists.',
					link: 'https://dl.lib.uom.lk/items/e89eade8-d73d-4729-b6cd-54cc3ba5576c',
					doi: '10.31705/ERU.2025.22',
				},
			},
			{
				name: 'CCTV IntelliGuard',
				description:
					'Edge module that upgrades existing CCTV cameras: OpenCV motion pre-detection gates a quantized, pruned YOLOv8 on a Raspberry Pi, storing timestamped clips and pushing mobile alerts via FCM.',
				repo: 'https://github.com/CSE-ICE-22/CCTV-Intelliguard',
				paper: {
					title:
						'CCTVIntelliGuard: an intelligent edge-based human motion detection and alerting system for CCTV surveillance',
					summary:
						'Details the hybrid OpenCV + YOLOv8 pipeline that adds real-time human detection and alerting to conventional surveillance systems.',
					link: 'https://dl.lib.uom.lk/items/fdb9e01e-3f03-428d-924f-5fd67f79a83f',
					doi: '10.31705/ERU.2025.26',
				},
			},
			{
				name: 'CTS-Guard',
				description:
					'Wristband-and-ring wearable that uses IMU sensors to track wrist posture and repetitive finger movement for early detection of carpal tunnel syndrome risk.',
				repo: 'https://github.com/CSE-ICE-22/CTS-prevention-device',
				paper: {
					title: 'CTS-Guard: a wearable smart device for prevention of carpal tunnel syndrome',
					summary:
						'Presents the posture-monitoring wearable that flags risky wrist positions before median-nerve damage develops.',
					link: 'https://dl.lib.uom.lk/items/4aeff50a-9ecf-40e8-90ca-733054b43aac',
					doi: '10.31705/ERU.2025.34',
				},
			},
		],
	},
	{
		code: 'CS3340',
		title: 'Robotics and Automation',
		meta: 'Mentored ~8 student project teams building autonomous robots on the Kobuki platform with ROS 2.',
		projects: [
			{
				name: 'Kobuki Robot Control System',
				description:
					'Complete ROS 2 control stack for a Kobuki base with LiDAR and Kinect — EKF and SLAM Toolbox for localization and mapping, plus a React web UI for teleoperation and autonomous navigation over rosbridge WebSockets.',
				repo: 'https://github.com/IntellisenseLab/final-project-tk_botz',
			},
			{
				name: 'Kobuki LiDAR + Kinect Semantic Robot',
				description:
					'Semantic mapping robot that fuses YOLO detections with Kinect depth and LiDAR range to pin recognized objects on a SLAM map, navigating with custom A* and taking voice commands over ROS 2 DDS.',
				repo: 'https://github.com/IntellisenseLab/final-project-helaforge',
			},
			{
				name: 'Vision-Based Leader–Follower Platooning',
				description:
					'Autonomous platooning system in which a Kobuki QBot follows a remote-controlled leader car using AprilTag detection, Kinect depth sensing, and PID control, with LiDAR-based localization and a safety monitor.',
				repo: 'https://github.com/IntellisenseLab/final-project-self-name',
			},
			{
				name: 'BotZilla — Object Detection, Collection & Placement',
				description:
					'Autonomous robot that detects, collects, and places cubes in an indoor arena using YOLOv8-nano vision and RGB-D sensing, running on a Raspberry Pi 4 on the Kobuki QBot platform.',
				repo: 'https://github.com/IntellisenseLab/final-project-botzilla',
			},
		],
	},
	{
		code: 'CS3631 / CS4363',
		title: 'Deep Neural Networks · Hardware Description Languages',
		meta: 'Current teaching assistant.',
		projects: [],
	},
];
