---
layout: post
title: Github .gitignore 팁
excerpt: ".gitignore 설정 후 반영 오류 해결 방법"
tags: [git, algorithm, tips]
comments: true
---
## .gitignore 설정 후 반영 오류 해결 방법

요즘 깃에 [Algorithm-Study](https://github.com/devOTTO/Algorithm-Study)에서 백준 문제들을 풀어서 포스팅 하던 중, clion의 파일들이 같이 올라가버리는 바람에 revert를 하고 gitignore를 만들었다.<br>
.gitignore 사용방 법은 다음과 같다.

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
옵션을 주면 원격 저장소에 저장된 파일만 삭제 되고 로컬 저장소에 저장된 파일은 삭제 되지 않는다.<br>
그리고 파일들을 다시 추가하고 푸시하면 된다~


* 오탈자나 잘못된 부분 지적 감사히 수정하겠습니다 😆

**참고링크**
> [gitignore 파일 설정 및 반영](http://blog.naver.com/simpolor/221065977618)

