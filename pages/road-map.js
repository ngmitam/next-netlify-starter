import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import HeroRoadmap from "@components/HeroRoadmap";
import Milestones from "@components/Milestones";
import RegisterRoadmap from "@components/RegisterRoadmap";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Next.js Starter!</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header title="RoadMap" />

			<div className="content">
				<HeroRoadmap />

				<Milestones />

				<RegisterRoadmap />

				<Footer />
			</div>
		</div>
	);
}
