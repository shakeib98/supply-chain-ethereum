const ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_indexA",
				"type": "uint256"
			},
			{
				"name": "_indexB",
				"type": "uint256"
			},
			{
				"name": "_indexC",
				"type": "uint256"
			},
			{
				"name": "_name",
				"type": "string"
			}
		],
		"name": "makeProduct",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_m",
				"type": "address"
			}
		],
		"name": "getSupplierBIngredients",
		"outputs": [
			{
				"components": [
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "quantity",
						"type": "uint256"
					},
					{
						"name": "date",
						"type": "string"
					},
					{
						"name": "hash",
						"type": "bytes32"
					},
					{
						"name": "used",
						"type": "bool"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_m",
				"type": "address"
			}
		],
		"name": "getSupplierCIngredients",
		"outputs": [
			{
				"components": [
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "quantity",
						"type": "uint256"
					},
					{
						"name": "date",
						"type": "string"
					},
					{
						"name": "hash",
						"type": "bytes32"
					},
					{
						"name": "used",
						"type": "bool"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_m",
				"type": "address"
			}
		],
		"name": "getSupplierAIngredients",
		"outputs": [
			{
				"components": [
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "quantity",
						"type": "uint256"
					},
					{
						"name": "date",
						"type": "string"
					},
					{
						"name": "hash",
						"type": "bytes32"
					},
					{
						"name": "used",
						"type": "bool"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_hash",
				"type": "bytes32"
			}
		],
		"name": "getProductDetail",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"components": [
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "quantity",
						"type": "uint256"
					},
					{
						"name": "date",
						"type": "string"
					},
					{
						"name": "hash",
						"type": "bytes32"
					},
					{
						"name": "used",
						"type": "bool"
					}
				],
				"name": "",
				"type": "tuple"
			},
			{
				"components": [
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "quantity",
						"type": "uint256"
					},
					{
						"name": "date",
						"type": "string"
					},
					{
						"name": "hash",
						"type": "bytes32"
					},
					{
						"name": "used",
						"type": "bool"
					}
				],
				"name": "",
				"type": "tuple"
			},
			{
				"components": [
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "quantity",
						"type": "uint256"
					},
					{
						"name": "date",
						"type": "string"
					},
					{
						"name": "hash",
						"type": "bytes32"
					},
					{
						"name": "used",
						"type": "bool"
					}
				],
				"name": "",
				"type": "tuple"
			},
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_date",
				"type": "string"
			},
			{
				"name": "_quantity",
				"type": "uint256"
			},
			{
				"name": "_m",
				"type": "address"
			}
		],
		"name": "issueIngredient",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getSupplierAddressC",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_m",
				"type": "address"
			}
		],
		"name": "getListOfProduct",
		"outputs": [
			{
				"components": [
					{
						"name": "supplier",
						"type": "address"
					},
					{
						"name": "name",
						"type": "string"
					},
					{
						"components": [
							{
								"name": "name",
								"type": "string"
							},
							{
								"name": "quantity",
								"type": "uint256"
							},
							{
								"name": "date",
								"type": "string"
							},
							{
								"name": "hash",
								"type": "bytes32"
							},
							{
								"name": "used",
								"type": "bool"
							}
						],
						"name": "A",
						"type": "tuple"
					},
					{
						"components": [
							{
								"name": "name",
								"type": "string"
							},
							{
								"name": "quantity",
								"type": "uint256"
							},
							{
								"name": "date",
								"type": "string"
							},
							{
								"name": "hash",
								"type": "bytes32"
							},
							{
								"name": "used",
								"type": "bool"
							}
						],
						"name": "B",
						"type": "tuple"
					},
					{
						"components": [
							{
								"name": "name",
								"type": "string"
							},
							{
								"name": "quantity",
								"type": "uint256"
							},
							{
								"name": "date",
								"type": "string"
							},
							{
								"name": "hash",
								"type": "bytes32"
							},
							{
								"name": "used",
								"type": "bool"
							}
						],
						"name": "C",
						"type": "tuple"
					},
					{
						"name": "hash",
						"type": "bytes32"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getManufacturerAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getSupplierAddressA",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getSupplierAddressB",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_a",
				"type": "address"
			},
			{
				"name": "_b",
				"type": "address"
			},
			{
				"name": "_c",
				"type": "address"
			},
			{
				"name": "_m",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]






const contractAddress = '0xaa4e59ccf1ba4febb6ef0968057bc07fa62e01a1'
 export {
	 contractAddress,
	 ABI,
 }