# Handbook Page — WACC & Terminal Defense Pack (FCFF/FCFE 공통)

**Version:** v0.1  
**Last modified:** 2026-01-18  
**Owner:** Dunne  
**Status:** Draft  
**Applies to:** Valuation (Core), Audit/Review defense

## Related templates
- /templates/wacc-pack/  
- /templates/cost-of-equity-pack/  
- /templates/terminal-pack/  
- /templates/sanity-check-pack/ (implied multiple/TV 비중/ROIC-g)  
- /templates/evidence-index/  

## Changelog (page-level)
- 2026-01-18: v0.1 초안 생성(WACC/TV 방어 규격/문장/체크리스트 포함)

## Open questions (max 5)
1) 국가위험프리미엄(CRP) 사용 조건을 “신용등급/스프레드 기반”으로 강제할지  
2) 사이즈 프리미엄 사용 조건(시총/매출 기준)을 어디까지 잠글지  
3) 베타 산정(기간/주기/레버리지·언레버리지) 표준화 범위  
4) g 상한을 “장기 명목 GDP 이하”로 글로벌 고정할지(국가별)  
5) Exit multiple 채택 기준을 “피어 중앙값 ± 근거”로 고정할지  

---

## One-liner

WACC와 Terminal은 ‘맞추는 숫자’가 아니라, 근거·정합성·재현성으로 방어하는 규격이다.

---

## What this page locks

- 할인율 입력의 표준 구성요소와 근거 패키지  
- 터미널(g/exit) 채택 시 필수 sanity check  
- “리뷰어가 물어볼 질문”에 대한 사전 답변 문장  

---

## WACC/CoE 구성요소(표준)

### Cost of Equity (CoE)

**CoE = Rf + β × ERP (+ CRP) (+ Size premium, 조건부)**

### WACC (FCFF)

**WACC = CoE × E/(D+E) + CoD × (1−Tax) × D/(D+E)**

### 표준 근거(필수)

- **Rf, ERP, β:** 출처/기준일  
- **CRP/Size:** “왜 필요한지”와 산정 근거(조건부)  
- **CoD:** 스프레드/차입 사례/신용등급 근거  
- **목표 자본구조:** 피어/정책/장기 정상 수준 근거  

---

## Terminal 방어(필수 sanity check 6)

1) CoE(or WACC) > g  
2) TV 비중(과도 시 설명)  
3) Implied multiple(EV/EBITDA, P/E 등)  
4) ROIC ↔ g 정합성(FCFF에서 특히 중요)  
5) Exit multiple의 피어 연결(멀티플 페이지와 일관)  
6) g 상한 논리(장기 성장률/인플레/시장 규모)  

---

## Copy-ready wording (방어 문장)

> “할인율의 구성요소(Rf, ERP, β, CoD 등)는 출처 및 기준일을 명시하여 재현 가능하도록 산정하였고, CRP/사이즈 프리미엄은 적용 필요성이 확인되는 경우에 한하여 조건부로 반영하였습니다.”

> “터미널 가정은 g 및 exit multiple을 병행 산출하였으며, CoE(WACC)>g, 터미널 비중, implied multiple, ROIC 정합성 등 필수 sanity check를 통해 채택 가정의 합리성을 점검하였습니다.”

> “Exit multiple은 피어 멀티플 밴드와 연결하여 설정하였고, 밴드 내 위치 및 선택 근거를 별도 메모로 문서화하였습니다.”

---

## Checklist (제출 전 18)

- Rf/ERP/β/CoD 출처+기준일  
- β 레버리지/언레버리지 로직 문서화(사용 시)  
- CRP 사용 여부 및 근거  
- 사이즈 프리미엄 사용 여부 및 근거  
- 목표 자본구조 근거  
- 세율 기준(법정/유효/정상화) 명시  
- WACC 계산 재현 가능  
- CoE>g 체크  
- TV 비중 체크  
- implied multiple 체크  
- ROIC-g 정합성(FCFF) 체크  
- Exit multiple의 피어 연결  
- g 상한 논리 문서화  
- 터미널 채택 논리 5줄  
- 민감도(CoE×g 또는 WACC×g)  
- evidence index 링크  
- 결과가 다른 방법론과 상충 시 설명  
- Open questions ≤ 5

