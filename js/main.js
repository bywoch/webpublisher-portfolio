(function () {
  const navToggle = document.querySelector(".nav_toggle");
  const nav = document.querySelector("#site_nav");
  const navLinks = nav ? nav.querySelectorAll("a") : [];

  // 실제 헤더 높이 기준 보정값
  const HEADER_OFFSET = 72;

  // 모바일 메뉴 상태 초기화
  function closeNav() {
    if (!navToggle || !nav) return;

    navToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  }

  // URL에 #career 같은 해시가 붙지 않도록 직접 스크롤 처리
  function moveToSection(link) {
    const href = link.getAttribute("href");

    if (!href || !href.startsWith("#")) return;

    const target = document.querySelector(href);

    if (!target) return;

    const targetTop = target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;

    window.scrollTo({
      top: targetTop,
      behavior: "smooth"
    });

    // 혹시 이미 URL에 #career가 붙어 있으면 제거
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }

  if (navToggle && nav) {
    // 메뉴 버튼 클릭 시 열림/닫힘 상태 토글
    navToggle.addEventListener("click", function () {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";

      navToggle.setAttribute("aria-expanded", String(!isExpanded));
      nav.classList.toggle("is-open");
      document.body.classList.toggle("nav-open");
    });

    // 주요 메뉴 클릭 시 URL 해시 변경 없이 해당 섹션으로 이동
    navLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        const href = link.getAttribute("href");

        if (href && href.startsWith("#")) {
          event.preventDefault();
          closeNav();
          moveToSection(link);
        }
      });
    });

    // 데스크톱 전환 시 모바일 메뉴 상태 제거
    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) closeNav();
    });
  }
})();

