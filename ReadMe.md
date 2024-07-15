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

## How to Contribute

### 1. Fork the Repository

Fork the repository to your own GitHub account and then clone it to your local machine.

```
git clone https://github.com/omar-sarfraz/caesar-cipher
```

### 2. Create a branch

Create a new branch for your feature or bug fix. Use a descriptive name for your branch.

```
git checkout -b feature/your-feature-name
```

### 3. Install Dependencies

Install the necessary dependencies using npm to run the project locally.

```
npm install
```

Then make your changes.

### 4. Run Tests

```
npm test
```

### 5. Commit Your Changes

Commit your changes with a descriptive commit message.

```
git add .
git commit -m "Add feature/fix: Describe your changes here"
```

### 6. Push to Your Fork

Push your branch to your forked repository on GitHub.

```
git push origin feature/your-feature-name
```

### 7. Create a Pull Request

Go to the original repository on GitHub and create a pull request. Provide a clear and concise description of your changes and why they should be merged.
