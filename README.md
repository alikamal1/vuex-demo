# vuex
`dispatch an action` -> `action commit a mutation` -> `mutation modify state` -> `getter return state`


```javascript
this.$store.dispatch("moveToSecondArray", element);


```
#### state
```javascript
state: {
  firstArray: [{id: 1, name: 'User 1'},
               {id: 2, name: 'User 2'},
               {id: 3, name: 'User 3'},
              ],
    }
```

#### getter
```javascript
firstArray(state) {
  return state.firstArray
}
```

#### action
```javascript
moveToFirstArray(context, element) {
  context.commit('moveToFirstArray', element);
}
```

#### mutation
```javascript
moveToFirstArray(state, element) {
  state.firstArray.push(element);
  state.secondArray.splice(state.secondArray.indexOf(element), 1);
}
```

### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

