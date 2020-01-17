---
layout: post
title: Centos 6 Tomcat 설치
excerpt: Centos 6.10에 Apache Tomcat 7.0.96 설치 방법을 정리한다.
tags: [Linux, centos, tomcat]
comments: true
---
> Tomcat 과 Apache에 대한 기술적인 개념 설명은 Git에 있다.<br>
> Git 참고 : [Tomcat & Apache](https://github.com/devOTTO/DevNote/blob/master/tomcat.md#apache--tomcat)

Centos 6에서 Tomcat을 설치 할 때 두 가지 방법이 있다.<br>
편의상 모든 설치는 root 권한을 갖고 진행한다 가정한다.<br>
> `sudo su -`<br>

## yum으로 설치
* 설치 가능한 리스트 확인

    `yum list | grep tomcat` 
* Tomcat 설치

    `sudo yum install -y tomcat*`

## Core 파일 직접 설치
1. 자바 설치
* 설치 가능한 자바 목록 확인

    `yum list java*jdk-devel`
* 원하는 버전 설치

    `yum install -y java-1.8.0-openjdk-devel.x86_64`
* 자바 설치 확인

    `java -version`

    ![image](https://user-images.githubusercontent.com/42940194/72598006-4cfd6d80-3952-11ea-865d-82a91ad3bb93.png)

2. Tomcat 설치
* Tomcat core 다운
    * 해당 링크에서 tar.gz로 링크 주소 복사 http://tomcat.apache.org/download-70.cgi
    * 원하는 경로로 이동 

        `cd /usr/local`
    * `wget http://mirror.navercorp.com/apache/tomcat/tomcat-7/v7.0.99/bin/apache-tomcat-7.0.99.tar.gz`
    * 압축 해제

        `tar zxf apache-tomcat-7.0.99.tar.gz`
    * Tomcat 실행

        `./bin/startup.sh`

    * 접속 확인 - ip주소:8080(기본 포트)
    ![image](https://user-images.githubusercontent.com/42940194/72598344-f93f5400-3952-11ea-9060-9ac8d5197bb1.png)


## Tomcat 환경 설정

* Tomcat 환경 변수 정보

| 환경변수명 | 설명 |
| ----- | --- |
| CATALINA\_BASE | 톰캣 구동시 띄워지게 되는 웹서비스 인스턴스의 베이스 디렉토리<br>conf, logs, temp, webapps, work 디렉토리를 포함하는 홈 디렉토리를 의미한다. |
| CATALINA\_HOME | 톰캣 설치 홈 디렉토리 |
| CATALINA\_TMPDIR | 톰캣 인스턴스의 임시 디렉토리 |
| JRE\_HOME | 자바 런타임 디렉토리 |
| CLASSPATH | 클래스패스 경로 |

* `./bin/version.sh`에서 변수 정보 확인 

* catalina.sh에서 추가 설정을 할 경우 자동으로 `setenv.sh`를 로드하도록 설정 되어 있으므로, `setenv.sh` 파일에 환경 변수 셋팅 추가
* `vi /bin/setenv.sh` 에서

```
JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.232.b09-1.el6_10.x86_64
```

* `setenv.sh` 권한 변경 **(중요)**

    `chmod +x tomcat/bin/setenv.sh`
    > 새로 생성한 setenv.sh에 실행 권한을 주지 않으면 적용이 안된다. 에러도 뜨지 않고 톰캣도 정상 구동 되기 때문에 왜 안될까 하고 많은 고민을 하는 상황이 발생할 수 있다!

* 변경된 version 확인

![image](https://user-images.githubusercontent.com/42940194/72598993-4243d800-3954-11ea-8822-79956b4d25b5.png)

<br>
> Tomcat과 Apache 연동은 다음 포스트에 남기겠다.

<br>
* 오탈자나 잘못된 부분 지적 감사히 수정하겠습니다 😆

**참고링크**
> [[톰캣] 디렉토리 구성 및 환경변수](https://pshcode.tistory.com/105)
