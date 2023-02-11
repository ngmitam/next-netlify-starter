import styles from "./logo.module.css";
export default function Logo({ height }) {
	return (
		<div>
			<img
				src="/logo.svg"
				alt="sisu Logo"
				className={styles.logo}
				height={height}
			/>
		</div>
	);
}
