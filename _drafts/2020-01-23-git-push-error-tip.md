---
layout: post
title: Github git push 시 Erro 해결 팁
excerpt: "git push -u origin master 시 error: The requested URL returned error: 403 Forbidden 오류 해결 방법"
tags: [git, algorithm, tips]
comments: true
---
## git push -u origin master 시 error: The requested URL returned error: 403 Forbidden 오류 해결 방법

기존에 존재하는 디렉토리에 git 원격 저장소 설정 시 push할 때 다음과 같은 에러를 만날 수 있다. 

### 1. .gitignore 파일 생성
- .git 파일이 위치한 폴더에 .gitignore을 생성한다

### 2. .gitignore 설정
* 파일 생성 후, git에 commit시 무시하고 싶은 파일들을 적는다. 
* 나는 clion을 사용하기 때문에 [gitignore/JetBrains.gitignore at master · github/gitignore · GitHub](https://github.com/github/gitignore/blob/master/Global/JetBrains.gitignore) 을 복붙했다. 

### 3. 저장소에 commit & push

```git
git rm -r —-cached .
git add .
git commit -m “Add .gitignore”
git push
```

`git rm —-cached`  
~~옵션을 주면 원격 저장소에 저장된 파일만 삭제 되고 로컬 저장소에 저장된 파일은 삭제 되지 않는다.~~<br>
Git Staging Area에서 제거가 되고 Working Directory는 남겨둔다. 
[참고](https://git-scm.com/docs/git-rm)<br>
그리고 파일들을 다시 추가하고 푸시하면 된다~


* 오탈자나 잘못된 부분 지적 감사히 수정하겠습니다 😆

**참고링크**
> [GitHub 403 Forbidden push 에러 :: 마이구미](https://mygumi.tistory.com/74)

https://help.github.com/en/github/using-git/changing-a-remotes-url