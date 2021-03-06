const state = {
  calculator: 'tax',
  type: 'Private Employee',
  types: [
    'Private Employee',
    'Government Employee',
    'Self Employed',
  ],
  workingDaysPerWeek: 5,
}

const getters = {
  /**
   * Calculator type settings
   */
  calculator: state => state.calculator,
  isTax: state => state.calculator === 'tax',
  isPayroll: state => state.calculator === 'payroll',

  /**
   * Employee Type: 'Private Employee', 'Government Employee', 'Self Employed'
   */
  type: state => state.type,

  /**
   * List of employee type
   */
  types: state => state.types,

  /**
   * Number of Working Days per Week
   */
  workingDaysPerWeek: state => state.workingDaysPerWeek,
}

const mutations = {
  UPDATE_CALCULATOR (state, payload) {
    state.calculator = payload
  },

  UPDATE_TYPE (state, payload) {
    state.type = payload
  },

  UPDATE_WORKING_DAYS (state, payload) {
    state.workingDaysPerWeek = payload
  },
} 

const actions = {
  updateCalculator ({ commit }, payload) {
    commit('UPDATE_CALCULATOR', payload)
  },

  updateType ({ commit }, payload) {
    commit('UPDATE_TYPE', payload)
  },

  updateWorkingDays ({ commit }, payload) {
    commit('UPDATE_WORKING_DAYS', payload)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}