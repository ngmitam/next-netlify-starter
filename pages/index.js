import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Hero from "@components/Hero";
import Feature from "@components/Feature";
import Register from "@components/Register";
import Chain from "@components/Chain";
import Decentralize from "@components/Decentralize";
import CrossChain from "@components/CrossChain";
import PrivateTransaction from "@components/PrivateTransaction";
import Apps from "@components/Apps";
import Faq from "@components/Faq";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Next.js Starter!</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header title="Home" />

			<Hero />

			<Feature />

			<Register />

			<div className="container">
				<Chain />

				<Decentralize />

				<CrossChain />

				<PrivateTransaction />
			</div>

			<Apps />

			<Faq />

			<Register />

			<Footer />
		</div>
	);
}
