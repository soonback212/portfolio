export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "콩쥐팥쥐 AGV 협업 시스템",
    year: 2025,
    description: "STM32 + ROS2 기반 자율주행·로봇팔 연동 수거 시스템 (Project_CHORES)",
    url: "https://github.com/soonback212/Project_CHORES",
  },
  {
    title: "스마트폰 ECG 분석 시스템",
    year: 2025,
    description: "심전도(ECG) 데이터 수집 및 AI 기반 분석을 통한 심혈관 위험 감지 프로젝트",
    url: "https://velog.io/@soonback/2025-MEDICAL-DATA-AI-CHALLENGE-%ED%9B%84%EA%B8%B0",
  },
  {
    title: "PLC + 로봇팔 협업 시스템",
    year: 2025,
    description: "센서 기반 분류 + 로봇팔 이송 협업 자동화 시스템",
    url: "https://github.com/soonback212/Project-RobotARM",
  },
  {
    title: "CISCO 공모전: 물류 AI 시스템",
    year: 2025,
    description: "작업자-로봇 협업 기반의 파렛트 최적 분배 및 가이드 시스템",
    url: "https://github.com/soonback212/portfolio",
  },
  {
    title: "Project-AGV: ROS2 기반 자율주행 AGV 시스템",
    year: 2025,
    description: "STM32와 ROS2를 직접 연동한 자율주행 로봇 구조 구현",
    url: "https://github.com/soonback212/portfolio",
  }
];
