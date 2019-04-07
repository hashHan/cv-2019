export const defaultConfig = {
  app: {
    baseURL: "http://localhost:3000/"
  },
  api: {
    apiURL: "https://cv-2019-api.herokuapp.com"
  },
  oauth: {
    google: {
      clientId: "",
      scope:
        "profile email https://www.googleapis.com/auth/admin.directory.user.readonly https://www.googleapis.com/auth/admin.directory.orgunit.readonly https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly",
      state: "stateThisisfromgoogleOAuth"
    },
    ms: {
      requestEndPoint:
        "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
      tokenChangeEndPoint:
        "https://login.microsoftonline.com/common/oauth2/v2.0/token",
      clientId: "",
      scope:
        "profile, openid, user.read, User.ReadBasic.All, User.Read.All, Directory.Read.All, Group.Read.All",
      state: "stateThisisfromMSOAuth"
    },
    msal: {
      //
    }
  }
};