(function () {
  const projects = window.PORTFOLIO_PROJECTS || [];
  const projectList = document.querySelector("#project_list");
  const projectDetailList = document.querySelector("#project_detail_list");

  // 필수 영역 또는 프로젝트 데이터가 없으면 렌더링 중단
  if (!projectList || !projectDetailList || projects.length === 0) return;

  // 템플릿 문자열에 삽입되는 데이터 이스케이프 처리
  const escapeHtml = function (value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  // 프로젝트 키워드 태그 생성
  const createTagList = function (items) {
    return items.map(function (item) {
      return `<span>${escapeHtml(item)}</span>`;
    }).join("");
  };

  // 프로젝트 외부 링크 생성
  const createProjectLinks = function (links) {
    if (!links || links.length === 0) return "";
    return links.map(function (link) {
      return `
        <a class="btn text" href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">
          ${escapeHtml(link.label)}
        </a>
      `;
    }).join("");
  };

  // 프로젝트 상세 외부 링크 그룹 생성
  const createDetailProjectLinks = function (groups) {
    if (!groups || groups.length === 0) return "";

    return `
    <div class="project_links_detail" aria-label="프로젝트 관련 링크">
      ${groups.map(function (group) {
      return `
          <div>
            <strong>${escapeHtml(group.group)}</strong>
            ${group.items.map(function (link) {
        return `
                <a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">
                  ${escapeHtml(link.label)}
                </a>
              `;
      }).join("")}
          </div>
        `;
    }).join("")}
    </div>
  `;
  };

  // 프로젝트 스크린샷 또는 대체 목업 생성
  const createProjectImages = function (project) {
    if (project.images && project.images.length > 0) {
      return `
      <section class="project_image_panel" aria-labelledby="${escapeHtml(project.id)}-screenshots">
        <h3 id="${escapeHtml(project.id)}-screenshots">Screenshots</h3>
        <div class="project_images">
          ${project.images.map(function (image) {
        const imageType = image.type ? ` is-${escapeHtml(image.type)}` : "";
        const widthAttr = image.width ? ` width="${escapeHtml(image.width)}"` : "";
        const heightAttr = image.height ? ` height="${escapeHtml(image.height)}"` : "";

        return `
              <figure class="${imageType.trim()}">
                <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}"${widthAttr}${heightAttr} loading="lazy">
              </figure>
            `;
      }).join("")}
        </div>
      </section>
    `;
    }

    return `
    <section class="project_image_panel" aria-labelledby="${escapeHtml(project.id)}-preview">
      <h3 id="${escapeHtml(project.id)}-preview">UI Preview</h3>
      ${createMockPreview(project)}
    </section>
  `;
  };

  // 스크린샷이 없는 프로젝트의 UI 목업 생성
  const createMockPreview = function (project) {
    const type = project.visualType || "commerce";
    const label = project.category || "UI Preview";
    if (type === "admin") {
      return `
        <div class="project_mock mock_${escapeHtml(type)}" aria-label="${escapeHtml(label)} 목업">
          <div class="mock_screen">
            <div class="mock_bar" aria-hidden="true"><span></span><span></span><span></span></div>
            <div class="mock_content">
              <div class="mock_hero"><div><span class="mock_badge">Admin</span><strong>Seller Center</strong><p>폼·테이블·상태 UI 구조화</p></div><button type="button">관리하기</button></div>
              <div class="mock_table" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>
            </div>
          </div>
        </div>
      `;
    }
    if (type === "ai") {
      return `
        <div class="project_mock mock_${escapeHtml(type)}" aria-label="${escapeHtml(label)} 목업">
          <div class="mock_screen">
            <div class="mock_bar" aria-hidden="true"><span></span><span></span><span></span></div>
            <div class="mock_content">
              <div class="mock_hero"><div><span class="mock_badge">AI</span><strong>Career Agent</strong><p>상태별 응답 화면과 스켈레톤 UI</p></div><button type="button">질문하기</button></div>
              <div class="mock_chat" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
            </div>
          </div>
        </div>
      `;
    }
    if (type === "media") {
      return `
        <div class="project_mock mock_${escapeHtml(type)}" aria-label="${escapeHtml(label)} 목업">
          <div class="mock_screen">
            <div class="mock_bar" aria-hidden="true"><span></span><span></span><span></span></div>
            <div class="mock_content">
              <div class="mock_hero"><div><span class="mock_badge">News</span><strong>Article Layout</strong><p>기사 카드·목록·공통 레이아웃</p></div><button type="button">Read</button></div>
              <div class="mock_article" aria-hidden="true"><span></span><span></span></div>
            </div>
          </div>
        </div>
      `;
    }
    if (type === "accessibility") {
      return `
        <div class="project_mock mock_${escapeHtml(type)}" aria-label="${escapeHtml(label)} 목업">
          <div class="mock_screen">
            <div class="mock_bar" aria-hidden="true"><span></span><span></span><span></span></div>
            <div class="mock_content">
              <div class="mock_hero"><div><span class="mock_badge">A11y</span><strong>Accessibility Check</strong><p>ARIA·label·포커스 흐름 점검</p></div><button type="button">Focus</button></div>
              <div class="mock_a11y" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
            </div>
          </div>
        </div>
      `;
    }
    return `
      <div class="project_mock mock_${escapeHtml(type)}" aria-label="${escapeHtml(label)} 목업">
        <div class="mock_screen">
          <div class="mock_bar" aria-hidden="true"><span></span><span></span><span></span></div>
          <div class="mock_content">
            <div class="mock_hero"><div><span class="mock_badge">Commerce</span><strong>Product Store</strong><p>상품 탐색 흐름을 고려한 카드형 UI</p></div><button type="button">상품 보기</button></div>
            <div class="mock_filter" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
            <div class="mock_products" aria-hidden="true"><span></span><span></span><span></span></div>
          </div>
        </div>
      </div>
    `;
  };

  // 대표 프로젝트 카드 생성
  const createProjectCard = function (project, index) {
    const titleId = `project_card_title-${index + 1}`;
    return `
      <article class="project_card" aria-labelledby="${titleId}">
        <div class="project_summary">
          <p class="project_kicker">${escapeHtml(project.category)}</p>
          <h3 id="${titleId}">${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.summary)}</p>
          <ul class="project_meta" aria-label="프로젝트 요약">
            <li><strong>역할</strong><span>${escapeHtml(project.role)}</span></li>
            <li><strong>참여 범위</strong><span>${escapeHtml(project.scope)}</span></li>
            <li><strong>기간</strong><span>${escapeHtml(project.period)}</span></li>
            <li><strong>기술</strong><span>${escapeHtml(project.tech.join(", "))}</span></li>
          </ul>
          <div class="tag_list" aria-label="프로젝트 키워드">
            ${createTagList(project.tags)}
          </div>
          <div class="project_actions">
            <a class="btn primary" href="#${escapeHtml(project.id)}">상세 보기</a>
            ${createProjectLinks(project.links)}
          </div>
        </div>
      </article>
    `;
  };

  // 프로젝트 상세 섹션 생성
  const createProjectDetail = function (project) {
    return `
      <section class="section section_muted project_detail_section" id="${escapeHtml(project.id)}" aria-labelledby="${escapeHtml(project.id)}-title">
        <div class="container project_detail_grid">
          <div class="section_heading sticky-heading">
            <p class="eyebrow">Project Detail</p>
            <h2 id="${escapeHtml(project.id)}-title">${escapeHtml(project.title)}</h2>
            <p>${escapeHtml(project.category)}</p>
          </div>
          <div class="detail_content">
            <section class="detail_block" aria-labelledby="${escapeHtml(project.id)}-overview">
              <h3 id="${escapeHtml(project.id)}-overview">Overview</h3>
              <p>${escapeHtml(project.overview)}</p>
            </section>
            <section class="detail_block" aria-labelledby="${escapeHtml(project.id)}-role">
              <h3 id="${escapeHtml(project.id)}-role">Role</h3>
              <ul class="check_list">
                ${project.roleItems.map(function (item) { return `<li>${escapeHtml(item)}</li>`; }).join("")}
              </ul>
            </section>
            <section class="detail_block" aria-labelledby="${escapeHtml(project.id)}-contribution">
              <h3 id="${escapeHtml(project.id)}-contribution">Key Contribution</h3>
              <div class="contribution_grid">
                ${project.contributions.map(function (item) {
      return `
                    <div>
                      <strong>${escapeHtml(item.title)}</strong>
                      <p>${escapeHtml(item.desc)}</p>
                    </div>
                  `;
    }).join("")}
              </div>
            </section>
            <section class="detail_block" aria-labelledby="${escapeHtml(project.id)}-result">
              <h3 id="${escapeHtml(project.id)}-result">Result</h3>
              <p>${escapeHtml(project.result)}</p>
            </section>
            ${createProjectImages(project)}
            <div class="project_actions">
  <a class="btn primary" href="#projects">프로젝트 목록으로</a>
  ${createProjectLinks(project.links)}
</div>
${createDetailProjectLinks(project.detailLinks)}
          </div>
        </div>
      </section>
    `;
  };

  // 프로젝트 카드 목록 렌더링
  projectList.innerHTML = projects.map(createProjectCard).join("");
  // 프로젝트 상세 섹션 렌더링
  projectDetailList.innerHTML = projects.map(createProjectDetail).join("");
})();

const topButton = document.querySelector(".to_top");
if (topButton) {
  topButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}