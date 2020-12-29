export interface Item extends Detail {
  id: string;

  img: {
    alt: string;
    srcset: SrcSet;
    credit: Credit;
  };
}

interface Detail {
  title: string;
  subtitle?: string;
  description?: string;
}

interface SrcSet {
  sm: string;
  md?: string;
  lg?: string;
}

interface Credit {
  name: string;
  url: string;
}

export interface Collection {
  name: string;
  description?: string;
  items: Item[]
}

function newItem(detail: Detail, src: { file: string, md?: boolean, lg?: boolean }, credit: Credit): Item {
  const id = Math.floor(Math.random() * 999999999);

  return {
    id: `${id}`,
    ...detail,
    img: {
      alt: detail.title,

      srcset: {
        sm: `/img/sm/${src.file}`,
        md: src.md ? `/img/md/${src.file}` : undefined,
        lg: src.lg ? `/img/lg/${src.file}` : undefined,
      },

      credit: credit
    },
  }
}

export const singapore: Collection = {
  name: "Singapore",
  items: [
    newItem(
      {
        title: "Marina Bay Sands",
        subtitle: "Consectetur adipiscing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        file: "hu-chen-__cBlRzLSTg-unsplash.jpg",
      },
      {
        name: "Hu Chen",
        url: "https://unsplash.com/@huchenme"
      }
    ),
    newItem(
      {
        title: "Gardens by the Bay",
        subtitle: "Nunc et ante",
        description: "Vestibulum pretium mauris sit amet sodales sagittis.",
      }, {
        file: "sergio-sala-VbB6HYunm04-unsplash.jpg",
      }, {
        name: "Sergio Sala",
        url: "https://unsplash.com/@sergiosala"
      }
    ),
    newItem(
      {
        title: "Fireworks",
        subtitle: "Praesent auctor",
        description: "Aliquam euismod nisi quis orci sodales, a tincidunt massa luctus.",
      }, {
        file: "k8-KqkSoXWabJ8-unsplash.jpg",
      }, {
        name: "K8",
        url: "https://unsplash.com/@k8_iv"
      }
    ),
    newItem(
      {
        title: "Cloud Forest",
        subtitle: "Integer at nisl",
        description: "Phasellus eget ex pulvinar, commodo sapien sed, finibus risus.",
      }, {
        file: "yuiizaa-september-BvG0I_bv4BI-unsplash.jpg",
      }, {
        name: "Yuiizaa September",
        url: "https://unsplash.com/@yuiizaa"
      }
    ),
    newItem(
      {
        title: "Jewel",
        subtitle: "Aenean condimentum",
        description: "Aliquam gravida tellus ut dui posuere suscipit.",
      }, {
        file: "joe-green-9yoPzIns9G4-unsplash.jpg",
      }, {
        name: "Joe Green",
        url: "https://unsplash.com/@jg"
      }
    ),
    newItem(
      {
        title: "Chinatown",
        subtitle: "Sollicitudin tincidunt",
        description: "Morbi eget tellus vitae eros ultrices condimentum eget at libero.",
      }, {
        file: "lily-banse-e1Rc28R4qoA-unsplash.jpg",
      }, {
        name: "Lily Banse",
        url: "https://unsplash.com/@lvnatikk"
      }
    ),
    newItem(
      {
        title: "Urban",
        subtitle: "Fermentum efficitur",
        description: "Suspendisse quis ante molestie, dictum purus at, ultrices orci.",
      }, {
        file: "hanson-lu-ShUDNP6EV-I-unsplash.jpg",
      }, {
        name: "Hanson Lu",
        url: "https://unsplash.com/@hansonluu"
      }
    ),
    newItem(
      {
        title: "Town",
        subtitle: "Ligula laoreet gravida",
        description: "Aliquam tristique purus in odio blandit, id aliquet leo consectetur.",
      }, {
        file: "zhu-hongzhi-tzFVsg6nWtM-unsplash.jpg",
      }, {
        name: "Zhu Hongzhi",
        url: "https://unsplash.com/@zhuzhutrain"
      }
    ),
  ]
}

