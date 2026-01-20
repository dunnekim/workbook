# Handbook Page — DDM (Conditional) (Valuation / FS Add-on)

**Version:** v0.1  
**Last modified:** 2026-01-18  
**Owner:** Dunne  
**Status:** Draft  
**Applies to:** Valuation (Conditional), FS Add-on(주), Non-FS(예외)

## Related templates
- /templates/ddm-model/ (DDM — payout 기반)
- /templates/dividend-policy-pack/ (배당정책/규제/자본정책 근거)
- /templates/cost-of-equity-pack/ (CoE 산정)
- /templates/terminal-pack/ (Terminal — Gordon)
- /templates/sensitivity-2x2/ (CoE×g)
- /templates/evidence-index/ (Evidence Index)

## Changelog (page-level)
- 2026-01-18: v0.1 초안 생성(DDM 게이트/구조/증빙 기준/방어 문장/체크리스트 포함)

## Open questions (max 5)
1) “DDM 사용 게이트”를 더 엄격히 할지(예: 최소 3년 배당 정책 일관성 요구)  
2) 규제/자본정책이 배당을 제한하는 FS에서 payout 전망을 어떤 형태로 표준화할지(목표 CET1 등)  
3) 비정상 시기(배당 중단/감배)에서 정상화 시점/속도를 어떻게 문서화할지  
4) 비FS에서 DDM을 허용하는 예외 케이스(인프라/REIT 유사 등)를 별도 부록으로 둘지  
5) g 상한(장기 명목 성장률 이하)을 국가별로 강제할지  

---

## One-liner

DDM은 ‘배당이 예측 가능한 회사’에서만 성립한다. 배당이 전략변수면 DDM은 평가가 아니라 희망표다.

---

## What this page locks

- DDM을 쓰는 조건(게이트)
- 배당/자본정책을 모델에 넣는 방식(특히 FS)
- CoE와 g의 정합성(터미널 검증)
- DDM 결과를 FCFE/FCFF와 크로스체크하는 규칙

---

## DDM 사용 게이트 (필수)

아래 3개 중 **2개 이상**을 만족해야 DDM을 “본문 방법”으로 채택 가능. 아니면 **보조로만 제시**.

- 배당정책이 안정적(과거 관측 + 문서 근거)
- 규제/자본정책이 배당 경로를 설명 가능(목표 자본비율/제약 명시)
- 배당이 가치의 핵심 전달 수단(예: 성숙 산업/자본정책 중심)

게이트 미달 시: **FCFE/FCFF가 본문**, DDM은 sanity check로만.

---

## Standard DDM structure

**Equity Value**  
= Σ (Dividend_t / (1+CoE)^t)  
+ Terminal Dividend / (CoE − g) / (1+CoE)^T

### FS에서의 배당 모델링(정책 함수화)

Dividend_t = Payout_t × NI_t

Payout_t는 임의가 아니라 아래를 반영:

- (a) 목표 자본비율 유지 후 잉여자본 분배  
- (b) 규제상 배당 제한 조건 반영  
- (c) 과거 payout 정상 수준으로 수렴

---

## Method (10 steps)

1) **게이트 통과 여부 확인**(미달 시 보조로만)  
2) **NI(Adjusted) 전망 고정**(QoE/정상화 일관)  
3) **배당정책 근거 수집**(이사회, 공시, 과거 payout, 규제)  
4) **payout 함수 설계**(FS면 자본정책 기반)  
5) **Dividend 전망**(명시기간)  
6) **CoE 산정**(근거 pack)  
7) **Terminal:** g 기반 Gordon(기본)  
8) **Sanity check:** CoE>g, 터미널 비중, implied payout  
9) **FCFE/FCFF와 크로스체크**(범위/괴리 설명)  
10) **민감도(CoE×g)**

---

## Evidence standard

- 배당정책 공시/IR/이사회 결의(가능한 범위)
- 과거 배당/자사주 매입 기록(주주환원 정책)
- 규제/자본비율 제한(특히 FS)
- NI 전망 근거(Adjusted 연결)
- CoE 입력 출처/기준일

---

## Copy-ready wording

> “DDM은 배당정책이 비교적 안정적이며 배당 경로를 근거 기반으로 설명할 수 있는 경우에 한하여 적용하였고, 배당 전망은 과거 정책 및 (필요 시) 자본정책/규제 제약을 반영하여 산정하였습니다.”

> “할인율은 자기자본비용(CoE)으로 산정하였으며, 터미널은 Gordon 방식으로 산출하고 CoE>g 및 implied payout 정합성 점검을 수행하였습니다.”

> “DDM 결과는 FCFE/FCFF 기반 결과와 교차 검증하여, 방법론별 차이가 발생하는 경우 그 원인을 배당정책/자본정책 관점에서 설명하였습니다.”

---

## Checklist (제출 전 15)

- DDM 게이트(3개 중 2개) 충족 여부 기록
- Adjusted NI 일관성 확보
- 배당정책 근거(문서/공시) 확보
- FS면 payout이 자본정책 함수로 설계됨
- CoE 입력 출처/기준일 명시
- CoE>g 충족
- g 상한 논리 문서화
- 터미널 비중 설명 가능
- 민감도(CoE×g) 제시
- FCFE/FCFF와 크로스체크 수행
- 결과 괴리 시 원인 설명
- evidence index 링크
- 단위/라운딩 일관
- Open questions ≤ 5
- 본문 채택 vs 보조 제시 여부 명시
