---
layout: post
title: MAC OSX 에서 Oracle DB 설치하기
excerpt: "MAC OSX 에서 Oracle DB 설치하기 첫번째 포스트"
tags: [oracle,MacOSX, docker, DB ,study ,java, jdbc]
comments: true
---

기존 Windows 환경에서도 mysql 만 사용해 봤어서, Java 공부를 하는 김에 Oracle DB를 사용해 봐야겠다고 결심했다.

그런데 Mac 에서는 Docker를 사용해야 Oracle DB 를 사용할 수 있다는 사실을 알게 되었다. 구글링의 결과, Docker를 사용해 DB 를 설치하는 것은 간다해 보였는데… 

## Docker 설치
[Doker-mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac) Login 후 다운로드 

설치 순서에 따라 설치 한 후 Docker Desktop is running 이 뜨면 완료!
<p style="text-align: center;">
<img src="https://user-images.githubusercontent.com/42940194/54100433-b0993f00-4401-11e9-903b-4bf0af7493f2.png" width="200" >
</p>

## Oracle DB 
- 맥 터미널에서 가장 유명하다는 이미지를 pull 시도
`pull wnameless/oracle-xe-11g`

자꾸 이런 에러가 발생했다.
`Error response from daemon: pull access denied for wnameless/oracle-xe-11g, repository does not exist or may require ‘docker login`

**이에 대한 해결 방안**
1. docker login 후 다시 시도 -> 실패
2. [Docker Hub](https://hub.docker.com/search?q=oracle&type=image) 에 oracle 검색 후 다운로드 수 많은 이미지를 pull -> **성공!**

![image](https://user-images.githubusercontent.com/42940194/54100452-cc9ce080-4401-11e9-96d9-8744d5318787.png)

![image](https://user-images.githubusercontent.com/42940194/54100467-dde5ed00-4401-11e9-8efd-40cfc436bb6d.png)

- [deepdiver/docker-oracle-xe-llg](https://hub.docker.com/r/deepdiver/docker-oracle-xe-11g)

* 터미널에서 다시 pull
`docker pull deepdiver/docker-oracle-xe-11g`

* 컨테이너 실행 : 나는 -v 옵션을 주어 재사용을 하도록 할 것이다
`docker run -d -p 49160:22 -p 49161:1521 -v ~/Users/my/oracle/data:/u01/app/oracle deepdiver/docker-oracle-xe-11g`

- ~v 옵션 주다가 에러 너무 꼬여서.. 우선은 그냥 이렇게 실행 했다.
`docker run --name oracle11g -d -p 49160:22 -p 49161:1521 deepdiver/docker-oracle-xe-11g`

- 도커 컨테이너의 1521 포트를 로컬 호스트 49161 포트로 포트 포워딩 했다는 뜻

## Oracle SQL Developer 설치
[Oracle SQL Developer Downloads](https://www.oracle.com/technetwork/developer-tools/sql-developer/downloads/index.html)

다운 받고 압축을 푸니까 이렇게 생겼다.
![image](https://user-images.githubusercontent.com/42940194/54100478-ee966300-4401-11e9-8dea-83a6f8986026.png)


첫 실행 화면
![image](https://user-images.githubusercontent.com/42940194/54100494-f950f800-4401-11e9-8ef4-0ed25710ce23.png)


왼쪽 초록색 화살표를 눌러준다.
![image](https://user-images.githubusercontent.com/42940194/54100504-0837aa80-4402-11e9-8418-e30c10973866.png)

* **Connection Name** : 나는 내 계정 이름 (아무거나 해도 된다 함)
* **Username** : system
* **Password** : oracle
* **Port** : 49161

Test 하니까 Failure.. -> 도커 컨테이너를 ~v 옵션 없이 새로 팠다.
![image](https://user-images.githubusercontent.com/42940194/54100525-21d8f200-4402-11e9-9246-fffb5e3aede8.png)

성공!
![image](https://user-images.githubusercontent.com/42940194/54100526-256c7900-4402-11e9-8ba8-c43a2960ceb0.png)


### 알게된 Docker 참고 명령어들
- 참고 링크 블로그에서 많이 참조했다.

`docker logs -f oracle11g` : 컨테이너 log 출력 상황 확인

`lsof -PiTCP -sTCP:LISTEN` : 포트 확인

`docker port oracle11g` : oracle11g 컨테이너 포트 확인

`docker exec -i -t oracle11g sqlplus` : -it옵션은 콘솔에 결과 출력. sqlplus 실행

`docker ps` : 컨테이너상태 확인<br>
`docker ps -a` : 정지된 컨테이너 까지 확인<br>

`docker stats oracle11g` : 컨테이너 상태 확인<br>
CONTAINER : 컨테이너명<br>
CPU % : CPU 사용률<br>
MEM USAGE/LIMIT : 메모리 사용량, 컨테이너에서 사용할 수 있는 메모리 제한<br>
MEM % : 메모리 사용률<br>
NET I/O : 네트워크 I/O<br>

`docker stop oracle11g` : 컨테이너 중지<br>
`docker restart oracle11g` : 컨테이너 재시작<br>
`docker pause oracle11g` : 컨테이너 일시 정지<br>
`docker unpause oracle11g` : 컨테이너 일시 정지 재시작<br>

`docker rm -f oracle11g` : 도커 이미지 삭제(-f 옵션은 실행 중 일때)

`docker images` : 도커 이미지 리스트 출력

<br>
* 오탈자나 잘못된 부분 지적 감사히 수정하겠습니다 😆

**참고링크**
> [맥(Mac)에서 오라클 11g 설치 - 도커 환경 구축하기](https://lhoris.tistory.com/18)<br>
> [Docker를 이용하여 Mac OSX에서 Oracle 사용하기 – 이승연 – Medium](https://medium.com/@adie0423/docker%EB%A1%9C-mac-osx%EC%97%90%EC%84%9C-oracle-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-13d49ab53a50)<br>
> [맥(osx)에서 oracle DB 사용하기 (docker설치)](http://vrpano.kr/bbs/board.php?bo_table=Mac&wr_id=13)