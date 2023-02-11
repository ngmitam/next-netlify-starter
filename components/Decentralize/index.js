import styles from "./Decentralize.module.css";

export default function Decentralize() {
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<img
					src="decentralized.svg"
					alt="Decentralized Token
                    Swapping"
					width={"100%"}
				/>
			</div>
			<div className={styles.info}>
				<div className={styles.title}>
					Decentralized Token
					<br />
					Swapping
				</div>
				<div className={styles.description}>
					Centralized exchanges can be more vulnerable to single point
					of failure. Sisu uses advanced cryptography algorithms for
					cross-chain communication that stays secure, decentralized,
					and with no private keys.
				</div>
				<div className={styles.bullets}>
					<div className={styles.bullet}>
						Swap native and NFT tokens cross-chain.
					</div>
					<div className={styles.bullet}>
						No single point of failure.
					</div>
					<div className={styles.bullet}>
						Secure and traceable communication.
					</div>
					<div className={styles.bullet}>100% “trustless”</div>
				</div>
			</div>
		</div>
	);
}
