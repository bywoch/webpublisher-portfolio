window.PORTFOLIO_PROJECTS = [
    {
        id: "saramin-store-buyer",
        title: "사람인 스토어 구매자 서비스 UI 고도화",
        category: "커머스 · 구매자 서비스 · PC/Mobile · 운영 UI",
        period: "2026.05 ~ 2026.07",
        role: "PC·모바일 구매자 서비스 UI 퍼블리싱",
        scope: "담당 화면 UI 퍼블리싱 전반",
        tech: ["HTML5", "CSS3", "SCSS", "JavaScript", "jQuery", "Swiper", "Git"],
        tags: ["Commerce", "Payment Flow", "Responsive", "jQuery", "Swiper", "Operation UI"],
        links: [
            { label: "스토어 홈", url: "https://www.saramin.co.kr/zf_user/store/main?t_ref=gnb" }
        ],
        detailLinks: [
            {
                group: "PC",
                items: [
                    { label: "스토어 홈", url: "https://www.saramin.co.kr/zf_user/store/main?t_ref=gnb" },
                    { label: "스토어 소개", url: "https://www.saramin.co.kr/zf_user/store/official-product" },
                    { label: "상품 리스트", url: "https://www.saramin.co.kr/zf_user/store/list?ctgrCd=S01&page=1&sort=recommended&limit=24&ctgrNo=1" },
                    { label: "상품 상세", url: "https://www.saramin.co.kr/zf_user/store/product?salePrdCd=PMe7ae5ffae6534ed7b2&t_ref=category_S01&t_ref_content=list_sort_recommended" }
                ]
            },
            {
                group: "Mobile",
                items: [
                    { label: "스토어 홈", url: "https://m.saramin.co.kr/store" },
                    { label: "스토어 소개", url: "https://m.saramin.co.kr/store/official-product" },
                    { label: "상품 리스트", url: "https://m.saramin.co.kr/store/list?ctgrCd=S01" },
                    { label: "상품 상세", url: "https://m.saramin.co.kr/store/product?salePrdCd=PMe7ae5ffae6534ed7b2&t_ref=category_S01&t_ref_content=list_sort_recommended" }
                ]
            }
        ],
        summary: "사람인 스토어의 홈, 상품 리스트, 상품 상세, 검색, 찜, 결제 내역, 리뷰 화면을 대상으로 쇼핑몰형 UI와 반복 운영에 필요한 화면 구조를 정리했습니다.",
        overview: "사람인 스토어 구매자 서비스의 홈·상품 리스트·상세·검색·찜·결제·리뷰 화면을 대상으로, PC·모바일 쇼핑몰형 UI와 반복 운영에 필요한 화면 구조를 정리한 프로젝트입니다.",
        roleItems: [
            "사람인 스토어 홈, 상품 리스트, 상품 상세, 검색 결과 등 구매자 서비스 PC·모바일 UI 퍼블리싱",
            "상품명, 가격, 할인율, 리뷰, 평점 등 상품 정보가 명확히 전달되도록 카드형 UI 구조 정리",
            "프로모션 배너, 카테고리 영역, 이벤트 소개 페이지 등 운영성 콘텐츠 화면 구현 및 유지보수",
            "찜, 결제 내역, 리뷰, 마이페이지성 화면 등 구매자 이용 흐름에 필요한 화면 UI 구성",
            "jQuery, Swiper 기반 인터랙션 구현 및 주요 브라우저·모바일 환경 크로스브라우징 대응"
        ],
        contributions: [
            { title: "커머스 화면 구조화", desc: "상품 탐색, 상세 확인, 결제 내역 확인으로 이어지는 구매자 서비스 흐름을 기준으로 화면 구조를 정리했습니다." },
            { title: "상품 카드 정보 정리", desc: "상품명, 가격, 할인율, 리뷰, 평점 정보의 노출 규칙을 정리하여 상품 정보 가독성을 개선했습니다." },
            { title: "운영 콘텐츠 대응", desc: "프로모션, 이벤트, 배너, 카테고리 영역을 운영 중 수정하기 쉽도록 콘텐츠 블록 단위로 구성했습니다." },
            { title: "PC·모바일 대응", desc: "PC와 모바일의 탐색 흐름 차이를 고려해 리스트, 카드, 상세 화면의 반응형 구조를 정리했습니다." }
        ],
        result: "사람인 스토어 구매자 서비스의 홈, 상품 리스트, 프로모션 영역에서 UI 일관성을 유지하고 상품 정보 가독성과 운영 유지보수성을 개선했습니다.",
        visualType: "commerce",
        images: [
            { src: "./img/ptpro_037_pc.png", alt: "사람인 스토어 구매자 서비스 PC 화면", type: "pc", width: 1440, height: 1070 },
            { src: "./img/ptpro_037_m.png", alt: "사람인 스토어 구매자 서비스 모바일 화면", type: "mobile", width: 850, height: 1600 }
        ]
    },
    {
        id: "saramin-seller-center",
        title: "사람인 스토어 판매자 센터 UI 구축",
        category: "판매자 센터 · 운영 UI · React · PC/Mobile",
        period: "2026.05 ~ 2026.05",
        role: "판매자 센터 UI·운영 화면 퍼블리싱",
        scope: "담당 화면 UI 퍼블리싱 전반",
        tech: ["React", "HTML5", "CSS3", "SCSS", "JavaScript", "Git"],
        tags: ["Admin UI", "Seller Center", "React", "Form", "Table", "Operation UI"],
        links: [
            { label: "서비스 링크", url: "https://store.saramin.co.kr/seller-center" }
        ],
        summary: "상품 등록·관리, 판매 관리, 수익금 관리, 셀러 정보 화면을 대상으로 React 프로젝트 환경에 맞는 관리성 UI 마크업과 상태별 화면 구조를 정리했습니다.",
        overview: "사람인 스토어 판매자 센터의 상품 등록·관리, 판매 관리, 수익금 관리, 셀러 정보 화면을 대상으로 관리성 UI 마크업과 상태별 화면 구조를 정리한 프로젝트입니다.",
        roleItems: [
            "판매자 허브, 상품 등록, 상품 관리, 판매 관리, 수익금 관리, 셀러 정보 관리 화면 UI 구축",
            "폼, 테이블, 버튼, 탭, 모달, 안내 문구 등 관리성 화면에 필요한 공통 UI 요소 구성",
            "상품 등록 단계별 입력 화면과 상태별 안내 UI 정리",
            "PC·모바일 화면 구조를 분리하여 판매자 센터의 디바이스별 사용성을 고려한 UI 구현",
            "React 기반 서비스 적용을 고려한 화면 단위 구조와 클래스 네이밍 정리"
        ],
        contributions: [
            { title: "관리성 화면 구조화", desc: "상품 등록, 관리, 정산, 판매 현황 등 업무 단위별 화면 구조를 분리했습니다." },
            { title: "폼·테이블 UI 정리", desc: "입력 항목, 안내 문구, 상태값을 기준으로 폼과 테이블 화면의 일관성을 개선했습니다." },
            { title: "상태별 UI 기준 정리", desc: "상태 배지, 비활성 버튼, 안내 영역 등 운영 화면의 상태 패턴을 정리했습니다." },
            { title: "디바이스별 구조 최적화", desc: "PC는 테이블 중심, 모바일은 카드형 리스트 중심으로 화면 구조를 조정했습니다." }
        ],
        result: "복잡한 판매자 센터 화면을 폼, 테이블, 상태값, 안내 영역 중심으로 정리해 운영 업무 흐름을 명확하게 구성했습니다.",
        visualType: "admin",
        images: [
            { src: "./img/ptpro_038_pc.png", alt: "사람인 스토어 판매자 센터 PC 화면", type: "pc", width: 1440, height: 1070 },
            { src: "./img/ptpro_038_m.png", alt: "사람인 스토어 판매자 센터 모바일 화면", type: "mobile", width: 850, height: 1600 }
        ]
    },
    {
        id: "saramin-products",
        title: "사람인 채용상품 안내 페이지 UI 구축",
        category: "상품 안내 · Vue · Swiper · 운영 콘텐츠",
        period: "2026.04 ~ 2026.05",
        role: "기업회원 상품 안내 UI 퍼블리싱",
        scope: "담당 화면 UI 퍼블리싱 전반",
        tech: ["Vue", "HTML5", "CSS3", "SCSS", "JavaScript", "Swiper", "Git"],
        tags: ["Vue", "Product Card", "Promotion", "Swiper", "Commerce", "Operation"],
        links: [
            { label: "서비스 링크", url: "https://billing.saramin.co.kr/products/" }
        ],
        summary: "기업회원이 채용광고, 인재풀, 패키지, 평가도구 등 주요 채용상품을 확인할 수 있도록 상품 탐색 UI와 운영성 콘텐츠 영역을 구현했습니다.",
        overview: "사람인 기업회원이 채용광고, 인재풀, 패키지, 인적성·평가도구 등 주요 채용상품을 확인할 수 있도록, 채용상품 안내 페이지의 상품 탐색 UI와 운영성 콘텐츠 영역을 구현한 프로젝트입니다.",
        roleItems: [
            "기업회원 대상 채용상품 안내 페이지의 PC 화면 UI 퍼블리싱 및 운영 대응",
            "채용상품 GNB, 좌측 LNB, 상품 홈, 추천 상품, 혜택, 유의사항, 이용문의 영역의 화면 구조 정리",
            "메인 배너 캐러셀, 채용 예산 선택, 상품 목적별 필터, 추천 상품 카드 등 상품 탐색 UI 구현",
            "상품명, 할인율, 가격, 노출 기간, 상품 설명, 추천 사유 등 구매 판단에 필요한 정보 구조 정리",
            "Vue 기반 서비스 적용을 고려한 화면 단위 마크업 구조, 클래스 네이밍, 상태별 UI 기준 정리"
        ],
        contributions: [
            { title: "탐색 구조 정리", desc: "채용상품 홈, 채용광고, 인재풀, 패키지 등 메뉴 구조를 LNB 기준으로 정리했습니다." },
            { title: "상품 카드 가독성 개선", desc: "가격, 할인율, 기간, 추천 사유 등 구매 판단 정보를 카드 안에서 구분했습니다." },
            { title: "운영 콘텐츠 블록화", desc: "혜택, 안내, 유의사항 영역을 콘텐츠 블록 단위로 구조화해 수정 편의성을 확보했습니다." },
            { title: "Vue 환경 대응", desc: "반복되는 배너, 필터, 상품 카드, 안내 영역의 마크업 구조와 클래스 기준을 정리했습니다." }
        ],
        result: "기업회원 채용상품 안내 페이지의 상품 탐색 흐름과 주요 정보 노출 구조를 정리하고 운영성 콘텐츠 관리 효율을 개선했습니다.",
        visualType: "product",
        images: [
            { src: "./img/ptpro_040_pc.png", alt: "사람인 채용상품 안내 페이지 PC 화면", type: "pc", width: 1912, height: 914 }
        ]
    },
    {
        id: "saramin-ai-career",
        title: "사람인 AI 커리어 서비스 UI 구축",
        category: "AI 검색 · React · 상태별 UI · PC/Mobile",
        period: "2026.02 ~ 2026.03",
        role: "AI 서비스 PC·모바일 UI 구축 퍼블리싱",
        scope: "담당 화면 UI 퍼블리싱 전반",
        tech: ["React", "HTML5", "CSS3", "SCSS", "JavaScript", "Git"],
        tags: ["AI Service", "React", "Skeleton UI", "State UI", "Responsive", "LNB"],
        links: [
            { label: "서비스 링크", url: "https://www.saramin.co.kr/zf_user/ai-agent/career" },
        ],
        detailLinks: [
            {
                group: "서비스 링크",
                items: [
                    { label: "PC 페이지", url: "https://www.saramin.co.kr/zf_user/ai-agent/career" },
                    { label: "모바일 페이지", url: "https://m.saramin.co.kr/ai-agent/career" }
                ]
            }
        ],
        summary: "AI가 자연어 채용 조건을 분석해 맞춤 공고를 추천하는 서비스에서 초기, 대기, 로딩, 결과 등 상태별 UI와 PC·모바일 화면 구조를 구성했습니다.",
        overview: "사용자의 자연어 채용 조건을 AI가 분석해 맞춤 공고를 추천하는 서비스로, 기존 사람인 공통 레이아웃 안에 React 기반 본문 UI와 주요 상태별 화면을 구성한 프로젝트입니다.",
        roleItems: [
            "PC·모바일 환경에 맞춘 AI 커리어 서비스 화면 퍼블리싱 산출물 제작 및 운영 대응",
            "초기 화면, 입력 후 대기 화면, 결과 화면, 기업 단일·복수 결과 화면 등 상태별 UI 구성",
            "AI 검색 입력창, 추천 질문, 대화 히스토리, LNB, 옵션 레이어, 공고 카드 등 UI 구현",
            "로딩 중 사용자 피드백을 위한 스켈레톤 UI와 답변 대기 화면 구성",
            "기존 사람인 공통 레이아웃 안에 React 기반 서비스 UI가 안정적으로 적용되도록 구조 정리"
        ],
        contributions: [
            { title: "상태별 화면 패턴 정리", desc: "초기, 대기, 로딩, 결과, 기업 단일·복수 결과 화면을 기준으로 UI 패턴과 노출 규칙을 정리했습니다." },
            { title: "피드백 UI 구성", desc: "스켈레톤 UI와 답변 대기 화면을 구성해 AI 응답 지연 구간에서 진행 상태를 인지하도록 했습니다." },
            { title: "반복 UI 구조화", desc: "입력창, 추천 질문, 대화 히스토리, 공고 카드, 옵션 레이어의 클래스 네이밍과 DOM 구조를 정리했습니다." },
            { title: "화면 충돌 최소화", desc: "공통 헤더·푸터와 신규 서비스 영역의 스타일 영향 범위를 분리해 운영 서비스 내 충돌 가능성을 줄였습니다." }
        ],
        result: "초기 안내, 질문 입력, AI 응답 대기, 결과 확인, 공고 비교까지 이어지는 복합 UI 흐름을 체계화했습니다.",
        visualType: "ai",
        images: [
            { src: "./img/ptpro_039_pc.png", alt: "사람인 AI 커리어 서비스 PC 화면", type: "pc", width: 1440, height: 1070 },
            { src: "./img/ptpro_039_m.png", alt: "사람인 AI 커리어 서비스 모바일 화면", type: "mobile", width: 850, height: 1600 }
        ]
    },
    {
        id: "koreatimes-platform",
        title: "코리아타임스 뉴 플랫폼 개편 프로젝트",
        category: "React · Next.js · 콘텐츠 UI · SEO",
        period: "2024.09 ~ 2025.02",
        role: "React·Next.js 기반 기사 목록 관리 UI 개편",
        scope: "담당 화면 UI 퍼블리싱 전반",
        tech: ["React", "Next.js", "TypeScript", "HTML5", "Tailwind CSS", "JavaScript", "Lighthouse"],
        tags: ["React", "Next.js", "Article Card", "SEO", "Responsive", "Lighthouse"],
        links: [
            { label: "서비스 링크", url: "https://www.koreatimes.co.kr/" }
        ],
        summary: "ASP 기반 화면을 React·Next.js 프로젝트 환경에 맞춰 개편하며 기사 목록, 카드 UI, 공통 레이아웃의 마크업 구조와 화면 품질을 정리했습니다.",
        overview: "코리아타임스의 ASP 기반 화면을 React·Next.js 프로젝트 환경에 맞춰 개편하는 과정에서, 기사 목록·카드·공통 레이아웃의 UI 마크업 구조와 화면 품질을 정리한 프로젝트입니다.",
        roleItems: [
            "기존 ASP 기반 화면의 마크업 구조를 React 프로젝트 환경에 맞춰 정리하고 웹 표준을 고려한 UI 구조로 개선",
            "공통 레이아웃, 기사 카드, 목록 단위로 마크업 템플릿을 정리해 컴포넌트 분리와 조합이 쉬운 구조로 개선",
            "Next.js 프로젝트 환경을 고려해 링크, 내비게이션, 문서 흐름과 검색 노출에 필요한 기본 마크업 구조 보완",
            "Tailwind CSS 유틸리티 사용 기준을 참고해 반복 스타일을 정리하고 화면 간 스타일 일관성 개선",
            "Lighthouse 점검 결과를 참고해 이미지 로딩, 레이아웃 이동, 메타 태그 등 퍼블리싱 영역의 개선 사항 반영"
        ],
        contributions: [
            { title: "레거시 구조 정리", desc: "기존 ASP 기반 화면의 마크업 구조를 분석해 React 프로젝트 환경에 맞는 화면 단위 UI 구조로 정리했습니다." },
            { title: "콘텐츠 카드 템플릿화", desc: "기사 카드와 목록 단위의 마크업 템플릿을 정리해 반복 화면 수정과 스타일 적용이 쉬운 구조로 개선했습니다." },
            { title: "SEO·문서 흐름 보완", desc: "Next.js 환경을 고려해 시맨틱 태그와 문서 흐름, 검색 노출에 필요한 마크업 구조를 보완했습니다." },
            { title: "표시 안정성 개선", desc: "이미지·광고 영역에 크기 지정과 lazy loading을 적용해 레이아웃 이동과 초기 로딩 부담을 완화했습니다." }
        ],
        result: "기사 카드, 목록, 공통 레이아웃의 UI 기준을 정리하고 반응형 화면 구현, 디자인 일관성, 초기 화면 표시 안정성 개선에 기여했습니다.",
        visualType: "media",
        images: [
            { src: "./img/ptpro_021_pc.jpg", alt: "코리아타임스 뉴 플랫폼 PC 화면", type: "pc", width: 1920, height: 1080 },
            { src: "./img/ptpro_021_m.jpg", alt: "코리아타임스 뉴 플랫폼 모바일 화면", type: "mobile", width: 425, height: 823 }
        ]
    },
    {
        id: "imbc-accessibility",
        title: "iMBC 홈페이지 웹 접근성 개선",
        category: "웹 접근성 · WCAG 2.1 · Screen Reader · SEO",
        period: "2022.04 ~ 2022.06",
        role: "웹 접근성 보수 작업 / 검색엔진 최적화 적용",
        scope: "담당 화면 UI 퍼블리싱 전반",
        tech: ["WCAG 2.1", "Semantic Markup", "CSS3", "JavaScript", "KADO-WAH", "ACR Checker", "NVDA", "VoiceOver"],
        tags: ["Accessibility", "WCAG 2.1", "ARIA", "VoiceOver", "NVDA", "Semantic"],
        links: [
            { label: "MBC 메인", url: "https://www.imbc.com/" }
        ],
        detailLinks: [
            {
                group: "서비스 링크",
                items: [
                    { label: "MBC 메인", url: "https://www.imbc.com/" },
                    { label: "TV·예능 페이지", url: "https://www.imbc.com/broad/tv/ent/" },
                    { label: "프로그램 소개 페이지", url: "https://program.imbc.com/hangoutwithyoo" },
                    { label: "MBC 소개 페이지", url: "https://with.mbc.co.kr/" },
                    { label: "웹 접근성 안내 페이지", url: "https://www.imbc.com/notice/accessibility/index.html" }
                ]
            }
        ],
        summary: "iMBC PC·모바일 서비스 페이지의 웹 접근성 보수 과정에서 대체 텍스트, 키보드 네비게이션, 스크린 리더 대응 등 담당 화면의 접근성 개선 작업에 참여했습니다.",
        overview: "iMBC PC·모바일 서비스 페이지의 웹 접근성 보수 과정에서, 이미지 대체 텍스트, 키보드 네비게이션, 스크린 리더 대응 등 담당 화면의 접근성 개선 작업에 참여한 프로젝트입니다.",
        roleItems: [
            "이미지 대체 텍스트와 ARIA 속성을 체계적으로 적용해 시각장애 사용자 접근성과 안내 정보 전달력 개선",
            "섹션 및 헤딩 구조를 재설계하여 스크린 리더 호환성과 정보 계층 구조 강화",
            "form 요소에 label과 fieldset을 추가해 입력 항목의 명확성과 접근성 확보",
            "키보드 네비게이션 지원 및 focus()/blur() 제어로 포커스 이동 경로 최적화",
            "스크린 리더와 iPhone VoiceOver 환경에서 담당 화면을 점검하고 접근성 오류 개선 사항 반영"
        ],
        contributions: [
            { title: "시맨틱 구조 개선", desc: "h1~h6 헤딩 태그를 논리적 계층 구조로 재배치하여 문서 내 정보 흐름과 접근성을 개선했습니다." },
            { title: "폼 접근성 보완", desc: "form 내부 입력 요소에 label과 fieldset을 지정해 입력 필드 간의 논리적 관계를 명확히 했습니다." },
            { title: "스크린리더 대응", desc: "role, aria-label, aria-hidden 등 ARIA 속성을 적용해 스크린 리더 인식 정확도를 높였습니다." },
            { title: "실사용 환경 점검", desc: "VoiceOver와 NVDA를 이용해 키보드 인터랙션 흐름과 포커스 이동을 점검했습니다." }
        ],
        result: "웹 접근성 인증 마크 획득 프로젝트에서 담당 UI 보수와 접근성 점검 작업에 기여하고, 콘텐츠 구조와 정보 접근성을 개선했습니다.",
        visualType: "accessibility",
        images: [
            { src: "./img/ptpro_024.jpg", alt: "iMBC 홈페이지 웹 접근성 개선 화면", type: "pc", width: 990, height: 660 }
        ]
    }
];
