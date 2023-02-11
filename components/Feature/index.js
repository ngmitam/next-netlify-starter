import styles from "./Feature.module.css";

export default function Feature() {
	return (
		<div className="container">
			<div className={styles.features}>
				<div className={styles.row}>
					<div
						className={styles.feature}
						style={{
							backgroundColor: "rgb(255, 239, 237)",
						}}
					>
						<img
							src="/feature1.svg"
							alt="Easy Transfer"
							className={styles.feature_icon}
						/>
						<div className={styles.feature_text}>
							<h3>Easy Transfer</h3>
							<p>
								Sisu supports native, NFT token swapping and
								contract data transfer. Move your assets cross
								chain seamlessly.
							</p>
						</div>
					</div>
					<div
						className={styles.feature}
						style={{
							backgroundColor: "rgb(248, 237, 255)",
						}}
					>
						<img
							src="/feature2.svg"
							alt="100% Trustless"
							className={styles.feature_icon}
						/>
						<div className={styles.feature_text}>
							<h3>100% Trustless</h3>
							<p>
								No one holds a chain's private key. All
								transactions stay decentralized.
							</p>
						</div>
					</div>
					<div
						className={styles.feature}
						style={{
							backgroundColor: "rgb(237, 241, 255)",
						}}
					>
						<img
							src="/feature3.svg"
							alt="Private Transactions"
							className={styles.feature_icon}
						/>
						<div className={styles.feature_text}>
							<h3>Private Transactions</h3>
							<p>
								Optional add-ons to make native token swapping
								private or obfuscated for extra security.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
