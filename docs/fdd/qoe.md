# QoE Normalization (FDD)

**Version:** v0.1  
**Last modified:** 2026-01-18  
**Owner:** Dunne  
**Status:** Draft  
**Applies to:** FDD (Core)  

**Related templates:**
- /templates/qoe-bridge/ (QoE Bridge — Reported→Adjusted)
- /templates/adjustment-card/ (Adjustment Card — 근거/반복성/반대주장)
- /templates/evidence-index/ (Evidence Index)

**Changelog (page-level):**
- 2026-01-18: v0.1 초안 생성(정의/절차/증빙 기준/문장 템플릿/체크리스트 포함)

**Open questions (max 5):**
1) “런레이트(run-rate)” 조정의 허용 기준을 어디까지로 잠글지(계약 체결 vs 실행 완료 vs KPI 관측)  
2) 매각자 제시 조정안(management adjustments) 수용 시 “상한 룰”을 둘지(예: EBITDA 대비 %)  
3) ‘비현금성’ 항목 중 주식보상/평가손익을 QoE에서 어떻게 다룰지(업종별 예외 필요)  

---

## One-liner

QoE 정상화는 ‘좋게 보이게 만드는 작업’이 아니라, 딜에서 방어 가능한 **지속가능 earning power**를 잠그는 작업이다.

---

## What this page locks

이 페이지는 아래를 “표준 규칙”으로 잠근다.

- 정상화(Adjustment)의 목적/허용 범위: **지속가능성 기준**
- 조정 항목의 분류 체계: Non-recurring / Run-rate / Cut-off / Policy-change
- 증빙 최소 요건: 조정 1건 = **금액 + 근거 + 반복성 판단 + 반대주장 대응** 4종 세트
- 산출물 형태: Reported→Adjusted Bridge + Adjustment Card + Evidence Index 링크

---

## Deliverables

- QoE Bridge (Reported → Adjusted)
- Adjustment Card 묶음(조정 항목별 1장)
- Evidence Index(증빙 링크 인덱스)
- QoE 요약 문장(보고서/메일용 5~10문장)
- (선택) Run-rate tracker(구조조정/신규계약/조직개편 등)

---

## Definitions

| 용어 | 정의 | 포함 | 제외/주의 |
|------|------|------|------------|
| Reported EBITDA/NI | 재무제표/가결산 기준 보고 수치 | 공시/시산표 | 추정치 혼입 금지 |
| Adjusted EBITDA/NI | 지속가능 earning power 기준 정상화 수치 | 아래 조정 규칙 통과 항목 | “매도자 희망” 조정 금지 |
| Non-recurring(일회성) | 기간 내 단발성, 반복 가능성 낮음 | 소송합의, 일회성 처분손익 | “매년 일회성”은 일회성 아님 |
| Run-rate | 향후 반복될 비용/수익의 연간화 또는 정상 수준 반영 | 구조조정 비용(완료 후), 신규 임차료 | 실행 전/불확실 조정 |
| Cut-off / Pro-forma | 거래 경계에서 기간 귀속 조정 | 인수 전후 분리 필요 시 | 근거 없는 임의 배분 |
| Policy/Accounting change | 정책/회계 처리 변경 영향 | 분류변경, 비용 인식 시점 변화 | 비교가능성 없는 조정 금지 |

---

## Method (5–12 steps)

### Step 1. 기준 기간과 기준 수치 고정  
LTM 기준(월/분기)과 소스(재무제표/시산표/관리회계)를 먼저 잠근다.

### Step 2. 조정 후보군(Adjustment Universe) 생성  
매도자 제시 조정안 + GL/TB 스캔 + DD 이슈리스트에서 후보를 모은다.

### Step 3. 조정 분류(4분류 중 하나로만)  
Non-recurring / Run-rate / Cut-off / Policy-change  
분류가 안 되면 “조정 불가”로 본다(원칙).

### Step 4. 금액 산정 규칙 고정(재계산 가능해야 함)  
조정 금액은 “누가 계산해도 같은 숫자”가 나와야 한다.  
**산식/원천(계정, 전표, 계약)**을 카드에 명시.

