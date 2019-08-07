export default {
    moveToFirstArray(context, element) {
        context.commit('moveToFirstArray', element);
    },
    moveToSecondArray({ commit }, element) {
        commit('moveToSecondArray', element);
    }
}