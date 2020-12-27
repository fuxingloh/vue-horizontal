export interface Item {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  img: string;
  credit: {
    name: string;
    url: string;
  };
}

export interface Collection {
  name: string;
  description?: string;
  items: Item[]
}

export const singapore: Collection = {
  name: "Singapore",
  items: [
    {
      id: "singapore-1",
      title: "Marina Bay Sands",
      img: "/img/singapore/hu-chen-__cBlRzLSTg-unsplash.jpg",
      credit: {
        name: "Hu Chen",
        url: "https://unsplash.com/@huchenme"
      }
    },
    {
      id: "singapore-2",
      title: "Gardens by the Bay",
      img: "/img/singapore/sergio-sala-VbB6HYunm04-unsplash.jpg",
      credit: {
        name: "Sergio Sala",
        url: "https://unsplash.com/@sergiosala"
      }
    },
    {
      id: "singapore-3",
      title: "Fireworks",
      img: "/img/singapore/k8-KqkSoXWabJ8-unsplash.jpg",
      credit: {
        name: "K8",
        url: "https://unsplash.com/@k8_iv"
      }
    },
    {
      id: "singapore-4",
      title: "Cloud Forest",
      img: "/img/singapore/yuiizaa-september-BvG0I_bv4BI-unsplash.jpg",
      credit: {
        name: "Yuiizaa September",
        url: "https://unsplash.com/@yuiizaa"
      }
    },
    {
      id: "singapore-5",
      title: "Jewel",
      img: "/img/singapore/joe-green-9yoPzIns9G4-unsplash.jpg",
      credit: {
        name: "Joe Green",
        url: "https://unsplash.com/@jg"
      }
    },
    {
      id: "singapore-6",
      title: "Chinatown",
      img: "/img/singapore/lily-banse-e1Rc28R4qoA-unsplash.jpg",
      credit: {
        name: "Lily Banse",
        url: "https://unsplash.com/@lvnatikk"
      }
    },
    {
      id: "singapore-7",
      title: "Urban",
      img: "/img/singapore/hanson-lu-ShUDNP6EV-I-unsplash.jpg",
      credit: {
        name: "Hanson Lu",
        url: "https://unsplash.com/@hansonluu"
      }
    },
    {
      id: "singapore-8",
      title: "Town",
      img: "/img/singapore/zhu-hongzhi-tzFVsg6nWtM-unsplash.jpg",
      credit: {
        name: "Zhu Hongzhi",
        url: "https://unsplash.com/@zhuzhutrain"
      }
    }
  ]
}
