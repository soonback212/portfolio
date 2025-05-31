---
title: "Project-AGV: ROS2 기반 자율주행 AGV 시스템"
description: "STM32 + ROS2 연동 기반 자율주행 제어 구조"
date: "2025-06-01"
tech: ["STM32", "FreeRTOS", "ROS2", "UART", "로봇팔"]
image: "/projects/project_agv.png"
repo: "https://github.com/soonback212/portfolio"
---

AGV(무인이동차)와 로봇팔을 연동한 ROS2 기반 자율주행 시스템입니다.  
STM32에서 UART 통신을 통해 ROS2 노드로부터 명령을 수신하고, 이를 실시간으로 파싱하여 AGV의 주행 및 로봇팔 제어에 반영합니다.

### 주요 구현 사항

- ROS2 `teleop_twist_keyboard` 입력 → UART 문자열 전송
- STM32에서 `cmd_vel` 문자열 파싱 및 모터 PWM 제어
- 로봇팔 각도 제어 명령도 UART 기반으로 분리 처리
- 엔코더 기반 거리·회전 측정 및 JSON 피드백 구조화
- FreeRTOS 기반 태스크 분리 (모터 / 로봇암 / 통신)

### 기대 효과

- ROS2와 STM32 간 직접 연동으로 모듈 구조 최소화
- 실제 환경에서 자율주행 + 조작 기능을 하나의 MCU에서 통합 처리
