const eras = [
  {
    id: "switch",
    era: "1947-1960s",
    category: "device",
    label: "소자",
    title: "반도체 스위치의 탄생",
    summary:
      "전류를 안정적으로 켜고 끄는 방법을 찾으면서 진공관에서 트랜지스터로 이동했다.",
    problem: "도체와 절연체 사이에서 전류를 정밀하게 제어할 물리적 스위치가 필요했다.",
    principle: "밴드갭, 도핑, p-n 접합을 이용하면 전자와 정공의 흐름을 인위적으로 만들 수 있다.",
    solution: "트랜지스터와 MOSFET이 전압으로 전류 경로를 열고 닫는 구조를 제공했다.",
    next: "스위치 하나가 아니라 수많은 스위치를 칩 위에 집적해야 했다.",
    players: ["Bell Labs", "Shockley", "Bardeen", "Brattain", "Fairchild"],
    accent: "#62dfc5",
  },
  {
    id: "cmos",
    era: "1960s-1980s",
    category: "device",
    label: "소자",
    title: "CMOS와 집적회로",
    summary:
      "논리 게이트와 메모리 소자를 낮은 대기 전력으로 결합하면서 디지털 회로가 산업화됐다.",
    problem: "더 많은 논리회로를 넣을수록 전력과 발열이 빠르게 커졌다.",
    principle: "p형과 n형 MOSFET을 보완적으로 배치하면 대기 상태의 전류를 크게 줄일 수 있다.",
    solution: "CMOS 인버터, NAND/NOR, 플립플롭이 집적회로의 기본 블록이 됐다.",
    next: "원가와 성능을 동시에 개선하려면 트랜지스터를 계속 더 작게 만들어야 했다.",
    players: ["Intel", "Texas Instruments", "Gordon Moore", "Robert Noyce"],
    accent: "#f3b55f",
  },
  {
    id: "scaling",
    era: "1980s-2000s",
    category: "manufacturing",
    label: "제조",
    title: "무어의 법칙과 미세화 황금기",
    summary:
      "리소그래피와 공정 기술이 발전하면서 같은 면적에 더 많은 트랜지스터를 넣었다.",
    problem: "성능을 높이면서 칩 단가를 낮추는 반복 가능한 제조 방법이 필요했다.",
    principle: "패턴을 더 작게 새기고 산화, 식각, 증착, 이온 주입을 정밀하게 반복하면 집적도가 오른다.",
    solution: "광리소그래피, 클린룸, 수율 관리, EUV로 미세화의 속도를 유지했다.",
    next: "누설 전류, 발열, 양자 터널링, 배선 RC 지연이 단순 미세화를 막기 시작했다.",
    players: ["ASML", "TSMC", "Intel", "Samsung", "Applied Materials"],
    accent: "#75a7ff",
  },
  {
    id: "3d-transistor",
    era: "2010s",
    category: "manufacturing",
    label: "제조",
    title: "평면 한계와 3D 트랜지스터",
    summary:
      "채널을 입체로 감싸 전류 제어력을 높이는 방식이 미세화의 다음 돌파구가 됐다.",
    problem: "평면 MOSFET은 작아질수록 오프 상태 누설과 문턱전압 변동을 통제하기 어려웠다.",
    principle: "게이트가 채널을 더 많은 면에서 감싸면 전기장이 강해지고 누설을 억제할 수 있다.",
    solution: "FinFET, GAAFET, nanosheet가 전류 제어력과 면적 효율을 개선했다.",
    next: "트랜지스터보다 배선, 패키징, 메모리 이동이 전체 시스템 성능을 제한하기 시작했다.",
    players: ["TSMC", "Samsung", "Intel", "Mark Bohr"],
    accent: "#93d681",
  },
  {
    id: "gpu",
    era: "2012-2018",
    category: "compute",
    label: "연산",
    title: "GPU 병렬처리와 딥러닝",
    summary:
      "AI 연산의 대부분이 행렬곱이라는 점이 GPU의 대규모 병렬 구조와 맞아떨어졌다.",
    problem: "CPU는 복잡한 제어에는 강하지만 대규모 행렬 연산 처리량이 부족했다.",
    principle: "같은 명령을 많은 데이터에 반복 적용하는 SIMD/SIMT 구조는 행렬곱을 빠르게 처리한다.",
    solution: "CUDA, GPU 코어, Tensor Core, mixed precision이 딥러닝 학습을 가속했다.",
    next: "연산기는 빨라졌지만 데이터를 공급하는 메모리 대역폭과 GPU 간 통신이 병목이 됐다.",
    players: ["NVIDIA", "Jensen Huang", "Geoffrey Hinton", "AMD", "Google"],
    accent: "#ef766d",
  },
  {
    id: "ai-accelerator",
    era: "2018-2023",
    category: "compute",
    label: "연산",
    title: "AI 가속기와 데이터플로우",
    summary:
      "행렬곱 전용 하드웨어와 데이터 흐름 최적화가 AI 칩의 기본 설계 언어가 됐다.",
    problem: "범용 GPU만으로는 전력당 성능과 특정 AI 워크로드 최적화가 충분하지 않았다.",
    principle: "systolic array와 데이터플로우 구조는 데이터 이동을 줄이고 MAC 연산 활용률을 높인다.",
    solution: "TPU, NPU, AI accelerator, compiler stack이 모델과 하드웨어를 함께 최적화했다.",
    next: "대형 모델은 단일 칩을 넘어 HBM 용량, 패키징, 네트워크를 요구했다.",
    players: ["Google TPU", "Apple Neural Engine", "Qualcomm", "Broadcom", "Cerebras"],
    accent: "#b695ff",
  },
  {
    id: "hbm",
    era: "2023-2026",
    category: "memory",
    label: "메모리",
    title: "LLM과 HBM 병목",
    summary:
      "대형 언어모델은 연산보다 가중치, activation, KV cache를 옮기고 저장하는 능력을 압박했다.",
    problem: "Tensor Core가 빨라도 HBM 대역폭과 용량이 부족하면 GPU 활용률이 떨어졌다.",
    principle: "DRAM die를 수직 적층하고 TSV와 인터포저로 GPU와 가깝게 연결하면 데이터 이동 거리가 줄어든다.",
    solution: "HBM3E, HBM4, 2.5D 패키징, NVLink, NVSwitch, InfiniBand가 스케일업과 스케일아웃을 가능하게 했다.",
    next: "전력 공급, 열 방출, 패키징 수율, 데이터센터 냉각이 비용과 공급의 핵심 제약이 됐다.",
    players: ["SK hynix", "Samsung", "TSMC", "NVIDIA", "Mellanox"],
    accent: "#5ed4ff",
  },
  {
    id: "inference",
    era: "2026+",
    category: "system",
    label: "시스템",
    title: "추론, 에이전트, 온디바이스 AI",
    summary:
      "AI 사용량이 폭증하면서 학습보다 반복 추론, 장문맥, 멀티모달, 엣지 실시간성이 중요해졌다.",
    problem: "서비스 규모가 커지면 추론 비용, 지연시간, 전력, 메모리 용량이 동시에 증가한다.",
    principle: "정밀도와 모델 크기를 줄이고 메모리 계층을 확장하면 같은 자원으로 더 많은 요청을 처리할 수 있다.",
    solution: "quantization, sparsity, speculative decoding, CXL memory, NPU, edge compute가 확산된다.",
    next: "전력당 성능, 신뢰성, 로봇/물리 AI의 실시간 안전성, 광통신 기반 데이터센터가 다음 경쟁 축이다.",
    players: ["OpenAI", "Microsoft", "Apple", "Qualcomm", "Tesla", "Ultra Ethernet Consortium"],
    accent: "#f28cb1",
  },
];

