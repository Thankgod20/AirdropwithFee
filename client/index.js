import Web3 from 'web3';
import AirdropToken from "../build/contracts/AirdropToken.json";
 
let web3;
let airdroptoken;
 
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
        resolve(new Web3.providers.HttpProvider('http://localhost:7545'));
    })
 
}
 
const initContract = () => {
    const developmentKey = Object.keys(AirdropToken.networks)[0];
    return new web3.eth.Contract(
        AirdropToken.abi,
        AirdropToken.networks[developmentKey].address
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
const claimToken = () => {
    let account = [];
   // console.log("clicked");
    web3.eth.getAccounts()
        .then (_account=> {
            account=_account;
            return airdroptoken.methods
                            .calmToken()
                            .send({from:account[0],value: web3.utils.toWei('0.001', 'ether')})
         });

}
window.claimToken = claimToken;
document.addEventListener("DOMContentLoaded", ()=>{
   initWeb3()
       .then(_web3=>{
           web3=_web3;
           airdroptoken = initContract();
           initApp();
       }).catch(e=>console.log(e.message));
})
