import styles from "./Milestones.module.css";

export default function Milestones() {
	return (
		<div className={"container " + styles.milestones}>
			<div class={styles.milestone + " " + styles.first}>
				<img
					className={styles.image}
					src="/roadmapconvert.svg"
					alt="Cross Chain Token Swap"
				/>
				<div>
					<div className={styles.badge}>1. Tail</div>
					<div className={styles.title}>Cross Chain Token Swap</div>
					<div className={styles.description}>
						<div>
							This is a testnet for swapping non-native tokens
							cross chain, including common tokens like ERC20 and
							NFT. Sisu dev team will work with other crypto teams
							who want to build DEX to release their testnet
							version.
						</div>
						<div>
							Sisu testnet and validator's group will be private
							at this stage.
						</div>
					</div>
				</div>
			</div>
			<div className={styles.connect_first}>
				<div className={styles.line_left_first}></div>
			</div>
			<div class={styles.milestone + " " + styles.second}>
				<img
					className={styles.image}
					src="/roadmaptrustless.svg"
					alt="Native Coin Swapping"
				/>
				<div>
					<div className={styles.badge}>2. Talon</div>
					<div className={styles.title}>Native Coin Swapping</div>
					<div className={styles.description}>
						<div>
							This stage enables user to do native coins/token
							swapping instead of using wrapped tokens.
						</div>
						<div>
							Liquidity provider can stake their contribution on
							testnet in reward for Sisu's tokens.
						</div>
					</div>
				</div>
			</div>
			<div className={styles.connect_second}>
				<div className={styles.line_right_second}></div>
			</div>
			<div class={styles.milestone + " " + styles.third}>
				<img
					className={styles.image}
					src="/roadmapapihub.svg"
					alt="API Hub for Cross Chain Contracts"
				/>
				<div>
					<div className={styles.badge}>3. Spine</div>
					<div className={styles.title}>
						API Hub for Cross Chain Contracts
					</div>
					<div className={styles.description}>
						<div>
							Sisu deploys contract gateway at different chains
							and let developers interact with remote contracts
							through the gateway using their familiar languages,
							instead of learning multiple blockchain languages.
						</div>
						<div>
							The source code and testnet are also opened for
							public at this stage.
						</div>
					</div>
				</div>
			</div>
			<div className={styles.connect_third}>
				<div className={styles.line_left_third}></div>
			</div>
			<div class={styles.milestone + " " + styles.fourth}>
				<img
					className={styles.image}
					src="/roadmapfingerprint.svg"
					alt="Private Transaction"
				/>
				<div>
					<div className={styles.badge}>4. Fang</div>
					<div className={styles.title}>Private Transaction</div>
					<div className={styles.description}>
						<div>
							Many users do care about the privacy of their
							transaction. The Fang deployment offers users an
							option to shield their transaction with minor
							additional cost.
						</div>
					</div>
				</div>
			</div>
			<div className={styles.connect_fourth}>
				<div className={styles.line_right_fourth}></div>
			</div>
			<div class={styles.milestone + " " + styles.fifth}>
				<img
					className={styles.image}
					src="/roadmaplaunch.svg"
					alt="Mainnet"
				/>
				<div>
					<div className={styles.badge}>5. Heart</div>
					<div className={styles.title}>Mainnet</div>
					<div className={styles.description}>
						<div>
							The mainnet is launched and deployed on various
							blockchains with their ecosystems.
						</div>
						<div>
							You can enjoy all the features of Sisu at this stage
							that you see in testnet.
						</div>
					</div>
				</div>
			</div>
			<div className={styles.connect_end}>
				<div className={styles.line_end}></div>
				<div className={styles.end}></div>
			</div>
		</div>
	);
}
