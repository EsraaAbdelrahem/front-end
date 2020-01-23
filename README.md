# fly365
some points needs to be covered :

1- I didn't use any desgin I've just done what I understood from the mockup.

2- there are two points that are not covered (sorting and unit testing).
```
1-as we know testing means that we know the result of functionialty from the begining
let's take a look at a very small example if we have function that make sum of two 
numbers like 3 & 4 we already know the expected result TOBE (7)
so the unit test of this small function is 

test('adds 3 + 4 to equal 7', () => {
  expect(sum(3, 4)).toBe(7);
});

and so on even we can do a unit test to our UI 
---------------------------------------------------
2- according to the sorting we can make a function that compare 
between two values and return the bigger one 
also we can make a dropdown menu about thes choices the user can 
sort the reviews with 
```
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
