---
layout: post
title: MAC OSX 에서 MySQL - Nodejs Sequelize로 연동 시 에러 
excerpt: "ERROR: Client does not support authentication protocol requested by server; consider upgrading MySQL client"
tags: [mysql, MacOSX, Homebrew, DB ,study ,error, nodejs, sequelize]
comments: true
---

![image](https://user-images.githubusercontent.com/42940194/57528809-4273e880-736e-11e9-811b-37f2dc43077e.png)
`ERROR: Client does not support authentication protocol requested by server; consider upgrading MySQL client`

이런 에러가 뜬다면 MySQL 버전 차이 때문이라고 한다.
1. mysql version 다운을 시키거나 
2. 비밀번호 재 연동

`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'`

password 자리에 원하는 root 비번을 넣으면 된다. <br>

그 후에 mysql 터미널에서 <br>
`flush privileges;`	<br>
까지 해주면 에러 해결!!

![image](https://user-images.githubusercontent.com/42940194/57528746-1193b380-736e-11e9-8a67-120c660f0623.png)

간단한 걸로 너무 헤멨다 ㅠ

* 오탈자나 잘못된 부분 지적 감사히 수정하겠습니다 😆

**참고링크**
> [node.js - MySQL 8.0 - Client does not support authentication protocol requested by server; consider upgrading MySQL client - Stack Overflow](https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server)<br>
> [MySQL :: MySQL 5.5 Reference Manual :: B.4.2.4 Client does not support authentication protocol](https://dev.mysql.com/doc/refman/5.5/en/old-client.html)
