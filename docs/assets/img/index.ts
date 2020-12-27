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
      img: "/img/singapore/marina-bay-sands.jpg",
      credit: {
        name: "Hu Chen",
        url: "https://unsplash.com/@huchenme"
      }
    },
    {
      id: "singapore-2",
      title: "Gardens by the Bay",
      img: "/img/singapore/gardens-by-the-bay.jpg",
      credit: {
        name: "Sergio Sala",
        url: "https://unsplash.com/@sergiosala"
      }
    },
    {
      id: "singapore-3",
      title: "Singapore Skyline",
      img: "/img/singapore/singapore-skyline.jpg",
      credit: {
        name: "Stephanie Yeh",
        url: "https://unsplash.com/@cheez612"
      }
    },
    {
      id: "singapore-4",
      title: "Cloud Forest",
      img: "/img/singapore/cloud-forest.jpg",
      credit: {
        name: "Yuiizaa September",
        url: "https://unsplash.com/@yuiizaa"
      }
    },
    {
      id: "singapore-5",
      title: "Jewel Changi Airport",
      img: "/img/singapore/jewel-changi-airport.jpg",
      credit: {
        name: "Joe Green",
        url: "https://unsplash.com/@jg"
      }
    },
    {
      id: "singapore-6",
      title: "Chinatown",
      img: "/img/singapore/chinatown.jpg",
      credit: {
        name: "Lily Banse",
        url: "https://unsplash.com/@lvnatikk"
      }
    },
  ]
}
