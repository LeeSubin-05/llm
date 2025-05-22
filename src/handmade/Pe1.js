// src/Pe1.js
import { useState } from "react";
import styles from "./Pe1.module.css";
import pp1 from "./pp1.png";
import talk from "./talk.png";

export default function Pe1() {
  const [act, setAct] = useState("");
  const [showForm, setShowForm] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.peopel1}
          onClick={() => setShowForm((prev) => !prev)}
        >
          <img src={pp1} alt="TT 예시 이미지" className={styles.aaImage} />
        </div>

        {showForm && (
          <div className={styles.formContent}>
            <div className={styles.field}>
              <label htmlFor="act">자기 소개:</label>
              <textarea
                id="act"
                name="act"
                value={act}
                onChange={(e) => setAct(e.target.value)}
                placeholder="긴 갈색 머리를 자연스럽게 늘어뜨린 채 검정 동그란 안경을 쓰고, 흰색 니트 스웨터와 네이비 체크 치마, 흰색 양말과 로퍼를 착용한 미소 짓는 여학생"
              />
            </div>

            <div className={styles.talk}>
              <img
                src={talk}
                alt="TALK 예시 이미지"
                className={styles.aaImage}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
