(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1369],{39056:function(e,l,t){Promise.resolve().then(t.bind(t,67249))},1811:function(e,l,t){"use strict";t.r(l),t.d(l,{GlobalContext:function(){return o},GlobalContextProvider:function(){return u},useGlobalContext:function(){return s}});var n=t(3827),a=t(9923),i=t(30522),r=t(64090);let o=(0,r.createContext)({openBrightIdModal:i.C3,closeBrightIdModal:i.C3,brightidModalStatus:a.jm.CLOSED,openHaveBrightIdAccountModal:i.C3,closeHaveBrightIdAccountModal:i.C3,haveBrightIdAccountModalStatus:a.v_.CLOSED,openBrightIdConnectionModal:i.C3,closeBrightIdConnectionModal:i.C3,brightIdConnectionModalStatus:a.g3.CLOSED,isWalletPromptOpen:!1,setIsWalletPromptOpen:i.C3}),s=()=>(0,r.useContext)(o),u=e=>{let{children:l}=e,[t,i]=(0,r.useState)(a.jm.CLOSED),[s,u]=(0,r.useState)(a.v_.CLOSED),[d,c]=(0,r.useState)(!1),[C,v]=(0,r.useState)(a.g3.CLOSED);return(0,n.jsx)(o.Provider,{value:{openBrightIdModal:()=>{i(a.jm.OPENED)},closeBrightIdModal:()=>{i(a.jm.CLOSED)},brightidModalStatus:t,openHaveBrightIdAccountModal:()=>{u(a.v_.OPENED)},closeHaveBrightIdAccountModal:()=>{u(a.v_.CLOSED)},haveBrightIdAccountModalStatus:s,openBrightIdConnectionModal:()=>{v(a.g3.OPENED)},closeBrightIdConnectionModal:()=>{v(a.g3.CLOSED)},brightIdConnectionModalStatus:C,isWalletPromptOpen:d,setIsWalletPromptOpen:c},children:l})}},67249:function(e,l,t){"use strict";t.r(l),t.d(l,{PrizeTapContext:function(){return h},usePrizeTapContext:function(){return p}});var n=t(3827),a=t(30522),i=t(33383),r=t(64090),o=t(37826),s=t(50156),u=t(23120),d=t(72450),c=t(1202),C=t(98055),v=t(1811);let h=(0,r.createContext)({claimError:null,rafflesList:[],claimOrEnrollSignatureLoading:!1,handleClaimPrize:a.tB,handleEnroll:a.tB,selectedRaffleForEnroll:null,setSelectedRaffleForEnroll:a.tB,claimOrEnrollLoading:!1,openEnrollModal:a.tB,closeEnrollModal:a.tB,claimOrEnrollWalletResponse:null,method:null,setMethod:a.tB,setIsLineaWinnersOpen:a.tB,isLineaWinnersOpen:!1,lineaEnrolledUsers:[],setLineaEnrolledUsers:a.tB,isLineaCheckEnrolledModalOpen:!1,setIsLineaCheckEnrolledModalOpen:a.tB}),p=()=>(0,r.useContext)(h);l.default=e=>{let{children:l,raffles:t}=e,[a,p]=(0,r.useState)(t),[E,f]=(0,r.useState)(null),[g,S]=(0,r.useState)(!1),[m,I]=(0,r.useState)(!1),[B,O]=(0,r.useState)([]),[M,k]=(0,r.useState)(!1),[b,y]=(0,r.useState)(!1),[L,P]=(0,r.useState)(null),[w,x]=(0,r.useState)(null),[D,_]=(0,r.useState)(null),[N,A]=(0,r.useState)(-1),{userToken:H}=(0,o.useUserProfileContext)(),{setIsWalletPromptOpen:W}=(0,v.useGlobalContext)(),{isConnected:j,address:z,chainId:R}=(0,C.Pk)(),{writeContractAsync:q}=(0,d.useWriteContract)({}),T=(0,C.YC)(),G=(0,r.useCallback)(async()=>{try{let e=await(0,i.j$)(null!=H?H:void 0);p(e)}catch(l){var e;f(null===(e=l.response)||void 0===e?void 0:e.data.message),console.log(l)}},[H]),U=(0,r.useCallback)(async()=>{let e,l,t;if(L&&(!L.isExpired||"Claim"===D)&&H&&z){if("Claim"===D)return{result:{data:{init:{nonceAddress:"1"}},reqId:"1",signatures:[{owner:"1",signature:"1"}],shieldSignature:"1"},multiplier:void 0,userEntry:{pk:L.pk}};if(y(!0),null==L?void 0:L.userEntry)e=null==L?void 0:L.userEntry.pk,l=L.userEntry;else{let t=await(0,i.UM)(H,L.pk,z);P({...L,userEntry:t.signature}),l=t.signature,e=t.signature.pk}try{t=await(0,i.sW)(e)}catch(e){var n;f(null===(n=e.response)||void 0===n?void 0:n.data.message)}finally{y(!1)}return{result:null==t?void 0:t.result,multiplier:null==l?void 0:l.multiplier,userEntry:l}}},[D,L,H]),F=(0,r.useCallback)(async()=>{if(!H||!L)return;let e=[BigInt(L.raffleId)];null==L||L.chain.chainId,A(null==L?void 0:L.pk);let l=await U(),t=null==l?void 0:l.userEntry.pk;if(S(!0),"Claim"!==D){var n,a,r,o,s;e.push(null==l?void 0:l.multiplier,null==l?void 0:null===(n=l.result)||void 0===n?void 0:n.reqId,{signature:null==l?void 0:null===(a=l.result)||void 0===a?void 0:a.signatures[0].signature,owner:null==l?void 0:null===(r=l.result)||void 0===r?void 0:r.signatures[0].owner,nonce:null==l?void 0:null===(o=l.result)||void 0===o?void 0:o.data.init.nonceAddress},null==l?void 0:null===(s=l.result)||void 0===s?void 0:s.shieldSignature)}let d=(null==L?void 0:L.isPrizeNft)?u.q7.prizeTap[L.chain.chainId].erc721:u.q7.prizeTap[L.chain.chainId].erc20;if(!d)throw Error("Address is not supported");try{let l=await q({args:e,account:z,functionName:"Claim"==D?"claimPrize":"participateInRaffle",chainId:Number(null==L?void 0:L.chain.chainId),abi:c.Eqw,address:d});if(l){let e=await(null==T?void 0:T.waitForTransactionReceipt({hash:l,confirmations:1}));if(!e||(x({success:!0,state:"Done",txHash:e.transactionHash,message:"Claim"===D?"Claimed successfully.":"Enrolled successfully"}),!H))return;await("Enroll"===D?(0,i.io)(H,t,e.transactionHash):(0,i.eM)(H,t,e.transactionHash))}}finally{S(!1),console.log("-")}},[z,T,U,D,L,H,q]),Y=(0,r.useCallback)((e,l)=>{if(!j&&"Winners"!==l){W(!0);return}x(null),_(l),P(e)},[j,W]),$=(0,r.useCallback)(()=>{x(null),P(null)},[]),J=(0,r.useCallback)(async()=>{L&&!g&&F()},[L,g,F]),K=(0,r.useCallback)(async()=>{L&&!g&&F()},[L,g,F]);return(0,s.t2)(G,u.sR,[H,G]),(0,n.jsx)(h.Provider,{value:{rafflesList:a,openEnrollModal:Y,closeEnrollModal:$,claimError:E,handleClaimPrize:J,claimOrEnrollLoading:g,claimOrEnrollSignatureLoading:b,method:D,setMethod:_,selectedRaffleForEnroll:L,setIsLineaWinnersOpen:I,setLineaEnrolledUsers:O,setSelectedRaffleForEnroll:P,setIsLineaCheckEnrolledModalOpen:k,handleEnroll:K,claimOrEnrollWalletResponse:w,isLineaWinnersOpen:m,lineaEnrolledUsers:B,isLineaCheckEnrolledModalOpen:M},children:l})}}},function(e){e.O(0,[9299,3135,277,8819,141,2852,7826,1202,2971,8069,1744],function(){return e(e.s=39056)}),_N_E=e.O()}]);