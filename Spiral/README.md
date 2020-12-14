# Spiral

This program will take an input of an integer and create a two-dimensional array the length and height of the input, which spirals clockwise with increasing integers from 1 to input^2.

## Installation

Use the package manager to install the dependencies

```
npm install
```

## Usage

```
npm run dev

createSpiral(3) # returns [
      [ 1, 2, 3 ],
      [ 8, 9, 4 ],
      [ 7, 6, 5 ],
    ]
createSpiral(4) # returns [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ]
createSpiral(5) # returns [
      [1, 2, 3, 4, 5],
      [16, 17, 18, 19, 6],
      [15, 24, 25, 20, 7],
      [14, 23, 22, 21, 8],
      [13, 12, 11, 10, 9],
    ]
```

## Testing

```
npm test
```
