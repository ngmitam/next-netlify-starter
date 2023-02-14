import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Editor from "@components/Editor";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Next.js Starter!</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header title="" />

			<div className="content container">
				<Editor />
				<Footer />
			</div>
		</div>
	);
}
