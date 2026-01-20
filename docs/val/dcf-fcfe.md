# Decision Pack v0.1 — FCFE 필수 정책(혼용 방지)

## D. FCFE 사용 조건(게이트)

FCFE는 **레버리지 정책이 안정적이거나, 최소한 명시적으로 모델링 가능한 경우**에만 사용한다.

아래 중 하나라도 불명확하면 기본은 **FCFF로 후퇴**한다.

- 목표 자본구조/차입정책이 불명확
- 순차입(ΔDebt) 경로를 설명할 근거/제약(약정, 규제, 재무정책)이 없음
- 이자율/스프레드/차환 가정이 매년 임의로 바뀜

## E. FCFE 산식 고정(표준)

### 표준 FCFE

- **FCFE = NI + D&A − Capex − ΔNWC + Net Borrowing**
- **Net Borrowing = New Debt − Debt Repayment**

“부채를 목표 레버리지에 맞춘다”면, 그 **레버리지 규칙을 계산식으로 고정**한다(말로만 쓰지 않음).

---

# DCF (FCFE) (Valuation Core)

**Version:** v0.1  
**Last modified:** 2026-01-18  
**Owner:** Dunne  
**Status:** Draft  
**Applies to:** Valuation (Core), FS Add-on(부분), FDD interface(정상화 연결)  

**Related templates:**
- /templates/dcf-fcfe-model/ (FCFE model — leverage policy 포함)
- /templates/cost-of-equity-pack/ (CoE 산정 + 근거)
- /templates/debt-policy-pack/ (차입/차환/목표레버리지 규칙)
- /templates/terminal-pack/ (Terminal value — g 또는 P/E/배당 기반)
- /templates/sensitivity-2x2/ (2x2 민감도)
- /templates/evidence-index/ (Evidence Index)

**Changelog (page-level):**
- 2026-01-18: v0.1 초안 생성(FCFE 구조/차입정책/증빙 기준/방어 문장/체크리스트 포함)

**Open questions (max 5):**
1) FCFE 터미널을 g 기반으로 둘지, P/E 기반 exit로 둘지(원칙: 둘 다 산출, 하나 채택)  
2) 목표 레버리지로 Net borrowing 자동 산출 시 레버리지 정의(Net debt/EBITDA vs Debt/Equity 등) 표준화  
3) 이자비용 전망을 스프레드 고정으로 할지, 신용도/레버리지 연동으로 할지(데이터 가용성)  
4) FCFE에서 비경상/일회성(조정 NI) 처리 범위를 QoE와 동일하게 강제할지  
5) FS에서 FCFE 사용 시(은행/저축은행 등) 순차입이 영업 변수로 바뀌는 구간을 별도 챕터로 분리할지  

---

## One-liner

FCFE는 “현금흐름”이 아니라 **차입정책을 가정하는 모델**이다. 차입정책이 없으면 FCFE는 숫자놀이가 된다.

---

## What this page locks

- FCFE 정의 및 모델 구조(NI 기반 + 재투자 + 순차입)
- FCFE 사용 조건(게이트)과 FCFF로의 후퇴 규칙
- 순차입(Net borrowing) 모델링 방식(목표 레버리지/차환/제약)
- 할인율(CoE) 산정 및 근거 패키지
- 터미널(성장/Exit) 정합성 체크

---

## Deliverables

- DCF(FCFE) 모델(차입정책 포함)
- Debt policy pack(목표레버리지/차환/제약 근거)
- Cost of equity pack(Rf/ERP/β/CRP 등)
- Terminal pack(g/exit 동시 산출 + 채택 논리)
- Sensitivity 2x2(CoE × g 또는 CoE × exit)
- Output pack 1~2장(Equity value range + sanity check)
- Evidence index

---

## Definitions

| 항목 | 정의 | 원칙 | 예외/주의 |
|------|------|------|----------|
| FCFE | 주주에게 귀속되는 현금흐름 | Equity value 직접 산출 | 차입정책 필수 |
| Net borrowing | 순차입(신규차입−상환) | FCFE의 핵심 조정 | 목표레버리지 규칙 필요 |
| Cost of Equity(CoE) | 자기자본비용 | 할인율 | 구성요소 근거 필수 |
| Terminal (Equity) | 명시기간 이후 주주가치 | g 또는 exit | 터미널이 결과 지배 |

---

## Standard FCFE structure (표준 산식)

- **FCFE = NI + D&A − Capex − ΔNWC + Net Borrowing**
- **Net Borrowing = New Debt − Debt Repayment**

목표 레버리지 방식이라면:

1) 매 기간 **목표 부채잔액**을 계산  
2) 필요한 **신규차입/상환**을 역산  
3) 레버리지 정의(예: Net debt/EBITDA)를 문서에 고정

---

## Method (12 steps)

### Step 1. FCFE 사용 게이트 통과 여부 확인
차입정책/제약이 설명 가능하면 진행, 아니면 FCFF로 후퇴.

### Step 2. 입력 기준(Adjusted NI) 고정
QoE(Adjusted)와 동일한 비경상 처리 원칙으로 NI를 정리한다(혼용 금지).

### Step 3. NI 전망(명시기간 5년 등)
드라이버: 매출/마진/세율/비영업손익(필요 최소로).

### Step 4. 재투자 가정(같은 규율 적용)
Capex/감가, ΔNWC 정의는 FCFF와 동일 원칙(정의서 일치).

