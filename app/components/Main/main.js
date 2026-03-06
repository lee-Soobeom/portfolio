'use client';

import styles from "./main.module.css";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";

export default function Main({setHeights}) {
    const [count, setCount] = useState(0);
    const [showMessage, setShowMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const sectionRefs = useRef([]);
    const about = [{
        title: '이름',
        caption: '이수범'
    }, {
        title: '생년월일',
        caption: '99.01.07'
    }, {
        title: '직무',
        caption: 'Full-stack'
    }, {
        title: '저장소📋',
        caption: 'github'
    }, {
        title: '이메일📋',
        caption: 'lsb5116@naver.com'
    }];

    const skills = [{
        title: "Frontend",
        captions: ["html", "css(Sass)", "javascript"]
    }, {
        title: "Backend",
        captions: ["Spring Boot", "Maven", "java", "MyBatis"]
    }, {
        title: "DB",
        captions: ["MySQL(MariaDB)"]
    }, {
        title: "View",
        captions: ["Thymeleaf"]
    }, {
        title: "Machine Learning",
        captions: ["python", "Matlab", "R"]
    }, {
        title: "Studying",
        captions: ["React", "Next.js", "AG grid"]
    }];

    useEffect(() => {
        const newHeights = sectionRefs.current.map((section) => (section.scrollHeight));
        setHeights(newHeights);
    }, []);

    useEffect(() => {
        const slide = setInterval(() => {
            setCount((prevState) => (prevState + 1) % 4);
        }, 4000);

        return () => clearInterval(slide);
    }, []);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText('lsb5116@naver.com')
            setShowMessage(true);

            setTimeout(() => {
                setShowMessage(false);
            }, 2000);
        } catch {
            setErrorMessage(true);

            setTimeout(() => {
                setErrorMessage(false);
            }, 2000);
        }
    }

    const handleClick = (index) => {
        if (index === 3) {
            window.open('https://github.com/lee-Soobeom', '_blank');
        }
        if (index === 4) {
            copyEmail();
        }
    }

    const handleEmail = () => {
        return window.open("/email", "_blank");
    }

    return (
        <main className={styles.main}>
            <span className={`${styles.copyMessage} ${
                showMessage ? styles.show : styles.hide
            }`}>이메일 주소가 클립보드에 복사되었습니다.</span>
            <span className={`${styles.copyMessage} ${
                errorMessage ? styles.show : styles.hide
            }`}>이메일 주소를 복사하지 못하였습니다. <br/> 잠시후 다시 시도해 주세요.</span>
            <section className={`${styles.section} ${styles.about}`} ref={(element) => {
                sectionRefs.current[0] = element
            }}>
                <h2># About Me</h2>
                <ul>
                    <li className={styles.me}>
                        {/*<Image src={"/about/me.jpg"} alt={""} width={131} height={174} />*/}
                    </li>
                    {about.map((info, index) => (
                        <li key={index} className={styles.item}
                            onClick={() => {
                                handleClick(index)
                            }}>
                            <span>{info.title}</span>
                            <span>{info.caption}</span>
                        </li>
                    ))}
                </ul>
            </section>
            <section className={`${styles.section} ${styles.skill}`} ref={(element) => {
                sectionRefs.current[1] = element
            }}>
                <h2># Skill</h2>
                <div>
                    {skills.map((skill, index) => (
                        <ul key={index} className={styles.item}>
                            <li>{skill.title}</li>
                            {skill.captions.map((caption, index) => (
                                <li key={index}>{caption}</li>
                            ))}
                        </ul>
                    ))}
                </div>
            </section>
            <section className={`${styles.section} ${styles.project}`} ref={(element) => {
                sectionRefs.current[2] = element
            }}>
                <h2># Project</h2>
                <ul>
                    <li>
                        <div>
                            {[0, 1, 2, 3].map((i, index) => (
                                <img key={index} src={`/project/kkirikkiri/${i}.png`} alt={`${i}`}
                                     style={{transform: i === count - 1 ? "translateX(-100%)" : i === count ? "translateX(0)" : "translateX(100%)"}}/>
                            ))}
                        </div>
                        <div className={styles.description}>
                            <h3>KKIRI-KKIRI</h3>
                            <ul>
                                <li><span>개발기간</span>: 26.01.13 ~ 26.03.03 개발인원: 총 3명</li>
                                <li><span>개발담당</span>: 홈페이지, 공통 컴포넌트(내비게이션 바, 개인정보 창, 다이얼로그 모달), 공동구매 게시글 페이지</li>
                                <li><span>위치정보</span>: Geolocation & ipify & Kakao Maps API을 활용해 사용자의 위치에 따른 동적인 데이터 필터링.</li>
                                <li><span>결제연동</span>: Toss Payments 결제 시스템 연동</li>
                                <li><span>실시간 채팅</span>: WebSocket 웹소켓 활용한 채팅 시스템</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div>
                            {[0, 1, 2, 3].map((i, index) => (
                                <img key={index} src={`/project/walkingindaegu/${i}.png`} alt={`${i}`}
                                     style={{transform: i === count - 1 ? "translateX(-100%)" : i === count ? "translateX(0)" : "translateX(100%)"}}/>
                            ))}
                        </div>
                        <div className={styles.description}>
                            <h3>Walking in Daegu</h3>
                            <ul>
                                <li>대구시에 있는 모든 공원들의 위치와 정보를 제공하는 웹입니다.</li>
                                <li>프론트엔드(HTML, CSS, JavaScript, LocalStorage)로 구현한 페이지입니다.</li>
                                <li>야외 운동이라는 컨셉에 맞게 오늘의 날씨도 제공하고 있습니다.</li>
                                <li>회원가입을 통해 본인만의 운동 기록 저장과 소모 칼로리를 사용자에게 직관적으로 제공합니다.</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </section>
            <section className={`${styles.section} ${styles.contact}`} ref={(element) => {
                sectionRefs.current[3] = element
            }}>
                <h2># Contact</h2>
                <div>
                    <span>lsb5116@naver.com</span>
                    <button className={styles.email}>
                        <img onClick={handleEmail} src={"/email.png"} alt={"이메일 보내기"} width={32}
                             height={32}/>
                        <span>이메일 보내기</span>
                    </button>
                </div>
            </section>
        </main>
    );
}