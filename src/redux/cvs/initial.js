import { fromJS } from "immutable";

export default fromJS({
  error: null,
  loading: false,
  cvList: [
    //example
    // {
    //   owner: "haeseong",
    //   timestamp: 20190201000000,
    //   version: '2.0',
    //   description: 'After quit Kono',
    // },
    {
      _id: null,
      cvMeta: {
        owner: null,
        //timestamp: null,
        latest: null,
        version: null,
        description: null
      }
    }
  ], // multiple CVs
  cvLatest: {
    // example
    _id: null,
    cvMeta: {
      owner: null,
      //timestamp: null,
      latest: null,
      version: null,
      description: null
    },
    headerData: {
      meta: null,
      name: {
        text: null,
        linkUrl: null
      },
      email: null,
      phone: null,
      links: [
        {
          name: null,
          text: null,
          linkUrl: null
        }
      ]
    },
    footerData: {
      meta: null,
      copyRight: {
        text: null,
        linkUrl: null
      },
      iconLinks: [
        {
          iconName: null,
          tooltip: null,
          linkUrl: null
        }
      ]
    },
    bodyData: {
      bodymeta: null,
      sectionDatas: [
        {
          sectionTitle: {
            text: null,
            linkUrl: null,
            sub: {
              text: null,
              linkUrl: null
            }
          },
          sectionDetails: [
            {
              mainTitle: {
                text: null,
                linkUrl: null,
                sub: {
                  text: null,
                  linkUrl: null
                }
              },
              subTitle: {
                text: null,
                linkUrl: null,
                sub: {
                  text: null,
                  linkUrl: null
                }
              },
              period: {
                text: null,
                linkUrl: null,
                sub: {
                  text: null,
                  linkUrl: null
                }
              },
              location: {
                text: null,
                linkUrl: null,
                sub: {
                  text: null,
                  linkUrl: null
                }
              },
              catalog: [
                {
                  title: {
                    text: null,
                    linkUrl: null,
                    sub: {
                      text: null,
                      linkUrl: null
                    }
                  },
                  //description: 'first catalog section',
                  list: [
                    {
                      callback: null,
                      iconName: null,
                      primary: {
                        text: null,
                        linkUrl: null
                      },
                      name: null,
                      sub: null
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
    // cvMeta: {
    //   owner: "haeseong",
    //   timestamp: 20190201000000,
    //   version: '2.0',
    //   description: 'After quit Kono',
    // },
    // headerData: {
    //   meta: "header meta",
    //   name: {
    //     text: "HAESEONG HAN",
    //     linkUrl: null
    //   },
    //   email: "",
    //   phone: null,
    //   links: [
    //     {
    //       name: "GITHUB REPO",
    //       text: "https://github.com/hashHan",
    //       linkUrl: "https://github.com/hashHan"
    //     },
    //     {
    //       name: "BLOG",
    //       text: "BLOG TEXT",
    //       linkUrl: "https://github.com/hashHan"
    //     }
    //   ]
    // },
    // footerData: {
    //   meta: "footer meta",
    //   copyRight: {
    //     text: "HAESEONG HAN",
    //     linkUrl: null
    //   },
    //   iconLinks: [
    //     {
    //       iconName: "Github",
    //       tooltip: "Github",
    //       linkUrl: "https://github.com/hashHan"
    //     },
    //     {
    //       iconName: "LinkedIn",
    //       tooltip: "LinkedIn",
    //       linkUrl: "https://www.linkedin.com/in/hashHan"
    //     }
    //   ]
    // },
    // bodyData: {
    //   bodymeta: "something",
    //   sectionDatas: [
    //     {
    //       sectionTitle: {
    //         text: " section title 1",
    //         linkUrl: null,
    //         sub: {
    //           text: " section sub title 1",
    //           linkUrl: null
    //         }
    //       },
    //       sectionDetails: [
    //         {
    //           mainTitle: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           subTitle: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           period: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           location: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           catalog: [
    //             {
    //               title: {
    //                 text: "text1",
    //                 linkUrl: null,
    //                 sub: {
    //                   text: "",
    //                   linkUrl: null
    //                 }
    //               },
    //               //description: 'first catalog section',
    //               list: [
    //                 {
    //                   callback: null,
    //                   iconName: "close",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "one",
    //                   sub: null
    //                 },
    //                 {
    //                   callback: null,
    //                   iconName: "add_circle",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "two",
    //                   sub: [
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subone",
    //                       sub: null
    //                     },
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subtwo",
    //                       sub: null
    //                     }
    //                   ]
    //                 }
    //               ]
    //             },
    //             {
    //               title: {
    //                 text: "text2",
    //                 linkUrl: null,
    //                 sub: {
    //                   text: "",
    //                   linkUrl: null
    //                 }
    //               },
    //               //description: 'first catalog section',
    //               list: [
    //                 {
    //                   callback: null,
    //                   iconName: "close",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "one",
    //                   sub: null
    //                 },
    //                 {
    //                   callback: null,
    //                   iconName: "add_circle",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "two",
    //                   sub: [
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subone",
    //                       sub: null
    //                     },
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subtwo",
    //                       sub: null
    //                     }
    //                   ]
    //                 }
    //               ]
    //             }
    //           ]
    //         },
    //         {
    //           mainTitle: {
    //             text: "text 1",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           subTitle: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           period: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           location: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           catalog: [
    //             {
    //               title: {
    //                 text: "text1",
    //                 linkUrl: null,
    //                 sub: {
    //                   text: "",
    //                   linkUrl: null
    //                 }
    //               },
    //               //description: 'first catalog section',
    //               list: [
    //                 {
    //                   callback: null,
    //                   iconName: "close",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "one",
    //                   sub: null
    //                 },
    //                 {
    //                   callback: null,
    //                   iconName: "add_circle",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "two",
    //                   sub: [
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subone",
    //                       sub: null
    //                     },
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subtwo",
    //                       sub: null
    //                     }
    //                   ]
    //                 }
    //               ]
    //             },
    //             {
    //               title: {
    //                 text: "text2",
    //                 linkUrl: null,
    //                 sub: {
    //                   text: "",
    //                   linkUrl: null
    //                 }
    //               },
    //               //description: 'first catalog section',
    //               list: [
    //                 {
    //                   callback: null,
    //                   iconName: "close",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "one",
    //                   sub: null
    //                 },
    //                 {
    //                   callback: null,
    //                   iconName: "add_circle",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "two",
    //                   sub: [
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subone",
    //                       sub: null
    //                     },
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subtwo",
    //                       sub: null
    //                     }
    //                   ]
    //                 }
    //               ]
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       sectionTitle: {
    //         text: " section title 2",
    //         linkUrl: null,
    //         sub: {
    //           text: " section sub title 2",
    //           linkUrl: null
    //         }
    //       },
    //       sectionDetails: [
    //         {
    //           mainTitle: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           subTitle: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           period: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           location: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           catalog: [
    //             {
    //               title: {
    //                 text: "text1",
    //                 linkUrl: null,
    //                 sub: {
    //                   text: "",
    //                   linkUrl: null
    //                 }
    //               },
    //               //description: 'first catalog section',
    //               list: [
    //                 {
    //                   callback: null,
    //                   iconName: "close",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "one",
    //                   sub: null
    //                 },
    //                 {
    //                   callback: null,
    //                   iconName: "add_circle",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "two",
    //                   sub: [
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subone",
    //                       sub: null
    //                     },
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subtwo",
    //                       sub: null
    //                     }
    //                   ]
    //                 }
    //               ]
    //             },
    //             {
    //               title: {
    //                 text: "text2",
    //                 linkUrl: null,
    //                 sub: {
    //                   text: "",
    //                   linkUrl: null
    //                 }
    //               },
    //               //description: 'first catalog section',
    //               list: [
    //                 {
    //                   callback: null,
    //                   iconName: "close",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "one",
    //                   sub: null
    //                 },
    //                 {
    //                   callback: null,
    //                   iconName: "add_circle",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "two",
    //                   sub: [
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subone",
    //                       sub: null
    //                     },
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subtwo",
    //                       sub: null
    //                     }
    //                   ]
    //                 }
    //               ]
    //             }
    //           ]
    //         },
    //         {
    //           mainTitle: {
    //             text: "text 1",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           subTitle: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           period: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           location: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           catalog: [
    //             {
    //               title: {
    //                 text: "text1",
    //                 linkUrl: null,
    //                 sub: {
    //                   text: "",
    //                   linkUrl: null
    //                 }
    //               },
    //               //description: 'first catalog section',
    //               list: [
    //                 {
    //                   callback: null,
    //                   iconName: "close",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "one",
    //                   sub: null
    //                 },
    //                 {
    //                   callback: null,
    //                   iconName: "add_circle",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "two",
    //                   sub: [
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subone",
    //                       sub: null
    //                     },
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subtwo",
    //                       sub: null
    //                     }
    //                   ]
    //                 }
    //               ]
    //             },
    //             {
    //               title: {
    //                 text: "text2",
    //                 linkUrl: null,
    //                 sub: {
    //                   text: "",
    //                   linkUrl: null
    //                 }
    //               },
    //               //description: 'first catalog section',
    //               list: [
    //                 {
    //                   callback: null,
    //                   iconName: "close",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "one",
    //                   sub: null
    //                 },
    //                 {
    //                   callback: null,
    //                   iconName: "add_circle",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "two",
    //                   sub: [
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subone",
    //                       sub: null
    //                     },
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subtwo",
    //                       sub: null
    //                     }
    //                   ]
    //                 }
    //               ]
    //             }
    //           ]
    //         }
    //       ]
    //     }
    //   ]
    // }
  },
  cvSelected: {
    // example
    _id: null,
    cvMeta: {
      owner: null,
      //timestamp: null,
      latest: null,
      version: null,
      description: null
    },
    headerData: {
      meta: null,
      name: {
        text: null,
        linkUrl: null
      },
      email: null,
      phone: null,
      links: [
        {
          name: null,
          text: null,
          linkUrl: null
        }
      ]
    },
    footerData: {
      meta: null,
      copyRight: {
        text: null,
        linkUrl: null
      },
      iconLinks: [
        {
          iconName: null,
          tooltip: null,
          linkUrl: null
        }
      ]
    },
    bodyData: {
      bodymeta: null,
      sectionDatas: [
        {
          sectionTitle: {
            text: null,
            linkUrl: null,
            sub: {
              text: null,
              linkUrl: null
            }
          },
          sectionDetails: [
            {
              mainTitle: {
                text: null,
                linkUrl: null,
                sub: {
                  text: null,
                  linkUrl: null
                }
              },
              subTitle: {
                text: null,
                linkUrl: null,
                sub: {
                  text: null,
                  linkUrl: null
                }
              },
              period: {
                text: null,
                linkUrl: null,
                sub: {
                  text: null,
                  linkUrl: null
                }
              },
              location: {
                text: null,
                linkUrl: null,
                sub: {
                  text: null,
                  linkUrl: null
                }
              },
              catalog: [
                {
                  title: {
                    text: null,
                    linkUrl: null,
                    sub: {
                      text: null,
                      linkUrl: null
                    }
                  },
                  //description: 'first catalog section',
                  list: [
                    {
                      callback: null,
                      iconName: null,
                      primary: {
                        text: null,
                        linkUrl: null
                      },
                      name: null,
                      sub: null
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
    // cvMeta: {
    //   owner: "haeseong",
    //   timestamp: 20190201000000,
    //   version: '2.0',
    //   description: 'After quit Kono',
    // },
    // headerData: {
    //   meta: "header meta",
    //   name: {
    //     text: "HAESEONG HAN",
    //     linkUrl: null
    //   },
    //   email: "",
    //   phone: null,
    //   links: [
    //     {
    //       name: "GITHUB REPO",
    //       text: "https://github.com/hashHan",
    //       linkUrl: "https://github.com/hashHan"
    //     },
    //     {
    //       name: "BLOG",
    //       text: "BLOG TEXT",
    //       linkUrl: "https://github.com/hashHan"
    //     }
    //   ]
    // },
    // footerData: {
    //   meta: "footer meta",
    //   copyRight: {
    //     text: "HAESEONG HAN",
    //     linkUrl: null
    //   },
    //   iconLinks: [
    //     {
    //       iconName: "Github",
    //       tooltip: "Github",
    //       linkUrl: "https://github.com/hashHan"
    //     },
    //     {
    //       iconName: "LinkedIn",
    //       tooltip: "LinkedIn",
    //       linkUrl: "https://www.linkedin.com/in/hashHan"
    //     }
    //   ]
    // },
    // bodyData: {
    //   bodymeta: "something",
    //   sectionDatas: [
    //     {
    //       sectionTitle: {
    //         text: " section title 1",
    //         linkUrl: null,
    //         sub: {
    //           text: " section sub title 1",
    //           linkUrl: null
    //         }
    //       },
    //       sectionDetails: [
    //         {
    //           mainTitle: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           subTitle: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           period: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           location: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           catalog: [
    //             {
    //               title: {
    //                 text: "text1",
    //                 linkUrl: null,
    //                 sub: {
    //                   text: "",
    //                   linkUrl: null
    //                 }
    //               },
    //               //description: 'first catalog section',
    //               list: [
    //                 {
    //                   callback: null,
    //                   iconName: "close",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "one",
    //                   sub: null
    //                 },
    //                 {
    //                   callback: null,
    //                   iconName: "add_circle",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "two",
    //                   sub: [
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subone",
    //                       sub: null
    //                     },
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subtwo",
    //                       sub: null
    //                     }
    //                   ]
    //                 }
    //               ]
    //             },
    //             {
    //               title: {
    //                 text: "text2",
    //                 linkUrl: null,
    //                 sub: {
    //                   text: "",
    //                   linkUrl: null
    //                 }
    //               },
    //               //description: 'first catalog section',
    //               list: [
    //                 {
    //                   callback: null,
    //                   iconName: "close",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "one",
    //                   sub: null
    //                 },
    //                 {
    //                   callback: null,
    //                   iconName: "add_circle",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "two",
    //                   sub: [
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subone",
    //                       sub: null
    //                     },
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subtwo",
    //                       sub: null
    //                     }
    //                   ]
    //                 }
    //               ]
    //             }
    //           ]
    //         },
    //         {
    //           mainTitle: {
    //             text: "text 1",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           subTitle: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           period: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           location: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           catalog: [
    //             {
    //               title: {
    //                 text: "text1",
    //                 linkUrl: null,
    //                 sub: {
    //                   text: "",
    //                   linkUrl: null
    //                 }
    //               },
    //               //description: 'first catalog section',
    //               list: [
    //                 {
    //                   callback: null,
    //                   iconName: "close",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "one",
    //                   sub: null
    //                 },
    //                 {
    //                   callback: null,
    //                   iconName: "add_circle",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "two",
    //                   sub: [
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subone",
    //                       sub: null
    //                     },
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subtwo",
    //                       sub: null
    //                     }
    //                   ]
    //                 }
    //               ]
    //             },
    //             {
    //               title: {
    //                 text: "text2",
    //                 linkUrl: null,
    //                 sub: {
    //                   text: "",
    //                   linkUrl: null
    //                 }
    //               },
    //               //description: 'first catalog section',
    //               list: [
    //                 {
    //                   callback: null,
    //                   iconName: "close",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "one",
    //                   sub: null
    //                 },
    //                 {
    //                   callback: null,
    //                   iconName: "add_circle",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "two",
    //                   sub: [
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subone",
    //                       sub: null
    //                     },
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subtwo",
    //                       sub: null
    //                     }
    //                   ]
    //                 }
    //               ]
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       sectionTitle: {
    //         text: " section title 2",
    //         linkUrl: null,
    //         sub: {
    //           text: " section sub title 2",
    //           linkUrl: null
    //         }
    //       },
    //       sectionDetails: [
    //         {
    //           mainTitle: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           subTitle: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           period: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           location: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           catalog: [
    //             {
    //               title: {
    //                 text: "text1",
    //                 linkUrl: null,
    //                 sub: {
    //                   text: "",
    //                   linkUrl: null
    //                 }
    //               },
    //               //description: 'first catalog section',
    //               list: [
    //                 {
    //                   callback: null,
    //                   iconName: "close",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "one",
    //                   sub: null
    //                 },
    //                 {
    //                   callback: null,
    //                   iconName: "add_circle",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "two",
    //                   sub: [
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subone",
    //                       sub: null
    //                     },
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subtwo",
    //                       sub: null
    //                     }
    //                   ]
    //                 }
    //               ]
    //             },
    //             {
    //               title: {
    //                 text: "text2",
    //                 linkUrl: null,
    //                 sub: {
    //                   text: "",
    //                   linkUrl: null
    //                 }
    //               },
    //               //description: 'first catalog section',
    //               list: [
    //                 {
    //                   callback: null,
    //                   iconName: "close",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "one",
    //                   sub: null
    //                 },
    //                 {
    //                   callback: null,
    //                   iconName: "add_circle",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "two",
    //                   sub: [
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subone",
    //                       sub: null
    //                     },
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subtwo",
    //                       sub: null
    //                     }
    //                   ]
    //                 }
    //               ]
    //             }
    //           ]
    //         },
    //         {
    //           mainTitle: {
    //             text: "text 1",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           subTitle: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           period: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           location: {
    //             text: "text",
    //             linkUrl: null,
    //             sub: {
    //               text: "",
    //               linkUrl: null
    //             }
    //           },
    //           catalog: [
    //             {
    //               title: {
    //                 text: "text1",
    //                 linkUrl: null,
    //                 sub: {
    //                   text: "",
    //                   linkUrl: null
    //                 }
    //               },
    //               //description: 'first catalog section',
    //               list: [
    //                 {
    //                   callback: null,
    //                   iconName: "close",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "one",
    //                   sub: null
    //                 },
    //                 {
    //                   callback: null,
    //                   iconName: "add_circle",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "two",
    //                   sub: [
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subone",
    //                       sub: null
    //                     },
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subtwo",
    //                       sub: null
    //                     }
    //                   ]
    //                 }
    //               ]
    //             },
    //             {
    //               title: {
    //                 text: "text2",
    //                 linkUrl: null,
    //                 sub: {
    //                   text: "",
    //                   linkUrl: null
    //                 }
    //               },
    //               //description: 'first catalog section',
    //               list: [
    //                 {
    //                   callback: null,
    //                   iconName: "close",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "one",
    //                   sub: null
    //                 },
    //                 {
    //                   callback: null,
    //                   iconName: "add_circle",
    //                   primary: {
    //                     text: "text",
    //                     linkUrl: null
    //                   },
    //                   name: "two",
    //                   sub: [
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subone",
    //                       sub: null
    //                     },
    //                     {
    //                       callback: null,
    //                       iconName: "add_circle",
    //                       primary: {
    //                         text: "text",
    //                         linkUrl: null
    //                       },
    //                       name: "subtwo",
    //                       sub: null
    //                     }
    //                   ]
    //                 }
    //               ]
    //             }
    //           ]
    //         }
    //       ]
    //     }
    //   ]
    // }
  }
});
