let walletAddress;
let connection;
let web3 = solanaWeb3;
let tokenAccounts = [];

//Game Variables
let walletLoaded = false

window.scanPhantom = async () => {

    try {
        connection = await window.solana.connect();
        walletAddress = connection.publicKey.toString();
        console.log("Success....");
        console.log(walletAddress);
    } catch (err) {
        console.log("Catch Block Ran");
        console.error(err);
    }

    connection = new web3.Connection(
        "https://crimson-spring-silence.solana-mainnet.quiknode.pro/ace9fd07b18929f276b9537eba5260c15e9703ff/",
        'confirmed',
    )

    tokenAccounts = await connection.getParsedTokenAccountsByOwner(
        new web3.PublicKey(walletAddress),
        { programId: new web3.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA") }
    );

    console.log("Parsed Token Accounts", tokenAccounts);

    window.metadata = await window.loadMetadata(tokenAccounts, connection);
    walletLoaded = true;
}