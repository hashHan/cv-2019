module.exports = {
  app: {
    baseURL: "http://localhost:3000"
  },
  robots: [
    {
      UserAgent: "*",
      Disallow: "/"
    }
  ],
  passport: {
    slack: {
      baseUrl: "https://slack.com",
      codepath: "https://slack.com/oauth/authorize",
      tokenpath: "/api/oauth.access",
      query: {
        client_secret: ".",
        client_id: ".",
        // "access_type": "offline",
        // "prompt": "select_account",
        // "response_type": "code",
        scope: "identity.basic identity.email identity.avatar identity.team" // default
      }
      //cryptcode: ''
    }
  },
  bapi: {
    baseURL: "",
    timeout: 120000,
    headers: {
      "Content-Type": "application/json"
    }
  }
};
