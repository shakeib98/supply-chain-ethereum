
const  contractAddress=  '0x2d421b3bf9bb5d5d3f961c58299a6e0bf6f0252e' ;

const ABI=

[
	{
		"constant": true,
		"inputs": [],
		"name": "getSupplierACert",
		"outputs": [
			{
				"name": "",
				"type": "bytes32[]"
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
				"name": "_address",
				"type": "address"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_nameOfCertificate",
				"type": "string"
			},
			{
				"name": "_date",
				"type": "string"
			},
			{
				"name": "_role",
				"type": "uint256"
			}
		],
		"name": "createAndSendCertificate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "supplierDetails",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "nameOfCertificates",
				"type": "string"
			},
			{
				"name": "date",
				"type": "string"
			},
			{
				"name": "certificateHash",
				"type": "bytes32"
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
				"name": "_certHash",
				"type": "bytes32"
			}
		],
		"name": "getCertificateHistory",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
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
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "supplierBToManufacturerHistory",
		"outputs": [
			{
				"name": "hash",
				"type": "bytes32"
			},
			{
				"name": "used",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getManufacturerCertA",
		"outputs": [
			{
				"name": "",
				"type": "bytes32[]"
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
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "govtToSupplierBHistory",
		"outputs": [
			{
				"name": "hash",
				"type": "bytes32"
			},
			{
				"name": "used",
				"type": "bool"
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
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "govtToManufacturerHistory",
		"outputs": [
			{
				"name": "hash",
				"type": "bytes32"
			},
			{
				"name": "used",
				"type": "bool"
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
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "govtToSupplierAHistory",
		"outputs": [
			{
				"name": "hash",
				"type": "bytes32"
			},
			{
				"name": "used",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getGovtAddress",
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
		"name": "getSupplierAAddress",
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
		"name": "getSupplierBCert",
		"outputs": [
			{
				"name": "",
				"type": "bytes32[]"
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
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "productsOwnedByManufacturer",
		"outputs": [
			{
				"name": "hash",
				"type": "bytes32"
			},
			{
				"name": "used",
				"type": "bool"
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
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "manufacturerDetails",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "nameOfCertificates",
				"type": "string"
			},
			{
				"name": "date",
				"type": "string"
			},
			{
				"name": "certificateHash",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getProductCert",
		"outputs": [
			{
				"name": "",
				"type": "bytes32[]"
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
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "supplierAToManufacturerHistory",
		"outputs": [
			{
				"name": "hash",
				"type": "bytes32"
			},
			{
				"name": "used",
				"type": "bool"
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
				"name": "_address",
				"type": "address"
			},
			{
				"name": "_nameOfProducer",
				"type": "string"
			},
			{
				"name": "_typeOfProduct",
				"type": "string"
			},
			{
				"name": "_serialId",
				"type": "string"
			},
			{
				"name": "_date",
				"type": "string"
			},
			{
				"name": "_certHash",
				"type": "bytes32"
			}
		],
		"name": "createCertificateForManufacturer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
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
		"name": "getSupplierBAddress",
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
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "productDetails",
		"outputs": [
			{
				"name": "nameOfProducer",
				"type": "string"
			},
			{
				"name": "typeOfProduct",
				"type": "string"
			},
			{
				"name": "serialId",
				"type": "string"
			},
			{
				"name": "date",
				"type": "string"
			},
			{
				"name": "certificateHash_p",
				"type": "bytes32"
			},
			{
				"name": "certificateHash_sup_a",
				"type": "bytes32"
			},
			{
				"name": "certificateHash_sup_b",
				"type": "bytes32"
			},
			{
				"name": "certificateHash_govt",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getManufacturereCertG",
		"outputs": [
			{
				"name": "",
				"type": "bytes32[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getManufacturerCertB",
		"outputs": [
			{
				"name": "",
				"type": "bytes32[]"
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
				"name": "_address",
				"type": "address"
			},
			{
				"name": "_certHash",
				"type": "bytes32"
			}
		],
		"name": "sendCertificateToManufacturer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			},
			{
				"name": "_nameOfProducer",
				"type": "string"
			},
			{
				"name": "_typeOfProduct",
				"type": "string"
			},
			{
				"name": "_serialId",
				"type": "string"
			},
			{
				"name": "_date",
				"type": "string"
			},
			{
				"name": "_certHashM",
				"type": "bytes32"
			},
			{
				"name": "_cerhHashA",
				"type": "bytes32"
			},
			{
				"name": "_cerhHashB",
				"type": "bytes32"
			}
		],
		"name": "createProduct",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_addressA",
				"type": "address"
			},
			{
				"name": "_addressB",
				"type": "address"
			},
			{
				"name": "_addressM",
				"type": "address"
			},
			{
				"name": "_government",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]
 export {
     contractAddress,
     ABI,
 }