import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.github} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium font-sans">
        한지원의 포트폴리오
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          알고리즘보다 현장 적용을 우선하며, 패턴 분석과 시스템 통합에 강점을 가진 개발자입니다.
        </p>
        <p>
          로봇 제어, ROS2, 임베디드 시스템, AI 기반 시각지능 등 실제 작동하는 기술을 중심으로 프로젝트를 설계해왔습니다.
        </p>
        <p>
          다수의 공모전에서 실사용 환경을 고려한 시스템을 기획하고 구현한 경험이 있으며,  
          기획부터 임베디드 구현, ROS 연동, UI 설계까지 단독으로 수행한 사례도 포함되어 있습니다.
        </p>
        <p>
          이 포트폴리오는 그러한 프로젝트들을 중심으로 구성되어 있으며,  
          문제 정의 → 구조 설계 → 구현 및 적용에 이르는 개발 전 과정을 담고 있습니다.
        </p>
      </div>
    </section>
  );
}
