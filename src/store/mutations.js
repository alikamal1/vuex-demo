export default {
    moveToFirstArray(state, element) {
        state.firstArray.push(element);
        state.secondArray.splice(state.secondArray.indexOf(element), 1);
    },
    moveToSecondArray(state, element) {
        state.secondArray.push(element);
        state.firstArray.splice(state.firstArray.indexOf(element), 1);
    }
}