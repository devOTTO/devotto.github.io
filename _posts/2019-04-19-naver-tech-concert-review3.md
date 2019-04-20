---
layout: post
title: NAVER TECH CONCERT FRONT END - REVIEW 3
excerpt: "빠르게 훑어보는 웹 개발 트렌드"
tags: [chat, seminar, review, FE]
comments: true
---

### 빠르게 훑어보는 웹 개발 트렌드
#### 한장현님 - kakaobank
---

> 1.웹 개발 트렌드<br>
> 2.최근 웹 개발 방식<br>
> 3.공부하면 좋은 것<br>

#### 1. 웹 개발 트렌드

* [FERoadMAP](h)

* 웹 개발에도 트렌드가 있었다.
	1. 서버 중심으로 개발
	2. 클라이언트 중심으로 개발
	3. 고도화

1. 서버 중심으로 개발
미리 만들어 두거나 서버에서 만든 웹페이지를 제공
> 사용자가 요청한 화면을 **서버에서** **페이지 단위로** 생성해서 제공

2. 클라이언트 중심으로 개발
페이지를 부분적으로 갱신, 서버는 API 역할에 집중
> 일단 클라이언트를 준비하고 추가로 필요한 데이터를 **클라이언트가 주도적으로 요청**해서 **이미 화면에 떠있는 페이지 부분에 추가,** DOM에 적극적으로 개입

3. 고도화
프론트엔드 로직이 복잡해지면서 라이브러리 적극 활용
바벨이 많이 쓰이게 됬고, NODEJS가 JS 부상이 커짐
> **복잡해지는 프론트엔드 로직**을 체계적으로 관리하기 위해 **프레임웤, 라이브러리를 적극적으로 사용**

* +a
	- 웹 기술로 Native 앱을 만들어보자
		-  PhoneGap(Cordova), NativeScript, React Native
	* 오프라인일 때도 실행되게 하자(미국, 인도, 통신 끊기는 경우 커버 위해)
		* PWA
	* 웹 앱을 데스크탑에 설치해보자
		* Node-webkit(nw.js), Electron 

#### 2. 최근 웹 개발 방식

* 프레임워크, 라이브러리 적극 활용
	* Angular/React/Vue
<br><br>
* Component 기반
	* 동작이나 역할에 맞게 추상화된 Dom Element(JQuery를 쓰지 않아야 하는 이유)
		* 템플릿 : .html
		* 스타일 : .css/ .scss / .styl
		* 로직  : .js / .ts
		-> 컴포넌트 : .jsx / .tsx / .vue
		-> 빌드 : babel / web pack / tsc / parcel
			* javascript : .js
			* css : .css
			(vue - js/css / angular - js )
		-> 웹 브라우저에서 실행
<br><br>
* Task Runner / CLI 사용
	* Boilerplate
	* Making Components
	* Build
	* Unit / End-to-end Test
	* Running Server
	* Deploy 

#### 3. 공부하면 좋은 것

* **기본 지식**
컴포넌트도 기본 지식이 필요 
	* 레이아웃 구성 : HTML -> HTML5
	* 스타일 지정 : CSS -> CSS3 -> flex, grid model -> 스타일 라이브러리, 전처리기
	* 사용자 동작에 반응, 로직 처리 : JavaScript -> ES6 -> TypeScript -> 프레임워크(Angular/React/Vue)
 [자바스크립트 완벽 가이드 (JavaScript: The Definitive Guide)](http://www.insightbook.co.kr/book/programming-insight/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%99%84%EB%B2%BD-%EA%B0%80%EC%9D%B4%EB%93%9C) 
 [CSS 완벽 가이드](http://book.interpark.com/product/BookDisplay.do?_method=detail&sc.saNo=001&sc.prdNo=201936872&gclid=CjwKCAjwqLblBRBYEiwAV3pCJijefS93Uye0nIX9O1A0gkP2UKZtWYRE0P4lWIrlfzgL7bB6_I35QBoCs-gQAvD_BwE&product2017=true) 

* **개발 툴**
	* Git, GitHub - 생활코딩 지옥에서 온 GIt(GitHub 유지 1일 커밋을 시도해 보는 것도 좋음)
	
* **UI & UX, 디자인 시스템**
	
* **데이터 시각화** 

#### 정리

> 프론트엔드 개발 트렌드는 빠르게 변화
> 계속 찾아서 공부하자…😥

> Full-stack에는 물리적인 한계가 존재
> **전문 분야**를 선택하는 것이 효율적

> 파이팅..😂😙🥰😋😎🤯

#### Q&A
[Angular 가이드](https://angular.kr/)

> Q : 트렌드를 따라가는 좋은 법?<br>
> A : 페이스북 그룹, 뉴스 레터 구독, 세미나 참고 등



#### 후기
	한장현님의 강연에서 제일 자극을 많이 받았다.!
	1일 1커밋 도전도 강연 이후 부터 였다.
	배울 것은 끊임 없이 많은 것 같다 ㅠ

<br>
<br>
* 오탈자나 잘못된 부분 지적 감사히 수정하겠습니다 😆