### Step 5. 반복성 테스트(핵심 게이트)  
“다음 12~24개월에도 반복될까?”를 기준으로 판단.  
단순히 “비현금성”이라는 이유로 빼지 않는다.

### Step 6. 반대주장 1개 이상 작성  
조정마다 “왜 안 받아줄 수 있는지”를 먼저 쓰고 방어 근거를 붙인다.

### Step 7. Evidence Index 링크(필수)  
조정 1건당 최소 증빙 요건 충족해야 Bridge 반영.

### Step 8. Bridge 작성 + 이중계상 체크  
비용 제거 + 런레이트 반영 등 중복 여부 점검.

### Step 9. 결과 sanity check  
조정 후 마진/추세가 설명 가능한 범위인지 확인.

### Step 10. 보고서용 문장으로 번역  
숫자만 제출하지 말고 조정 원리·핵심·한계를 문장화.

---

## Evidence standard (최소 증빙 요건)

조정 1건은 아래 중 최소 1개 이상 충족(복수 권장):

- 계약서/합의서/공문
- 전표/계정원장/시산표
- 급여대장/인력 명세
- 임차/용역/발주 계약
- 이사회/경영진 결의
- 감사조서/회계정책 메모

**금지:** 구두 설명, 요약 표만으로 조정 반영

---

## Copy-ready wording

아래는 그대로 붙여넣는 문장(필요 시 괄호만 교체).

> “본 QoE 분석은 보고 수치(Reported)를 기초로, 일회성/비경상 항목 및 런레이트 조정을 반영하여 지속가능 earning power 관점의 조정 수치(Adjusted)를 산출하였습니다.”

> “조정 항목은 (i) 일회성, (ii) 런레이트, (iii) 기간 귀속, (iv) 정책/회계처리 변경으로 분류하였으며, 각 항목별로 금액 산정 근거 및 반복성 판단 근거를 첨부하였습니다.”

> “조정 반영은 증빙 기반으로 제한하였으며, 재계산 가능한 근거가 확인되지 않는 항목은 보수적으로 포함하지 않았습니다.”

> “런레이트 조정의 경우 실행 완료 여부, 향후 12~24개월 반복 가능성, 이중계상 위험을 검토한 후 반영하였습니다.”

> “조정 결과는 과거 추세 및 동종업계 수준과의 정합성 관점에서 sanity check를 수행하였습니다.”

---

## Red flags

- “일회성”이라면서 매년 반복되는 항목
- 실행 전/계약 미체결 런레이트 반영
- 조정 항목 간 중복(이중계상)
- 정책변경을 비교가능성 없이 조정
- 큰 조정인데 근거가 요약표뿐
- 조정 후 마진 급등 설명 부재
- 매도자 조정안 그대로 수용

---

## Checklist (제출 전 15)

- 기준 기간(LTM)과 소스가 잠겼나
- Bridge는 한 눈에 보이나
- Adjustment Card가 항목별로 있나
- Evidence 링크가 항목당 1개 이상인가
- 금액 재계산 가능한가
- 분류가 하나로 고정됐나
- 반복성 테스트가 문장으로 남아있나
- 반대주장과 대응이 있나
- 이중계상 점검했나
- 조정 후 추세 sanity check 했나
- 피어/과거 대비 설명 있나
- 증빙 부족 항목은 제외 처리됐나
- 다른 산출물과 일관적인가
- 보고서용 문장 5개 이상 있나
- Open questions 5개 이하인가

---

## Related pages / templates

- (다음 제작) /handbook/net-debt-definition/
- (다음 제작) /handbook/ev-to-equity-bridge/
- /templates/qoe-bridge/
- /templates/adjustment-card/
- /templates/evidence-index/

---

## References

- McKinsey Valuation (7e): 재무 리오거나이즈/비경상 조정/드라이버 기반 분석 참고  
- Damodaran: 정상화, 재무제표 조정, 상대가치/DCF 입력 일관성 논의 참고  

**저작권 안전모드:** 요약은 자체 문장, 인용은 짧게, 표/도표 직접 재작성, 원문 PDF 업로드 지양
