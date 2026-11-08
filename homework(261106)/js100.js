// JavaScirpt 기초문법 및 연산자 복습문제(100문제)

/* 문제별로 영역 구분하는 방법
console.log('"문제1";)
console.log("출력값:", 10 / 3) '출력값_부분에는 내가 적고 싶은 문구 작성 / 10/3은 예시 */

// Part 1. 변수 선언과 값 변경(1~10)

// 문제1. let으로 age 변수를 선언하고 25를 저장한 후 출력
// let : 값 수시 변경 가능
console.log("문제 1번 출력값 : "); // 코멘트

let age = 25; 
console.log(age);

console.log(""); // 빈 줄 추가하기

// 문제2. const로 userName 변수를 선언하고 '홍길동'을 저장한 후 출력
// const : 값 수시 변경 불가능
console.log("문제 2번 출력값 : "); // 코멘트

const userName = '홍길동';
console.log(userName);

console.log(""); // 빈 줄 추가하기

// 문제3. let으로 price를 선언하고 1000을 저장, 이후 2000으로 변경하고 출력
console.log("문제 3번 출력값 : "); // 코멘트

let price = 1000; // 기존 가격
price = 2000; // 변경 가격
console. log(price);

console.log(""); // 빈 줄 추가하기

// 문제4. 값을 저장하지 않은 data 변수를 선언하고 출력, 어떤 값이 출력되는지 확인
// undefined : 값이 할당되지 않은 상태를 확인하는 문제
console.log("문제 4번 출력값 : "); // 코멘트

let data; // 값이 할당되지 않은 상태
console.log(data); // undefined 출력

console.log(""); // 빈 줄 추가하기

// 문제5. 이름 김철수, 나이 30, 키 178.5, 학생여부 false를 각각 변수에 저장하고 출력
console.log("문제 5번 출력값 : "); // 코멘트

const name = '김철수';
console.log(name); 

let ageKim = 30;
console.log(ageKim);

let height = 178.5
console.log(height);

let student = false;
console.log(student);

console.log(""); // 빈 줄 추가하기  

// 문제6. let a = 10; let b = a; a = 30; console.log(a); console.log(b); 출력 결과 예상
console.log("문제 6번 출력값 : "); // 코멘트

let a = 10;
let b = a; // b에 a의 값 10이 복사됨
a = 30; 
console.log(a); // 30 출력
console.log(b); // 10 출력

console.log(""); // 빈 줄 추가하기  
/* a =30 기존 a의 값 변경! 
여기서 주의할 점_a의 값만 변경된 상태
b는 30으로 바뀌지 않은 이유? 
앞에서 let b = a; 라고 선언했을 때, 
b는 a의 값 10을 복사한 것이기 때문에 이후 a의 값이 변경되어도 b에는 영향을 주지 않음. */

// 문제7. let score = 80; let score = 90; 코드의 오류 원인을 설명하고 수정
console.log("문제 7번 출력값 : "); // 코멘트

/* let score = 80; 변경전
console.log(score); */
let score1 = 80; //변경후
console.log(score1);

/* let score = 90; 변경전
console.log(score); */
let score2 = 90; //변경후
console.log(score2);

console.log(""); // 빈 줄 추가하기  

/* 오류원인 : 기존 score라는 이름 중복으로 인해 값 처리 x
  해결 방법 : score라는 이름 변경(중복되지 않게) */

// 문제8. const maxValue = 100; maxValue = 200; 코드의 오류 원인을 설명
console.log("문제 8번 출력값 : "); // 코멘트

const maxValue = 100; 
console.log(maxValue);

/* const maxValue = 200;
console.log(maxValue); */

console.log(""); // 빈 줄 추가하기 

/* 오류원인 : const로 선언된 변수는 값 변경 불가
  해결 방법 : const를 let으로 변경하거나, maxValue라는 이름 변경(중복되지 않게) */

// 문제9. 다음 변수명 중 사용할 수 없는것을 찾고 수정
console.log("문제 9번 출력값 : "); // 코멘트

/* let 1score = 100; 변경전
console.log(1score); */
let score3 = 100; // 변경후
console.log(score3);
// 변수이름은 숫자로 시작할 수 X → 변수이름 앞에 숫자를 뒤로 옮겨서 실행

let myName = '홍길동';
console.log(myName);

/* let user age2 = 20; 변경전
console.log(age2); */
let userage2 = 20; // 변경후
console.log(userage2);
// 중간에 공백사용 불가 → 공백 삭제 후 실행

let $money = 5000;
console.log($money);

/* let user-name2 = '김철수'; 변경전
console.log(user-name2); */
let user_name2 = '김철수'; // 변경후
console.log(user_name2);
// 하이픈-사용 불가 → 언더바 사용 대체 후 실행
console.log(""); // 빈 줄 추가하기

// 문제10. 다음 중 중복 선언이 가능한 코드 찾기
console.log("문제 10번 출력값 : "); // 코멘트
A :
var a2 = 10; 
var a2 = 20; // 중복 선언 가능
console.log(a);

/* B : 
let b = 10; 
let b = 20; 중복 선언 불가
console.log(b); */

/* C : 
const c = 10; 
const c = 20; 중복 선언 불가
console.log(c); */

console.log(""); // 빈 줄 추가하기

/* 변수 중복 선언 가능 or 불가 여부
var : 같은 이름의 변수를 여러번 선언하는것을 허용
let : 값을 바꾸는건 가능하지만, 같은 이름으로 변수를 두번 선언하는것은 허용x (즉, 중복선언X / 값 변경 O)
ex) let b = 20; 변수 중복선언으로 오류 / b = 30; 기존 변수의 값 변경이므로 가능
const : 처음 저장한 값을 다시 변경할 수 없기때문 */

// Part 2. 산술연산자 (11~20)
// 문제11. a=15, b=4를 선언하고 덧셈, 뺄셈, 곱셈, 나눗셈을 각각 출력
console.log("문제 11번 출력값 : "); // 코멘트

let a3 = 15;
let b3 = 4;
console.log(a3 + b3); // 덧셈
console.log(a3 - b3); // 뺄셈
console.log(a3 * b3); // 곱셈
console.log(a3 / b3); // 나눗셈

console.log(""); // 빈 줄 추가하기

// 문제12. 100을 7로 나눈 나머지를 출력
console.log("문제 12번 출력값 : "); // 코멘트

