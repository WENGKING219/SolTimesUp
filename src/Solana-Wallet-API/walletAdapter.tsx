import { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");
import base58 from "bs58";
import { signIn, signOut } from "next-auth/react";
import { useAuthRequestChallengeSolana } from "@moralisweb3/next";
import React from "react";
export default function WalletAdaptor() {
  const { publicKey, signMessage, disconnecting, disconnect, connected } =
    useWallet();
  const { requestChallengeAsync, error } = useAuthRequestChallengeSolana();
  const signCustomMessage = async () => {
    if (!publicKey) {
      throw new Error("Wallet not avaiable to process request.");
    }
    const address = publicKey.toBase58();
    const challenge = await requestChallengeAsync({
      address,
      network: "devnet",
    });
    const encodedMessage = new TextEncoder().encode(challenge?.message);
    if (!encodedMessage) {
      throw new Error("Failed to get encoded message.");
    }

    const signedMessage = await signMessage?.(encodedMessage);
    const signature = base58.encode(signedMessage as Uint8Array);
    try {
      const authResponse = await signIn("moralis-auth", {
        message: challenge?.message,
        signature,
        network: "Solana",
        redirect: false,
      });
      if (authResponse?.error) {
        throw new Error(authResponse.error);
      }
    } catch (e) {
      disconnect();
      console.log(e);
      return;
    }
  };

  useEffect(() => {
    if (error) {
      disconnect();
      console.log(error);
    }
  }, [disconnect, error]);

  useEffect(() => {
    if (disconnecting) {
      signOut({ redirect: false });
    }
  }, [disconnecting]);

  useEffect(() => {
    connected && signCustomMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected]);

  return <WalletMultiButton />;
}