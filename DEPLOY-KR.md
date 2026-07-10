# 배포 가이드 (github.io)

developerFolio 기반 개인 홈페이지. 내용은 전부 `src/portfolio.js` 한 파일에서 관리.

## 최초 배포 (한 번만)

1. **placeholder 교체** — `devotto` 검색해서 교체 (2개 파일):
   - `package.json` → `"homepage": "https://<아이디>.github.io"`
   - `src/portfolio.js` → socialMediaLinks.github
2. GitHub에서 저장소 생성: 이름 `<아이디>.github.io`
3. 소스 push (main이 아닌 **source 브랜치**에 — main은 배포 결과물이 차지함):
   ```bash
   git init && git add . && git commit -m "portfolio"
   git branch -M source
   git remote add origin https://github.com/<아이디>/<아이디>.github.io.git
   git push -u origin source
   ```
4. 배포:
   ```bash
   npm install
   npm run deploy        # build 후 main 브랜치로 publish
   ```
5. 저장소 Settings → Pages → Branch: `main` 확인 → `https://<아이디>.github.io` 접속

## 내용 수정할 때

`src/portfolio.js` 수정 → `npm run deploy` 끝.

## 교체/추가 권장

- [ ] `src/assets/images/`의 로고들(cmuLogo, nhncloudLogo, naverLogo 등)은
      **임시 모노그램**임 — 공식 로고로 교체 권장 (같은 파일명으로 덮어쓰기)
- [ ] `public/Yoonmee_Hwang_Resume.pdf` — 이력서 최신본으로 갱신 (resume-kit에서 빌드)
- [ ] MLIP 프로젝트 정리되면 `bigProjects.projects`에 추가
- [ ] Independent Study 종료(7/30) 후 문구 갱신
- [ ] 색상 바꾸려면 `src/_globalColor.scss`

## 끈 섹션 (필요하면 display: true로)

openSource(GitHub 핀 저장소 — 켜려면 .env에 GITHUB_USERNAME, USE_GITHUB_DATA=true,
GITHUB_TOKEN 필요), blogs, talks, podcast, twitter

## 로고 관련 (2차 업데이트)

- CMU / 경희대 / NHN / Naver 로고는 **Wikimedia Commons의 공식 로고 파일을 hotlink** 하도록
  설정됨 (Special:FilePath URL). 브라우저에서 정상 표시됨.
- 더 안정적으로 하려면: 해당 SVG를 다운받아 `src/assets/images/`에 넣고
  portfolio.js에서 `require("./assets/images/파일명.svg")`로 되돌리면 됨.
- NHN Cloud 항목은 현재 NHN 그룹 로고 사용 — NHN Cloud 전용 CI 원하면
  company.nhncloud.com 홍보자료에서 받아 교체.
- Achievements 배지(CKA/CKAD/수상)와 프로젝트 카드 이미지는 아직 모노그램 —
  CNCF 공식 배지 이미지(Credly에서 본인 배지 다운로드)로 교체 권장.