const bottlenecks = [
  {
    name: "연산",
    score: 74,
    accent: "#ef766d",
    text: "Tensor Core, systolic array, FP8/FP4, sparse computing이 처리량을 밀어 올린다.",
  },
  {
    name: "메모리",
    score: 96,
    accent: "#5ed4ff",
    text: "HBM 대역폭과 용량, KV cache, memory wall이 LLM 시대의 가장 큰 제약이다.",
  },
  {
    name: "통신",
    score: 88,
    accent: "#75a7ff",
    text: "NVLink, InfiniBand, Ethernet AI fabric, optical interconnect가 클러스터 확장을 좌우한다.",
  },
  {
    name: "전력",
    score: 84,
    accent: "#f3b55f",
    text: "power delivery, VRM, IR drop, energy per bit가 데이터센터 비용으로 직결된다.",
  },
  {
    name: "열",
    score: 82,
    accent: "#ef9a76",
    text: "hotspot, thermal resistance, liquid cooling, immersion cooling이 서버 설계의 필수 조건이다.",
  },
  {
    name: "제조",
    score: 78,
    accent: "#93d681",
    text: "EUV, overlay, defect density, advanced packaging yield가 공급 능력을 결정한다.",
  },
];

const players = [
  {
    name: "NVIDIA",
    role: "GPU + 네트워크 + 소프트웨어 + 시스템",
    focus: "Tensor Core, CUDA, NVLink, InfiniBand, rack-scale architecture",
    accent: "#93d681",
  },
  {
    name: "SK hynix",
    role: "HBM 중심 AI 메모리",
    focus: "HBM3E/HBM4, TSV, 적층 수율, 고대역폭 메모리 공급",
    accent: "#5ed4ff",
  },
  {
    name: "Samsung",
    role: "메모리 + 파운드리 + 첨단 패키징",
    focus: "HBM, GAAFET, I-Cube, X-Cube, 턴키 이종집적",
    accent: "#75a7ff",
  },
  {
    name: "TSMC",
    role: "선단 파운드리 + CoWoS류 패키징",
    focus: "2nm/3nm, 수율, CoWoS, 글로벌 팹리스 제조 파트너",
    accent: "#f3b55f",
  },
  {
    name: "ASML",
    role: "EUV와 High-NA EUV",
    focus: "미세 패턴 형성 장비로 선단 공정의 속도를 결정",
    accent: "#b695ff",
  },
  {
    name: "Google",
    role: "TPU와 데이터센터 AI 설계",
    focus: "systolic array, 모델-컴파일러-하드웨어 공동 최적화",
    accent: "#ef766d",
  },
  {
    name: "Apple / Qualcomm",
    role: "온디바이스 AI",
    focus: "모바일 NPU, 저전력 추론, 모델 압축, edge compute",
    accent: "#f28cb1",
  },
  {
    name: "OpenAI / Microsoft",
    role: "추론 수요와 클러스터 스케일",
    focus: "LLM 서비스, 에이전트형 AI, 데이터센터 인프라 수요",
    accent: "#62dfc5",
  },
];

