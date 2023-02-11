import styles from "./Footer.module.css";
import Logo from "@components/Logo";

export default function Footer() {
	return (
		<>
			<footer className={styles.footer}>
				<div className={styles.logo}>
					<Logo />
				</div>
				<div className={styles.text}>
					Sisu, Inc. © 2022 All rights reserved.
				</div>
				<div className={styles.social_media}>
					<a
						href="https://twitter.com/sisunetwork"
						target="_blank"
						rel="noreferrer"
					>
						<img src="/twitter.svg" alt="Twitter" />
					</a>
					<a
						href="https://discord.gg/DT7xAKCQJD"
						target="_blank"
						rel="noreferrer"
					>
						<img src="/discord.svg" alt="discord" />
					</a>
					<a
						href="https://github.com/sisu-network"
						target="_blank"
						rel="noreferrer"
					>
						<img src="/github.svg" alt="github" />
					</a>
				</div>
			</footer>
		</>
	);
}
