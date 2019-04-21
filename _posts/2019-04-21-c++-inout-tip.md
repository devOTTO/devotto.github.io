---
layout: post
title: C++ 입출력 팁 - 1
excerpt: "PS시 C++ 입출력"
tags: [chat, seminar, review, FE]
comments: true
---
## INTRO

* 알고리즘 문제를 풀 때 사용하는 언어 빈도: C++ > C > Java
* C언어 사용자의 경우 C++을 사용하는 것이 좋음
* C++을 사용하는 경우에 C++11, STL, scanf/printf를 사용하는 것이 좋다고 하는데..

**Point is.. WHY??**

## WHY SCANF/PRINTF?

* 결론 부터 말하면, **빠르다**
* C++ 의 CIN 과 COUT 이 느린 이유 :  사용 시 c 라이브러리의 stdio buffer와 동기화 하는 과정 때문에 iostream, stdio 의 buffer를 모두 사용해 딜레이가 발생
	
**해결법(NOT RECOMMENDED)**
```c
std::ios::sync_with_stdio(false);
std::ios_base::sync_with_stdio(false);
std::cin.sync_with_stdio(false);
```
셋 중 하나 사용 
ios::sync_with_stdio는 cpp의 iostream을 c의 stdio와 동기화시켜주는 역할을 해서 위의 함수를 사용하면 동기화를 끊고 c++만의 독립적인 버퍼를 생성하게 되고 c의 버퍼들과는 병행하여 사용할 수 없게 된다. 따라서 사용하는 버퍼의 수가 줄어들었기 때문에 속도는 높아지게 된다

**BUT** 런타임 에러 발생 가능
**따라서 printf/scanf를 사용하는 것이 좋음**

## USING SCANF/PRINTF

```c
#include <cstdio>

int main(){

int a;
scanf("%d", &a);
printf("Thre value c is %d\n", c);

return 0;
}

```

- 세부적인 입출력 팁은 다음 시간에..

**Reference**
> [cin과 cout이 scanf와 printf보다 느린 이유와 해결방법](https://jm19.tistory.com/4)

<br>
<br>
* 오탈자나 잘못된 부분 지적 감사히 수정하겠습니다 😆