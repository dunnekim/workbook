# DCF (FCFF) (Valuation Core)

**Version:** v0.1  
**Last modified:** 2026-01-18  
**Owner:** Dunne  
**Status:** Draft  
**Applies to:** Valuation (Core), FDD interface (QoE/NWC/Net debt 연결)  

**Related templates:**
- /templates/dcf-fcff-model/ (FCFF model — driver 기반)
- /templates/wacc-pack/ (WACC 산정 + 근거)
- /templates/terminal-pack/ (Terminal value — Gordon/Exit multiple)
- /templates/sensitivity-2x2/ (2x2 민감도)
- /templates/evidence-index/ (Evidence Index)

**Changelog (page-level):**
- 2026-01-18: v0.1 초안 생성(구조/드라이버/증빙 기준/방어 문장/체크리스트 포함)

**Open questions (max 5):**
1) 세후 영구성장률(g) 상한을 “장기 명목 GDP 이하”로 문서에 고정할지(국가별)  
2) 터미널을 Gordon vs Exit multiple 중 무엇을 기본으로 둘지(원칙: 둘 다 산출, 하나를 본문 채택)  
3) 재투자(캡엑스/감가/운전자본) 정상화 기준(유지 vs 성장 CAPEX 분리 정책)  
4) 중기 전망 부재 시 driver 최소 입력(업종별)  
5) WACC 산정에서 CRP/사이즈 프리미엄 등 추가요소 사용 조건의 잠금 수준  

---

## One-liner

FCFF DCF의 본체는 수식이 아니라 **(i) 드라이버, (ii) 재투자, (iii) 터미널 정합성의 방어력**이다.

---

## What this page locks

- FCFF 정의 및 모델 구조(Driver → FCFF → WACC 할인 → TV)
- QoE(Adjusted)와 DCF 입력의 연결 규칙
- 재투자(캡엑스/감가/ΔNWC)의 정상화 원칙
- 터미널(성장률/Exit multiple) 정합성 체크
- WACC 근거 패키지(감사/내부리뷰 방어용)

---

## Deliverables

- DCF(FCFF) 모델(driver 기반)
- Assumptions table(핵심 가정 1장)
- WACC pack(구성요소 + 출처 + 계산)
- Terminal pack(Gordon/Exit multiple 동시 산출 + 선택 논리)
- Sensitivity 2x2(핵심 변수 2개)
- Output pack 1~2장(EV range + sanity check)
- Evidence index

---

## Definitions

| 항목 | 정의 | 원칙 | 예외/주의 |
|------|------|------|----------|
| FCFF | NOPAT + D&A − Capex − ΔNWC | 기업가치(EV) 산출 | 정의 혼용 금지 |
| NOPAT | EBIT × (1−Tax) | 세후 영업이익 | 비경상 항목 처리 주의 |
| ΔNWC | NWC_t − NWC_{t−1} | 운전자본 증감 | NWC 정의서와 일치 |
| WACC | 가중평균자본비용 | 할인율 | 구성요소 근거 필수 |
| Terminal Value | 명시기간 이후 잔존가치 | TV가 결과를 지배 | g/Exit 정합성 필수 |

---

## Method (12 steps)

### Step 1. 입력 기준(Adjusted) 고정
LTM/기준연도는 QoE(Adjusted)와 연결한다(혼용 금지).

### Step 2. 드라이버 설계(최소 3개)
- 매출(성장률)
- 마진(EBIT/EBITDA)
- 재투자(캡엑스/감가/ΔNWC)

업종별 driver가 더 필요하면 추가하되 “핵심 3개”는 유지.

### Step 3. 명시기간(통상 5년) 전망
관리계획이 있으면 이를 기준으로, 없으면 과거 추세+시장/피어 정합성으로 구성.

### Step 4. EBIT→NOPAT
세율은 “법정/유효/정상화” 중 무엇을 쓰는지 문서화.

### Step 5. 재투자(가치의 핵심)
- Capex를 유지/성장으로 나눌지 정책 결정  
- 없으면 최소한 ‘감가 대비 capex’ sanity check  
- ΔNWC는 NWC 정의서와 동일 범위로 계산

### Step 6. FCFF 산출
수식보다 **입력 정의의 일관성**이 본체.

### Step 7. 할인율(WACC) 산정
Rf/MRP/베타/부채비용/세율/목표자본구조를 근거와 함께 고정.

