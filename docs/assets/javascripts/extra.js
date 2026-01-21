/**
 * 위키독스 스타일 UI 기능
 * - 상단 TOC 토글
 * - 피드백 모달 (접근성 고려)
 * - 이전/다음 네비게이션은 Material 기본 기능 활용
 */

(function() {
  'use strict';

  // Material의 document$ observable을 사용 (페이지 전환 감지)
  if (typeof document$ !== 'undefined') {
    document$.subscribe(function() {
      initTocToggle();
      initFeedbackModal();
    });
  } else {
    // 초기 로드 시에도 실행
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        initTocToggle();
        initFeedbackModal();
      });
    } else {
      initTocToggle();
      initFeedbackModal();
    }
  }

  /**
   * TOC 토글 기능
   */
  function initTocToggle() {
    const tocToggleBtn = document.getElementById('toc-toggle-btn');
    const tocSidebar = document.querySelector('.md-sidebar--secondary');
    const tocNav = document.querySelector('.md-nav--secondary');

    if (!tocToggleBtn) return;

    // localStorage에서 상태 복원
    const isTocHidden = localStorage.getItem('wikidocs-toc-hidden') === 'true';
    if (isTocHidden && tocSidebar) {
      tocSidebar.classList.add('wikidocs-toc-hidden');
      updateTocToggleText(false);
    } else {
      updateTocToggleText(true);
    }

    tocToggleBtn.addEventListener('click', function() {
      if (tocSidebar) {
        const isHidden = tocSidebar.classList.toggle('wikidocs-toc-hidden');
        localStorage.setItem('wikidocs-toc-hidden', isHidden.toString());
        updateTocToggleText(!isHidden);
      } else if (tocNav) {
        // 모바일 등에서 다른 구조일 경우
        const isHidden = tocNav.classList.toggle('wikidocs-toc-hidden');
        localStorage.setItem('wikidocs-toc-hidden', isHidden.toString());
        updateTocToggleText(!isHidden);
      }
    });
  }

  function updateTocToggleText(isVisible) {
    const btn = document.getElementById('toc-toggle-btn');
    if (!btn) return;
    const textSpan = btn.querySelector('.toc-toggle-text');
    if (textSpan) {
      textSpan.textContent = isVisible ? '목차 숨기기' : '목차보기';
    }
  }

  /**
   * 피드백 모달 기능 (접근성 고려)
   */
  function initFeedbackModal() {
    const modal = document.getElementById('feedback-modal');
    const feedbackBtn = document.getElementById('feedback-btn');
    const closeBtn = document.getElementById('feedback-modal-close');
    const overlay = document.getElementById('feedback-modal-overlay');
    const cancelBtn = document.getElementById('feedback-cancel');
    const form = document.getElementById('feedback-form');

    if (!modal || !feedbackBtn) return;

    // 모달 열기
    feedbackBtn.addEventListener('click', function() {
      openModal();
    });

    // 모달 닫기 (여러 방법)
    function closeModal() {
      modal.classList.remove('wikidocs-modal-open');
      modal.setAttribute('aria-hidden', 'true');
      feedbackBtn.focus(); // 포커스를 버튼으로 되돌림
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    if (overlay) {
      overlay.addEventListener('click', closeModal);
    }

    if (cancelBtn) {
      cancelBtn.addEventListener('click', closeModal);
    }

    // ESC 키로 닫기
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('wikidocs-modal-open')) {
        closeModal();
      }
    });

    // 모달 열기 함수
    function openModal() {
      modal.classList.add('wikidocs-modal-open');
      modal.setAttribute('aria-hidden', 'false');
      
      // 포커스 트랩: 모달 내 첫 번째 포커스 가능 요소로 이동
      const firstFocusable = modal.querySelector('input, textarea, button');
      if (firstFocusable) {
        firstFocusable.focus();
      }

      // GitHub Issue 링크 생성
      if (form) {
        const pageTitle = document.querySelector('h1')?.textContent || 'Unknown Page';
        const pageUrl = window.location.href;
        // repo_url을 모달의 data attribute에서 가져오기
        const repoUrl = modal.getAttribute('data-repo-url') || 'https://github.com/your-org/your-repo';
        
        form.action = repoUrl + '/issues/new';
        
        // 폼 제출 시 URL 파라미터로 데이터 전달
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          
          const email = document.getElementById('feedback-email').value;
          const body = document.getElementById('feedback-body').value;
          
          if (!body.trim()) {
            alert('피드백 내용을 입력해주세요.');
            return;
          }

          // GitHub Issue 생성 URL (프리필)
          const issueTitle = encodeURIComponent('[피드백] ' + pageTitle);
          let issueBody = '## 페이지 정보\n';
          issueBody += '- **페이지 제목**: ' + pageTitle + '\n';
          issueBody += '- **페이지 URL**: ' + pageUrl + '\n\n';
          
          if (email) {
            issueBody += '## 연락처\n';
            issueBody += '- **이메일**: ' + email + '\n\n';
          }
          
          issueBody += '## 피드백 내용\n';
          issueBody += body;

          const issueUrl = repoUrl + '/issues/new?' + 
            'title=' + issueTitle + 
            '&body=' + encodeURIComponent(issueBody) +
            '&labels=feedback';

          window.open(issueUrl, '_blank');
          closeModal();
          
          // 폼 초기화
          form.reset();
        });
      }
    }
  }
})();
