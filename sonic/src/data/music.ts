
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
    musicUrl: "https://spotify-seven-silk.vercel.app/songs/Starboy.mp3",
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
    thumbnail: "https://spotify-seven-silk.vercel.app/album/main/dmons.png",
    musicUrl: "https://spotify-seven-silk.vercel.app/songs/Demons.mp3",
    duration: "4:10",
    durationInSeconds: 324,
    colors: {
      from: "rgb(41, 50, 60)",
      via: "rgb(100, 100, 120)",
      to: "rgb(0, 0, 0)"
    }
  },
  {
    id: "3",
    title: "Abyss",
    artistName: "YUNGBLUD",
    thumbnail: "https://spotify-seven-silk.vercel.app/album/main/abys.png",
    musicUrl: "https://spotify-seven-silk.vercel.app/songs/abys.mp3",
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
    musicUrl: "https://spotify-seven-silk.vercel.app/songs/Ghost.mp3",
    duration: "3:10",
    durationInSeconds: 190,
    colors: {
      from: "rgb(75, 110, 180)",
      via: "rgb(150, 200, 255)",
      to: "rgb(0, 0, 0)"
    }
  },
  {
    id: "5",
    title: "Sparks",
    artistName: "Coldplay",
    thumbnail: "https://i.scdn.co/image/ab67616d0000b2738ff7c3580d429c8212b9a3b6",
    musicUrl: "https://spotify-seven-silk.vercel.app/songs/Sparks.mp3",
    duration: "4:23",
    durationInSeconds: 263,
    colors: {
      from: "rgb(235, 175, 75)",
      via: "rgb(255, 200, 100)",
      to: "rgb(0, 0, 0)"
    }
  },
  {
    id: "6",
    title: "Viva La Vida",
    artistName: "Coldplay",
    thumbnail: "https://spotify-seven-silk.vercel.app/album/main/Vivad.png",
    musicUrl: "https://spotify-seven-silk.vercel.app/songs/vivad.mp3",
    duration: "4:10",
    durationInSeconds: 332,
    colors: {
      from: "rgb(198, 135, 70)",
      via: "rgb(100, 50, 30)",
      to: "rgb(0, 0, 0)"
    }
  },
  {
    id: "7",
    title: "Hymn for the Weekend",
    artistName: "Coldplay",
    thumbnail: "https://spotify-seven-silk.vercel.app/album/main/hymn.png",
    musicUrl: "https://spotify-seven-silk.vercel.app/songs/hymn.mp3",
    duration: "4:23",
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
    musicUrl: "https://spotify-seven-silk.vercel.app/songs/pain.mp3",
    duration: "3:12",
    durationInSeconds: 192,
    colors: {
      from: "rgb(215, 135, 180)",
      via: "rgb(100, 50, 90)",
      to: "rgb(0, 0, 0)"
    }
  }
];