const learningPath = [
  ["1단계", "반도체 기본 원리", "밴드갭, 도핑, MOSFET, CMOS"],
  ["2단계", "제조공정", "리소그래피, 식각, 증착, EUV, 수율"],
  ["3단계", "컴퓨터 구조", "CPU, GPU, 캐시, 병렬처리"],
  ["4단계", "AI 연산", "행렬곱, Transformer, attention"],
  ["5단계", "AI 반도체", "Tensor Core, HBM, NVLink, 패키징"],
  ["6단계", "기업 포지션", "NVIDIA, SK hynix, Samsung, TSMC"],
];

const timelineList = document.querySelector("#timelineList");
const controls = document.querySelectorAll(".control");
const detailEra = document.querySelector("#detailEra");
const detailTitle = document.querySelector("#detailTitle");
const detailSummary = document.querySelector("#detailSummary");
const detailProblem = document.querySelector("#detailProblem");
const detailSolution = document.querySelector("#detailSolution");
const detailNext = document.querySelector("#detailNext");
const detailPlayers = document.querySelector("#detailPlayers");

function makeTag(text) {
  return `<span class="tag">${text}</span>`;
}

function renderTimeline() {
  timelineList.innerHTML = eras
    .map(
      (era, index) => `
        <li>
          <button class="timeline-card ${index === 0 ? "is-active" : ""}" type="button"
            data-id="${era.id}" data-category="${era.category}" style="--accent:${era.accent}"
            aria-pressed="${index === 0 ? "true" : "false"}">
            <span class="timeline-card__date">
              <span>Era ${String(index + 1).padStart(2, "0")}</span>
              <span>${era.era}</span>
            </span>
            <span>
              <span class="timeline-card__title">${era.title}</span>
              <span class="timeline-card__summary">${era.summary}</span>
              <span class="tag-row">${makeTag(era.label)}${makeTag(era.players[0])}${makeTag(era.players[1])}</span>
            </span>
          </button>
        </li>
      `,
    )
    .join("");

  timelineList.querySelectorAll(".timeline-card").forEach((card) => {
    card.addEventListener("click", () => selectEra(card.dataset.id, true));
  });
}

