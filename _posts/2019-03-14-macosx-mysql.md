---
layout: post
title: MAC OSX 에서 MySQL DB 설치하기
excerpt: "MAC OSX 에서 MySQL DB 설치하기 첫번째 포스트"
tags: [mysql, MacOSX, Homebrew, DB ,study ,java, jdbc]
comments: true
---

[지난 포스팅](https://devotto.github.io/articles/2019-03/macosx-docker-oracle)에서 Oracle DB 를 설치 해서 사용했었는데, **토비의 스프링** 스터디를 시작해서, 예제에서 사용하는 MySQL 을 깔기로 했다.  

Docker를 사용해야 하는 Oracle 과 달리 MySQL 은 Homebrew 를 통해서 설치만 하면 되서 매우 간단했다. 

## Homebrew 이용 MySQL 설치
맥북 유저라면 친숙할 터미널 창에서

`brew update`를 사용해 brew를 최신 버전으로 업데이트 해준다.

`brew install mysql` 를 사용해 mysql 을 install 한다.

*원하는 다른 버전이 있다면 `mysql@5.5`와 같이 입력해 주면 된다.*
{: .notice}

`brew list` 로 설치 완료 된 것을 확인 한다.

## MySQL 설정

`mysql.server start`  명령어로 MySQL 서버를 실행시킨다.

![image](https://user-images.githubusercontent.com/42940194/54304386-61712b00-4608-11e9-834d-8977077865a1.png)

네트워크 연결 허용을 묻는 창이 나오면 허용을 하고,

`mysql_secure_installation` 명령어를 입력을 통해 설정으로 들어간다.

[macOS MySQL 설치 및 설정 사용법](https://whitepaek.tistory.com/16) 해당 링크에서 자세히 설명되는 MySQL 설정을 따라 하고, 

`mysql -uroot -p` 	입력 후 설정에서 지정한 비밀번호로 로그인 하면, 쉘이 `mysql>`로 변경 된다!

![image](https://user-images.githubusercontent.com/42940194/54304435-79e14580-4608-11e9-839c-3ef141921cdf.png)

나갈땐 `exit` 나 `quit`을 통해 나갈 수 있다.

서버 종료 명령어는 `mysql.server stop`이다!

<br>
<br>
* 오탈자나 잘못된 부분 지적 감사히 수정하겠습니다 😆

<br>
**참고링크**
> [macOS MySQL 설치 및 설정 사용법](https://whitepaek.tistory.com/16)
