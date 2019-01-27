export const errorMessage = {
  auth: {
    register: {
      post: {
        500: {
          bApi: "",
          client: {
            en: "Server Error 500, please send email to haeseong.han@gmail.com",
            kor: "서버 에러 500, haeseong.han@gmail.com로 연락해주세요."
          }
        }
      },
      get: {},
      delete: {},
      patch: {}
    },
    validate: {
      post: {
        403: {
          bApi: "",
          client: {
            en: "Oopes! You are not registered as a administrator.",
            kor: "관리자가 아닙니다."
          }
        },
        404: {
          bApi: "",
          dashboard: {
            en: "Oopes! Please Sign up first",
            kor: "가입부터 해주세요."
          }
        },
        500: {
          bApi: "",
          client: {
            en: "Server Error 500, please send email to haeseong.han@gmail.com",
            kor: "서버 에러 500, haeseong.han@gmail.com로 연락해주세요."
          }
        }
      },
      get: {},
      delete: {},
      patch: {}
    },
    login: {
      post: {
        500: {
          bApi: "",
          client: {
            en: "Server Error 500, please send email to haeseong.han@gmail.com",
            kor: "서버 에러 500, haeseong.han@gmail.com로 연락해주세요."
          }
        }
      },
      get: {},
      delete: {},
      patch: {}
    },
    logout: {
      post: {},
      get: {},
      delete: {},
      patch: {}
    }
  },
  users: {
    users: {
      post: {},
      get: {
        401: {
          bApi: "",
          dashboard: {
            en:
              "Failed to get Users. Please contact our support team at haeseong.han@gmail.com",
            kor:
              "유저 목록을 받아오는데 실패했습니다. haeseong.han@gmail.com로 연락해주세요."
          }
        },
        403: {
          bApi: "",
          dashboard: {
            en:
              "Failed to get Users. Please contact our support team at haeseong.han@gmail.com",
            kor:
              "유저 목록을 받아오는데 실패했습니다. haeseong.han@gmail.com로 연락해주세요."
          }
        },
        404: {
          bApi: "",
          dashboard: {
            en:
              "Failed to get Users. Please contact our support team at haeseong.han@gmail.com",
            kor:
              "유저 목록을 받아오는데 실패했습니다. haeseong.han@gmail.com로 연락해주세요."
          }
        },
        500: {
          bApi: "",
          client: {
            en: "Server Error 500, please send email to haeseong.han@gmail.com",
            kor: "서버 에러 500, haeseong.han@gmail.com로 연락해주세요."
          }
        }
      },
      delete: {},
      patch: {}
    }
  }
};