let a4 = 100;
let b4 = 7;
console.log(a4 % b4); // 100을 7로 나눈 나머지 출력

console.log(""); // 빈 줄 추가하기

// 문제13. 2의 5제곱을 ** 연산자로 계산하여 출력
console.log("문제 13번 출력값 : "); // 코멘트

let a5 = 2;
let b5 = 5;
console.log(a5 ** b5); // 2의 5제곱 출력 (js에서 **은 거듭제곱 연사자 표시)

console.log(""); // 빈 줄 추가하기

// 문제14. a=10, b=3일 때 a / b와 a % b의 결과를 예상
console.log("문제 14번 출력값 : "); // 코멘트

let a6 = 10;
let b6 = 3;
console.log(a6 / b6); // 나눗셈 연산자(/) : 나눈 결과(몫)을 구함
console.log(a6 % b6); // 나머지 연산자(%) : 나누고 남은 나머지를 구함 (짝수화 홀수를 구분할때도 많이 사용)

console.log(""); // 빈 줄 추가하기

// 문제15. console.log(10 + 5 * 2); 결과를 예상
console.log("문제 15번 출력값 : "); // 코멘트

let a7=10
let b7=5
let c7=2
console.log(a7 + b7 * c7); // 10 + 5 * 2 = 10 + 10 = 20     
/* 연산자 우선순위 : 곱셈(*)이 덧셈(+)보다 우선순위가 높음
1. 곱셈부터 계산 5 * 2 = 10
2. 그다음 덧셈을 계산 10 + 10 = 20 

JavaScript에서 기본적인 산술 연산자의 계산 순서는 다음과 같음
1순위 : () (괄호)
2순위 : ** (거듭제곱)
3순위 : *, /, % (곱셈, 나눗셈, 나머지)
4순위 : +, - */
console.log(""); // 빈 줄 추가하기

// 문제16. console.log((10 + 5) * 2); 결과를 예상
console.log("문제 16번 출력값 : "); // 코멘트

let a8=10
let b8=5
let c8=2
console.log((a8 + b8)*c8);
console.log(""); // 빈 줄 추가하기

// 문제17. console.log(20 - 4 * 3 + 10); 결과를 예상
console.log("문제 17번 출력값 : "); // 코멘트

let a9=20
let b9=4
let c9=3
let d9=10
console.log(a9 - b9 * c9 + d9); // 20-(4*3)+10 → 20-12+10 = 18;
console.log(""); // 빈 줄 추가하기

// 문제18.  console.log(2 ** 3 + 10 % 3 * 5); 결과를 예상
console.log("문제 18번 출력값 : "); // 코멘트

let a10=2
let b10=3
let c10=10
let d10=3
let e10=5
console.log(a10 ** b10 + c10 % d10 * e10); 
/* 2**3 = 8, 
10 % 3 = 1, 
1 * 5 = 5,
8+(1*5) = 13 
연산자 우선순위 : ** > % > * > + */
console.log(""); // 빈 줄 추가하기

// 문제19. 사과 한 개 1200원, 5개 구매 시 총금액을 변수와 연산자로 계산
console.log("문제 19번 출력값 : "); // 코멘트

let applePrice = 1200; // 사과 한 개 가격
let appleCount = 5; 
let totalPrice = applePrice * appleCount; // 총금액 계산
console.log(totalPrice); // 총금액 출력 
console.log(""); // 빈 줄 추가하기

// 문제20. 125분을 시간과 분으로 나누어 출력,  /, %, Math.floor()를 사용
console.log("문제 20번 출력값 : "); // 코멘트

let totalMinutes = 125; // 총 분
let hours = Math.floor(totalMinutes / 60);  // 시간 계산 (125분 / 60 = 2시간)
/* totalMinutes / 60 : 총 분을 60으로 나누어 시간 계산 → 2.0833333값 출력
Math.floor() : 소수점 이하를 버림하여 정수로 반환하는 함수 (음수에서는 더 작은 정수 방향으로 내림)
2.0833333값 출력 → 2로 출력 */

let minutes = totalMinutes % 60;    // 나머지 계산 (125분 % 60 = 5분)
/* 125분 안에는 60분이 두 번 들어가고, 5분이 남음
여기서 %는 나머지를 구하는 연산자
해당 코드를 말로 풀어보면
125분을 60으로 나눈 나머지를 구하면 5분이 남는다. 
60 × 2 = 120분 
총 125 - 120분 = 나머지 5분 */
console.log("시간:", hours, "분:", minutes);    
console.log(""); // 빈 줄 추가하기

// Part 3. 문자열 결합과 연산 순서 (21~30)
// 문제21. console.log(10 + 20 + "30"); 결과를 예상
console.log("문제 21번 출력값 : "); // 코멘트

let a11 = 10;
let b11 = 20;
let c11 = "30";
console.log(a11 + b11 + c11);
/* 10 + 20 = 30 
"30" 숫자가 아닌 문자 30으로 인식
= "3030" (숫자+문자열 결합) */
console.log(""); // 빈 줄 추가하기

// 문제22. console.log("10" + 20 + 30); 결과를 예상
console.log("문제 22번 출력값 : "); // 코멘트

let a12 = "10";
let b12 = 20;
let c12 = 30;
console.log(a12 + b12 + c12);
/* "10" + 20 = "1020" (문자+숫자열 결합)
"1020" + 30 = "102030" (문자숫자열 + 숫자열 결합) */
console.log(""); // 빈 줄 추가하기

// 문제23. console.log(10 + "20" + 30); 결과를 예상
console.log("문제 23번 출력값 : "); // 코멘트

let a13 = 10;
let b13 = "20";
let c13 = 30;
console.log(a13+b13+c13);
/* 10 + "20" = "1020" (숫자열 + 문자열 결합)
"1020" + 30 = "102030" (숫자문자열 + 숫자열 결합) */
console.log(""); // 빈 줄 추가하기

// 문제24. console.log(10 + 20 + 30 + "원"); 결과를 예상
console.log("문제 24번 출력값 : "); // 코멘트

let a14 = 10;
let b14 = 20;
let c14 = 30;
let d14 = "원";
console.log(a14 + b14 + c14 + d14);
/* 10+20+30(60_숫자열) + "원"(문자열)=60원 */
console.log(""); // 빈 줄 추가하기