### Step 8. Terminal value(둘 다 산출)
- Gordon: g는 장기 성장 가정과 정합성 체크  
- Exit multiple: 멀티플 페이지와 논리 연결

### Step 9. EV 산출 및 sanity check
TV 비중, implied multiple(예: EV/EBITDA), ROIC↔g 정합성 점검.

### Step 10. EV→Equity 브릿지 연결
Net debt는 FDD SoT, trapped cash는 별도 라인.

### Step 11. 민감도(2x2)
기본: (WACC, g) 또는 (WACC, Exit multiple)  
보조: (마진, 성장)

### Step 12. 결과 문장화
결론(범위) + 핵심 가정 3개 + 한계(리스크) 3줄로 고정.

---

## Evidence standard

- 과거 실적(재무제표/TB) + QoE 정상화 근거
- 사업계획/예산/수주/계약(가능한 경우)
- 시장 성장/가격/수요 근거(공개자료 요약 + 링크)
- Capex 계획/유지보수 필요성(자산 구성, 감가정책)
- NWC 회전지표(DSO/DPO/DIO) 및 계절성 근거
- WACC 입력 출처(Rf/ERP/β/스프레드) 및 기준일
- 터미널 근거(g 상한 논리 또는 exit multiple 피어 연결)

---

## Copy-ready wording

> “본 DCF는 FCFF 기반으로 EV를 산출하였으며, 입력 기준 재무는 QoE 정상화(Adjusted) 결과와 일관되게 연결하였습니다.”

> “FCFF는 NOPAT에 감가상각을 가산하고, Capex 및 ΔNWC를 차감하여 산출하였으며, Capex/ΔNWC는 과거 회전지표 및 사업계획과의 정합성 관점에서 검토하였습니다.”

> “할인율은 WACC로 산정하였고, 각 구성요소(Rf, MRP, β, CoD, 목표 자본구조)는 출처 및 기준일을 명시하여 재현 가능하도록 제시하였습니다.”

> “터미널 가치는 Gordon 및 exit multiple 방식을 모두 산출하고, implied multiple 및 장기 성장 정합성 점검을 통해 본문 채택 가정을 선정하였습니다.”

> “산출 EV는 net debt(단일 SoT) 및 trapped cash 조정을 반영하여 equity value로 전환하였고, 주요 가정에 대한 민감도 분석 결과를 함께 제시하였습니다.”

---

## Red flags

- Adjusted 입력을 쓰면서 DCF 내부는 Reported 기반(혼용)
- Capex를 0 또는 감가만큼 자동 가정
- ΔNWC 정의 불일치/계절성 무시
- TV 비중 과도(예: 70%+)인데 설명 부재
- g가 장기 경제성장률 상회
- WACC 구성요소 출처/기준일 없음
- implied multiple이 피어와 괴리인데 해석 부재

---

## Checklist (제출 전 20)

- QoE(Adjusted)와 DCF 입력이 일관되나
- 명시기간 가정이 드라이버로 연결되나
- 세율 기준이 문서화됐나
- Capex 가정이 업종과 정합적인가
- 감가 정책과 capex 관계 sanity check 됐나
- ΔNWC가 정의서와 동일 범위인가
- 회전지표로 NWC 설명 가능한가
- FCFF 산식이 정의와 일치하나
- WACC 각 요소의 출처/기준일 있는가
- 목표 자본구조 가정이 논리적인가
- 터미널을 Gordon/Exit 모두 산출했나
- 선택 논리가 5줄로 고정됐나
- TV 비중 설명 가능한가
- implied multiple sanity check 있는가
- EV→Equity 브릿지가 net debt SoT와 연결됐나
- trapped cash 별도 처리됐나
- 민감도(2x2)가 핵심 변수로 구성됐나
- 결과 범위가 상식/피어와 정합적인가
- evidence index 링크가 핵심 항목에 걸렸나
- Open questions가 5개 이하인가

---

## Related pages / templates

- /handbook/qoe-normalization/
- /handbook/nwc-peg/
- /handbook/net-debt-definition/
- /handbook/ev-to-equity-bridge/
- /handbook/multiples-peer-log/
- (다음 제작) /handbook/dcf-fcfe/
- (조건부) /handbook/ddm/
- /templates/dcf-fcff-model/
- /templates/wacc-pack/
- /templates/terminal-pack/

---

## References

McKinsey/Damodaran은 “DCF 구조, 터미널, 할인율” 관련을 장·페이지 안내로만 연결  
(표/도표 전재 금지, 짧은 인용만)
