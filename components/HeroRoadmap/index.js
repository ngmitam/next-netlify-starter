import styles from "./HeroRoadmap.module.css";
import Logo from "@components/Logo";

export default function HeroRoadmap() {
	return (
		<>
			<div className={styles.hero}>
				<div className={"container " + styles.container}>
					<div className={styles.logo}>
						<Logo height={"80px"} />
					</div>
					<div className={styles.headline}>
						Sisu Network Project Timelines
					</div>
					<div className={styles.description}>
						We want to keep our investors and community informed
						about each stage of Sisu's network building and growth
						phases for ultimate transparency.
					</div>
				</div>
				<img
					className={styles.timeline}
					src="/timeline.svg"
					alt="Timeline"
				></img>
				<div className={styles.bg}></div>
			</div>
		</>
	);
}
