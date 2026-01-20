# 웹 교재 운영 규격서 v0.1
Deal Valuation & FDD Handbook (Accounting Firm Edition)

**Version:** v0.1  
**Last modified:** 2026-01-21  
**Owner:** Dunne  
**Status:** Stable  
**Applies to:** FDD / Valuation / FS Add-on  

---

## 0. 목적과 원칙

### 목적

이 문서는 “지식 정리”가 아니라, 회계법인 FDD/Valuation 업무가 재현 가능하게 굴러가도록 하는 웹 기반 교재(Handbook)의 운영 표준이다.

### 핵심 원칙 3가지

- **Definition(정의)**가 먼저다: Net debt/NWC/EBITDA/FCF/희석/현금성 판단
- **Evidence(근거)**가 문서의 본체다: 링크·캡처·인덱스가 없으면 “없던 주장”
- Change-driven writing: 질문/피드백은 “콘텐츠”가 아니라 변경 요청(Issue) 이다

## 1. 적용 범위

### 포함

- **FDD**: QoE, Net debt, NWC, red flags, 보고서 문장 템플릿, evidence 운영
- **Valuation**: Multiples, DCF(FCFF/FCFE/DDM), EV→Equity→Price 브릿지, 할인율/터미널 방어, IFRS13/36 문장(선택)

### 제외

- IC/투심 관점 및 IC 문서/용어/의사결정 프레임
- RI(Residual Income) 방법론
- “이론 교과서식” 장황한 개념 설명(필요 최소만)

## 2. 정보 구조(IA)와 문서 타입

### 2.1 문서 타입(3종)

- **Guide**: 온보딩/요약(10~15p 성격, “길 찾기”)
- **Handbook Page**: 실무 표준 페이지(주요 콘텐츠의 90%)
- **Template Spec**: 템플릿 정의서(엑셀/워드/체크리스트의 필드 정의)

### 2.2 디렉토리(권장)

- `/handbook/`: 챕터 페이지
- `/templates/`: 템플릿 파일 및 정의서
- `/policies/`: 운영 규칙(이 문서 포함)
- `/changelog/`: 릴리즈 노트(버전별 변경 요약)

## 3. 페이지 메타데이터(필수) — Last modified/Version/Changelog/Open questions

모든 Handbook Page 상단에 아래 블록을 고정한다(노출형).

### 3.1 Front-matter(페이지 헤더) 템플릿

- Version: vX.Y
- Last modified: YYYY-MM-DD
- Owner: (이니셜/닉네임)
- Status: Draft / Stable / Deprecated
- Applies to: FDD / Valuation / FS Add-on
- Related templates: (템플릿 링크)
- Changelog (page-level):
  - YYYY-MM-DD: 무엇을 바꿨는지 1~3줄
- Open questions (max 5):
  - Q1… (결정 필요 포인트만)

Open questions 규칙: “독자에게 묻는 질문”이 아니라, 문서가 아직 잠그지 못한 정의/가정/경계만 남긴다. (최대 5개)

## 4. 페이지 본문 구조(필수 섹션 규격)

모든 Handbook Page는 아래 섹션을 같은 순서로 가진다. (이게 ‘책’의 톤을 만든다)

- One-liner: 딜/감사 대응에서 그대로 붙는 문장 1줄
- What this page locks: 이 페이지가 “잠그는” 정의/규칙 3~7개
- Deliverables: 파일/시트/표 단위 산출물(3~8개)
- Definitions: 용어/범위/포함·제외(표로)
- Method: 작업 흐름(5~12 step, 수식보다 절차)
- Evidence standard: 최소 증빙 요건(필수 링크/캡처/원천)
- Copy-ready wording: 보고서/메일에 붙여넣는 문장 템플릿(3~10문장)
- Red flags: 자주 깨지는 함정 5~10개
- Checklist: 제출 전 체크 10~20개
- Related pages / templates: 연결 링크

## 5. 템플릿(Templates) 운영 규격

### 5.1 템플릿은 “파일”이 아니라 “표준 스펙”이 먼저

모든 템플릿은 `/templates/<name>/spec.md` 를 가진다.

spec에는 아래가 필수:

- 목적(어디에 쓰는가)
- 입력 필드(필드명/정의/허용값/출처)
- 계산/집계 규칙(정의가 바뀌면 무엇이 깨지는지)
- 출력(표/차트/문장) 목록
- 예시(샘플 1개)

### 5.2 템플릿 버전 규칙

