# 파이썬 주말 실습 과제]
# 지금까지 배운 조건문, 반복문, 리스트, 2차원 리스트, 문자열 메서드, 딕셔너리를 활용해 풀어보세요.

# ──────────────────────────────
# 문제1) 비밀번호 검사기 [문자열 메서드, 조건문, while]
# 비밀번호를 입력 받아서 아래 규칙을 모두 지키는지 검사하세요.
# - 8자 이상
# - 공백 포함 불가
# - 숫자 1개 이상 포함
# - 영문자 1개 이상 포함
# 지키지 않은 규칙을 모두 출력하고, 통과할 때까지 다시 입력 받으세요.

# 입력 예) abc 123
# 출력 예)
# 8자 이상이어야 합니다
# 공백을 포함할 수 없습니다
# 입력 예) abcdefgh
# 출력 예)
# 숫자를 1개 이상 포함해야 합니다
# 입력 예) pass1234
# 출력 예)
# 사용 가능한 비밀번호입니다


print("1번 문제")

while True:
    password = input("비밀번호를 입력하세요: ")

    find_number = False
    find_alpha = False

    for i in password:
        if i.isdigit():
            find_number = True

        if i.isalpha():
            find_alpha = True

    if len(password) < 8:
        print("PW는 8글자 이상 입력 필수!")

    if " " in password:
        print("PW는 공백을 포함할 수 없음")

    if not find_number:
        print("숫자 1개 이상 포함")

    if not find_alpha:
        print("영문자 1개 이상 포함")

    if len(password) >= 8 and " " not in password and find_number and find_alpha:
        print("비밀번호 사용 가능")
        break
print('-'*50)
print()

# ──────────────────────────────
# 문제2) 단어 빈도 세기 [문자열 메서드, 딕셔너리, for]
# s = 'Python is fun. Python is easy! Learning python is FUN?'
# - 문장부호(. , ! ?)를 제거하고 대소문자를 구분하지 않도록 바꾸세요.
# - 각 단어가 몇 번 나왔는지 딕셔너리로 세서 출력하세요.
# - 가장 많이 나온 단어와 횟수를 출력하세요. (동점이면 먼저 나온 단어)

# 출력 예)
# python 3
# is 3
# fun 2
# easy 1
# learning 1
# 가장 많이 나온 단어: python 3

print("2번 문제")
s = 'Python is fun. Python is easy! Learning python is FUN?'
# 문장부호(. , ! ?) 제거
s = s.replace(".", "") 
s = s.replace(",", "")
s = s.replace("!", "")
s = s.replace("?", "")
s = s.lower() #소문자 변환
print(s)

words = s.split() #문장/단어별 
word_count = {} # {}_빈 딕셔너리 : 이름(키)과 값 저장 / 값을 이름과 연결할 때

for word in words:
    if word in word_count: #딕셔너리에 해당 단어가 이미 있는지 확인
        word_count[word] += 1
    else:
        word_count[word] = 1

for word, count in word_count.items():
    print(word, count)

max_word = ""
max_count = 0
for word, count in word_count.items():
    if count > max_count:
        max_count = count
        max_word = word

# sorted()를 활용한 코드 응용
# result = sorted(word_count.items(), key=lambda x: x[1], reverse=True)
# print("가장 많이 나온 단어:", result[0][0], result[0][1])

print("가장 많이 나온 단어:", max_word, max_count)
print('-'*50)
print()

# ──────────────────────────────
# 문제3) 소수 찾기 [중첩 반복, break, for-else]
# 숫자 N을 입력 받아서 2부터 N까지의 소수(1과 자기 자신으로만 나누어떨어지는 수)를
# 리스트에 담아 출력하고, 개수도 출력하세요.

# 입력 예) 30
# 출력 예)
# [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
# 소수의 개수: 10

print("3번 문제")
n = int(input("숫자 입력(소수찾기):"))
n_list = [] #[]_리스트 : 값만 저장 / 여러 값을 모을 때

for i in range(2, n + 1):
    for j in range(2, i):
        if i % j == 0:
            break
    else:
        n_list.append(i)
print(n_list)
print("소수의 개수:", len(n_list))
print('-'*50)
print()

# ──────────────────────────────
# 문제4) 좌석 예약 [2차원 리스트, while, 조건문]
# 3행 5열 좌석을 모두 'O'(빈 좌석)로 만드세요.
# '행 열' 을 입력 받아 예약하고 'X' 로 바꾸세요. 'q' 를 입력하면 종료합니다.
# - 이미 예약된 좌석이면 '이미 예약된 좌석입니다'
# - 범위를 벗어나면 '없는 좌석입니다'
# 종료할 때 좌석표와 남은 좌석 수를 출력하세요.

# 입력 예) 1 2 → 1행 2열 예약 완료
# 입력 예) 1 2 → 이미 예약된 좌석입니다
# 입력 예) 4 1 → 없는 좌석입니다
# 입력 예) 3 5 → 3행 5열 예약 완료
# 입력 예) q
# 출력 예)
    #  1 2 3 4 5(row)
# 1행: O X O O O / 1(col)
# 2행: O O O O O / 2
# 3행: O O O O X / 3
# 남은 좌석: 13

print("4번 문제")
seats = [["O"] * 5 for _ in range(3)] # for _ in range(3)_위 작업을 3번 반복(3행)

while True:
    choice = input("예약할 좌석을 입력(행&열 좌석 입력시 띄어쓰기 / 종료 q): ")

    if choice == "q":
        break

    row, col = map(int, choice.split())
    if row < 1 or row > 3 or col < 1 or col > 5:
        print("좌석 없음")

    elif seats[row - 1][col - 1] == "X":
        print("이미 예약된 좌석")

    else:
        seats[row - 1][col - 1] = "X"
        print("예약 완료")
    
    for i in range(3):
        print(f"{i + 1}행:", *seats[i])

    remaining = 0

for row in seats:
    for seat in row:
        if seat == "O":
            remaining += 1

print("남은 좌석:", remaining)
print('-'*50)
print()

# ──────────────────────────────
# 문제5) 출석부 비교 [리스트, in / not in]
# mon = ['김철수', '이영희', '박민수', '최지우', '정하늘']
# tue = ['이영희', '최지우', '한별', '김철수', '오세훈']
# 아래 항목을 각각 리스트로 만들어 출력하세요. (원래 순서 유지)
# - 이틀 모두 출석한 학생
# - 월요일에만 출석한 학생
# - 화요일에만 출석한 학생
# - 한 번이라도 출석한 학생 수

# 출력 예)
# 이틀 모두: ['김철수', '이영희', '최지우']
# 월요일만: ['박민수', '정하늘']
# 화요일만: ['한별', '오세훈']
# 출석한 학생 수: 7

print("5번 문제")
mon = ['김철수', '이영희', '박민수', '최지우', '정하늘']
tue = ['이영희', '최지우', '한별', '김철수', '오세훈']
print(", ".join(mon + tue))
print()

# 이틀 모두 출석한 학생
both = [name for name in mon if name in tue]
print("이틀모두 출석한 학생:", ", ".join(both)) #join으로 '' [] 없애기

# 월요일에만 출석한 학생
mon_only = [name for name in mon if name not in tue]
print("월요일에만 출석한 학생:", ", ".join(mon_only))

# 화요일에만 출석한 학생
tue_only = [name for name in tue if name not in mon]
print("화요일에만 출석한 학생:", ", ".join(tue_only))

# 한 번이라도 출석한 학생 수
all_students = mon + [name for name in tue if name not in mon]
print("한번이라도 출석한 학생 수:", len(all_students))
