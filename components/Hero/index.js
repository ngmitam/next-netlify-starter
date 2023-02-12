import styles from "./Hero.module.css";

export default function Hero() {
	return (
		<>
			<div className={styles.hero}>
				<div className={styles.container + " container"}>
					<div className={styles.content}>
						<div className={styles.title}>
							Unify the Fragmented Blockchain World
						</div>
						<div className={styles.subtitle}>
							Blockchain world is fragmented. Everyone is living
							in their own chain. Sisu network is the
							decentralized cross-chain communication network that
							allows native & NFT tokens swapping or remote
							contract execution for a more seamless blockchain
							experience.
						</div>
						<div className={styles.button}>
							<a
								href="https://discord.gg/DT7xAKCQJD"
								target="_blank"
								rel="noreferrer"
							>
								<button>Join our community</button>
							</a>
						</div>
					</div>
					<div className={styles.empty}></div>
				</div>
				<div className={styles.image}>
					<img
						src="/hero.svg"
						alt="hero"
						width={"100%"}
						height={"100%"}
					/>
				</div>
				<div className={styles.bg}></div>
			</div>
		</>
	);
}
