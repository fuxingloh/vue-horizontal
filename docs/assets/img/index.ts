export interface Item {
  id: string;

  title: string;
  subtitle?: string;
  description?: string;

  img: {
    alt: string;
    srcset: SrcSet;
    credit: Credit;
  };
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

function newItem(title: string, src: { file: string, md?: boolean, lg?: boolean }, credit: Credit): Item {
  const id = Math.floor(Math.random() * 999999999);

  return {
    id: `${id}`,
    title: title,
    img: {
      alt: title,

      srcset: {
        sm: `/img/singapore/sm/${src.file}`,
        md: src.md ? `/img/singapore/md/${src.file}` : undefined,
        lg: src.lg ? `/img/singapore/lg/${src.file}` : undefined,
      },

      credit: credit
    },
  }
}

export const singapore: Collection = {
  name: "Singapore",
  items: [
    newItem("Marina Bay Sands", {
      file: "hu-chen-__cBlRzLSTg-unsplash.jpg",
    }, {
      name: "Hu Chen",
      url: "https://unsplash.com/@huchenme"
    }),
    newItem("Gardens by the Bay", {
      file: "sergio-sala-VbB6HYunm04-unsplash.jpg",
    }, {
      name: "Sergio Sala",
      url: "https://unsplash.com/@sergiosala"
    }),
    newItem("Fireworks", {
      file: "k8-KqkSoXWabJ8-unsplash.jpg",
    }, {
      name: "K8",
      url: "https://unsplash.com/@k8_iv"
    }),
    newItem("Cloud Forest", {
      file: "yuiizaa-september-BvG0I_bv4BI-unsplash.jpg",
    }, {
      name: "Yuiizaa September",
      url: "https://unsplash.com/@yuiizaa"
    }),
    newItem("Jewel", {
      file: "joe-green-9yoPzIns9G4-unsplash.jpg",
    }, {
      name: "Joe Green",
      url: "https://unsplash.com/@jg"
    }),
    newItem("Chinatown", {
      file: "lily-banse-e1Rc28R4qoA-unsplash.jpg",
    }, {
      name: "Lily Banse",
      url: "https://unsplash.com/@lvnatikk"
    }),
    newItem("Urban", {
      file: "hanson-lu-ShUDNP6EV-I-unsplash.jpg",
    }, {
      name: "Hanson Lu",
      url: "https://unsplash.com/@hansonluu"
    }),
    newItem("Town", {
      file: "zhu-hongzhi-tzFVsg6nWtM-unsplash.jpg",
    }, {
      name: "Zhu Hongzhi",
      url: "https://unsplash.com/@zhuzhutrain"
    }),
  ]
}

export const portrait: Collection = {
  name: "Portrait",
  items: []
}
