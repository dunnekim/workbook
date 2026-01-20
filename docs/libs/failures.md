# Failure Library v0.1 (FDD / Valuation) — Issue Cards

**카드 규칙:**  
Symptom(증상) → Root cause(원인) → Diagnostic(진단) → Fix(처방) → Copy(문장)  
각 카드는 **“재계산 가능성”을 회복시키는 방향**으로 작성한다.

---

## F-01. 정의서 없이 숫자부터 나감 (Definition drift)

**Symptom**  
Net debt/NWC/Adjusted EBITDA가 문서마다 다름. 회의 때마다 결론이 변함.

**Root cause**  
정의(포함/제외) 잠금 전에 계산부터 함.

**Diagnostic**  
“이 숫자에 들어간 계정 범위를 1문장으로 말할 수 있나?”

**Fix**  
definition sheet를 먼저 만들고, 모든 스케줄이 그걸 참조하도록 SoT 단일화.

**Copy**  
“수치 산정에 앞서 포함/제외 범위를 definition sheet로 선행 확정하였고, 이후 모든 스케줄은 해당 정의를 단일 기준으로 참조하였습니다.”

---

## F-02. Net debt vs NWC 중복/누락 (Double count)

**Symptom**  
Equity value가 조정할수록 이상해짐. 조정항목이 늘수록 값이 튐.

**Root cause**  
영업성 미지급/충당/관계사 미정산이 NWC와 debt-like에 동시에 들어감.

**Diagnostic**  
각 항목에 대해 “통상 정산인가, 자금조달 실질인가” 라벨이 있나?

**Fix**  
경계 룰 고정(통상 정산=NWC, 조달 실질=debt-like) + inventory 카드로 잠금.

**Copy**  
“NWC와 net debt 간 경계는 통상 정산 여부 및 자금조달 실질을 기준으로 구분하여 중복 반영을 방지하였습니다.”

---

## F-03. Trapped cash를 무조건 현금으로 차감

**Symptom**  
현금이 많아 보이는데 EV→Equity 변환이 과도하게 낮아짐/높아짐.

**Root cause**  
제한 현금을 cash-like로 동일 처리.

**Diagnostic**  
“이 현금은 언제, 어떤 조건에서 배당/송금/상환에 쓸 수 있나?” 근거가 있나?

**Fix**  
trapped cash는 net debt cash-like에서 제외하고 브릿지 별도 라인.

**Copy**  
“제한 현금은 net debt의 cash-like에서 제외하고, 제한 사유 및 해제 조건을 근거로 브릿지에서 별도 조정항목으로 제시하였습니다.”

---

## F-04. 리스부채/임차료 더블카운트

**Symptom**  
EV/EBITDA 멀티플은 낮아지는데 debt-like가 커져서 equity가 과도하게 깎임.

**Root cause**  
EBITDA에서 임차료를 이미 조정했는데 리스부채를 그대로 debt-like에 또 포함.

**Diagnostic**  
“임차료가 EBITDA에 남아있나, 제거됐나?” / “리스부채 포함이 추가 페널티가 되나?”

**Fix**  
리스부채 기본 debt-like 포함, 다만 임차료 정상화와 중복 여부를 카드로 점검/주석.

**Copy**  
“리스부채는 debt-like로 포함하되, 임차료 정상화와의 중복 반영 가능성은 항목별로 점검하여 필요 시 별도 주석으로 표시하였습니다.”

---

## F-05. QoE ‘관리자 조정’이 그대로 들어감

**Symptom**  
Adjusted EBITDA가 과하게 개선, 리뷰에서 바로 문제제기.

**Root cause**  
근거 불충분한 management adjustments 수용.

**Diagnostic**  
전표/계약/반복가능성(12~24개월) 근거가 있는가?

**Fix**  
근거 기반 조정만 반영, 불명확은 제외 또는 민감도로만.

**Copy**  
“조정 항목은 재계산 가능한 근거가 확인되는 범위로 제한하였고, 근거가 요약 수준에 그치는 항목은 보수적으로 반영하지 않았습니다.”

---

## F-06. Peer log 부재(결론 맞추기 의심)

**Symptom**  
피어가 자꾸 바뀜. 왜 제외했는지 설명이 흐림.

**Root cause**  
universe→스크리닝→로그가 아니라 “선택”부터 함.

**Diagnostic**  
포함/배제 사유가 한 문장으로 기록돼 있나?

**Fix**  
peer log를 산출물로 고정, 변경 시 changelog 남김.

**Copy**  
“포함/배제 사유는 peer log로 문서화하여 선정 과정의 일관성과 추적 가능성을 확보하였습니다.”

---

## F-07. Reported/Adjusted 혼용 멀티플

**Symptom**  
멀티플 비교가 뒤틀림. 타겟만 좋아 보이거나 나빠 보임.

**Root cause**  
피어는 Reported, 타겟은 Adjusted(혹은 반대)로 분모 혼용.

**Diagnostic**  
모든 멀티플 분모의 정의가 동일한가?

**Fix**  
Adjusted 우선, 불가 시 전부 Reported로 통일(예외 사유 기록).

**Copy**  
“멀티플 산정에 사용한 재무지표는 (Adjusted/Reported) 기준으로 통일하여 혼용으로 인한 왜곡을 방지하였습니다.”

