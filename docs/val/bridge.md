# EV → Equity → Price Bridge (Fully Diluted) (Valuation Core)

**Version:** v0.1  
**Last modified:** 2026-01-18  
**Owner:** Dunne  
**Status:** Draft  
**Applies to:** Valuation (Core), FDD interface (Net debt/NWC 연결)  

**Related templates:**
- /templates/ev-equity-bridge/ (EV→Equity→Price bridge)
- /templates/dilution-schedule/ (FD shares / 옵션·전환 처리)
- /templates/evidence-index/ (Evidence Index)

**Changelog (page-level):**
- 2026-01-18: v0.1 초안 생성(브릿지 표준 구조/희석 처리 원칙/증빙 기준/문장 템플릿/체크리스트 포함)

**Open questions (max 5):**
1) RCPS/CB “자본 vs 부채” 분류가 valuation 브릿지와 어떻게 연결되는지(계약별 정책 필요)  
2) 옵션(ESO) 희석 반영 기본을 TSM로 고정할지, 현금결제/환매 등 예외를 어떻게 둘지  
3) cash-like vs trapped cash 처리 결과를 EV와 Equity 중 어디에 반영할지 표준화  
4) NWC adjustment(peg 차이)의 Equity 반영(Closing adjustment 표현)을 어느 수준까지 브릿지에 포함할지  
5) FS에서 “Net debt 개념이 약한 케이스”를 별도 예외 페이지로 뺄지  

---

## One-liner

딜에서 가격은 EV가 아니라, **정의된 Net debt + 희석(FD shares) + 조정항목**이 만드는 Equity bridge로 결정된다.

---

## What this page locks

- EV→Equity→Price의 표준 계산 경로
- Net debt 입력의 단일화(FDD 정의서/스케줄과 직접 연결)
- Fully diluted share count 산정 원칙(옵션/전환/조건부 발행)
- cash-like/debt-like 및 기타 조정항목의 처리 위치(브릿지 반영 위치)
- 증빙 최소 요건(계약·주석·주식수 산정 근거)

---

## Deliverables

- EV→Equity→Price bridge 시트(단일 SoT)
- Net debt 입력 링크(FDD net debt schedule 결과를 단일 셀로 연결)
- Dilution schedule(옵션/전환/조건부 발행)
- Price per share output pack(주당가치, 범위, 민감도)
- Evidence index(주식수/계약/주석/가정 근거)

---

## Definitions

| 항목 | 정의 | 원칙 | 예외/주의 |
|------|------|------|----------|
| Enterprise Value (EV) | 영업가치(Operating value) | DCF/멀티플 산출의 기본 단위 | Non-operating 조정 필요 시 별도 |
| Equity Value | EV에서 Net debt 등 비영업/재무 항목을 반영한 주주가치 | 브릿지의 목적 | 정의가 흔들리면 값이 흔들림 |
| Net debt | cash-like 차감 후 debt-like 순액 | FDD 정의서가 SoT | FS 예외는 별도 |
| Fully Diluted Shares | 희석을 반영한 주식수(계약/조건 기반) | 기본주식수 + 희석효과 | 현금결제/조건부는 예외 |
| Price per share | Equity value ÷ FD shares | 협상 단위 | 총액 제시 케이스 주의 |

---

## Standard bridge structure (표준 형태)

브릿지는 아래 형태로 “고정”한다(표준 출력 레이아웃).

### EV → Equity

- EV  
- ± Non-operating adjustments (필요 시: 투자자산/비영업 자산, 비영업 부채)  
- – Net debt (FDD SoT)  
- ± 기타 거래 조정(locked-box, NWC peg 차이 등 필요 시 별도 표시)  
- = **Equity Value**

### Equity → Price

- Equity Value  
- ÷ Fully Diluted Shares  
- = **Price per share**

**원칙:** “조정이 어디 들어갔는지”가 한 눈에 보여야 한다. 숨기면 분쟁이 난다.

---

## Method (10 steps)

### Step 1. EV 산출 근거 고정(DCF/멀티플 출력 연결)
EV는 “산출 탭”에서 직접 링크(하드코딩 금지).

### Step 2. Net debt SoT 연결
Net debt는 FDD schedule 결과(단일 셀)만 참조한다.

### Step 3. Non-operating 조정 필요 여부 판단
투자자산/비영업 부채 등 EV에 포함되지 않은 항목이 크면 별도 라인으로 분리.

### Step 4. Trapped cash 처리
cash-like로 차감할지, 별도 조정으로 둘지 정책을 문서화(Open question 처리 후 잠금).

### Step 5. Dilution universe 수집
주석(자본), 계약(ESO/RCPS/CB/PSU), cap table, 정관을 모은다.

### Step 6. 희석 반영 방식 결정(기본/예외)
- 기본: 옵션 = TSM(행사대금 유입→자기주식 매입 가정)
- 전환증권: 계약상 전환가/조건/희석 시점 기준 반영
- 현금결제/환매권/강제상환 등은 **FD shares가 아닌 debt-like/조정항목**으로 갈 수 있음(정책 필요)

### Step 7. 조건부 발행(earn-out, RSU/PSU 등) 처리
조건이 불명확하면 범위로 제시(민감도에 포함).

### Step 8. Equity value와 FD shares 결합
주당가치 산출, 라운딩/단위 일관화.

### Step 9. Sanity checks
- FD shares가 기본 주식수 대비 과도하게 튀는지
- 전환 시점/가격이 현실적인지
- Net debt/희석 항목의 중복 계상 여부

### Step 10. Output pack 생성
(i) Equity bridge 표, (ii) FD shares 표, (iii) 핵심 민감도(2×2) 1장

---

## Evidence standard

- cap table(기본주식수, 주요 주주)
- 주식/전환/옵션 관련 계약서(행사/전환 조건)
- 재무제표 주석(자본, 주식기준보상, 전환증권, 잠재주식)
- Net debt schedule(FDD SoT)
- locked-box/leakage 또는 NWC peg 관련 합의 문서(있는 경우)

---

## Copy-ready wording

> “본 평가는 EV(영업가치)를 산출한 후, FDD에서 확정한 net debt 정의 및 스케줄을 단일 입력으로 연결하여 equity value로 전환하는 bridge를 제시하였습니다.”

> “희석주식수(Fully diluted shares)는 주석 및 계약서에 근거하여 옵션/전환/조건부 발행 가능성을 반영하였으며, 반영 방식(예: 옵션의 TSM 적용, 전환증권의 계약상 조건 반영)을 별도 스케줄로 명시하였습니다.”

> “non-operating 항목 및 trapped cash 등 EV와 equity 간 조정이 필요한 항목은 브릿지에서 별도 라인으로 분리하여 조정 위치와 영향을 명확히 하였습니다.”

> “상기 bridge 구조를 통해 EV, net debt, 희석 가정이 각각 주당가치에 미치는 영향을 추적 가능하도록 구성하였습니다.”

---

## Red flags

- Net debt를 브릿지에서 수기 입력(SoT 붕괴)
- 옵션/전환을 주식수로 넣어놓고 동시에 debt-like로도 포함(중복)
- trapped cash를 ‘현금’으로 단순 차감(실질 제한 무시)
- 조건부 발행(earn-out/PSU)을
