---
layout: post
title: NAVER TECH CONCERT FRONT END - REVIEW 2
excerpt: "데이터 상태 관리. 그것을 알려주마"
tags: [chat, seminar, review, FE]
comments: true
---

### 데이터 상태 관리. 그것을 알려주마
#### 최현철님 - NAVER PWE FE(네이버메일, 클라우드)
---

> 1.상태관리란 무엇인가?<br>
> 2.jQuery 시절 상태관리<br>
> 3.AngularJS 의 상태관리<br>
> 4.Flux 구조의 상태관리 (with Redux)<br>

#### 1.상태관리란 무엇인가?

* 눈에 보이는 것과 보이지 않는 것
	* ex) 네이버 메일함
		* 현재 메일함
		* 메일 리스트
		* 각 메일의 제목
		* 각 메일의 체크박스
		* 각 메일의 중요 표시 여부
	* spinner<br>
<br>
* 무엇이 문제인가요?
	* 상태는 각각의 뷰에서, 때로는 뷰와 상관없이 필요에 의해 실시간, 비동기로 계속해서 변화<br>
->  결국 상태가 언제, 어떻게, 왜 변화했는지 제어할 수 없는 상황에 이르게 됨<br>
<br>
* 상태 관리 패러다임의 변화
	* jQuery -> AngularJS -> Redux

#### 2.jQuery 시절 상태관리

* html Element 에 동작을 jQuery 를 이용해 붙임<br>
-> 각 element에 data를 저장해둠

* jQuery 상태 관리 무엇이 문제인가요?
	* Element b - 동작(Click) B
	*  Element A 를 선택해서 상태를 가져옴
	* Element C를 선택해서 상태를 가져옴
	* 가져온 데이터를 조합
	* API 호출
	* 응답 값이 내려옴
	* 응답 값 정제
	* Element B 를 선택해서 상태 업데이트<br>
<br>
* jQuery 상태 관리 정리

> * jQuery 개발은 DOM 에 jQuery로 동작을 입히는 것
> * DOM 이 베이스
> * 각 엘레먼트에 상태 저장
> * 레거시가 바뀌어서 관리하기 어려운 것

#### 3.AngularJS 의 상태관리
 [NAVER D2-AngualrJS 선택 가이드](https://d2.naver.com/helloworld/1172239)

* AngularJS의 구조
	* Service (Logic/State)
	* Controller (Logic/State : 뷰를 만들어 줌)
	* View<br>
<br>
* AngularJS 상태 관리 무엇이 문제인가요?
	* 서비스에서 데이터를 가져옴
	* 가져온 데이터를 조합
	* API 호출
	* 응답 값이 내려옴
	* 응답 값 정제
	* 모듈 B 의 상태 업데이트<br>
<br>
* AngularJS 상태 관리 정리 

> 어디서 문제를 찾아야 되는지 정도까지는 그나마 가능

#### 4.Flux 구조의 상태관리 (with Redux)

*상태(데이터)를 언제, 왜, 어떻게 변화  했는지 알기가 어려움*

* Redux
	* FLUX
	* CQRS(Command and Query Responsibility Segregation)
	* Event Sourcing

<p style="text-align: center;">
<img src="https://user-images.githubusercontent.com/42940194/56305734-c118a400-617b-11e9-9336-5c700963e5fe.png" height="300px" >
</p>
* Store : JS object로 관리됨(상태 : 읽기 전용)
* View : 상태를 Display 해 주는 컴포넌트

* Redux 무엇이 문제인가요?
> * 많은 보일러 플레이트
> * 과한 기술일지도?
> * 어렵다..

#### 정리

> * FE 앱은 상태(데이터)들의 유기적인 집합체
> * 상태 관리는 DOM의 변화와 비동기 동작 간의 개념 충돌 등 여러 이슈가 발생하였음
> * 상태 관리에 대한 다양한 접근법이 제시되었고 현재로 올 수 록 DP< 중심에서 상태 중심의 개발 방법이 제시
> * 관점의 변화가 필요하고, 이에 따라 개발 방식 또한 변화 되어야함
> * 하지만 현재는 레거시(jQuery)\와 AngularJS, Redux 등이 혼재하기 때문에 경우에 따라 빠르게 관점의 적응이 필요(결국 다 알아야..)
> * 사실 정답은 없음, 상태 관리 방법은 앱의 전체 구조, 아키텍처를 결정하는 매우 중요한 요소이기 때문에 앱 개발 시작 전 치열하게 고민해야함

#### Q&A

> Q : 윈도우에 많은 데이터를 넣지 않아야 하는 이유<br>
> A : 언제 바꿨는지 찾기 힘들다 - 차라리 DOM에 있는게 편하더라

> Q : mobx가 redux 대체 가능?<br>
> A : mobs 보일러 플레이트가 많이 없어지는데 디버깅이 어렵다고 함

<br>
<br>
* 오탈자나 잘못된 부분 지적 감사히 수정하겠습니다 😆