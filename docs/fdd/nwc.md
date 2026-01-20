# NWC Peg & Seasonality (FDD / SPA Interface)

**Version:** v0.1  
**Last modified:** 2026-01-18  
**Owner:** Dunne  
**Status:** Draft  
**Applies to:** FDD, Valuation(부분), SPA price adjustment  

**Related templates:**
- /templates/nwc-schedule/ (NWC schedule — 계정 범위/산식/리콘)
- /templates/nwc-peg-builder/ (Peg 산정 — 기간/평균/트림 규칙)
- /templates/evidence-index/ (Evidence Index)

**Changelog (page-level):**
- 2026-01-18: v0.1 초안 생성(정의/범위/peg 산정 규칙/계절성 처리/문장 템플릿/체크리스트 포함)

**Open questions (max 5):**
1) Peg 기준 기간을 기본 “12개월 평균”으로 고정할지, “최근 3~6개월 가중” 옵션을 표준화할지  
2) 성장 국면에서 peg 정상화 시 허용할 조정 원칙(성장률 반영 vs 단순 평균)  
3) carve-out와 계절성 변동의 경계 규칙 확정 필요  
4) factoring/유동화가 있을 때 AR/AP 실질 반영 기준  
5) FS에서 NWC 개념 적용 범위(원칙: 비FS 기준)

---

## One-liner

NWC peg는 ‘평균 숫자’가 아니라, 클로징 직전 가격 분쟁을 막기 위한 **계정 범위 + 정상수준**의 합의다.

---

## What this page locks

- NWC의 목적: 가격조정 메커니즘에서 **운전자본 정상수준** 고정
- NWC 범위(포함/제외 계정) 규칙
- Net debt와의 경계(중복/누락 방지)
- Peg 산정 규칙(기간/평균/트림/계절성)
- Evidence 기준(리콘 가능성, 계정 정의 문서화)

---

## Deliverables

- NWC definition sheet(1~2p): 포함/제외 + 경계(Net debt와)
- NWC schedule(엑셀): 월별/분기별 추이 + 리콘
- Peg builder(엑셀): 기간 선택, 평균/가중/트림, 계절성 처리
- Seasonality memo(1p): 계절 패턴과 peg 선택 논리
- Copy-ready wording(보고서/메일용 5~10문장)
- Evidence index 링크

---

## Definitions

| 항목 | 정의 | 원칙 | 예외/주의 |
|------|------|--------|------------|
| Working Capital (WC) | 통상 영업활동에서 발생하는 유동자산/유동부채 | 영업 정상 수준 자금 소요 | 투자/재무 성격 제외 |
| Net Working Capital (NWC) | (WC 자산) − (WC 부채) | price adjustment용 지표 | 산업별 정의 차이 큼 |
| NWC Peg | 클로징 조정 기준이 되는 정상 NWC 수준 | 분쟁 방지 장치 | 성장/계절성 고려 |
| Seasonality | WC 구성요소가 계절적으로 변하는 패턴 | peg 산정 필수 요소 | 단발성 이벤트와 구분 |
| Carve-out | 거래/일회성 이벤트로 인한 WC 왜곡 제거 | 정상화 목적 | 근거 없으면 금지 |

---

## NWC 범위(포함/제외) — 표준 프레임

### 기본 포함(예시)

- 매출채권(AR), 미수금(영업성)
- 재고자산(Inventory)
- 선급비용(영업 관련)
- 매입채무(AP), 미지급금(영업성), 선수금(영업성)

### 기본 제외(예시)

- 현금 및 현금성(원칙적으로 NWC에서 제외)
- 이자성 차입 및 미지급이자(= Net debt)
- 법인세 관련(정책 필요)
- 배당 관련 항목
- 비영업성 관계사 대여/차입, 장기성 항목

### Net debt와의 경계(핵심 룰)

- “통상 정산”이면 NWC
- “자금조달 실질(만기 연장/이자/롤오버)”이면 debt-like(= Net debt)
- 동일 항목의 NWC/Net debt 중복 반영 금지

---

## Method (12 steps)

### Step 1. NWC 정의서 먼저 작성  
계정 범위를 먼저 잠근다(숫자부터 만들면 분쟁이 남는다).

### Step 2. 월별/분기별 NWC schedule 구성  
최소 12개월(권장 24개월)로 추이 구성.

