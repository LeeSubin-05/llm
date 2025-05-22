import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Make.module.css";

export default function Make() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ Url: "", Designation: "" });
  const { Url, Designation } = inputs;

  const onChange = (e) => {
    const { id, value } = e.target;
    setInputs((prev) => ({ ...prev, [id]: value }));
  };

  const handleCancel = () => navigate("/");

  return (
    <div className={styles.wrapper}>
      {/* 위에 겹칠 작은 박스 */}
      <div className={styles.roundedBox2}>
        {Designation && (
          <div className={styles.usertext}>
            <p>{Designation}</p>
          </div>
        )}
      </div>

      {/* 폼 영역 */}
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
        </div>
      </div>
    </div>
  );
}