export const portrait: Collection = {
  name: "Portrait",
  items: [
    newItem(
      {
        title: "pink stare",
        subtitle: "Consectetur adipiscing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      }, {
        file: "jessica-felicio-_cvwXhGqG-o-unsplash.jpg",
        md: true,
      }, {
        name: "Jessica Felicio",
        url: "https://unsplash.com/@jekafe"
      }
    ),
    newItem(
      {
        title: "brown smile",
        subtitle: "Nunc et ante",
        description: "Vestibulum pretium mauris sit amet sodales sagittis.",
      }, {
        file: "janko-ferlic-XbxQbS1NMKE-unsplash.jpg",
        md: true,
      }, {
        name: "Janko Ferlič",
        url: "https://unsplash.com/@itfeelslikefilm"
      }
    ),
    newItem(
      {
        title: "gray scaled",
        subtitle: "Praesent auctor",
        description: "Aliquam euismod nisi quis orci sodales, a tincidunt massa luctus.",
      }, {
        file: "alexander-krivitskiy-RQXbElUwn4Q-unsplash.jpg",
        md: true,
      }, {
        name: "Alexander Krivitskiy",
        url: "https://unsplash.com/@krivitskiy"
      }
    ),
    newItem(
      {
        title: "bright white",
        subtitle: "Morbi eget tellus",
        description: "Vestibulum eget nisi dignissim, placerat purus et, vestibulum quam.",
      }, {
        file: "shane-devlin-kWqT9-dNgq0-unsplash.jpg",
        md: true,
      }, {
        name: "Shane Devlin",
        url: "https://unsplash.com/@tintedprism"
      }
    ),
    newItem(
      {
        title: "smiling teeth",
        subtitle: "Eget mattis",
        description: "Nam tempor nisi sodales erat facilisis, eget mattis nisl hendrerit.",
      }, {
        file: "amir-seilsepour-Pc0ToyoR5Xo-unsplash.jpg",
        md: true,
      }, {
        name: "Amir Seilsepour",
        url: "https://unsplash.com/@amiresel"
      }
    ),
    newItem(
      {
        title: "snow shade",
        subtitle: "In facilisis nibh",
        description: "Pellentesque malesuada lectus vitae metus sollicitudin pretium.",
      }, {
        file: "seth-doyle-BZ2PNGD5Emw-unsplash.jpg",
        md: true,
      }, {
        name: "Seth Doyle",
        url: "https://unsplash.com/@sethdoylee"
      }
    ),
    newItem(
      {
        title: "focused red",
        subtitle: "Aenean tincidunt",
        description: "Quisque sed nibh commodo, tincidunt magna vitae, fermentum urna.",
      }, {
        file: "qasim-sadiq-MVOI2b2nDTE-unsplash.jpg",
        md: true,
      }, {
        name: "Qasim Sadiq",
        url: "https://unsplash.com/@qasimsadiq"
      }
    ),
    newItem(
      {
        title: "orange flower",
        subtitle: "Integer at nisl",
        description: "Phasellus eget ex pulvinar, commodo sapien sed, finibus risus.",
      }, {
        file: "julian-wan-2EdIX-O2lkI-unsplash.jpg",
        md: true,
      }, {
        name: "Julian Wan",
        url: "https://unsplash.com/@julianwan"
      }
    ),
    newItem(
      {
        title: "crayon blue",
        subtitle: "Morbi ut quam",
        description: "Duis vitae mauris sagittis, vulputate dui et, volutpat tellus.",
      }, {
        file: "shayan-rti-jdEpyyu3dDo-unsplash.jpg",
        md: true,
      }, {
        name: "Shayan Rostami",
        url: "https://unsplash.com/@shayan_rostami"
      }
    ),
    newItem(
      {
        title: "red squid",
        subtitle: "Aenean condimentum",
        description: "Aliquam gravida tellus ut dui posuere suscipit.",
      }, {
        file: "ahmadreza-najafi-0mKIh0uNcc4-unsplash.jpg",
        md: true,
      }, {
        name: "Ahmadreza Najafi",
        url: "https://unsplash.com/@ahmadreza7shot"
      }
    ),
  ]
}

