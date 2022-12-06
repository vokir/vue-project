import axios from 'axios'

const interceptNetworkRequests = (events) => {
  axios.interceptors.request.use(config => {
    if (events.onSend) {
      events.onSend()
    }
    return config
  }, function (error) {
    return Promise.reject(error);
  });

  axios.interceptors.response.use(
    response => {
      if (events.onLoad) {
        events.onLoad()
      }
      return response
    },
    (error) => {
      if (events.onError) {
        events.onError(error)
      }
    }
  );
}

export default interceptNetworkRequests

// interceptNetworkRequests({
//   onSend: () => {},
//   onLoad: () => {},
//   onError: () => {}
// })
