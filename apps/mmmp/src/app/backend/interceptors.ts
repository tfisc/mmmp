export const requestInterceptor = () => {
  const { fetch: originalFetch } = window;
  window.fetch = async (...args) => {
    let [resource, config] = args;
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      config.headers.Authorization = `Bearer ${access_token}`;
    }

    console.log('config : ', config);

    const response = await originalFetch(resource, config);

    // response interceptor here
    return response;
  };
};
