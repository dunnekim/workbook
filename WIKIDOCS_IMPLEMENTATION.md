# 위키독스 스타일 UI 구현 완료 보고서

## 변경된 파일 목록

### 1. 설정 파일
- **`mkdocs.yml`**: 
  - `custom_dir: docs/overrides` 추가
  - `repo_url`, `repo_name`, `edit_uri` 추가 (실제 리포지토리 URL로 변경 필요)
  - `navigation.footer`, `content.action.edit` features 추가
  - `git-revision-date-localized` 플러그인 설정 (Asia/Seoul, 한국어)
  - `extra_css`, `extra_javascript` 경로 추가

- **`.github/workflows/pages.yml`**:
  - `fetch-depth: 0` 추가 (git-revision-date-localized 플러그인을 위한 전체 히스토리)
  - `pip install -r requirements.txt`로 변경 (플러그인 포함)

- **`requirements.txt`**: 이미 플러그인이 포함되어 있음

### 2. Override 템플릿
- **`docs/overrides/main.html`**: 
  - 상단 TOC 토글 버튼 삽입
  - 하단 페이지 푸터 포함

- **`docs/overrides/partials/page-footer.html`**:
  - 마지막 편집일시 표시
  - 이전/다음 네비게이션 링크
  - 피드백 버튼 및 모달 포함

- **`docs/overrides/partials/feedback-modal.html`**:
  - 피드백 모달 UI (접근성 고려)
  - repo_url을 data attribute로 전달

### 3. 자산 파일
- **`docs/assets/javascripts/extra.js`**:
  - TOC 토글 기능 (localStorage로 상태 저장)
  - 피드백 모달 제어 (ESC 키, 포커스 트랩, 접근성)
  - GitHub Issue 생성 링크 프리필

- **`docs/assets/stylesheets/extra.css`**:
  - 위키독스 스타일 커스터마이징
  - 반응형 디자인 (모바일 대응)
  - 모달 애니메이션

### 4. GitHub Issue 템플릿
- **`.github/ISSUE_TEMPLATE/feedback.md`**: 피드백 이슈 템플릿

---

## 핵심 기능 구현 상태

### ✅ 1. 상단 목차보기 토글
- **위치**: 페이지 상단 우측 고정 버튼
- **기능**: 
  - 클릭 시 우측 TOC 사이드바 show/hide
  - 상태를 localStorage에 저장하여 페이지 전환 시 유지
  - 모바일에서는 아이콘만 표시

### ✅ 2. 마지막 편집일시 자동 표시
- **위치**: 페이지 하단
- **기능**: 
  - `git-revision-date-localized` 플러그인으로 자동 생성
  - Asia/Seoul 시간대, 한국어 로케일
  - 형식: "마지막 편집일시: YYYY-MM-DD HH:MM"

### ✅ 3. 피드백 모달
- **위치**: 페이지 하단 "피드백" 버튼
- **기능**:
  - 모달 열기/닫기 (ESC 키, 외부 클릭, 닫기 버튼)
  - 이메일(선택), 피드백 내용(필수) 입력
  - 제출 시 GitHub Issue 생성 페이지로 이동 (프리필)
  - 접근성: 포커스 트랩, ARIA 속성

### ✅ 4. 이전글/다음글 네비
- **위치**: 페이지 하단 (마지막 편집일시 아래)
- **기능**: 
  - Material의 `navigation.footer` feature 활용
  - nav 순서 기준으로 자동 생성
  - `page.previous_page`, `page.next_page` 변수 사용

### ✅ 5. 이 페이지 편집 버튼
- **위치**: Material 기본 위치 (상단 또는 하단)
- **기능**: 
  - Material의 `content.action.edit` feature 활용
  - `repo_url`과 `edit_uri` 설정으로 GitHub 편집 화면으로 이동
  - 아이폰에서도 작동 (웹 브라우저 → GitHub 편집)

---

## 설정 필요 사항

### ⚠️ `mkdocs.yml`에서 반드시 수정해야 할 항목

```yaml
repo_url: https://github.com/your-org/your-repo  # 실제 리포지토리 URL로 변경
repo_name: your-org/your-repo                     # 실제 리포지토리 이름으로 변경
edit_uri: edit/main/docs/                        # 브랜치명이 main이 아니면 변경
```

---

## 로컬 실행 방법

### 1. 의존성 설치
```bash
pip install -r requirements.txt
```

### 2. 로컬 서버 실행
```bash
mkdocs serve
```

브라우저에서 `http://127.0.0.1:8000` 접속

### 3. 빌드 테스트
```bash
mkdocs build --clean
```

`site/` 디렉토리에 빌드 결과 생성

---

## 테스트 체크리스트

### 데스크톱 브라우저
- [ ] **상단 TOC 토글 버튼**
  - 우측 상단에 "목차보기" 버튼이 보임
  - 클릭 시 우측 TOC 사이드바가 show/hide됨
  - 상태가 localStorage에 저장되어 페이지 전환 시 유지됨

