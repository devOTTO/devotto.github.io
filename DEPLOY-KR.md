# devotto.github.io — Hugo Academic CV 배포 가이드

브랜치 구조:
- `master`             : Hugo 사이트 소스 (여기에 push하면 GitHub Actions가 자동 빌드/배포)
- `backup-jekyll-blog` : 기존 Jekyll 블로그 백업
- `source`             : 이전 React(developerFolio) 포트폴리오 (보관용)

## 최초 배포 — 로컬 빌드 필요 없음!

```bash
git push origin master --force-with-lease   # 소스 push (기존 jekyll master 교체)
git push origin backup-jekyll-blog          # 아직 안 했다면
```

그 다음 GitHub 저장소에서 딱 한 번:
**Settings → Pages → Build and deployment → Source: "GitHub Actions"** 로 변경

이후 Actions 탭에서 "Publish to GitHub Pages" 워크플로가 돌고 (~2분),
https://devotto.github.io 에 반영됩니다.

## 이후 수정 워크플로우

파일 수정 → commit → push. 끝. (npm/hugo 로컬 설치 불필요)

- 내 정보/경력/스킬/자격증: `data/authors/me.yaml`
- 홈 섹션 구성: `content/_index.md`
- 프로젝트: `content/projects/*/index.md`
- 프로필 사진: `assets/media/authors/me.jpg` 교체 (지금은 YH 이니셜 placeholder)
- 이력서 PDF: `static/uploads/Yoonmee_Hwang_Resume.pdf` 교체

## 로컬 미리보기 (선택)

Hugo Extended 0.162.0 + Node 22 설치 후: `npm install && hugo server`
