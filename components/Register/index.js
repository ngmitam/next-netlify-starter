import { useState } from "react";
import styles from "./Register.module.css";
import Logo from "@components/Logo";

export default function Register() {
	const [email, setEmail] = useState("");
	return (
		<div className={styles.container}>
			<div className={styles.background}></div>
			<div className={styles.corner_logo}>
				<Logo height="80px" />
			</div>
			<div className={styles.content}>
				<div className={styles.title}>Ready to Get Started?</div>
				<div className={styles.description}>
					Register Now To Stay in the Loop
				</div>
				<div className={styles.email_input}>
					<div className={styles.inner}>
						<input
							type="email"
							placeholder="Enter your email..."
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<div className={styles.submit_button}>
							<div className={styles.text}>Register now</div>
							<div className={styles.arrow}>
								<svg
									width="20"
									height="12"
									viewBox="0 0 20 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M19.5303 6.53033C19.8232 6.23744 19.8232 5.76256 19.5303 5.46967L14.7574 0.696698C14.4645 0.403804 13.9896 0.403805 13.6967 0.696698C13.4038 0.989591 13.4038 1.46446 13.6967 1.75736L17.9393 6L13.6967 10.2426C13.4038 10.5355 13.4038 11.0104 13.6967 11.3033C13.9896 11.5962 14.4645 11.5962 14.7574 11.3033L19.5303 6.53033ZM6.55671e-08 6.75L19 6.75L19 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
										fill="white"
									></path>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
