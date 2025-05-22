import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileLoad from "./FileLoad";
import styles from "./Itoi.module.css";

export default function Itoi() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ Url: "", Designation: "" });
  const { Url, Designation } = inputs;

  const onChange = (e) => {
    const { id, value } = e.target;
    setInputs((prev) => ({ ...prev, [id]: value }));
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className={styles.wrapper}>
      {/* 작화 고르기 드롭다운 */}
      <div className={styles.dropdown}>
        <details>
          <summary>작화 고르기</summary>
          <div className={styles.options}>
            <label>
              <input type="checkbox" value="지브리" /> 지브리
            </label>
            <label>
              <input type="checkbox" value="디즈니" /> 디즈니
            </label>
          </div>
        </details>
      </div>

      <div className={styles.roundedBox1} />
      <div className={styles.roundedBox2}>
        {Designation && <div className={styles.usertext}></div>}
      </div>

      <div className={styles.container}>
        <div className={styles.formContent}>
          <div className={styles.field}>
            <label htmlFor="Url">이름</label>
            <input
              type="text"
              id="Url"
              value={Url}
              onChange={onChange}
              placeholder="Enter name"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="Designation">전화번호</label>
            <input
              type="text"
              id="Designation"
              value={Designation}
              onChange={onChange}
              placeholder="Enter phone-number"
            />
          </div>

          <div className={styles.fieldButtons}>
            <button>저장</button>
          </div>

          <div className={styles.fieldButton2}>
            <button>llm으로 만들기</button>
          </div>
          <FileLoad />
        </div>
      </div>
    </div>
  );
}