// 문제25. console.log("합계: " + 10 + 20); 결과를 예상
console.log("문제 25번 출력값 : "); // 코멘트

let a15 = "합계";
let b15 = 10;
let c15 = 20;
console.log(a15 + b15 + c15);
/* "합계"(문자열)+10+20(숫자열)= 합계1020
JavaScript에서는 문자열이 하나라도 포함된 상태로 +를 사용하면 숫자를 계산하는 대신 문자열을 이어 붙임

"합계"는 문자열, 10은 숫자 → 문자열과 숫자를 +로 연결하면 문자열이 됨 "합계10"
"합계10"은 문자열 + 20은 숫자 → 다시 문자열로 이어 붙임 "합계1020"  */
console.log(""); // 빈 줄 추가하기

// 문제26. console.log("합계: " + (10 + 20)); 결과를 예상
console.log("문제 26번 출력값 : "); // 코멘트

let a16 = "합계";
let b16 = 10;
let c16 = 20;
console.log(a16 + (b16 + c16));
/* "합계"(문자열)+(10+20=30 숫자열)
합계30 */ 
console.log(""); // 빈 줄 추가하기

// 문제27. a=5, b="10"일 때 a+b와 a*b의 결과를 예상
console.log("문제 27번 출력값 : "); // 코멘트

let a17 = 5;
let b17 = "10";
console.log(a17 + b17);
/* 5 + "10" = "510" (숫자열 + 문자열 결합) */
console.log(a17 * b17);
/* 5 * "10" = 50 (숫자열 * 문자열 → 문자열을 숫자로 변환 후 계산)
여기서 중요한점! 위부분에서 아래처럼 얘기했지만, JavaScript에서 +와 *는 작동 방식이 다르다는 것!!
(JavaScript에서는 문자열이 하나라도 포함된 상태로 +를 사용하면 숫자를 계산하는 대신 문자열을 이어 붙임)

JavaScript는 연산자에 따라 문자열을 처리하는 방법이 달라짐
+ : 문자열 연결 기능도 가지고 있음
* : 문자열 연결 기능이 없음, 따라서 계산을 위해 문자열을 숫자로 변환 
(JavaScript에서 *는 곱셈만 할 수 있고, 문자열을 연결하는 기능은 없음) 

ex_ 5 + "10"(문자열 연결) = "510"
5 * "10"(문자열을 숫자로 변환 후 곱셈) = 50 */
console.log(""); // 빈 줄 추가하기

// 문제28. "100" - 20, "100" * 2, "100" / 4의 결과를 예상
console.log("문제 28번 출력값 : "); // 코멘트

let a18 = "100";
let b18 = 20; 
let c18 = 2
let d19 = 4
console.log(a18 - b18);
// "100" - 20 = 80 (문자열을 숫자로 변환 후 뺄셈)
console.log(a18 * c18);
// "100" * 2 = 200 (문자열을 숫자로 변환 후 곱셈)
console.log(a18 / d19);
// "100" / 4 = 25 (문자열을 숫자로 변환 후 나눗셈)
console.log(""); // 빈 줄 추가하기

// 문제29. 이름과 나이를 변수에 저장하고 "홍길동님의 나이는 25세입니다."를 문자열 결합으로 출력
console.log("문제 29번 출력값 : "); // 코멘트

const name29 = "홍길동";
let age29 = 25;
console.log(name29 + "님의 나이는 " + age29 + "세입니다."); // "문자열 결합시 출력 문구"
console.log(""); // 빈 줄 추가하기

/* 문제30. a=10, b=20, c="30"일 때 다음 결과를 예상
a+b+c / 10+20+"30" = 3030
c+a+b / "30"+10+20 = 301020
a+c+b / 10+"30"+20 = 103020
a*2+c / 10*2+"30" = 2030 */
console.log("문제 30번 출력값 : "); // 코멘트

let a19 = 10;
let b19 = 20; 
let c19 = "30"
console.log(a19 + b19 + c19);
console.log(c19 + a19 + b19);
console.log(a19 + c19 + b19);
console.log(a19 * 2 + c19);
console.log(""); // 빈 줄 추가하기

// Part 4. 증감연산자 (31~45)
// 문제31. let a=10; a++; console.log(a); 결과를 예상
console.log("문제 31번 출력값 : "); // 코멘트

let a20 = 10;
a20++; 
/* a20 = a20 + 1; (a20의 값이 1 증가)
++는 증감 연산자 중 하나로, 변수의 값을 1 증가시킴
즉, a가 10에서 11로 바뀜 */

console.log(a20); // 변수 a의 현재 값을 화면에 출력
console.log(""); // 빈 줄 추가하기

// 문제32. let a=10; a--; a--; console.log(a); 결과를 예상 
console.log("문제 32번 출력값 : "); // 코멘트

let a21 = 10;
a21--;
a21--;
/* a21 = a21 - 1; (a21의 값이 1 감소)
--는 증감 연산자 중 하나로, 변수의 값을 1 감소시킴
즉, a가 10에서 9로 바뀌고, 다시 8로 바뀜 */     
console.log(a21);
console.log(""); // 빈 줄 추가하기

// 문제33. let a=5; console.log(a++); console.log(a); 결과를 예상
console.log("문제 33번 출력값 : "); // 코멘트

let a22 = 5;
console.log(a22++); // 현재 값인 5를 먼저 출력, 출력한 다음 1을 증가 후 다음 줄에서 6을 출력
console.log(a22); // 6
console.log(""); // 빈 줄 추가하기

// 문제34. let a=5; console.log(++a); console.log(a); 결과를 예상
console.log("문제 34번 출력값 : "); // 코멘트

let a23 = 5;
console.log(++a23); // 1을 먼저 증가 후 출력, 6 출력
console.log(a23); // 6
console.log(""); // 빈 줄 추가하기

// 문제35. let a=10; console.log(a--); console.log(a); 결과를 예상
console.log("문제 35번 출력값 : "); // 코멘트

let a24 = 10;
console.log(a24--); // 현재 값인 10를 먼저 출력, 출력한 다음 1을 감소 후 다음 줄에서 9을 출력
console.log(a24); // 9
console.log(""); // 빈 줄 추가하기

// 문제36. let a=10; console.log(--a); console.log(a); 결과를 예상
console.log("문제 36번 출력값 : "); // 코멘트

