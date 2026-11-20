
import { useState } from 'react';
import './React_1120.css';

// 1. 영화 데이터
const movies = [
    {
        id: 1,
        title: '인터스텔라',
        genre: 'SF',
        price: 15000,
    },
    {
        id: 2,
        title: '어벤져스',
        genre: '액션',
        price: 14000,
    },
    {
        id: 3,
        title: '인사이드 아웃',
        genre: '애니메이션',
        price: 12000,
    },
];

// 2. 좌석 데이터
const seats = [
    'A1', 'A2', 'A3',
    'B1', 'B2', 'B3',
    'C1', 'C2', 'C3',
];

// 3. 이미 예약된 좌석
const reservedSeats = [ 'A2', 'B2' ];

// 4. 영화 예매 화면
function React_1120() {

    // 선택한 영화
    const [ selectedMovie, setSelectedMovie ] = useState(null);

    // 선택한 좌석
    const [ selectedSeats, setSelectedSeats ] = useState([]);

    // 총 결제 금액 계산
    const totalPrice = selectedMovie
        ? selectedMovie.price * selectedSeats.length
        : 0;

    // 좌석 선택 및 취소 기능
    const handleSeatClick = (seat) => {

        // 이미 예약된 좌석이면 실행 중단
        if (reservedSeats.includes(seat)) {
            return;
        }

        // 이미 선택한 좌석이면 선택 취소
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(
                selectedSeats.filter((item) => item !== seat)
            );
        }

        // 선택하지 않은 좌석이면 추가
        else {
            setSelectedSeats([ ...selectedSeats, seat ]);
        }
    };

    return (
        <main className="movie-app">

            <h1>🎬 영화 예매 시스템</h1>

            <p className="movie-subtitle">
                보고 싶은 영화를 선택해 주세요.
            </p>

            {/* 영화 목록 */}
            <div className="movie-list">

                {movies.map((movie) => (
                    <div className="movie-card" key={movie.id}>

                        <h2>{movie.title}</h2>

                        <p>장르 : {movie.genre}</p>

                        <p>가격 : {movie.price.toLocaleString()}원</p>

                        <button
                            type="button"
                            onClick={() => {
                                setSelectedMovie(movie);
                                setSelectedSeats([]);
                            }}
                        >
                            영화 선택
                        </button>

                    </div>
                ))}

            </div>

            {/* 선택한 영화 정보 */}
            {selectedMovie && (
                <div className="selected-movie">

                    <h2>선택한 영화</h2>

                    <p>영화 제목 : {selectedMovie.title}</p>

                    <p>장르 : {selectedMovie.genre}</p>

                    <p>가격 : {selectedMovie.price.toLocaleString()}원</p>

                </div>
            )}

            {/* 좌석 선택 영역 */}
            {selectedMovie && (
                <section className="seat-section">

                    <h2>좌석을 선택해 주세요.</h2>

                    <div className="screen">
                        SCREEN
                    </div>

                    {/* 좌석 목록 */}
                    <div className="seat-list">

                        {seats.map((seat) => {

                            const isReserved = reservedSeats.includes(seat);
                            const isSelected = selectedSeats.includes(seat);

                            return (
                                <button
                                    type="button"
                                    key={seat}
                                    className={`seat
                    ${isReserved ? 'reserved' : ''}
                    ${isSelected ? 'selected' : ''}
                  `}
                                    disabled={isReserved}
                                    onClick={() => handleSeatClick(seat)}
                                >
                                    {seat}
                                </button>
                            );
                        })}

                    </div>

                    {/* 좌석 상태 안내 */}
                    <div className="seat-guide">
                        <span>🟢 선택 가능</span>
                        <span>🔵 선택 완료</span>
                        <span>🔴 예약 완료</span>
                    </div>

                    {/* 선택한 좌석 정보 */}
                    <div className="seat-result">

                        <h3>선택한 좌석</h3>

                        <p>
                            {selectedSeats.length > 0
                                ? selectedSeats.join(', ')
                                : '선택한 좌석이 없습니다.'}
                        </p>

                    </div>


                    {/* 결제 정보 */}
                    <div className="payment-summary">

                        <h3>🧾 결제 정보</h3>

                        <p>
                            영화 가격 :
                            {selectedMovie.price.toLocaleString()}원
                        </p>

                        <p>
                            선택한 좌석 수 :
                            {selectedSeats.length}개
                        </p>

                        <div className="total-price">
                            <span>최종 결제 금액</span>

                            <strong>
                                {totalPrice.toLocaleString()}원
                            </strong>
                        </div>

                    </div>


                </section>
            )}

        </main>
    );
}

export default React_1120;
