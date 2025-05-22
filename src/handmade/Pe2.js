import { useState } from "react";
import styles from "./Pe2.module.css";
import pp2 from "./pp2.png";
import talk from "./talk.png";

const Pe2 = () => {
  const [act, setAct] = useState("");
  const [showForm, setShowForm] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.peopel1}
          onClick={() => setShowForm((prev) => !prev)}
        >
          <img src={pp2} alt="TT 예시 이미지" className={styles.aaImage} />
        </div>

        {showForm && (
          <div className={styles.formContent}>
            {/* 기타 */}
            <div className={styles.field}>
              <label htmlFor="act">기타:</label>
              <input
                type="text"
                id="act"
                name="act"
                value={act}
                onChange={(e) => setAct(e.target.value)}
              />
            </div>

            {/* TALK 이미지 */}
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
};

export default Pe2;
