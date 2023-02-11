import styles from "./Chain.module.css";

export default function Chain() {
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.title}>
					Supported <br /> Chains
				</div>
			</div>
			<div className={styles.image}>
				<img src="logos.svg" alt="Supported Chains" width={"100%"} />
			</div>
		</div>
	);
}
