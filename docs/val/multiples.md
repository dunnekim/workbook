# Multiples & Peer Log (Trading / Transaction Comps) (Valuation Core)

**Version:** v0.1  
**Last modified:** 2026-01-18  
**Owner:** Dunne  
**Status:** Draft  
**Applies to:** Valuation (Core), FDD interface (정상화·Net debt·희석 연계)  

**Related templates:**
- /templates/peer-universe/ (Peer universe — 후보 풀)
- /templates/peer-log/ (Inclusion/Exclusion log — 선정/배제 기록)
- /templates/multiple-comp-sheet/ (Multiples — EV/EBITDA, P/E, PBR 등)
- /templates/evidence-index/ (Evidence Index)

**Changelog (page-level):**
- 2026-01-18: v0.1 초안 생성(피어 선정 규칙/로그 체계/멀티플 산정 표준/방어 문장/체크리스트 포함)

**Open questions (max 5):**
1) 기본 멀티플 세트(비FS): EV/EBITDA, EV/EBIT, P/E 중 무엇을 “표준 1순위”로 고정할지  
2) LTM 기준을 “보고 LTM” vs “정상화 LTM(Adjusted)” 중 어느 쪽을 표준으로 둘지(원칙: 정상화 우선)  
3) Outlier 처리 규칙을 정량화(IQR/표준편차)할지 vs 사건 기반(근거 있을 때만 제외) 원칙 유지  
4) Transaction comps 표본이 빈약할 때 대체 접근(해외/인접 업종) 허용 범위  
5) FS는 PBR/ROE 프레임을 별도 페이지로 분리할지(원칙: 분리)  

---

## One-liner

멀티플의 본체는 숫자가 아니라 **피어 로그(왜 넣고 왜 뺐는지)**다. 로그가 없으면 멀티플은 결과 맞추기다.

---

## What this page locks

- Peer 선정의 목적: “비슷한 회사”가 아니라 **비슷한 경제성**을 찾는 것
- Peer universe → Screening → Inclusion/Exclusion log의 표준 절차
- 멀티플 산정 기준 수치(Reported vs Adjusted, LTM vs NTM) 연결 규칙
- Outlier 처리 원칙(근거 없으면 제외 금지)
- 멀티플이 EV→Equity→Price 브릿지로 들어가는 연결 구조

---

## Deliverables

- Peer universe 시트(후보 풀, 20~60개)
- Peer log 시트(선정/배제 사유, 라벨링)
- Multiple comp sheet(지표/기간/정상화/희석 일관화)
- Band selection 메모(1p): 중앙값/사분위/가중 평균 선택 논리
- Output pack(핵심 1~2장): 피어표 + 밴드 + implied EV/Equity
- Evidence index(출처/가정/조정 근거)

---

## Definitions

| 항목 | 정의 | 원칙 | 예외/주의 |
|------|------|------|----------|
| Trading comps | 상장사 시장가격 기반 비교 | 시장의 현재 기대 반영 | 시장 과열/침체 시 해석 주의 |
| Transaction comps | 유사 M&A 거래 기반 비교 | 컨트롤 프리미엄/사이클 반영 | 표본 적을 때 왜곡 |
| Peer universe | 후보 풀(가능한 한 넓게) | 넓게 모으고 로그로 줄인다 | “처음부터 몇 개만” 금지 |
| Inclusion/Exclusion log | 포함/배제 사유 기록 | 문서의 핵심 | 결론 맞추기 방지 장치 |
| Reported vs Adjusted | 보고 수치 vs 정상화 수치 | 입력 정의 일관성이 핵심 | 섞이면 멀티플 붕괴 |

---

## Peer selection framework (표준 스크리닝 6축)

피어는 ‘업종명’이 아니라 아래 6축의 유사성으로 판단한다.

1) **Revenue model**: 수익구조(구독/거래/프로젝트 등)  
2) **Unit economics**: 마진 구조, 고정비/변동비 성격  
3) **Growth**: 성장률 레벨/변동성  
4) **Risk**: 레버리지, 고객집중, 규제/소송 등  
5) **Scale**: 규모/운영 레버리지  
6) **Accounting/metrics comparability**: EBITDA 정의, IFRS/GAAP 차이  

---

## Method (12 steps)

### Step 1. Universe를 넓게 만든다(20~60개)
국내/해외 포함 가능(혼합 시 해외 프리미엄/디스카운트 논리 필요).

### Step 2. 하드 필터(비교 불가능 제거)
경제성이 전혀 다른 모델은 제외(근거 필수).

### Step 3. 소프트 스코어링(가중치)
6축을 1~3점으로 스코어링하고 상위권을 우선 후보로 둔다.

### Step 4. Peer log 작성(여기서부터가 본체)
포함/배제는 반드시 **한 문장**으로 쓴다.  
예: “성장률은 유사하나, 수익인식이 프로젝트형이라 NTM 비교가 어려워 제외”

