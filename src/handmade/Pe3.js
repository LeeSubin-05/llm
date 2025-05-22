import { useState } from "react";
import styles from "./Pe3.module.css";
import pp3 from "./pp3.png";
import talkl from "./talkl.png";

const Pe3 = () => {
  const [inputs, setInputs] = useState({
    depertment: "",
    glass: "", // "O" or "X"
    hair: "", // "장발", "중발", "단발"
    act: "",
  });
  const [showForm, setShowForm] = useState(false);

  const { depertment, glass, hair, act } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {}
        <div
          className={styles.peopel1}
          onClick={() => setShowForm((prev) => !prev)}
        >
          <img src={pp3} alt="TT 예시 이미지" className={styles.aaImage} />
        </div>

        {showForm && (
          <div className={styles.formContent}>
            {/* 학과 */}
            <div className={styles.field}>
              <label htmlFor="depertment">학과:</label>
              <input
                type="text"
                id="depertment"
                name="depertment"
                value={depertment}
                onChange={onChange}
              />
            </div>

            {/* 안경: O/X */}
            <div className={styles.field}>
              <label>안경:</label>
              <div className={styles.radioGroup}>
                <label htmlFor="glass-O" className={styles.radioLabel}>
                  <input
                    type="radio"
                    id="glass-O"
                    name="glass"
                    value="O"
                    checked={glass === "O"}
                    onChange={onChange}
                  />
                  O
                </label>
                <label htmlFor="glass-X" className={styles.radioLabel}>
                  <input
                    type="radio"
                    id="glass-X"
                    name="glass"
                    value="X"
                    checked={glass === "X"}
                    onChange={onChange}
                  />
                  X
                </label>
              </div>
            </div>

            {/* 머리: 장발/중발/단발 */}
            <div className={styles.field}>
              <label>머리:</label>
              <div className={styles.radioGroup}>
                {["장발", "중발", "단발"].map((opt) => (
                  <label
                    key={opt}
                    htmlFor={`hair-${opt}`}
                    className={styles.radioLabel}
                  >
                    <input
                      type="radio"
                      id={`hair-${opt}`}
                      name="hair"
                      value={opt}
                      checked={hair === opt}
                      onChange={onChange}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            {/* 기타 */}
            <div className={styles.field}>
              <label htmlFor="act">기타:</label>
              <input
                type="text"
                id="act"
                name="act"
                value={act}
                onChange={onChange}
              />
            </div>

            {/* TALK 이미지 */}
            <div className={styles.talkl}>
              <img
                src={talkl}
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

export default Pe3;
