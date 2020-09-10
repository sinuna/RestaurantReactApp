import food1 from "./images/Restaurant/1.jpeg";
import food2 from "./images/Restaurant/2.jpeg";
import food3 from "./images/Restaurant/3.jpeg";
import food4 from "./images/Restaurant/4.jpeg";
import img1 from "./images/Restaurant/indian.jpeg";
import img2 from "./images/Restaurant/korean.jpeg";
import img3 from "./images/Restaurant/japanese.jpeg";
import img4 from "./images/Restaurant/chinese.jpeg";
import img5 from "./images/Restaurant/italian.jpeg";
import img6 from "./images/Restaurant/nepali.jpeg";
import img7 from "./images/Restaurant/american.jpeg";
import img8 from "./images/Restaurant/vietnam.jpeg";


export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "indian restaurant",
      slug: "indian-restaurant",
      type: "Family",
      address: "Woodlands way Abington",
      price: 100,
      discount: 10,
      size: 200,
      capacity: 1,
      dinner: true,
      breakfast: false,
      featured: false,
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      extras: [
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Parking"
      ],
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: food2
            }
          }
        },
        {
          fields: {
            file: {
              url: food3
            }
          }
        },
        {
          fields: {
            file: {
              url: food4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "korean",
      slug: "korean-restaurant",
      type: "Bar",
      address: "Woodlands way Abington",
      price: 150,
      discount: 5,
      size: 250,
      capacity: 1,
      dinner: false,
      breakfast: false,
      featured: true,
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      extras: [
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet"
      ],
      images: [
        {
          fields: {
            file: {
              url: img2
            }
          }
        },
        {
          fields: {
            file: {
              url: food2
            }
          }
        },
        {
          fields: {
            file: {
              url: food3
            }
          }
        },
        {
          fields: {
            file: {
              url: food4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "japanese",
      slug: "japanese-restaurant",
      type: "Bar",
      address: "Woodlands way Abington",
      price: 250,
      discount: 20,
      size: 300,
      capacity: 1,
      dinner: true,
      breakfast: false,
      featured: false,
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",

      extras: [
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet"
      ],
      images: [
        {
          fields: {
            file: {
              url: img3
            }
          }
        },
        {
          fields: {
            file: {
              url: food2
            }
          }
        },
        {
          fields: {
            file: {
              url: food3
            }
          }
        },
        {
          fields: {
            file: {
              url: food4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "chinese",
      slug: "chinese-restaurant",
      type: "Bar",
      price: 300,
      discount: 14,
      address: "Woodlands way Abington",
      size: 400,
      capacity: 1,
      dinner: true,
      breakfast: true,
      featured: false,
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",

      extras: [
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet"
      ],
      images: [
        {
          fields: {
            file: {
              url: img4
            }
          }
        },
        {
          fields: {
            file: {
              url: food2
            }
          }
        },
        {
          fields: {
            file: {
              url: food3
            }
          }
        },
        {
          fields: {
            file: {
              url: food4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      name: "italian restaurant",
      slug: "italian-restaurant",
      type: "Buffet",
      price: 200,
      discount: 8,
      address: "Woodlands way Abington",
      size: 300,
      capacity: 2,
      dinner: false,
      breakfast: false,
      featured: false,
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",

      extras: [
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet"
      ],
      images: [
        {
          fields: {
            file: {
              url: img5
            }
          }
        },
        {
          fields: {
            file: {
              url: food2
            }
          }
        },
        {
          fields: {
            file: {
              url: food3
            }
          }
        },
        {
          fields: {
            file: {
              url: food4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
      name: "Nepalese",
      slug: "nepalese-restaurant",
      type: "Buffet",
      address: "Woodlands way Abington",
      price: 250,
      discount: 25,
      size: 350,
      capacity: 2,
      dinner: false,
      breakfast: false,
      featured: true,
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      extras: [
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet"
      ],
      images: [
        {
          fields: {
            file: {
              url: img6
            }
          }
        },
        {
          fields: {
            file: {
              url: food2
            }
          }
        },
        {
          fields: {
            file: {
              url: food3
            }
          }
        },
        {
          fields: {
            file: {
              url: food4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "7"
    },
    fields: {
      name: "american",
      slug: "american-restaurant",
      type: "Buffet",
      address: "Woodlands way Abington",
      price: 300,
      discount: 18,
      size: 400,
      capacity: 2,
      dinner: false,
      breakfast: false,
      featured: true,
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      extras: [
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet"
      ],
      images: [
        {
          fields: {
            file: {
              url: img7
            }
          }
        },
        {
          fields: {
            file: {
              url: food2
            }
          }
        },
        {
          fields: {
            file: {
              url: food3
            }
          }
        },
        {
          fields: {
            file: {
              url: food4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "8"
    },
    fields: {
      name: "vietnam",
      slug: "vietnam-restaurant",
      type: "Buffet",
      address: "Woodlands way Abington",
      price: 400,
      discount: 10,
      size: 500,
      capacity: 2,
      dinner: true,  
      breakfast: true,
      featured: false,
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      extras: [
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet"
      ],
      images: [
        {
          fields: {
            file: {
              url: img8
            }
          }
        },
        {
          fields: {
            file: {
              url: food2
            }
          }
        },
        {
          fields: {
            file: {
              url: food3
            }
          }
        },
        {
          fields: {
            file: {
              url: food4
            }
          }
        }
      ]
    }
  }
]