### Step 5. 멀티플 입력 수치 정의 통일
- EV/EBITDA라면 EBITDA 정의(Reported/Adjusted) 고정  
- LTM/NTM 혼용 금지(혼용 시 표를 분리)

### Step 6. EV 구성요소 통일(브릿지 룰)
Net debt/희석/비영업 항목 처리 기준이 comps와 DCF/브릿지와 일치해야 한다.

### Step 7. 데이터 소스 잠금
시총/주가/주식수/재무지표 출처를 고정(기준일 포함).

### Step 8. Outlier 처리(사건 기반 원칙)
값이 크/작다고 제외 금지.  
사건 근거(구조적 변화/one-off/회계이슈)가 있을 때만 제외 또는 별도 표기.

### Step 9. 밴드 선택(중앙값/사분위/가중)
왜 중앙값인지, 왜 사분위인지 5줄로 고정.

### Step 10. Implied value 산출(Bridge 연결)
멀티플 → implied EV → net debt → implied equity → per share까지 연결.

### Step 11. Sanity check
implied margin/성장률이 타겟의 드라이버와 모순되지 않는지 확인.

### Step 12. Output pack 1~2장으로 압축
피어표(10~15개), 멀티플 밴드, implied value range.

---

## Evidence standard

- 피어 선정 근거(사업설명, 제품/수익모델, 세그먼트 정보)
- 재무지표 출처(공시/데이터벤더/IR) + 기준일
- Adjusted 지표 사용 시: 조정 근거(가능하면 공시/주석 기반)
- EV 구성요소 정의(현금/부채/희석) 일관성 근거
- Outlier 사건 근거(거래, 규제, 회계이슈, one-off)

---

## Copy-ready wording

> “Trading comps는 초기 후보군(universe)을 넓게 구성한 후, 수익구조/마진/성장/리스크/규모/회계 비교가능성 관점에서 스크리닝하였으며, 포함/배제 사유는 peer log로 문서화하였습니다.”

> “멀티플 산정에 사용한 재무지표는 LTM(또는 NTM) 기준으로 통일하였고, Reported vs Adjusted 정의를 고정하여 혼용으로 인한 왜곡을 방지하였습니다.”

> “Outlier는 값의 크고 작음이 아니라 사건 기반(구조적 변화, 일회성 요인, 회계이슈 등) 근거가 확인되는 경우에 한하여 별도 처리하였습니다.”

> “선정된 피어 집합에서 멀티플 밴드(중앙값/사분위)를 도출하고, 이를 implied EV/Equity value로 연결하여 가치 범위를 제시하였습니다.”

---

## Red flags

- 피어 5개 미만인데 밴드를 정답처럼 제시
- peer log 없이 “비슷해 보여서” 선정
- LTM/NTM 혼용, Reported/Adjusted 혼용
- EV 구성요소(현금/부채/희석) 정의가 comps마다 다름
- outlier를 근거 없이 제외
- 해외 피어 사용 시 국가/통화/리스크 차이를 설명 못 함
- implied value가 드라이버(성장/마진)와 모순

---

## Checklist (제출 전 18)

- universe가 충분히 넓나(20개+)
- peer log에 포함/배제 사유가 한 문장으로 적혔나
- 6축(수익/마진/성장/리스크/규모/회계) 검토를 했나
- 데이터 소스와 기준일이 고정됐나
- LTM/NTM 기준이 통일됐나
- Reported/Adjusted 정의가 고정됐나
- EV 구성요소 정의가 DCF/브릿지와 일치하나
- 희석 처리 기준이 통일됐나
- outlier 처리 근거가 문서로 있나
- 밴드 선택 논리가 5줄로 설명되나
- implied EV→Equity→Price로 연결됐나
- 결과 범위가 상식적이며 설명 가능한가
- 민감도(피어 제외/추가)를 확인했나
- 해외 피어 사용 시 리스크/통화/국가 차이를 설명했나
- transaction comps가 있으면 표본/조건(컨트롤 프리미엄 등)을 설명했나
- output pack이 1~2장으로 압축됐나
- evidence index 링크가 걸렸나
- Open questions가 5개 이하인가

---

## Related pages / templates

- /handbook/ev-to-equity-bridge/
- /handbook/qoe-normalization/
- (다음 제작) /handbook/dcf-fcff/
- (다음 제작) /handbook/dcf-fcfe/
- /templates/peer-universe/
- /templates/peer-log/
- /templates/multiple-comp-sheet/

---

## References

- 멀티플 해석/피어 선정 원칙은 McKinsey/Damodaran 관련 장을 **장·페이지 안내로만** 연결 권장  
- 원문 표/도표 전재 금지, 짧은 인용만(필요 시)
