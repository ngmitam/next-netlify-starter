import styles from "./CrossChain.module.css";

export default function CrossChain() {
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.title}>
					Cross-chain
					<br />
					API hub
				</div>
				<div className={styles.description}>
					Different chains can often have different smart contract
					languages that makes it harder to work cross-chain. Sisu
					allows developers to interact with cross-chain contracts as
					if they were a single chain
				</div>
				<div className={styles.bullets}>
					<div className={styles.bullet}>
						Interact cross-chain without learning a new language.
					</div>
					<div className={styles.bullet}>
						Less effort dealing with updates.
					</div>
					<div className={styles.bullet}>
						Secure and traceable communication.
					</div>
					<div className={styles.bullet}>
						Write a contract once that you can use across chains.
					</div>
				</div>
			</div>
			<div className={styles.image}>
				<img src="api.svg" alt="Cross-chain API hub" width={"100%"} />
			</div>
		</div>
	);
}
