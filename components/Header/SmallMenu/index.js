import { useState } from "react";

import styles from "./SmallMenu.module.css";
import Logo from "@components/Logo";
import Link from "next/link";

export default function SmallMenu({ title }) {
	const [show, setShow] = useState(false);
	return (
		<div className={styles.container}>
			<div className={styles.hamburger} onClick={() => setShow(!show)}>
				<img src="/hamburger.svg" alt="hamburger" height={"24px"} />
			</div>
			<div className={styles.logo}>
				<Logo height={"36px"} />
			</div>
			<div
				className={
					show ? styles.menu + " " + styles.active : styles.menu
				}
			>
				<div
					className={
						title === "Home"
							? styles.menu_item_active + " " + styles.menu_item
							: styles.menu_item
					}
				>
					<Link href="/">Home</Link>
				</div>
				<div
					className={
						title === "RoadMap"
							? styles.menu_item_active + " " + styles.menu_item
							: styles.menu_item
					}
				>
					<Link href="/road-map">RoadMap</Link>
				</div>
				<div className={styles.menu_item}>Testnet</div>
				<div className={styles.menu_item}>Blog</div>

				<div className={styles.button_group}>
					<div className={styles.social_media}>
						<a
							href="https://twitter.com/sisunetwork"
							target="_blank"
							rel="noreferrer"
						>
							<img src="/twitter.svg" alt="Twitter" />
						</a>
						<a
							href="https://discord.gg/DT7xAKCQJD"
							target="_blank"
							rel="noreferrer"
						>
							<img src="/discord.svg" alt="discord" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
