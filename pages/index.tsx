import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from "../styles/Home.module.css";
import * as $ from "jquery";

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

//LINK JS FILE THAT WILL HANDLE BUTTONS
{
  /* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>; */
}

const Home: NextPage = () => {
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
          <Navbar.Collapse id="responsive-navbar-nav">
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