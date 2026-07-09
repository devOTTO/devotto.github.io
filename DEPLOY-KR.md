# devotto.github.io 배포 가이드

브랜치 구조:
- `backup-jekyll-blog` : 기존 Jekyll 블로그 전체 백업 (2019-2024 포스트 18개 포함)
- `source`             : 포트폴리오 소스 코드 (앞으로 여기서 작업)
- `master`             : 배포 결과물 (`npm run deploy`가 자동 관리 — 직접 커밋 금지)

## 최초 배포 (압축 풀고 이 폴더에서 순서대로)

```bash
git push origin backup-jekyll-blog   # 1) 기존 블로그 백업 push
git push -u origin source            # 2) 포트폴리오 소스 push
npm install                          # 3) 의존성 설치
npm run deploy                       # 4) 빌드 -> master로 발행 (사이트 교체)
```

Pages 설정은 이미 master 기준이라 변경 불필요. 1-2분 후 https://devotto.github.io 확인.

## 이후 수정 워크플로우

`src/portfolio.js` 수정 -> `git add/commit` (source 브랜치) -> `npm run deploy`

## 기존 블로그가 필요해지면

- 열람: `git checkout backup-jekyll-blog`
- 완전 롤백: master를 backup-jekyll-blog 시점으로 reset 후 force push
- 포스트만 살리기: 새 포트폴리오의 blogSection을 켜고 (display:true)
  Medium/Velog에 재발행한 링크를 걸어주는 방식 추천

## 남은 TODO

- [ ] public/Yoonmee_Hwang_Resume.pdf 최신본 유지 (resume-kit에서 빌드해 교체)
- [ ] NHN Cloud 전용 CI 원하면 company.nhncloud.com에서 로고 교체
- [ ] Independent Study 종료(7/30) 후 문구 갱신, 프로젝트 추가는 portfolio.js
