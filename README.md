## Testing Nodejs jest 

<p align="justify">
Testing Nodejs jest ans supertest  with functions, classes and API.
</p>

<p align="justify">
The names of test should have test or spec for example  name_file.spec.js  or name_file.test.js 
</p>

### Installation
```
npm install
```
### Test
```python
npm test
#or
npm test name_file.test.js
```
-----

### Note 

<p align="justify">
If you have windows put in package.json
</p>

```python
"scripts": {
    "start": "node src/index.js",
    "test": "set NODE_OPTIONS=--experimental-vm-modules && jest"
  }

```

<p align="justify">
If you have mac ios put in package.json
</p>

```python
"scripts": {
    "start": "node src/index.js",
    "test": " NODE_OPTIONS=--experimental-vm-modules jest"
  }
  
```