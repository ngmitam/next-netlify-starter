import styles from "./Apps.module.css";

export default function Apps() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.background}></div>
			<div className={styles.container}>
				<div className={styles.info}>
					<div className={styles.title}>
						Apps that Can
						<br />
						Interact With
						<br />
						SiSu
					</div>
				</div>
				<div className={styles.image}>
					<img src="apps.svg" alt="Supported Chains" width={"100%"} />
				</div>
			</div>
		</div>
	);
}
