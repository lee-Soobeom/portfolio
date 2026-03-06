'use client';

import styles from "./email.module.css";
import {useRef, useState} from "react";

export default function EmailForm() {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [hide, setHide] = useState(true);
    const inputRefs = useRef([]);

    const handleEmail = async (e) => {
        e.preventDefault();
        if (name === "") {
            alert("보내시는 분 이름을 작성해 주세요.");
            inputRefs.current[0]?.focus();
            return;
        }
        if (content === "") {
            alert("이메일 내용을 입력해 주세요.");
            inputRefs.current[1]?.focus();
            return;
        }

        // next.js에서 email 처리

        // const formData = new FormData();
        // formData.append("name", name);
        // formData.append("content", content);
        //
        // setHide(false);
        //
        // const res = await fetch("/email/", {
        //     method: "POST",
        //     body: formData,
        // });
        //
        // if (res.ok) {
        //     setHide(true);
        //     setName("");
        //     setContent("");
        //     inputRefs.current.forEach(input => input.value = "");
        //     alert("이메일 전송에 성공하였습니다.");
        // } else {
        //     setHide(true);
        //     alert("이메일 전송에 실패하였습니다. 잠시후 다시 시도해 주세요");
        // }
    }

    return (
        <div className={styles.container}>
            <div className={hide ? `${styles.loading} ${styles.hide}` : `${styles.loading}`}>loading...</div>
            <form noValidate className={styles.form} name={"emailForm"} onSubmit={handleEmail}>
                <h2>이메일</h2>
                <label className={styles.label}>
                    <span>이름</span>
                    <input required autoComplete={"off"} maxLength={20} minLength={1} name={"emailName"}
                           onChange={(e) => setName(e.target.value)} placeholder={"보내시는 분"}
                           ref={(element) => {
                               inputRefs.current[0] = element
                           }} spellCheck={"false"} type={"text"}/>
                </label>
                <label className={`${styles.label} ${styles.spring}`}>
                    <span>내용</span>
                    <textarea required rows={16} name={"emailContent"} onChange={(e) => setContent(e.target.value)}
                              ref={(element) => {
                                  inputRefs.current[1] = element
                              }} spellCheck={"false"}></textarea>
                </label>
                <label className={styles.label}>
                    <span>받는이</span>
                    <input readOnly className={styles.readonly} name={"emailTo"} value={"lsb5116@naver.com"}
                           type={"text"}/>
                </label>
                <button className={styles.button} type={"submit"}>보내기</button>
            </form>
        </div>
    );
}