- 템플릿도 Version / Last modified / Changelog 필수
- 본문 페이지는 “관련 템플릿 버전”을 명시한다(호환성 고정)

## 6. 피드백/질문 시스템 = Issue 운영(핵심)

우측 피드백은 댓글이 아니라 Issue(변경 요청) 로 굴린다.

### 6.1 Issue 타입(라벨)

- `type:def`: 정의/범위/포함·제외 분쟁
- `type:template`: 템플릿 추가/수정 요청
- `type:evidence`: 증빙 기준/출처/인덱스 관련
- `type:wording`: 보고서/메일 문장 개선
- `type:fs-addon`: FS 특화 예외 규칙
- `type:bug`: 오류(계산/링크/오탈자)

### 6.2 챕터 라벨

- `chapter:QoE`
- `chapter:NetDebt`
- `chapter:NWC`
- `chapter:EV-Bridge`
- `chapter:DCF-FCFF`
- `chapter:DCF-FCFE`
- `chapter:DDM`
- `chapter:Multiples`
- `chapter:FS-Credit`
- … (페이지 단위로)

### 6.3 상태 라벨(운영)

- `status:triage` (접수)
- `status:needs-decision` (결정 필요)
- `status:in-progress`
- `status:ready-to-merge`
- `status:done`
- `status:won’t-fix` (이유 필수)

### 6.4 Issue 처리 SLA(권장)

- 접수(`triage`): 48시간 내 라벨링
- 결정 필요(`needs-decision`): “결정 문장”이 나오기 전까지 문서에 Open question 유지
- 완료(`done`): 페이지 Changelog에 “Fixed in vX.Y” 기록 + Issue 링크

## 7. 변경 관리(Change Management) 규칙

### 7.1 버전 체계(권장)

vX.Y

- X(major): 페이지 구조/정의 체계가 바뀌는 변경(호환성 깨짐)
- Y(minor): 정의 보강/템플릿 개선/문장 추가(호환 유지)

### 7.2 Changelog 작성 원칙(문서의 신뢰)

- “오탈자 수정” 같은 말 금지
- 무엇이 바뀌었고(WHAT), 왜 바뀌었는지(WHY), 영향(Impact) 3요소로 1~3줄

예)

2026-01-18: Net debt에서 lease liability를 debt-like로 분류하는 기준을 계약상 이자성/상환의무 존재로 명시(WHY: 거래마다 분쟁 반복). Impact: bridge 탭 결과가 변경될 수 있음.

## 8. 검증(Evaluation) 규칙 — ‘책’이 실무에서 살아남는지 체크

각 페이지는 최소 아래를 만족해야 Stable로 승격:

- 정의 테이블이 있다(포함/제외가 문장으로 잠김)
- 템플릿 링크가 있다(실행 가능)
- Copy-ready wording이 있다(보고서/메일에 바로 사용)
- Evidence standard가 있다(감사/내부리뷰 대응)
- Checklist가 있다(품질 재현)

## 9. 첫 릴리즈(v0.1) 스코프(권장 최소 출간 단위)

v0.1은 “많이”가 아니라 “잠그는 핵심”만 낸다. 아래 12페이지를 목표로 고정:

### FDD Core

- QoE Normalization
- Net debt 정의서
- NWC peg & seasonality
- Evidence index & Q&A log 운영

### Valuation Core

5) EV→Equity→Price bridge(희석 포함)  
6) Multiples + peer log  
7) DCF(FCFF) 페이지  
8) DCF(FCFE) 페이지  
9) DDM(조건부) 페이지  
10) WACC/Terminal 방어(회계법인 버전)  
11) 보고서/메일 문장 템플릿 라이브러리  
12) Failure library(빈번 이슈 10개 카드)

## 10. 구현 옵션(우측 피드백)

- giscus/utterances(GitHub Discussion/Issues 기반 댓글 UI)
- “Discuss this page” 버튼을 페이지 상단/우측에 고정 → 해당 페이지 라벨 자동 부여

구현은 나중 문제고, 운영 논리는 위 Issue 규격이 본체다.

## 부록 A. Issue 템플릿(복붙용)

```text
Title: [chapter:XXX] 한 줄 요약
Type: type:def / type:template / type:evidence / type:wording / type:fs-addon / type:bug
Problem (현상):
Current doc (링크/문구):
Proposed change (바꿀 정의/문장):
Evidence needed (근거):
Impact (영향 범위): 페이지/템플릿/계산 결과 영향
Decision owner:
```

