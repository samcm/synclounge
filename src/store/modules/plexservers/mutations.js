import Vue from 'vue';

export default {
  SET_LAST_SERVER_ID: (state, id) => {
    state.lastServerId = id;
  },

  ADD_PLEX_SERVER: (state, server) => {
    Vue.set(state.servers, server.clientIdentifier, server);
  },

  SET_BLOCKED_SERVER_IDS: (state, blockedIds) => {
    state.blockedServerIds = blockedIds;
  },

  SET_PLAY_QUEUE_ID: (state, id) => {
    state.playQueueId = id;
  },

  SET_PLEX_SERVER_LIBRARIES: (state, { machineIdentifier, libraries }) => {
    Vue.set(state.servers[machineIdentifier], 'libraries', libraries);
  },
};