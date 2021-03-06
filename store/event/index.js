export const state = () => ({
    details: undefined,
    registration: undefined,
    notifications: [],
});
export const mutations = {
    SET(state, data) {
        state.details = data;
    },
    SET_REGISTRATION(state, data) {
        state.registration = data;
    },

    SET_NOTIFICATIONS(state, data) {
        state.notifications = data;
    },

    ADD_NOTIFICATION(state, data) {
        state.notifications.push(data);
    },
}
export const actions = {
    async GET ({ commit, state, dispatch }) {
        try {
            const { data } = await this.$axios.get('/event/latest')
            commit('SET', data);
        } catch(e) {}
    },
    async GET_REGISTRATION ({ commit, state }) {
        if(state.details) {
            try {
                const { data } = await this.$axios.get('/event/' + state.details.id + '/registration');
                commit('SET_REGISTRATION', data);
            } catch(e) {}
        }
    },
    async GET_NOTIFICATIONS({ commit, state}) {
        if(state.details) {
            try {
                const { data } = await this.$axios.get(`/event/${state.details.id}/notifications/read`)
                commit('SET_NOTIFICATIONS', data);
            } catch(e) {}
        }
    }
  }
