import { useNavigate } from "react-router-dom";
import styles from "./Combine.module.css";
import Pe1 from "./handmade/Pe1";
import Pe2 from "./handmade/Pe2";
import Pe3 from "./handmade/Pe3";
import Pe4 from "./handmade/Pe4";

export default function Combine() {
  const navigate = useNavigate();

  return (
    <div className={styles.combine}>
      <div className={styles.item}>
        <Pe1 />
      </div>
      <div className={styles.item}>
        <Pe2 />
      </div>
      <div className={styles.item}>
        <Pe3 />
      </div>
      <div className={styles.item}>
        <Pe4 />
      </div>

      {/* “만들기” 버튼에 onClick 달아서 /make 로 이동 */}
      <div className={styles.field}>
        <button type="button" onClick={() => navigate("/make")}>
          만들기
        </button>
        <button type="button" onClick={() => navigate("/Itoi")}>
          dlalwl
        </button>
      </div>
    </div>
  );
}