let a25 = 10;
console.log(--a25); // 1을 먼저 감소 후 출력, 9 출력
console.log(a25);
console.log(""); // 빈 줄 추가하기

// 문제37. let a=10; let b=a++; console.log(a,b); 결과를 예상
console.log("문제 37번 출력값 : "); // 코멘트

let a26 = 10;
let b26 = a26++; 
/* a의 값을 1증가
a++는 현재 값을 먼저 다른 변수에 전달하고, 그다음 원래 변수의 값을 1 증가시킨다는 것 
1. 처음 변수 상태 : let a26 = 10; let b26 =(미정) a26++;의 값 가져오기
2. a26++는 증가하기 전의 값인 10을 먼저 전달, 따라서 b26에는 10이 저장
3. 그다음 a26이 1 증가 / a26은 10에서 11로 변경, b26은 이미 저장된 10을 그대로 유지

b26은 11로 바뀌지 않는 이유 : 
b = a++ → b에는 증가하기 전 값이 저장
b = ++a → a를 먼저 증가시킨 후, 증가한 값이 b에 저장 */ 
console.log(a26, b26); // 11, 10
console.log(""); // 빈 줄 추가하기  

// 문제38. let a=10; let b=++a; console.log(a,b); 결과를 예상
console.log("문제 38번 출력값 : "); // 코멘트

let a27 = 10;
let b27 = ++a27; // let b(값 미정), ++a → a를 먼저 증가시킨 후, 증가한 값이 b에 저장 11
console.log(a27,b27); // 11,11
console.log(""); // 빈 줄 추가하기  

// 문제39. let a=5, b=10; let c=a++ + b; console.log(a,b,c); 결과를 예상
console.log("문제 39번 출력값 : "); // 코멘트

let a28 = 5;
let b28 = 10;
let c28 = a28++ + b28; // 5 + 10 =15
console.log(a28,b28,c28); // 6 10 15
console.log(""); // 빈 줄 추가하기  

// 문제40. let a=5, b=10; let c=++a + b--; console.log(a,b,c); 결과를 예상
console.log("문제 40번 출력값 : "); // 코멘트

let a29 = 5;
let b29 = 10;
let c29 = ++a29 + b29--; // 6 + 10 = 16
console.log(a29,b29,c29); // 6 9 16
console.log(""); // 빈 줄 추가하기 
/* a++(후위증가연산자) : 현재값을 먼저 사용하고, 그다음 1을 증가시킴
   ++a(전위증가연산자) : 먼저 1을 증가시키고, 증가한 값을 사용 */ 

// 문제41. let a=10, b=3; let c=a-- - ++b; console.log(a,b,c); 결과를 예상
console.log("문제 41번 출력값 : "); // 코멘트

let a30 = 10;
let b30 = 3;
let c30 = a30-- - ++b30; // 10 - 4 = 6
console.log(a30,b30,c30); // 9 4 6
console.log(""); // 빈 줄 추가하기

// 문제42. let x=5, y=10; x=++y - x++; console.log(x,y); 결과를 예상
console.log("문제 42번 출력값 : "); // 코멘트

let x = 5;
let y = 10;
x = ++y - x++; // 11 - 5 = 6
console.log(x,y); //  6 11
console.log(""); // 빈 줄 추가하기

// 문제43. let a=10, b=20; a=a++ + ++b; console.log(a,b); 결과를 예상
console.log("문제 43번 출력값 : "); // 코멘트

let a31 = 10;
let b31 = 20;
let c31 = a31++ + ++b31; // 10 + 21 = 31
console.log(a31,b31,c31); // 11 21 31
console.log(""); // 빈 줄 추가하기  

// 문제44. let a=5, b=10; b=a++ + --b; a=++a + b--; console.log(a,b); 결과를 예상
console.log("문제 44번 출력값 : "); // 코멘트

let a32 = 5;
let b32 = 10;
b32 = a32++ + --b32; // 5 + 9 = 14
a32 = ++a32 + b32--; // 7 + 14 = 21
console.log(a32,b32); // 21 13
console.log(""); // 빈 줄 추가하기     

// 문제45. let x=10, y=5, z=3; x=++y + z--; y=x-- - ++z; z=x++ + y--; console.log(x,y,z); 결과를 예상
console.log("문제 45번 출력값 : "); // 코멘트

let x1 = 10;
let y1 = 5;
let z1 = 3;
x1 = ++y1 + z1--; // 6 + 3 = 9
y1 = x1-- - ++z1; // 9 - 4 = 5
z1 = x1++ + y1--; // 8 + 6 = 14
console.log(x1,y1,z1); // 9 5 14
console.log(""); // 빈 줄 추가하기   

// Part 5. 복합대입연산자 (46~55)
// 문제46. let a=10; a+=5; console.log(a); 결과를 예상
console.log("문제 46번 출력값 : "); // 코멘트

let a33 = 10;
a33 += 5;
console.log(a33); // 15
console.log(""); // 빈 줄 추가하기  

// 문제47. let a=20; a-=7; console.log(a); 결과를 예상
console.log("문제 47번 출력값 : "); // 코멘트

let a34 = 20;
a34 -= 7;
console.log(a34); // 13
console.log(""); // 빈 줄 추가하기  

// 문제48. let a=5; a*=4; console.log(a); 결과를 예상
console.log("문제 48번 출력값 : "); // 코멘트

let a35 = 5;
a35 *= 4;
console.log(a35); 
console.log(""); // 빈 줄 추가하기  

// 문제49. let a=100; a/=4; console.log(a); 결과를 예상
console.log("문제 49번 출력값 : "); // 코멘트

let a36 = 100;
a36 /= 4; 
console.log(a36);
console.log(""); // 빈 줄 추가하기  

// 문제50. let a=17; a%=5; console.log(a); 결과를 예상
console.log("문제 50번 출력값 : "); // 코멘트

let a37 = 17;
a37 %= 5; 
console.log(a37);
console.log(""); // 빈 줄 추가하기  

// 문제51. let a=10; a+=5; a*=2; a-=8; console.log(a); 결과를 예상
console.log("문제 51번 출력값 : "); // 코멘트

let a38 = 10;
a38 += 5; 
a38 *= 2; 
a38 -= 8; 
console.log(a38);
console.log(""); // 빈 줄 추가하기  

