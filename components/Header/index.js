import styles from "./Header.module.css";
import BigMenu from "./BigMenu";
import SmallMenu from "./SmallMenu";

export default function Header({ title }) {
	return (
		<div className={styles.menu}>
			<div className={styles.small}>
				<SmallMenu title={title} />
			</div>
			<div className={styles.big}>
				<BigMenu title={title} />
			</div>
		</div>
	);
}
