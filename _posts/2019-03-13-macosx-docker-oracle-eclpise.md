---
layout: post
title: MAC OSX 에서 Oracle DB 설치하기 (2) OJDBC
excerpt: "MAC OSX 에서 Oracle DB 설치하기 두번째 포스트 - 이클립스와의 연동"
tags: [oracle, MacOSX, docker, DB ,study ,java, jdbc]
comments: true
---

이전 포스팅 : [MAC OSX 에서 Oracle DB 설치하기](https://devotto.github.io/articles/2019-03/macosx-docker-oracle)

이전 포스팅에서 설치한 OracleDB 를 이클립스에서 사용하기 위해서는 OJDBC 를 설치하면 된다.

[Oracle Database 11g Release 2 JDBC Driver Downloads](https://www.oracle.com/technetwork/apps-tech/jdbc-112010-090769.html)
여기에서 
![image](https://user-images.githubusercontent.com/42940194/54103878-57d1a280-4411-11e9-8c7f-2bba85b0d6cf.png)
ojdbc6.jar 를 다운 받고  jdk 의 경로에 붙여 넣기 해준다.

`/Library/Java/JavaVirtualMachines/jdk1.8.0_201.jdk/Contents/Home/jre/lib/ext`

![image](https://user-images.githubusercontent.com/42940194/54103978-b4cd5880-4411-11e9-98c8-7a6f70d05613.png)
여기 위치에 끌어당겨 넣어줘도 된다.
<br>

* 다음과 같은 DAO 코드를 통해 접속하면 된다.

{% highlight java %}
public class TestDAO {
	String driver = "oracle.jdbc.driver.OracleDriver";
  String url = "jdbc:oracle:thin:@localhost:49161:xe"; //설정한 포트
	String id = "system"; //연결할 DB 아이디
  String pw = "oracle"; //pw
	DataSource dataSource;
	
	public TestDAO() {
		try {
			Class.forName(driver);
			
		Context context = new InitialContext();
		dataSource = (DataSource)context.lookup("java:comp/env/jdbc/Oracle11g");
		
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}	
    //TestDTO 형태로 전체 데이터를 받아온은 예시
	public ArrayList<TestDTO> select() {
		
		ArrayList<TestDTO> list = new ArrayList<TestDTO>();
		
		Connection con = null;
		PreparedStatement pstm = null;
		ResultSet res = null;
		
		try {
			Class.forName(driver);
			con = DriverManager.getConnection(url,id,pw);
			
			con = dataSource.getConnection();
			
			String sql = "SELECT * FROM table_name";
			pstm = con.prepareStatement(sql);
			res = pstm.executeQuery();
			
			while(res.next()) {
				int testId = res.getInt("test_id");
				String testName = res.getString("test_name");
				String testLoc = res.getString("test_loc");
				
				TestDTO testDTO = new TestDTO(testId, testName, testLoc);
				list.add(testDTO);
			}
			
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if(res != null) res.close();
				if(pstm != null) pstm.close();
				if(con != null) con.close();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
			
		
		return list;
	}
}
{% endhighlight %}

<br>
* 오탈자나 잘못된 부분 지적 감사히 수정하겠습니다 😆

**참고링크**
> [Oracle + Docker + OJDBC](https://seongjaemoon.github.io/database/2018/02/18/database-oracle6.html) <br>
> [김노새의공부방 :: Oracle 이클립스 오라클 연동하기](https://withmule.tistory.com/1)
