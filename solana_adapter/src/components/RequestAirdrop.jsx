import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function RequestAirdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function requestAirdrop() {
        const amount = document.getElementById("amount").value;
        
        if (!wallet.connected || !wallet.publicKey) {
            alert("Please connect your wallet first.");
            return;
        }
        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        try {
            await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
            alert(`Airdropped ${amount} SOL to ${wallet.publicKey.toBase58()}`);
        } catch (error) {
            alert("Airdrop failed: " + error.message);
        }
    }

    return (
        <div className=" flex items-center justify-center ">
            <div className="bg-neutral-50 p-3 rounded-2xl shadow-2xl shadow-purple-400/40 w-full max-w-sm">
                <h2 className="text-xl font-semibold text-purple-900 mb-4 text-center tracking-tighter">
                    Request SOL Airdrop
                </h2>
                <input
                    id="amount"
                    type="text"
                    placeholder="Amount in SOL"
                    className="w-full p-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
                />
                <button
                    onClick={requestAirdrop}
                    className="w-full bg-purple-900 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors tracking-tighter"
                >
                    Request Airdrop
                </button>
            </div>
        </div>
    );
}
