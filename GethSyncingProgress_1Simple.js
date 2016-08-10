// copy paste this in the console
$ geth --exec 'var s = eth.syncing; console.log("\n------------ GETH SYNCING PROGRESS\nprogress: " + (s.currentBlock/s.highestBlock*100)+ " %\nblocks left to parse: "+ (s.highestBlock-s.currentBlock) + "\ncurrent Block: " + s.currentBlock + " of " + s.highestBlock)' attach

// WILL GIVE AN OUTPUT SIMILAR TO THIS
//------------ GETH SYNCING PROGRESS
//progress: 83.7338081682097 %
//blocks left to parse: 332608
//current Block: 1712173 of 2044781