- [ ] **마지막 편집일시**
  - 페이지 하단에 "마지막 편집일시: YYYY-MM-DD HH:MM" 형식으로 표시됨
  - 시간대가 Asia/Seoul로 표시됨

- [ ] **이전/다음 네비**
  - 페이지 하단에 "← 이전글: ..." / "다음글: ... →" 링크가 표시됨
  - nav 순서에 따라 올바른 페이지로 연결됨
  - 첫 페이지에는 "이전글" 없음, 마지막 페이지에는 "다음글" 없음

- [ ] **피드백 버튼 및 모달**
  - 페이지 하단에 "피드백" 버튼이 보임
  - 클릭 시 모달이 열림
  - ESC 키로 모달 닫힘
  - 외부 클릭으로 모달 닫힘
  - "GitHub Issue 작성" 버튼 클릭 시 새 탭에서 Issue 생성 페이지가 열림
  - 페이지 제목, URL, 이메일, 내용이 프리필됨

- [ ] **이 페이지 편집 버튼**
  - Material 기본 위치에 "Edit on GitHub" 버튼이 보임
  - 클릭 시 GitHub 편집 화면으로 이동함

### 모바일 (iPhone)
- [ ] **TOC 토글**
  - 모바일에서도 버튼이 보이고 작동함
  - 아이콘만 표시됨 (텍스트 숨김)

- [ ] **모달**
  - 모바일 화면에 맞게 크기 조정됨
  - 터치로 열기/닫기가 가능함

- [ ] **네비게이션**
  - 이전/다음 링크가 세로로 배치됨
  - 터치하기 쉬운 크기

### GitHub Pages 배포 후
- [ ] **마지막 편집일시**
  - GitHub Actions 빌드 후 실제 git commit 날짜가 표시됨
  - 로컬에서는 표시되지 않을 수 있음 (git 히스토리 없음)

- [ ] **편집 버튼**
  - GitHub Pages에서 실제 리포지토리로 연결됨

---

## 확인해야 할 페이지/버튼 위치

### 페이지 상단
1. **TOC 토글 버튼**: 화면 우측 상단 고정 위치
   - 아이콘(☰) + "목차보기" 텍스트
   - 모바일에서는 아이콘만

### 페이지 본문
2. **기존 Material 기능**: 좌측 사이드바(nav), 우측 TOC (토글 가능)

### 페이지 하단
3. **마지막 편집일시**: 
   - "마지막 편집일시: YYYY-MM-DD HH:MM" 형식
   - 회색 텍스트

4. **이전/다음 네비**:
   - "← 이전글: [제목]" (왼쪽 정렬)
   - "다음글: [제목] →" (오른쪽 정렬)
   - 모바일에서는 세로 배치

5. **피드백 버튼**: 
   - 중앙 정렬, 파란색 버튼
   - 클릭 시 모달 팝업

6. **이 페이지 편집 버튼**: 
   - Material 기본 위치 (보통 상단 또는 하단)
   - "Edit on GitHub" 또는 아이콘

---

## 문제 해결

### 마지막 편집일시가 표시되지 않는 경우
- **로컬**: git 히스토리가 없으면 표시되지 않을 수 있음 (정상)
- **GitHub Pages**: `fetch-depth: 0`이 설정되어 있는지 확인
- **플러그인**: `requirements.txt`에 `mkdocs-git-revision-date-localized-plugin`이 포함되어 있는지 확인

### TOC 토글이 작동하지 않는 경우
- 브라우저 콘솔에서 JavaScript 오류 확인
- `docs/assets/javascripts/extra.js`가 로드되는지 확인
- Material의 TOC 구조가 변경되었을 수 있음 (`.md-sidebar--secondary` 선택자 확인)

### 피드백 모달이 열리지 않는 경우
- JavaScript 오류 확인
- `repo_url`이 `mkdocs.yml`에 올바르게 설정되어 있는지 확인
- 모달 HTML이 올바르게 렌더링되는지 확인 (개발자 도구)

### 이전/다음 네비가 표시되지 않는 경우
- `mkdocs.yml`의 `navigation.footer` feature가 활성화되어 있는지 확인
- nav에 페이지가 2개 이상 있어야 함

---

## 다음 단계 (선택사항)

1. **repo_url 설정**: 실제 GitHub 리포지토리 URL로 변경
2. **커스터마이징**: 색상, 폰트, 레이아웃 조정 (CSS 수정)
3. **추가 기능**: 
   - 검색 기능 강화
   - 다크 모드 지원
   - 인쇄 스타일 최적화

---

## 참고 자료

- [Material for MkDocs Documentation](https://squidfunk.github.io/mkdocs-material/)
- [git-revision-date-localized-plugin](https://github.com/timvink/mkdocs-git-revision-date-localized-plugin)
- [MkDocs Overriding Templates](https://www.mkdocs.org/user-guide/styling-your-docs/#overriding-template-blocks)