---

## F-08. Outlier를 ‘보기 싫어서’ 제거

**Symptom**  
밴드가 “너무 예쁘게” 정리됨. 질문 한 번에 무너짐.

**Root cause**  
정량값만 보고 제외(사건 근거 없음).

**Diagnostic**  
제외 사유가 사건 기반으로 설명되나? 문서 근거가 있나?

**Fix**  
정량은 flag, 제외는 사건 기반만. Base/Sensitivity 병행.

**Copy**  
“Outlier는 사건 기반 근거가 확인되는 경우에 한하여 처리하였고, Base 및 Sensitivity 결과를 병행 제시하였습니다.”

---

## F-09. DCF에서 Capex/ΔNWC를 ‘0’으로 방치

**Symptom**  
FCFF가 비현실적으로 커짐. TV 비중이 과도해짐.

**Root cause**  
재투자를 비용이 아닌 ‘조정항목’처럼 취급.

**Diagnostic**  
감가 vs capex, 회전지표(DSO/DPO/DIO) sanity check가 있나?

**Fix**  
유지/성장 capex 논리 또는 최소 sanity check 고정. ΔNWC는 정의서 일치.

**Copy**  
“Capex 및 ΔNWC는 과거 회전지표 및 사업계획과의 정합성 관점에서 검토하였습니다.”

---

## F-10. Terminal이 결과를 지배하는데 설명이 없음

**Symptom**  
TV 비중 70%+인데도 근거 2줄.

**Root cause**  
터미널 가정이 ‘숫자 맞추기’로 사용됨.

**Diagnostic**  
CoE(WACC)>g, implied multiple, ROIC-g 체크가 있나?

**Fix**  
Gordon/Exit 병행 산출 + 필수 sanity check 6개 고정.

**Copy**  
“터미널 가정은 필수 sanity check(CoE>g, TV 비중, implied multiple, ROIC 정합성 등)를 통해 합리성을 점검하였습니다.”

---

## F-11. FCFE에서 차입정책이 없음(Net borrowing 임의)

**Symptom**  
FCFE가 매년 들쭉날쭉, 레버리지/이자비용과 불일치.

**Root cause**  
목표 레버리지/차환/제약 없이 순차입을 ‘필요한 만큼’ 넣음.

**Diagnostic**  
Net borrowing이 어떤 정책에서 역산됐나?

**Fix**  
FCFE 게이트 적용(정책 없으면 FCFF), debt policy pack 필수.

**Copy**  
“차입정책을 명시적으로 모델링하고 순차입은 해당 정책에 따라 산출하였습니다.”

---

## F-12. 희석(옵션/전환) 중복 계상

**Symptom**  
주당가치가 이상하게 낮아짐/높아짐, 설명이 꼬임.

**Root cause**  
전환증권을 주식수에도 넣고 debt-like에도 넣는 등 중복.

**Diagnostic**  
각 증권의 경제적 실질(현금결제/전환/상환)이 어디에 반영됐나(주식수 vs 부채)?

**Fix**  
브릿지에서 ‘한 번만’ 반영, dilution schedule을 SoT로.

**Copy**  
“희석 가정은 계약서에 근거하여 별도 스케줄로 명시하고, 브릿지에서 중복 반영이 발생하지 않도록 구성하였습니다.”

---

## F-13. 기준일/환율/출처가 문서마다 다름

**Symptom**  
같은 표인데 숫자가 다르게 보임. 리뷰에서 신뢰 하락.

**Root cause**  
기준일 통제가 없음(주가/FX/재무 기준일 혼재).

**Diagnostic**  
각 입력에 기준일이 적혀 있나?

**Fix**  
“기준일 메타”를 모든 산출물 상단에 강제 + evidence index 연결.

**Copy**  
“주요 입력 값은 출처 및 기준일을 명시하여 동일 기준으로 재현 가능하도록 정리하였습니다.”

---

## F-14. FS를 일반기업처럼 취급(예외 미정리)

**Symptom**  
net debt, NWC, FCFF/FCFE 선택 논리가 흔들림.

**Root cause**  
FS의 부채/자본/규제가 영업 변수라는 점을 예외 챕터로 분리하지 않음.

**Diagnostic**  
“이 회사에서 부채를 제거하면 영업이 남는가?” 질문에 답이 나오나?

**Fix**  
FS Add-on(게이트 페이지)로 분리: 방법론 선택 조건과 예외 정의를 고정.

**Copy**  
“FS 특성상 부채/자본이 영업 변수로 작동하는 구간은 별도 기준으로 정리하여, 방법론 선택 및 정의의 일관성을 확보하였습니다.”

---

## F-15. ‘근거는 있는데’ 재계산이 안 됨(Traceability gap)

**Symptom**  
자료는 많지만, 숫자 한 줄이 어디서 왔는지 추적 불가.

**Root cause**  
evidence index/링크 규칙 부재, 스케줄이 문서에 연결되지 않음.

**Diagnostic**  
스케줄의 각 주요 라인이 “명세→전표/계약→주석”으로 이어지나?

**Fix**  
evidence index를 산출물로 강제하고, 스케줄 각 라인에 링크를 건다.

**Copy**  
“각 산출 수치는 근거 문서와의 연결(evidence index)을 통해 재계산 가능하도록 구성하였습니다.”
