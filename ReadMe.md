# Caesar Cipher

## Overview

The Caesar Cipher NPM package provides a simple and effective way to encrypt and decrypt data using the Caesar cipher technique. This package can be used to enhance the security of your applications by encrypting sensitive information.

## Use Cases

### 1. Encrypt Your Emails / Phone Numbers While Keeping Them Searchable

By encrypting emails or phone numbers with the Caesar cipher, you can maintain the privacy of your users' data while still allowing for searches within the encrypted data. This is useful in scenarios where data privacy is crucial but search functionality is required.

### 2. Enhance Security by Storing Encrypted Data

Storing sensitive data, such as user credentials or personal information, in an encrypted format enhances the security of your application. Even if the data is accessed without authorization, it remains unreadable without the correct decryption key.

## Installation

To install the package, run the following command:

```
npm i @omar-sarfraz/caesar-cipher
```

## Usage Example

```
const createCipher = require("@omar-sarfraz/caesar-cipher");

const { encrypt, decrypt } = createCipher(5);

const val = "test@gmail.com";

const encryptedVal = encrypt(val);
console.log(encryptedVal); // yjxy@lrfnq.htr

const decryptedVal = decrypt(encryptedVal);
console.log(decryptedVal); // test@gmail.com
```