// 문제52. let a=100; a/=2; a+=10; a%=7; console.log(a); 결과를 예상
console.log("문제 52번 출력값 : "); // 코멘트

let a39 = 100;
a39 /= 2; 
a39 += 10; 
a39 %= 7; 
console.log(a39);
console.log(""); // 빈 줄 추가하기  

/* 문제53. 다음 코드를 복합대입연산자로 바꾸세요
let a = 10; a=a+20; a=a*3; a=a-15; a=a/5 */
console.log("문제 53번 출력값 : "); // 코멘트
let a40 = 10;

a40 += 20; // a=a+20; 동일 코드
a40 *= 3; // a=a*3;
a40 -= 15; // a=a-15;
a40 /= 5; // a=a/5

console.log(a40);
console.log(""); // 빈 줄 추가하기  

// 문제54. 계좌 잔액 100000원에서 30000원 입금, 25000원 출금 후 잔액을 복합대입연산자로 출력
console.log("문제 54번 출력값 : "); // 코멘트

let accountBalance = 100000;
accountBalance += 30000; // 입금
accountBalance -= 25000; // 출금
console.log(accountBalance); // 10,500
console.log(""); // 빈 줄 추가하기  

// 문제55. 캐릭터 체력 100에서 30 감소, 20 회복, 15 감소 후 최종 체력을 복합대입연산자로 출력
console.log("문제 55번 출력값 : "); // 코멘트

let characterHealth = 100;
characterHealth -= 30; // 감소
characterHealth += 20; // 회복
characterHealth -= 15; // 감소
console.log(characterHealth); // 75
console.log(""); // 빈 줄 추가하기  

// Part 6. 비교연산자 (56~65)
// 문제56. 10 == 10과 10 != 10의 결과를 예상
console.log("문제 56번 출력값 : "); // 코멘트

/* let a56 = 10; 
   let b56 = 10;
console.log(a56 == b56); // ==같다
console.log(a56 != b56); // != 같지않다 */

console.log(10 == 10);
console.log(10 != 10);
console.log(""); // 빈 줄 추가하기  

// 문제57. 10 > 5, 10 < 5, 10 >= 10, 10 <= 9의 결과를 예상
console.log("문제 57번 출력값 : "); // 코멘트

console.log(10 > 5); // true
console.log(10 < 5); // flase
console.log(10 >= 10); // true
console.log(10 <= 9); // flase
console.log(""); // 빈 줄 추가하기  

// 문제58. 10 == "10"과 10 === "10"의 결과를 예상
console.log("문제 58번 출력값 : "); // 코멘트

console.log(10 == "10"); // true (== 같다)
console.log(10 === "10");// false (=== 값과 자료형이 모두 같다 )
// 왼쪽은 숫자, 오른쪽은 문자열
console.log(""); // 빈 줄 추가하기  

// 문제59. 20 != "20"과 20 !== "20"의 결과를 예상
console.log("문제 59번 출력값 : "); // 코멘트

console.log(20 != "20"); // false (!= 같지않다)
console.log(20 !== "20"); // true (!== 값과 자료형이 모두 같지않다 )
console.log(""); // 빈 줄 추가하기 
// !=는 두 값이 서로 다른지 비교하는 연산자, 그런데 !=는 비교할 때 자료형이 다르면 자동으로 true로 변환할 수 있음

// 문제60. a=15, b=20일 때 a>b, a<b, a==b의 결과를 예상
console.log("문제 60번 출력값 : "); // 코멘트

let a41 = 15;
let b41 = 20;
console.log(a41 > b41); // false
console.log(a41 < b41); // true   
console.log(a41 == b41); // false
console.log(""); // 빈 줄 추가하기

// 문제61. age 변수를 선언하고 20세 이상인지 비교한 결과를 출력
console.log("문제 61번 출력값 : "); // 코멘트

let age1 = 20;
console.log(age1 >= 20);
console.log(""); // 빈 줄 추가하기

// 문제62. score 변수를 선언하고 60점 이상인지 비교한 결과를 출력
console.log("문제 62번 출력값 : "); // 코멘트

let score4 = 60;
console.log(score4 >= 60);
console.log(""); // 빈 줄 추가하기

/* 문제63. a=10, b="10", c=20일 때 다음 결과를 예상
a==b; a===b; a+10==c; a+b=="1010"; */
console.log("문제 63번 출력값 : "); // 코멘트

let a42 = 10;
let b42 = "10"; 
let c42 = 20;

console.log(a42 == b42); // true
// ==는 자료형이 달라도 값이 같으면 true가 될 수 있으며, ==는 비교할 때 자료형을 자동으로 변환할 수 있음
console.log(a42 + 10 == c42); // true
console.log(a42 + b42 == "1010"); // true
console.log(""); // 빈 줄 추가하기

/* 문제64. let a=5, b=10; console.log(a++ == 5); console.log(a);
console.log(++b == 11); console.log(b); 결과를 예상 */
console.log("문제 64번 출력값 : "); // 코멘트

let a43 = 5;
let b43 = 10;
console.log(a43++ == 5); // true
console.log(a43); // 6
console.log(++b43 == 11); // true
console.log(b43); // 11
console.log(""); // 빈 줄 추가하기

// 문제65. a=100, b="100"의 값과 자료형이 모두 같은지 비교하는 코드를 작성
console.log("문제 65번 출력값 : "); // 코멘트

let a44 = 100;
let b44 = 100;
console.log(a44 === b44); // true
console.log(""); // 빈 줄 추가하기

// Part 7. 논리연산자 (66~75)
// 문제66. 다음 && 결과를 예상하세요: true&&true, true&&false, false&&true, false&&false.
console.log("문제 66번 출력값 : "); // 코멘트

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log(""); // 빈 줄 추가하기

// 문제67. 다음 || 결과를 예상하세요: true||true, true||false, false||true, false||false
console.log("문제 67번 출력값 : "); // 코멘트

console.log(true||true); // true
console.log(true||false); // true
console.log(false||true); // true
console.log(false||false); // false
console.log(""); // 빈 줄 추가하기
/* 논리연산자 &&는 양쪽 조건이 true여야 결과도 true / false && false는 둘다 false이므로 결과값은 false
논리연산자 ||는 둘중 하나만 true여도 전체 결과가 true가 됨! */

