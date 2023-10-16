import { type AppType } from "next/app";

import { api } from "Jeff-Meendering/utils/api";

import "Jeff-Meendering/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