### Step 3. 리콘 고정  
TB/재무제표와 schedule 완전 reconcile.

### Step 4. 계절성 패턴 식별  
매출/매입/재고 회전, DSO/DPO/DIO 병행 분석.

### Step 5. 이벤트성 왜곡 분리  
일회성 발주, 재고 비축, 대금 지연 등 carve-out 후보 식별.

### Step 6. Peg 후보 3종 동시 계산  
(A) 최근 12개월 평균  
(B) 최근 3~6개월 평균  
(C) 동일 월/분기 기준 평균

### Step 7. 트림 규칙  
극단 값은 근거 기반 트림(이벤트/비정상 설명 필요).

### Step 8. 성장/역성장 조정(필요 시)  
미래 예측이 아닌 정상수준을 공정하게 잡는 목적에 한해 제한 사용.

### Step 9. peg 선택 논리 문서화  
A/B/C 중 선택 이유를 5줄로 고정(Seasonality memo).

### Step 10. SPA 조정 메커니즘 연결  
정의서 + 계산 예시까지 연결.

### Step 11. Net debt와 중복/누락 점검  
debt-like 성격 미지급이 NWC에 섞이지 않았는지 확인.

### Step 12. Sensitivity(협상 대비)  
peg ±X가 가격에 미치는 영향 계산.

---

## Evidence standard

- 월별 AR/AP/재고 명세(aging, inventory listing)
- DSO/DPO/DIO 계산 근거
- 이벤트성 왜곡 근거(계약, 발주서, 출고/입고 기록)
- factoring/유동화 계약 및 회계처리
- NWC 정의서와 TB 리콘 워크페이퍼

---

## Copy-ready wording

> “NWC peg는 클로징 가격조정 메커니즘의 기준이 되는 정상 운전자본 수준으로, 계정 범위를 definition sheet로 먼저 고정한 후 산정하였습니다.”

> “peg 산정은 최근 12개월 평균, 최근 3~6개월 평균, 동일 월/분기 평균 등 복수 후보를 산출하고, 계절성 및 일회성 이벤트 영향을 근거 기반으로 검토하여 최종안을 선택하였습니다.”

> “계절성 검토를 위해 월별 NWC 추이와 함께 DSO/DPO/DIO를 병행 분석하였으며, 특정 이벤트 왜곡은 근거가 확인되는 범위 내에서 제한적으로 carve-out 처리하였습니다.”

> “NWC와 Net debt의 경계는 통상 정산 여부 및 자금조달 실질을 기준으로 구분하여 중복 반영을 방지하였습니다.”

> “최종 peg는 SPA 조정식에 직접 연결될 수 있도록 정의서 및 계산 예시를 함께 제시하였습니다.”

---

## Red flags

- NWC 범위 정의 없이 평균부터 산출
- Net debt 항목이 NWC에 섞임
- 계절성 명백한데 단순 평균만 제시
- 근거 없는 outlier 제거
- factoring 매각/차입 실질 오인
- peg 선택 이유가 피상적
- peg 변경의 가격 영향 계산 없음

---

## Checklist (제출 전 18)

- NWC definition sheet 존재
- TB/재무제표와 schedule reconcile
- 최소 12개월(권장 24개월) 추이 존재
- DSO/DPO/DIO 계산 완료
- 계절성 설명 가능
- 이벤트성 왜곡 식별
- peg 후보 3종 산출
- 트림 근거 존재
- 성장/역성장 조정 필요 시만 사용
- peg 선택 논리 문서화
- SPA 조정식 연결
- Net debt 중복/누락 점검
- factoring 계약/회계 확인
- 관계사 항목 영업성 구분
- 법인세/배당 처리 정책 명시
- peg 민감도 계산
- Evidence index 링크 존재
- Open questions 5개 이하

---

## Related pages / templates

- /handbook/qoe-normalization/
- /handbook/net-debt-definition/
- (다음 제작) /handbook/ev-to-equity-bridge/
- /templates/nwc-schedule/
- /templates/nwc-peg-builder/
- /templates/evidence-index/

---

## References

- 합법 공개 페이지로만 연결 권장(출판사/저자/공식 사이트)  
- 본문은 자체 문장 요약 + 장·페이지 안내만 제공  
- 표/도표는 직접 재작성 원칙
