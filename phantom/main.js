(()=>{let e=[],t=[],o=[],n=0,s=0,a=0,i=0;window.totalTokensOnAccount=0,window.solMagesFound=0,window.phylacteriesFound=0,window.tokensChecked=0,window.loadMetadata=async(d,c)=>{const l="https://www.sol-mage-server.live",w=await fetch(`${l}/get_mage_mints`),r=await fetch(`${l}/get_phylactery_mints`),u=await fetch(`${l}/get_tiki_torch_mints`),h=await w.json(),_=await r.json(),f=await u.json();n=d.value.length,window.totalTokensOnAccount=n,console.log(`${n} SPL Tokens were found on this address.`);for(let c=0;c<n;c++){let n=d.value[c].account.data.parsed.info;if(console.log(n),"1"===n.tokenAmount.amount&&0===n.tokenAmount.decimals)try{let d=n.mint;if(h.includes(d)){let t=await fetch(`${l}/get_attributes_for_nft_by_mint_address/${d}`),o=await t.json();o.mint_address=d,e.push(o),s++,window.solMagesFound=s;continue}if(_.includes(d)){let e=await fetch(`${l}/get_attributes_for_nft_by_mint_address/${d}`),t=await e.json();t.mint_address=d,o.push(t),i++,window.phylacteriesFound=i;continue}if(f.includes(d)){let e={mint_address:d};t.push(e),a++,window.tikiTorchesFound=a;continue}}catch(e){console.error(e)}window.tokensChecked++}return console.log(`${s} Sol Mage(s) were found on this address.`),console.log(`${a} Tiki Torch(es) were found on this address.`),console.log(`${i} Phylactery/Phylacteries were found on this address.`),[e,o,t]}})();