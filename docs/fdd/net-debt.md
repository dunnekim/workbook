# Net Debt Definition (FDD / Valuation Interface)

**Version:** v0.1  
**Last modified:** 2026-01-18  
**Owner:** Dunne  
**Status:** Draft  
**Applies to:** FDD, Valuation, FS Add-on(부분)  

**Related templates:**
- /templates/net-debt-schedule/ (Net debt schedule — cash-like/debt-like)
- /templates/debt-like-inventory/ (Debt-like inventory — 계정별 판단 카드)
- /templates/evidence-index/ (Evidence Index)

**Changelog (page-level):**
- 2026-01-18: v0.1 초안 생성(정의/분류 원칙/증빙 기준/문장 템플릿/체크리스트 포함)

**Open questions (max 5):**
1) Lease liability(리스부채)를 “항상 debt-like”로 고정할지, 예외(단기·운영성) 허용할지  
2) 고객선수금/예수금 성격 항목(산업별) 포함 범위 표준화 필요  
3) 파생상품(헤지/트레이딩) 공정가치 변동을 debt-like로 볼지 정책 필요  
4) 관계사 거래 미정산(미수/미지급) debt-like 포함 기준(통상정산 vs 사실상 차입)  
5) FS에서 예수부채를 net debt로 볼지(원칙상 제외, 예외 챕터에서만 다룸)  

---

## One-liner

Net debt는 ‘계산’이 아니라 **정의서**다. 정의가 잠기지 않으면 EV/Equity/가격이 매번 바뀐다.

---

## What this page locks

- Net debt의 목적: 브릿지에서 EV→Equity로 넘어가기 위한 **거래 기준 차감항목**
- Cash-like / Debt-like 분류 원칙(포함·제외 기준)
- Debt-like 인벤토리(리스/충당/미지급/파생/우발 등) 처리 룰
- 기준일·환율·이자/미지급이자 처리 규칙
- 증빙 최소 요건(재계산 가능성)

---

## Deliverables

- Net debt definition sheet(1~2p): 포함/제외 + 판단 기준
- Net debt schedule(엑셀): cash-like / debt-like / 기타 조정
- Debt-like inventory 카드: 논쟁 가능 항목만(10~30개)
- Evidence index 링크(계약/전표/명세/주석)
- (선택) Bridge 연결표: “Net debt ↔ Equity bridge” 탭 연결

---

## Definitions

| 항목 | 정의 | 원칙 | 예외/주의 |
|------|------|--------|------------|
| Net debt | 거래 기준으로 현금성 자산을 차감한 부채성 항목의 순액 | EV→Equity 변환에 사용 | 업종별(FS 등) 예외는 별도 |
| Cash-like | 즉시 사용 가능, 제한 없음, 실질적으로 차감 가능한 현금성 | 차감(−) | 사용제한(trapped), 규제/담보 설정은 제외/조정 |
| Debt-like | 이자성·상환의무·사실상 차입 성격 또는 부채와 동일한 경제적 실질 | 가산(+) | 운전자본성 미지급과 혼동 금지 |
| Trapped cash | 법적/계약/규제상 인출·배당 제한된 현금 | 일반 cash-like에서 제외 가능