// 문제68. !true, !false, !!true의 결과를 예상
console.log("문제 68번 출력값 : "); // 코멘트

console.log(!true); // false
console.log(!false); // true
console.log(!!true); // true-flase-true
console.log(""); // 빈 줄 추가하기
// !연산자는 기존의 참과 거짓을 반대로 바꿔주는 역할을 함 / !!는 반대를 두번 적용 

// 문제69. a=10, b=20일 때 a>5 && b>10의 결과를 예상
console.log("문제 69번 출력값 : "); // 코멘트

let a45 = 10;
let b45 = 20;
console.log(a45 > 5 && b45 > 10); // 10>5 && 20>10 true
console.log(""); // 빈 줄 추가하기

// 문제70. a=10, b=20일 때 a>15 || b>15의 결과를 예상
console.log("문제 70번 출력값 : "); // 코멘트

let a46 = 10;
let b46 = 20;
console.log(a46 > 15 || b46 > 15); // 10>15(f) || 20>15 true
console.log(""); // 빈 줄 추가하기

// 문제71. a=10, b=20일 때 !(a>5 && b>10)의 결과를 예상
console.log("문제 71번 출력값 : "); // 코멘트

let a47 = 10;
let b47 = 20;
console.log(!(a47 > 5 && b47 > 10)); 
// 10>5(t) && 20>10(t) → !(t) → (f)
// !(10>5 && 20>10) → !(true && true) → false
console.log(""); // 빈 줄 추가하기

/* 문제72. a=10, b=20일 때 다음 결과를 예상
a==10 && b=="20"; a==10 || b==="20"; */
console.log("문제 72번 출력값 : "); // 코멘트

let a48 = 10;
let b48 = 20;
console.log(a48 == 10 && b48 == "20"); // 10==10 && 20=="20" true
console.log(a48 == 10 || b48 === "20"); // 10==10 || 20==="20" true
console.log(""); // 빈 줄 추가하기

// 문제73. age=25일 때 나이가 20세 이상이면서 30세 이하인지 확인하는 논리식을 작성
console.log("문제 73번 출력값 : "); // 코멘트

let age2 = 25;
console.log(age2 >= 20 && age2 <= 30); // true
console.log(""); // 빈 줄 추가하기

// 문제74. score=75, attendance=90일 때 점수 60 이상이면서 출석률 80 이상인지 확인
console.log("문제 74번 출력값 : "); // 코멘트

let score5 = 75;
let attendance2 = 90;
console.log(score5 >= 60 && attendance2 >= 80); // true
console.log(""); // 빈 줄 추가하기

/* 문제75. a=10, b=20, c=30일 때 결과를 예상
a<b && b<c; a>b || c>b; !(a==10); (a>5 && b<10) || c==30; !(a>5) && b>10; */
console.log("문제 75번 출력값 : "); // 코멘트

let a49 = 10;
let b49 = 20;
let c49 = 30;
console.log(a49 < b49 && b49 < c49); // true
console.log(a49 > b49 || c49 > b49); // true
console.log(!(a49 == 10)); // false
console.log((a49 > 5 && b49 < 10) || c49 == 30); // true
console.log(!(a49 > 5) && b49 > 10); // false
console.log(""); // 빈 줄 추가하기

// Part 8. 삼항연산자 (76~85)
// 문제76. age=20일 때 age>=19 ? "성인" : "미성년자"의 결과를 예상
console.log("문제 76번 출력값 : "); // 코멘트

let age3 = 20;
console.log(age3 >= 19 ? "성인" : "미성년자"); // true → "성인"
console.log(""); // 빈 줄 추가하기
/* 삼항연산자 : 조건식 ? 참일때 실행할 코드 : 거짓일때 실행할 코드
조건식이 true이면 ? 뒤의 참일때 실행할 코드가 실행되고, 조건식이 false이면 : 뒤의 거짓일때 실행할 코드가 실행됨
? 조건이 참이라면, : 조건이 거짓이라면 */

// 문제77. score=55일 때 score>=60 ? "합격" : "불합격"의 결과를 예상
console.log("문제 77번 출력값 : "); // 코멘트

let score6 = 55;
console.log(score6 >= 60 ? "합격" : "불합격"); // false → "불합격"
console.log(""); // 빈 줄 추가하기

// 문제78. 숫자 10이 양수인지 아닌지 삼항연산자로 판단하여 출력
console.log("문제 78번 출력값 : "); // 코멘트

let number = 10;
console.log(number > 0 ? "양수" : "음수"); // true → "양수"
console.log(""); // 빈 줄 추가하기

// 문제79. a=10, b=20 중 더 큰 값을 삼항연산자로 출력
console.log("문제 79번 출력값 : "); // 코멘트

let a50 = 10;
let b50 = 20;
console.log(a50 > b50 ? a50 : b50); // false → 20
console.log(""); // 빈 줄 추가하기

// 문제80. let a=10; let result=a==10 ? 100 : 200; console.log(result); 결과를 예상
console.log("문제 80번 출력값 : "); // 코멘트

let a51 = 10;
let result = a51 == 10 ? 100 : 200;
console.log(result); // true → 100
console.log(""); // 빈 줄 추가하기

// 문제81. let a=10, b=20; let result=a+(b>10 ? 5 : 15); 결과를 예상
console.log("문제 81번 출력값 : "); // 코멘트

let a52 = 10;
let b52 = 20;
let result2 = a52 + (b52 > 10 ? 5 : 15);
console.log(result2); // true → 10 + 5 = 15
console.log(""); // 빈 줄 추가하기

// 문제82. num=17이 짝수인지 홀수인지 삼항연산자로 출력
console.log("문제 82번 출력값 : "); // 코멘트

let num = 17;
console.log(num % 2 === 0 ? "짝수" : "홀수"); // false → "홀수"
console.log(""); // 빈 줄 추가하기

// 문제83. price=25000일 때 30000원 이상이면 "무료배송", 아니면 "배송비 발생"을 출력
console.log("문제 83번 출력값 : "); // 코멘트

let price2 = 25000;
console.log(price2 >= 30000 ? "무료배송" : "배송비 발생"); // false → "배송비 발생"
console.log(""); // 빈 줄 추가하기

// 문제84. score=85일 때 다음 결과를 예상 score>=90 ? "A" : score>=80 ? "B" : "C"
console.log("문제 84번 출력값 : "); // 코멘트

