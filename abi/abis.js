exports.tokenAbi = [
  {
    'inputs': [
      {'internalType': 'uint256', 'name': '_initialSupply', 'type': 'uint256'}
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'constructor'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_owener',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_spender',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_value',
        'type': 'uint256'
      }
    ],
    'name': 'Approval',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_from',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_to',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_value',
        'type': 'uint256'
      }
    ],
    'name': 'Transfer',
    'type': 'event'
  },
  {
    'constant': true,
    'inputs': [
      {'internalType': 'address', 'name': '', 'type': 'address'},
      {'internalType': 'address', 'name': '', 'type': 'address'}
    ],
    'name': 'allowance',
    'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'balance',
    'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [{'internalType': 'address', 'name': '', 'type': 'address'}],
    'name': 'balanceOf',
    'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'name',
    'outputs': [{'internalType': 'string', 'name': '', 'type': 'string'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'standard',
    'outputs': [{'internalType': 'string', 'name': '', 'type': 'string'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'symbol',
    'outputs': [{'internalType': 'string', 'name': '', 'type': 'string'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'totalSupply',
    'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {'internalType': 'address', 'name': '_to', 'type': 'address'},
      {'internalType': 'uint256', 'name': '_value', 'type': 'uint256'}
    ],
    'name': 'transfer',
    'outputs': [{'internalType': 'bool', 'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {'internalType': 'address', 'name': '_from', 'type': 'address'},
      {'internalType': 'address', 'name': '_to', 'type': 'address'},
      {'internalType': 'uint256', 'name': '_value', 'type': 'uint256'}
    ],
    'name': 'transferFrom',
    'outputs': [{'internalType': 'bool', 'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {'internalType': 'address', 'name': '_spender', 'type': 'address'},
      {'internalType': 'uint256', 'name': '_value', 'type': 'uint256'}
    ],
    'name': 'approve',
    'outputs': [{'internalType': 'bool', 'name': '', 'type': 'bool'}],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [{'internalType': 'address', 'name': '_add', 'type': 'address'}],
    'name': 'getBalance',
    'outputs':
        [{'internalType': 'uint256', 'name': '_value', 'type': 'uint256'}],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }

]


exports.tokenSaleAbi = [
  {
    'inputs': [
      {
        'internalType': 'contract Token',
        'name': '_tokenContract',
        'type': 'address'
      },
      {'internalType': 'uint256', 'name': '_tokenPrice', 'type': 'uint256'}
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'constructor'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'address',
        'name': '_buyer',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'Sell',
    'type': 'event'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'tokenContract',
    'outputs':
        [{'internalType': 'contract Token', 'name': '', 'type': 'address'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'tokenPrice',
    'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'tokensSold',
    'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {'internalType': 'uint256', 'name': '_numberOfTokens', 'type': 'uint256'}
    ],
    'name': 'buyTokens',
    'outputs': [],
    'payable': true,
    'stateMutability': 'payable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [],
    'name': 'endSale',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }
]