export const architecture: Collection = {
  name: "Architecture",
  items: [
    newItem(
      {
        title: "",
      },
      {
        file: "danist-dqXiw7nCb9Q-unsplash.jpg",
      },
      {
        name: "贝莉儿 DANIST",
        url: "https://unsplash.com/@danist07",
      },
    ),
    newItem(
      {
        title: "",
      },
      {
        file: "kinshuk-bose-oXHCpSjWSqs-unsplash.jpg",
      },
      {
        name: "Kinshuk Bose",
        url: "https://unsplash.com/@kinshuk_bose",
      },
    ),
    newItem(
      {
        title: "",
      },
      {
        file: "ricardo-gomez-angel-opFPVxMRpP8-unsplash.jpg",
      },
      {
        name: "Ricardo Gomez Angel",
        url: "https://unsplash.com/@ripato",
      },
    ),
    newItem(
      {
        title: "",
      },
      {
        file: "takuya-jodai-czqLkGwTvkc-unsplash.jpg",
      },
      {
        name: "Takuya Jodai",
        url: "https://unsplash.com/@takuyajodai",
      },
    ),
    newItem(
      {
        title: "",
      },
      {
        file: "er-raj-5ZQum_bxg0g-unsplash.jpg",
      },
      {
        name: "Er Raj",
        url: "https://unsplash.com/@rajkaustubh32",
      },
    ),
    newItem(
      {
        title: "",
      },
      {
        file: "benn-mcguinness-_FKNQ9jWARU-unsplash.jpg",
      },
      {
        name: "Benn McGuinness",
        url: "https://unsplash.com/@blouism_",
      },
    ),
    newItem(
      {
        title: "",
      },
      {
        file: "hoch3media-oUo_qauFRms-unsplash.jpg",
      },
      {
        name: "hoch3media",
        url: "https://unsplash.com/@hoch3media",
      },
    ),
    newItem(
      {
        title: "",
      },
      {
        file: "jose-maria-sava-fWNJEUIWvFQ-unsplash.jpg",
      },
      {
        name: "Josè Maria Sava",
        url: "https://unsplash.com/@jose_maria_sava",
      },
    ),
    newItem(
      {
        title: "",
      },
      {
        file: "jisun-han-viBh9587oNc-unsplash.jpg",
      },
      {
        name: "Jisun Han",
        url: "https://unsplash.com/@hanzlog",
      },
    ),
    newItem(
      {
        title: "",
      },
      {
        file: "david-vives-_cbdlNbWvWg-unsplash.jpg",
      },
      {
        name: "David Vives",
        url: "https://unsplash.com/@davidvives",
      },
    ),
  ]
}

export const shopping: Collection = {
  name: "Shopping",
  items: [
    newItem(
      {
        title: "",
      },
      {
        file: "kyler-boone-c8UArlRU9Wg-unsplash.jpg",
      },
      {
        name: "Kyler Boone",
        url: "https://unsplash.com/@kylerb",
      },
    ),
    newItem(
      {
        title: "",
      },
      {
        file: "jon-ly-Xn7GvimQrk8-unsplash.jpg",
      },
      {
        name: "Jon Ly",
        url: "https://unsplash.com/@jonatron",
      },
    ),
    newItem(
      {
        title: "",
      },
      {
        file: "charles-deluvio--79h5kXs6Mw-unsplash.jpg",
      },
      {
        name: "Charles Deluvio",
        url: "https://unsplash.com/@charlesdeluvio",
      },
    ),
    newItem(
      {
        title: "",
      },
      {
        file: "david-dvoracek-QiPe0UpC0_U-unsplash.jpg",
      },
      {
        name: "David Dvořáček",
        url: "https://unsplash.com/@dafidvor",
      },
    ),
    newItem(
      {
        title: "",
      },
      {
        file: "markus-winkler-PQmXUxmfR44-unsplash.jpg",
      },
      {
        name: "Markus Winkler",
        url: "https://unsplash.com/@markuswinkler",
      },
    ),
    newItem(
      {
        title: "",
      },
      {
        file: "charles-deluvio-kyD7I53MEuE-unsplash.jpg",
      },
      {
        name: "Charles Deluvio",
        url: "https://unsplash.com/@charlesdeluvio",
      },
    ),
    newItem(
      {
        title: "",
      },
      {
        file: "bhawin-jagad-GQgnlIrMGII-unsplash.jpg",
      },
      {
        name: "Bhawin Jagad",
        url: "https://unsplash.com/@bhawinjagad",
      },
    ),
    newItem(
      {
        title: "",
      },
      {
        file: "syafiq-ikmal-OhTngOxx3mo-unsplash.jpg",
      },
      {
        name: "Syafiq Ikmal",
        url: "https://unsplash.com/@syapek",
      },
    ),
    newItem(
      {
        title: "",
      },
      {
        file: "lily-banse-C93HrzumjI0-unsplash.jpg",
      },
      {
        name: "Lily Banse",
        url: "https://unsplash.com/@lvnatikk",
      },
    ),
    newItem(
      {
        title: "",
      },
      {
        file: "chan-HNbo4jSxQAY-unsplash.jpg",
      },
      {
        name: "Chan",
        url: "https://unsplash.com/@chanportofolio",
      },
    ),
  ]
}