let score7 = 85;
console.log(score7 >= 90 ? "A" : score7 >= 80 ? "B" : "C"); // false → true → "B"
console.log(""); // 빈 줄 추가하기

// 문제85. a=10, b=20일 때 다음 결과를 예상 a>b ? a+5 : b+5
console.log("문제 85번 출력값 : "); // 코멘트

let a53 = 10;
let b53 = 20;
console.log(a53 > b53 ? a53 + 5 : b53 + 5); // false → 20 + 5 = 25
console.log(""); // 빈 줄 추가하기

// Part 9. 자료형 변환 (86~95)
// 문제86. Number("100")의 결과를 예상
console.log("문제 86번 출력값 : "); // 코멘트

console.log(Number("100")); // 100
console.log(""); // 빈 줄 추가하기

// 문제87. String(100)의 결과를 예상
console.log("문제 87번 출력값 : "); // 코멘트

console.log(String(100)); // "100"
console.log(""); // 빈 줄 추가하기

// 문제88. 10 + "20"의 결과를 예상
console.log("문제 88번 출력값 : "); // 코멘트

console.log(10 + "20"); // "1020"
console.log(""); // 빈 줄 추가하기

// 문제89. 10 + Number("20")의 결과를 예상
console.log("문제 89번 출력값 : "); // 코멘트

console.log(10 + Number("20")); // 30
console.log(""); // 빈 줄 추가하기

// 문제90. String(10) + 20의 결과를 예상
console.log("문제 90번 출력값 : "); // 코멘트

console.log(String(10) + 20); // "1020"
console.log(""); // 빈 줄 추가하기

// 문제91. a="100", b="200"일 때 a+b와 Number(a)+Number(b)의 결과를 예상
console.log("문제 91번 출력값 : "); // 코멘트

let a54 = "100";
let b54 = "200";
console.log(a54 + b54); // "100200"
console.log(Number(a54) + Number(b54)); // 300
console.log(""); // 빈 줄 추가하기

// 문제92. a=10, b="20", c=30일 때 a+b+c와 a+Number(b)+c의 결과를 예상
console.log("문제 92번 출력값 : "); // 코멘트

let a55 = "10";
let b55 = "20";
let c55 = "30";
console.log(a55 + b55 + c55); // "102030"
console.log(a55 + Number(b55) + c55); // "102030"
console.log(""); // 빈 줄 추가하기

// 문제93. Number("3.14") + 2와 String(100) + String(200)의 결과를 예상
console.log("문제 93번 출력값 : "); // 코멘트

console.log(Number("3.14") + 2); // 5.14
console.log(String(100) + String(200)); // "100200"
console.log(""); // 빈 줄 추가하기

// 문제94. a="50", b=20일 때 a+b, Number(a)-b, Number(a)*b, Number(a)/b의 결과를 예상
console.log("문제 94번 출력값 : "); // 코멘트

let a56 = "50";
let b56 = "20";
console.log(a56 + b56); // "5020"
console.log(Number(a56) - b56); // 30
console.log(Number(a56) * b56); // 1000
console.log(Number(a56) / b56); // 2.5
console.log(""); // 빈 줄 추가하기

/* 문제95.  a="10", b=20, c="30"일 때 결과를 예상
a+b+c; Number(a)+b+Number(c); String(b)+a; Number(a+b); */
console.log("문제 95번 출력값 : "); // 코멘트   

let a57 = "10";
let b57 = 20;
let c57 = "30";
console.log(a57 + b57 + c57); // "102030"
console.log(Number(a57) + b57 + Number(c57)); // 60
console.log(String(b57) + a57); // "2010"
console.log(Number(a57 + b57)); // 1020
console.log(""); // 빈 줄 추가하기

// Part 10. 종합 응용 문제 (96~100)
/* 문제96. 쇼핑몰 결제: 상품 가격 15000원, 수량 3개, 배송비 3000원.
1) 상품 총금액 계산
2) 배송비 포함 최종 결제금액 출력
3) 50000원 이상인지 비교
4) 삼항연산자로 "고액 주문"/"일반 주문" 출력 */
console.log("문제 96번 출력값 : "); // 코멘트  

let last_price = 15000;    // 상품 가격
let last_quantity = 3;     // 상품 수량
let last_delivery = 3000;  // 배송비

// 1) 상품 총금액 계산
let last_totalPrice = last_price * last_quantity;

// 2) 배송비 포함 최종 결제금액
let finalPrice = last_totalPrice + last_delivery;
console.log("최종 결제금액:", finalPrice, "원");

// 3) 50000원 이상인지 비교
console.log(finalPrice >= 50000);

// 4) 삼항 연산자로 주문 유형 출력
console.log(finalPrice >= 50000 ? "고액 주문" : "일반 주문");
console.log(""); // 빈 줄 추가하기
// 변수, 산술 연산자, 비교 연산자, 삼항 연산자를 모두 활용하는 종합 문제

/* 문제97. 시험 점수: 국어 85, 영어 90, 수학 75
1) 총점 계산 
2) 평균 계산
3) 평균 80 이상인지 비교
4) 삼항연산자로 "우수"/"보통" 출력 */
console.log("문제 97번 출력값 : "); // 코멘트

let korean = 85;
let english = 90;
let math = 75;

// 1) 총점 계산
let totalScore = korean + english + math;

// 2) 평균 계산
let average = totalScore / 3;

// 3) 평균 80 이상인지 비교
console.log(average >= 80);

// 4) 삼항 연산자로 우수/보통 출력
console.log(average >= 80 ? "우수" : "보통");
console.log(""); // 빈 줄 추가하기
// 덧셈, 나눗셈, 비교 연산자, 삼항 연산자를 활용

/* 문제98. 은행 계좌: 초기 잔액 100000원
1) 50000원 입금
2) 30000원 출금
3) 20000원 추가 출금
4) 복합대입연산자 사용
5) 최종 잔액 출력
6) 잔액 100000원 이상인지 비교
7) "잔액 충분"/"잔액 부족" 출력 */
console.log("문제 98번 출력값 : "); // 코멘트   


let balance = 100000; // 초기 잔액

// 1) 50000원 입금
balance += 50000;

// 2) 30000원 출금
balance -= 30000;

// 3) 20000원 추가 출금
balance -= 20000;

