import { useState } from "react";
import styles from "./RegisterRoadmap.module.css";
import Logo from "@components/Logo";

export default function RegisterRoadmap() {
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
					<span>Register Now</span> To Stay in the Loop
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
						<div className={styles.submit_button}>Register now</div>
					</div>
				</div>
			</div>
		</div>
	);
}
