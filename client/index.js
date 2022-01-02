import Web3 from 'web3';
import AirdropToken from "../build/contracts/AirDropTokenCont.json";
<<<<<<< HEAD
import AirdropTokenRef from "../build/contracts/AirDropReferrel.json"
=======
>>>>>>> 46021233a0fc785186ddbc3c8b008988c02b304f
 
let web3;
let airdroptoken;
let airdroptokenRef;
 
const initWeb3 =() => {
    return new Promise((resolve,reject)=> {
 
        //new Meta Mask
        if(typeof window.ethereum !== "undefined") {
            window.ethereum.enable()
            .then(()=>{
                 resolve(
                    new Web3(window.ethereum)
                );
            }).catch(e=>{reject(e)});
            return;
        }
        //Old Meta mask
        if (typeof window.web3 !== "undefined") {
            return resolve(new Web3(window.web3.currentProvider));
        }
        //No meta mask ginach
<<<<<<< HEAD
        resolve(new Web3.providers.HttpProvider('https://speedy-nodes-nyc.moralis.io/346380c8eca1a345a08fbdc8/bsc/testnet'));
=======
        resolve(new Web3.providers.HttpProvider('https://speedy-nodes-nyc.moralis.io/346380c8eca1a345a08fbdc8/bsc/mainnet'));
>>>>>>> 46021233a0fc785186ddbc3c8b008988c02b304f
    })
 
}
 
const initContract = () => {
    const developmentKey = Object.keys(AirdropToken.networks)[0];
    return new web3.eth.Contract(
        AirdropToken.abi,
        AirdropToken.networks[developmentKey].address
    )
 
}
const initRefContract = () => {
    const developmentKey = Object.keys(AirdropTokenRef.networks)[0];
    return new web3.eth.Contract(
        AirdropTokenRef.abi,
        AirdropTokenRef.networks[developmentKey].address
    )
 
}
const initApp = () => {
    const $addData = document.getElementById("Account");
    
  
    let account = [];
  
    web3.eth.getAccounts()
        .then (_account=> {
            account=_account;
            $addData.innerHTML = account[0];
            console.log(account[0]);
        });
        
 
 
}
const preSale = (value) => {
    let account = [];
   // console.log("clicked");
    web3.eth.getAccounts()
        .then (_account=> {
            account=_account;
            return airdroptoken.methods
                            .buy()
                            .send({from:account[0],value: web3.utils.toWei(value, 'ether'),gas:300000,gasPrice:null})
         });

}
window.preSale = preSale;
<<<<<<< HEAD
const preSaleRef = (value,referral) => {
    airdroptokenRef = initRefContract();
    let account = [];
   // console.log("clicked");
    web3.eth.getAccounts()
        .then (_account=> {
            account=_account;
            return airdroptokenRef.methods
                            .buy(referral)
                            .send({from:account[0],value: web3.utils.toWei(value, 'ether'),gas:300000,gasPrice:null})
         });

}
window.preSaleRef = preSaleRef;
=======
>>>>>>> 46021233a0fc785186ddbc3c8b008988c02b304f
const claimToken = () => {
    let account = [];
   // console.log("clicked");
    web3.eth.getAccounts()
        .then (_account=> {
            account=_account;
            return airdroptoken.methods
                            .airdrop()
                            .send({from:account[0],value: web3.utils.toWei('0.003', 'ether'),gas:300000,gasPrice:null})
         });

}
window.claimToken = claimToken;
const claimRefToken = (referral) => {
    airdroptokenRef = initRefContract();
    let account = [];
   // console.log("clicked");
    web3.eth.getAccounts()
        .then (_account=> {
            account=_account;
            return airdroptokenRef.methods
                            .airdrop(referral)
                            .send({from:account[0],value: web3.utils.toWei('0.003', 'ether'),gas:300000,gasPrice:null})
         });
}

window.claimRefToken = claimRefToken;


document.addEventListener("DOMContentLoaded", ()=>{
   initWeb3()
       .then(_web3=>{
           web3=_web3;
           airdroptoken = initContract();
           //airdroptokenRef = initRefContract();
           initApp();
       }).catch(e=>console.log(e.message));
})
<<<<<<< HEAD


ethereum.on('accountsChanged', function (accounts) {
    airdroptoken = initContract();
    //airdroptokenRef = initRefContract();
=======
ethereum.on('accountsChanged', function (accounts) {

>>>>>>> 46021233a0fc785186ddbc3c8b008988c02b304f
    initApp();

  });
