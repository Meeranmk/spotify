
export interface Track {
  id: string;
  title: string;
  artistName: string;
  thumbnail: string;
  musicUrl: string;
  duration: string;
  durationInSeconds: number;
  colors: {
    from: string;
    via: string;
    to: string;
  };
}

export const musicData: Track[] = [
  {
    id: "1",
    title: "Starboy",
    artistName: "The Weeknd",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b273a048415db06a5b6fa7ec4e1a",
    musicUrl: "https://audio-samples.github.io/samples/mp3/sample1.mp3",
    duration: "4:16",
    durationInSeconds: 256,
    colors: {
      from: "rgb(205, 32, 40)",
      via: "rgb(0, 0, 0)",
      to: "rgb(0, 0, 0)"
    }
  },
  {
    id: "2",
    title: "Demons",
    artistName: "Imagine Dragons",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b2737d8a7ab0c5eaa24de45e9f0e",
    musicUrl: "https://audio-samples.github.io/samples/mp3/sample2.mp3",
    duration: "5:24",
    durationInSeconds: 324,
    colors: {
      from: "rgb(41, 50, 60)",
      via: "rgb(0, 0, 0)",
      to: "rgb(0, 0, 0)"
    }
  },
  {
    id: "3",
    title: "Take On Me",
    artistName: "a-ha",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b2737f213369d5265a60af5f7e82",
    musicUrl: "https://audio-samples.github.io/samples/mp3/sample3.mp3",
    duration: "3:45",
    durationInSeconds: 225,
    colors: {
      from: "rgb(65, 105, 165)",
      via: "rgb(30, 40, 80)",
      to: "rgb(0, 0, 0)"
    }
  },
  {
    id: "4",
    title: "Ghost Stories",
    artistName: "Coldplay",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b2738ff7c3580d429c8212b9a3b6",
    musicUrl: "https://audio-samples.github.io/samples/mp3/sample4.mp3",
    duration: "3:10",
    durationInSeconds: 190,
    colors: {
      from: "rgb(75, 110, 180)",
      via: "rgb(0, 0, 0)",
      to: "rgb(0, 0, 0)"
    }
  },
  {
    id: "5",
    title: "Sparks",
    artistName: "Coldplay",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b2738ff7c3580d429c8212b9a3b6",
    musicUrl: "https://audio-samples.github.io/samples/mp3/sample5.mp3",
    duration: "4:23",
    durationInSeconds: 263,
    colors: {
      from: "rgb(235, 175, 75)",
      via: "rgb(0, 0, 0)",
      to: "rgb(0, 0, 0)"
    }
  },
  {
    id: "6",
    title: "Viva La Vida",
    artistName: "Coldplay",
    thumbnail: "/lovable-uploads/73033eb1-1a89-41a2-8ace-10ef01bca36e.png",
    musicUrl: "https://audio-samples.github.io/samples/mp3/sample2.mp3",
    duration: "5:32",
    durationInSeconds: 332,
    colors: {
      from: "rgb(198, 135, 70)",
      via: "rgb(100, 50, 30)",
      to: "rgb(0, 0, 0)"
    }
  },
  {
    id: "7",
    title: "Hymn for the weekend",
    artistName: "Coldplay",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b273f864bcdcc245f06457078abf",
    musicUrl: "https://audio-samples.github.io/samples/mp3/sample3.mp3",
    duration: "2:23",
    durationInSeconds: 143,
    colors: {
      from: "rgb(42, 45, 60)",
      via: "rgb(15, 15, 30)",
      to: "rgb(0, 0, 0)"
    }
  },
  {
    id: "8",
    title: "Pain",
    artistName: "Ryan Jones",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b27384350b406522fc53c1b2a621",
    musicUrl: "https://audio-samples.github.io/samples/mp3/sample1.mp3",
    duration: "3:12",
    durationInSeconds: 192,
    colors: {
      from: "rgb(215, 135, 180)",
      via: "rgb(100, 50, 90)",
      to: "rgb(0, 0, 0)"
    }
  }
];