// 4) 최종 잔액 출력
console.log("최종 잔액:", balance, "원");

// 5) 잔액 100000원 이상인지 비교
console.log(balance >= 100000);

// 6) 삼항 연산자로 잔액 상태 출력
console.log(balance >= 100000 ? "잔액 충분" : "잔액 부족");
console.log(""); // 빈 줄 추가하기
// 변수, 복합 대입 연산자, 비교 연산자, 삼항 연산자를 모두 활용

/* 문제99. 놀이공원: age=15, height=155, withParent=true
입장 조건: 나이 14세 이상이고 키 150cm 이상이거나, 14세 미만이라도 보호자 동반이고 키 150cm 이상이면 입장 가능
// 조건 A: 나이가 14세 이상이고, 키가 150cm 이상
// 조건 B: 나이가 14세 미만이라도 보호자와 함께 있고, 키가 150cm 이상이면 입장
1) 논리식으로 입장 여부 계산
2) 결과를 변수에 저장
3) 삼항연산자로 "입장 가능"/"입장 불가" 출력
4) 나이를 12로 변경해 재확인 
5) 보호자 동반을 false로 변경해 재확인 */
console.log("문제 99번 출력값 : "); // 코멘트


let last_age = 15;
let last_height = 155;
let last_withParent = true;

// 1) 논리식으로 입장 여부 계산
let canEnter =
    (last_age >= 14 && last_height >= 150) ||
    (last_age < 14 && last_withParent === true && last_height >= 150);

// 2) 입장 여부 출력
console.log(canEnter);

// 3) 삼항 연산자로 입장 가능 여부 출력
console.log(canEnter ? "입장 가능" : "입장 불가");

// 4) 나이를 12세로 변경해 재확인
last_age = 12;

canEnter =
    (last_age >= 14 && last_height >= 150) ||
    (last_age < 14 && last_withParent === true && last_height >= 150);

console.log(canEnter ? "입장 가능" : "입장 불가");

// 5) 보호자 동반을 false로 변경해 재확인
last_withParent = false;

canEnter =
    (last_age >= 14 && last_height >= 150) ||
    (last_age < 14 && last_withParent === true && last_height >= 150);

console.log(canEnter ? "입장 가능" : "입장 불가");
console.log(""); // 빈 줄 추가하기
// 논리 연산자 &&, ||와 삼항 연산자 ? :를 함께 사용

/* 문제100. 다음 코드의 모든 출력 결과를 예상하고 이유를 설명
let a = 10; 
let b = 20; 
let c = 30;
a += 5; 
b--;
a = ++b + a--;
console.log(a);
console.log(b);
console.log(c);
console.log(a + b + c);
console.log(a + Number(c) + b);
console.log(a > b);
console.log(a == "35");
console.log(a === "35");
let result1 = a > b && Number(c) > 20;
let result2 = a < b || c == 30;
console.log(result1);
console.log(result2);
let result3 = result1 ? a + b : a - b;
console.log(result3);

요구사항: 
1) 출력 순서 
2) 변수 변화 
3) 전위/후위 증감 순서
4) 문자열 결합과 숫자 덧셈 구분 
5) 비교·논리 결과 
6) 삼항 선택 이유 */
console.log("문제 100번 출력값 : "); // 코멘트

let a58 = 10;
let b58 = 20; 
let c58 = 30;

console.log(a58 += 5); // 15
console.log(b58--); // 20
console.log(a58 = ++b58 + a58--); // 35
console.log(a58); // 35
console.log(b58); // 20
console.log(c58); // 30
console.log(a58 + b58 + c58); // 85
console.log(a58 + Number(c58) + b58); // 85
console.log(a58 > b58); // true
console.log(a58 == "35"); // true
console.log(a58 === "35"); // false

let last_result1 = a58 > b58 && Number(c58) > 20; 
let last_result2 = a58 < b58 || c58 == 30;
console.log(last_result1); // true
console.log(last_result2); // true

let last_result3 = last_result1 ? a58 + b58 : a58 - b58;
console.log(last_result3); // 55

/* 요구사항: 
1) 출력 순서 : 상기 표기

2) 변수 변화 :
처음 변수의 값은 a=10, b=20, c=30
   a += 5 실행 → a는 15
   b-- 실행 → b는 19
   a = ++b + a-- 실행 후 → a는 35, b는 20
   c는 값이 변경되지 않아 30
   최종 변수 값은 a=35, b=20, c=30

3) 전위/후위 증감 순서 : 
++b는 전위 증가 연산자로, b를 먼저 1 증가시킨 후 계산에 사용
따라서 b는 19에서 20이 되고, 계산에는 20을 사용
a--는 후위 감소 연산자로, 기존 a의 값인 15를 먼저 계산에 사용한 후 1 감소시킴
따라서 계산에는 15를 사용하고, a는 잠시 14가 됨
이후 20 + 15의 결과인 35가 a에 다시 저장
따라서 최종 a는 35, b는 20

4) 문자열 결합과 숫자 덧셈 구분 :
a + b + c는 숫자끼리 더하는 연산이므로 35 + 20 + 30 = 85
a + Number(c) + b도 Number()를 통해 c를 숫자 자료형으로 변환한 후 더하므로 85
문자열이 포함된 덧셈은 문자열 연결로 작동할 수 있음
예를 들어 "합계: " + 10 + 20은 "합계: 1020"이 됨
이번 문제의 두 덧셈은 모두 숫자 덧셈

5) 비교·논리 결과 : 
a > b → 35 > 20이므로 true
a == "35" → ==는 자료형을 자동 변환하여 비교하므로 true
a === "35" → ===는 자료형까지 비교하므로 숫자와 문자열이 달라 false
result1 = a > b && Number(c) > 20
→ true && true이므로 true
(&&는 양쪽 조건이 모두 참이어야 true)
result2 = a < b || c == 30
→ false || true이므로 true
(||는 둘 중 하나라도 참이면 true)

6) 삼항 선택 이유 : 
result3 = result1 ? a + b : a - b
삼항 연산자는 조건이 참이면 ? 뒤의 값을 선택하고,
거짓이면 : 뒤의 값을 선택
result1의 값이 true이므로 a + b를 선택
따라서 35 + 20 = 55가 되어 result3에는 55가 저장됨 */
console.log(""); // 빈 줄 추가하기

