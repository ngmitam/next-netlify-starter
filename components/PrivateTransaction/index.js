import styles from "./PrivateTransaction.module.css";

export default function PrivateTransaction() {
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<img
					src="private.svg"
					alt="Private Transactions"
					width={"100%"}
				/>
			</div>
			<div className={styles.info}>
				<div className={styles.title}>Private Transactions</div>
				<div className={styles.description}>
					Sisu supports privacy and security across our network. Small
					add-ons allow private transfers across chains.
				</div>
				<div className={styles.bullets}>
					<div className={styles.bullet}>
						Shielded cross-train transactions
					</div>
					<div className={styles.bullet}>
						Optional privacy add-on features.
					</div>
				</div>
			</div>
		</div>
	);
}
