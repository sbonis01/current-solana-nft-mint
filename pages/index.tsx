import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from "../styles/Home.module.css";
import { useWallet } from "@solana/wallet-adapter-react";
import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  getLedgerWallet,
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletExtensionWallet,
  getSolletWallet,
  getTorusWallet,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

// IMPORTS THE BOOTSTRAP COMPONENTS
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//SOLANA DEPENDENCY IMPORT TO ALLOW PRE-MADE BUTTON CLASSES
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

// function isWalletConnected() {
//   //THIS GETS THE THREE DROPDOWN BUTTON OPTIONS AND THE HANDLE FUNCTIONS ASSOCIATED WITH THEM
//   const { publicKey, wallet, disconnect } = useWallet();
//   //THIS TAKES THE BIG PUBLIC KEY FOR THE WALLET AND TURNS IT INTO A SIMPLE ADDRESS TO SEND TO
//   const base58 = useMemo(() => publicKey?.toBase58(), [publicKey]);
//   if (useWallet() !== null && base58 !== null) {
//     return true;
//   } else return false;
// }

const Home: NextPage = () => {
  //TODO: NEED A FUNCTION TO CHECK IF THE WALLET IS CONNECTED
  // var isConnected = isWalletConnected();

  //TODO: IF(CONNECTED) NEED A FUNCTION TO TO GET AND HASH THE KEY TO A DATA STRUCTURE
  // if (isConnected) {
  //   //TODO:
  //   //1.HAVE A DATA-STRUCTURE SET UP THAT WILL BE ABLE TO STORE THE:
  //   //(a)USERS-PUBLIC KEYS AND STORE WHERE ITS LOCATED USING AN
  //   //(b)INDEX/HASH
  //   //2. CREATE A HASH-NUMBER WITH A UNIQUE ID, CHECKING TO MAKE SURE THE SLOT IS EMPTY BEFORE INSERTING
  //   //3. WILL NEED GETTER AND SETTER METHODS TO HERE TO MOVE THE COLLECTED PUBLIC KEY AND INDEX NUMBER TO THE DATA STRUCTURE
  // }

  const { publicKey, wallet, disconnect } = useWallet();
  const base58 = useMemo(() => publicKey?.toBase58(), [publicKey]);

  return (
    <div className={styles.container}>
      <Head>
        <title>The Flintstoners</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NAVBAR */}
      <Navbar
        className={styles.navbar}
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#">THE FLINTSTONERS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="navbar-fixed-top navbar-fixed-bottom" id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/rarityCollection">Rarity/Collection</Nav.Link>
              <Nav.Link href="/roadmap">Roadmap</Nav.Link>
            </Nav>
            <Nav>
              <div id="connectButton" className={styles.walletButtons}>
                <WalletMultiButton className={styles.connectBtn}>
                  Connect Wallet
                </WalletMultiButton>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* MAIN */}
      <main className={styles.main}>
        <Container>
          <Row>
            <Col id="leftHomeCol" className={styles.leftHomeCol} xs={4}>
              <p className={styles.wrapper}>
                {" "}
                A collection of uniquely generated, collectible, and hilarious
                members of the Flintstoners.
              </p>
            </Col>

            <Col className={styles.rightHomeCol} xs={8}>
              <h1
                id="home-container-right-column-h1"
                className={styles.centerHorizontal}
              >
                THE FLINTSTONERS
              </h1>
              {/* CAROSUEL/SLIDESHOW */}
              <Carousel>
                <Carousel.Item>
                  <Image
                    className={styles.img}
                    src="/NFT-Placeholder1.jpg"
                    alt="first slide"
                    height="450px"
                    width="750px"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Little description here
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className={styles.img}
                    src="/NFT-Placeholder2.jpg"
                    alt="second slide"
                    height="450px"
                    width="750px"
                  />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Little description here
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home