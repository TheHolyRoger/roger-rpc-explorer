var Decimal = require("decimal.js");
Decimal8 = Decimal.clone({ precision:8, rounding:8 });

module.exports = {
	name:"The Holy Roger Coin",
	logoUrl:"/img/logo/roger.svg",
	siteTitle:"The Holy Roger Coin Explorer",
	nodeTitle:"The Holy Roger Coin Full Node",
	nodeUrl:"https://theholyroger.com/",
	demoSiteUrl: "https://explorer.theholyroger.com",
	currencyUnits:[
		{
			name:"ROGER",
			multiplier:1,
			default:true,
			values:["", "roger", "ROGER"],
			decimalPlaces:8
		},
		{
			name:"Rogit",
			multiplier:1000,
			values:["rogit"],
			decimalPlaces:5
		}
	],
	genesisBlockHash: "84428841adaca33cb6837ee5bd45500eadbfd249fdca6cc82f76f636a66deeb6",
	genesisCoinbaseTransactionId: "85ad70cc805836bc5d40ad1cce12b6757236e69517a24b2ff75029c94b7be30f",
	genesisCoinbaseTransaction: {
		"txid":"85ad70cc805836bc5d40ad1cce12b6757236e69517a24b2ff75029c94b7be30f",
		"hash":"85ad70cc805836bc5d40ad1cce12b6757236e69517a24b2ff75029c94b7be30f",
		"blockhash":"84428841adaca33cb6837ee5bd45500eadbfd249fdca6cc82f76f636a66deeb6",
		"version":1,
		"locktime":0,
		"size":199,
		"vsize":199,
		"time":1317972665,
		"blocktime":1317972665,
		"vin":[
			{
				"prev_out":{
					"hash":"0000000000000000000000000000000000000000000000000000000000000000",
					"n":4294967295
				},
				"coinbase":"04ffff001d01043c552e532e2053757370656e6473204e65772054617269666673206f6e204368696e612c2053746f6b696e6720576869746520466c6167204665617273"
			}
		],
		"vout":[
			{
				"value":"50.00000000",
				"n":0,
				"scriptPubKey":{
					"hex":"040184710fa689ad5023690c80f3a49c8f13f8d45b8c857fbcbc8bc4a8e4d3eb4b10f4d4604fa08dce601aaf0f470216fe1b51850b4acf21b179c45070ac7b03a9 OP_CHECKSIG",
					"type":"pubkey",
					"reqSigs":1,
					"addresses":[
						"Ler4HNAEfwYhBmGXcFP2Po1NpRUEiK8km2"
					]
				}
			}
		]
	},
	specialBlocks:{
		"12a765e31ffd4059bada1e25190f6e98c99d9714d334efa41a195a7e7e04bfe2":{
			"noteTitle":"The Holy Roger Coin Genesis Block",
			"noteBodyHtml":"This is the first block in The Holy Roger Coin blockchain."
		}
	},
	specialTransactions:{
	},
	historicalData: [
		{
			type: "block",
			date: "2018-05-20",
			blockHash: "84428841adaca33cb6837ee5bd45500eadbfd249fdca6cc82f76f636a66deeb6",
			note: "The Holy Roger Coin genesis block.",
			referenceUrl: "https://medium.com/@SatoshiLite/satoshilite-1e2dad89a017"
		},
		{
			type: "tx",
			date: "2018-05-21",
			txid: "ce385e55fb2a73fa438426145b074f08314812fa3396472dc572b3079e26e0f9",
			note: "First SegWit transaction.",
			referenceUrl: "https://twitter.com/satoshilite/status/862345830082138113"
		}
	],
	exchangeRateData:{
		jsonUrl:"https://api.coinmarketcap.com/v1/ticker/Roger/",
		exchangedCurrencyName:"usd",
		responseBodySelectorFunction:function(responseBody) {
			if (responseBody[0] && responseBody[0].price_usd) {
				return responseBody[0].price_usd;
			}
			
			return -1;
		}
	},
	blockRewardFunction:function(blockHeight) {
		var eras = [ new Decimal8(50) ];
		for (var i = 1; i < 34; i++) {
			var previous = eras[i - 1];
			eras.push(new Decimal8(previous).dividedBy(2));
		}

		var index = Math.floor(blockHeight / 840000);

		return eras[index];
	}
};