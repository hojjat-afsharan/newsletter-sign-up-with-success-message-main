import Styles from "./page.module.scss";
import Image from "next/image";

export default function SignupPage() {
  return (
    <div className={Styles.card}>
      <div className={Styles["card-inner"]}>
        <div>form</div>
        <div>
          <Image
            src="images/illustration-sign-up-desktop.svg"
            width={500}
            height={500}
            style={{ width: "auto" }}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}