function selectEra(id, userInitiated = false) {
  const era = eras.find((item) => item.id === id) || eras[0];
  const index = eras.findIndex((item) => item.id === era.id);

  timelineList.querySelectorAll(".timeline-card").forEach((card) => {
    const active = card.dataset.id === era.id;
    card.classList.toggle("is-active", active);
    card.setAttribute("aria-pressed", String(active));
  });

  detailEra.textContent = `Era ${String(index + 1).padStart(2, "0")} / ${era.era}`;
  detailTitle.textContent = era.title;
  detailSummary.textContent = `${era.summary} ${era.principle}`;
  detailProblem.textContent = era.problem;
  detailSolution.textContent = era.solution;
  detailNext.textContent = era.next;
  detailPlayers.textContent = era.players.join(" · ");

  if (userInitiated && window.matchMedia("(max-width: 980px)").matches) {
    document.querySelector(".detail-panel").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

function applyFilter(filter) {
  controls.forEach((button) => {
    const active = button.dataset.filter === filter;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  const cards = [...timelineList.querySelectorAll(".timeline-card")];
  cards.forEach((card) => {
    card.hidden = filter !== "all" && card.dataset.category !== filter;
  });

  const visible = cards.find((card) => !card.hidden);
  if (visible) selectEra(visible.dataset.id);
}

function renderRadar() {
  const center = 150;
  const maxRadius = 112;
  const points = bottlenecks.map((item, index) => {
    const angle = -Math.PI / 2 + (index * 2 * Math.PI) / bottlenecks.length;
    const radius = (item.score / 100) * maxRadius;
    return {
      x: center + Math.cos(angle) * radius,
      y: center + Math.sin(angle) * radius,
      lx: center + Math.cos(angle) * 132,
      ly: center + Math.sin(angle) * 132,
      ...item,
    };
  });

  const rings = [0.25, 0.5, 0.75, 1]
    .map((ratio) => `<circle cx="${center}" cy="${center}" r="${maxRadius * ratio}" fill="none" stroke="rgba(238,244,242,0.16)" />`)
    .join("");
  const spokes = points
    .map((point) => `<line x1="${center}" y1="${center}" x2="${point.lx}" y2="${point.ly}" stroke="rgba(238,244,242,0.12)" />`)
    .join("");
  const polygon = points.map((point) => `${point.x},${point.y}`).join(" ");
  const labels = points
    .map(
      (point) => `
        <g>
          <circle cx="${point.x}" cy="${point.y}" r="5" fill="${point.accent}" />
          <text x="${point.lx}" y="${point.ly}" text-anchor="middle" dominant-baseline="middle"
            fill="#dce7e4" font-size="13" font-weight="700">${point.name}</text>
        </g>
      `,
    )
    .join("");

  document.querySelector("#radar").innerHTML = `
    <svg viewBox="0 0 300 300" role="img" aria-label="AI 반도체 병목 강도 레이더">
      ${rings}
      ${spokes}
      <polygon points="${polygon}" fill="rgba(98,223,197,0.22)" stroke="#62dfc5" stroke-width="2" />
      ${labels}
    </svg>
  `;
}

function renderBottlenecks() {
  document.querySelector("#bottleneckList").innerHTML = bottlenecks
    .map(
      (item) => `
        <article class="bottleneck-item" style="--accent:${item.accent}">
          <h3>${item.name}<span>${item.score}</span></h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderPlayers() {
  document.querySelector("#playerGrid").innerHTML = players
    .map(
      (player) => `
        <article class="player-card" style="--accent:${player.accent}">
          <h3>${player.name}</h3>
          <strong>${player.role}</strong>
          <p>${player.focus}</p>
        </article>
      `,
    )
    .join("");
}

function renderLearningPath() {
  document.querySelector("#learningPath").innerHTML = learningPath
    .map(
      ([step, title, text]) => `
        <article class="learning-step">
          <span>${step}</span>
          <h3>${title}</h3>
          <p>${text}</p>
        </article>
      `,
    )
    .join("");
}

controls.forEach((button) => {
  button.addEventListener("click", () => applyFilter(button.dataset.filter));
});

document.querySelector("#eraCount").textContent = eras.length;
document.querySelector("#bottleneckCount").textContent = bottlenecks.length;
document.querySelector("#playerCount").textContent = `${players.length}+`;

renderTimeline();
renderRadar();
renderBottlenecks();
renderPlayers();
renderLearningPath();
applyFilter("all");