### Step 5. Debt policy 설계(FCFE의 본체)
아래 중 하나로 고정:

- (A) 목표 레버리지(예: Net debt/EBITDA) 유지  
- (B) 상환 스케줄 기반(만기표) + 필요 차환  
- (C) Covenant/규제 기반 상한(차입 한도)

A+B 혼합은 가능하지만, 규칙을 **수식으로 잠근다**.

### Step 6. 이자비용/금리 가정
FCFE는 NI 기반이라 이자비용이 NI에 이미 반영됨.  
차입정책이 바뀌면 **NI의 이자비용도 일관되게 변해야 한다**(불일치 금지).

### Step 7. Net borrowing 산출
목표 부채잔액 변화 → 신규차입/상환으로 분해(가능하면).

### Step 8. FCFE 산출
산식은 단순하지만, 차입정책 일관성이 전부.

### Step 9. 할인율(CoE) 산정
Rf/ERP/β(+CRP/size premium 사용 조건) 근거를 pack으로 제공.

### Step 10. Terminal 산출(둘 다 산출 권장)
- (i) g 기반(영구성장)
- (ii) exit 기반(P/E 또는 P/B 등, 업종에 맞게)

채택 논리를 5줄로 잠금.

### Step 11. Equity value & sanity check
implied P/E, ROE, payout, leverage 추세가 상식적인지 점검.

### Step 12. 민감도(2x2)
CoE×g 또는 CoE×exit  
필요 시 레버리지(목표비율) 민감도를 보조표로.

---

## Evidence standard

- 차입/차환: 대출약정, 만기표, covenant, 담보/제한 조건
- 재무정책 근거: 과거 레버리지 추세, 경영진 정책(있으면)
- 금리/스프레드: 실제 차입금리/신규 조달 사례/시장 스프레드
- QoE 정상화 근거(Adjusted NI)
- NWC 정의서/회전지표(ΔNWC 산정 근거)
- CoE 입력 출처(기준일 포함)

---

## Copy-ready wording

> “본 DCF는 FCFE 기반으로 equity value를 직접 산출하였으며, FCFE는 순이익(NI)에 재투자(Capex, ΔNWC)와 순차입(Net borrowing)을 반영하여 산출하였습니다.”

> “FCFE 적용을 위해 차입정책(목표 레버리지/만기표/제약 조건)을 명시적으로 모델링하였고, 순차입은 해당 정책에 따라 신규차입 및 상환을 역산하여 산출하였습니다.”

> “할인율은 자기자본비용(Cost of Equity)으로 산정하였으며, 구성요소(Rf, ERP, β 등)는 출처 및 기준일을 명시하여 재현 가능하도록 제시하였습니다.”

> “터미널 가치는 영구성장(g) 및 exit 방식(예: P/E)을 병행 산출하고, implied multiple 및 레버리지 정합성 점검을 통해 본문 채택 가정을 선정하였습니다.”

> “차입정책/금리 가정의 불확실성이 결과에 미치는 영향을 확인하기 위해 주요 변수에 대한 민감도 분석을 함께 제시하였습니다.”

---

## Red flags

- 차입정책 없이 Net borrowing을 “필요한 만큼” 넣음
- NI는 Reported, Capex/NWC는 Adjusted(혼용)
- 목표 레버리지를 말로만 쓰고 수식으로 잠그지 않음
- 부채가 늘어나는데 NI의 이자비용이 안 늘어남(불일치)
- 터미널에서 exit 가정을 멀티플 페이지와 연결하지 않음
- FS에 FCFE를 쓰면서 “순차입이 영업 변수” 문제를 무시

---

## Checklist (제출 전 20)

- FCFE 사용 게이트(차입정책 설명 가능) 통과했나
- Adjusted NI가 QoE와 일치하나
- Capex/ΔNWC 정의가 FCFF 및 정의서와 일치하나
- Debt policy가 A/B/C 중 하나로 고정됐나
- 레버리지 정의(Net debt/EBITDA 등)가 문서로 잠겼나
- covenant/규제/만기 제약이 반영됐나
- Net borrowing이 정책에서 역산됐나
- 부채 변화와 이자비용(=NI)이 일관되나
- CoE 구성요소 출처/기준일이 있나
- CRP/size premium 사용 시 조건이 문서화됐나
- 터미널을 g/exit 모두 산출했나
- 채택 논리가 5줄로 잠겼나
- implied P/E/ROE/payout이 상식적인가
- 레버리지 추세가 현실적인가
- 민감도(2x2)가 핵심 변수로 구성됐나
- 멀티플 페이지와 exit 가정이 연결됐나
- Evidence index에 약정/만기표 링크가 있나
- 결과가 FCFF와 크게 다르면 설명이 있나
- 단위/라운딩이 일관적인가
- Open questions가 5개 이하인가

---

## Related pages / templates

- /handbook/dcf-fcff/
- /handbook/multiples-peer-log/
- (조건부) /handbook/ddm/
- (FS Add-on) /handbook/fs-fcfe-ddm-gate/
- /templates/dcf-fcfe-model/
- /templates/debt-policy-pack/
- /templates/cost-of-equity-pack/

---

## References

FCFE는 “차입정책/레버리지/주주현금흐름” 관련 장·페이지 안내로 연결  
(원문 전재 금지)
