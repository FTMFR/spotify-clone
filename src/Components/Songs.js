const Songs = [
    {
        id: 1,
        favourite: false,
        songName: "Non Stop2",
        artist: "BLH remix",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-a24c8.appspot.com/o/songs%2FBLH-RemixNonStop-2-320.mp3?alt=media&token=a8b5eeb5-33d1-4335-8c0a-c5f41f7bc4d4",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-a24c8.appspot.com/o/images%2Fnirvana-reza-pishro-rail-records-2558-musicworx.jpg?alt=media&token=1fd4bfdd-6107-42c2-a30d-cdf74d503b09"
    },
    {
        id: 2,
        favourite: false,
        songName: "Chak kosh",
        artist: "021G",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-a24c8.appspot.com/o/songs%2FChak%20Kosh%20by%20021G.mp3?alt=media&token=695168b2-6ce6-4439-ae8b-9af46d117959",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-a24c8.appspot.com/o/images%2Fchak%20kosh.jpg?alt=media&token=06716fe7-1f38-4c80-ad2c-79cafcc65481"
    },
    {
        id: 3,
        favourite: false,
        songName: "Hala Chi",
        artist: "Poori",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-a24c8.appspot.com/o/songs%2FPoori%20-%20Hala%20Chi%20(Official%20Music%20Video)%20(Shot%20On%20IPhone%20By%20%40AkioXo)%20by%20Khode%20Mmd.mp3?alt=media&token=707b165c-de9a-4832-b574-df1e09262221",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-a24c8.appspot.com/o/images%2FRemix%20-%20Pishro%2C%20Sorena%2C%20021G%2C%20Putak%2C%20Ribar%20by%20Remix%20Rapfa.jpg?alt=media&token=924188ed-9cba-4639-9e8e-ee35c961354a"
    },
    {
        id: 4,
        favourite: false,
        songName: "Bale Chorban",
        artist: "Pishro",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-a24c8.appspot.com/o/songs%2FReza%20Pishro%2C%20Putak%20-%20Bale%20Ghorban%20by%20Arsham.mp3?alt=media&token=00b147d4-1de2-4edb-9445-365de37833db",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-a24c8.appspot.com/o/images%2FPishro%20x%20Ho3ein%20x%20Yas%20x%20Sorena%20x%202Pac%20by%20Remix%20Rapfa.jpg?alt=media&token=7210b4ca-5551-4f13-8991-27157f4ac92c",
    },
    {
        id: 5,
        favourite: false,
        songName: "Naanga Vera Maari",
        artist: "Yuvan Shankar Raja",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-a24c8.appspot.com/o/songs%2FStream%20Hichkas%20x%20Shayea%20x%20Ho3ein%20x%20Pishro%20x%20Tyga%20x%20Khalvat%20x%20Sorena%20-%20Fohsh%20Remix%20by%20Remix%20Rapfa%20-%20Listen%20online%20for%20free%20on%20SoundCloud.mp3?alt=media&token=12a58f4a-298c-4f6e-9b9a-a200e8dc5349",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-a24c8.appspot.com/o/images%2FHo3ein%20x%20Pishro%20x%20Khalvat%20x%20Bahram%20x%20Khalse%20x%20Koorosh%20x%20Shayea%20x%20Hiphopologist%20x%20Hichkas.jpg?alt=media&token=35cc4c6e-cc6d-475a-9104-bb0abb44cd00"
    },
    {
        id: 6,
        songName: "Your Woman",
        artist: "White Town",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-a24c8.appspot.com/o/songs%2FStream%20Remix%20Raseb%20%26%20Eb%20Remix%20-%20Belataklif%20(Sorena%20%26%20Sadegh%20%26%20Naaji%20%26%20Eycin%20%26%20Hiphopologist%20%26%20Masin)%20by%20Remix%20Raseb%20-%20Listen%20online%20for%20free%20on%20SoundCloud.mp3?alt=media&token=e877430b-39fb-4ad1-8803-6baa549871fa",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-a24c8.appspot.com/o/images%2FHiphopologist%20x%20Ribar%20x%20Poori%20x%20Eycin%20x%20Chvrsi%20%E2%80%93%20Japan%204%20(Fama%20Remix).jpg?alt=media&token=9cd0aa50-c09f-4251-a238-c514d4ab1294"
    },
    {
        id: 7,
        favourite: false,
        songName: "Charlie",
        artist: "Gopi Sundar",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-a24c8.appspot.com/o/songs%2FVinak%20x%20Ho3ein%20-%20Beshmor%20Remix%20by%20Rap%20Farsi%20New.mp3?alt=media&token=dd83d25b-7667-43a0-82fa-26e639e51c83",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-a24c8.appspot.com/o/images%2FBahram%20x%202Pac%20x%20Erfan%20x%20Biggie%20-%20Ino%20Befahm%20Remix%20by%20Remix%20Rapfa.jpg?alt=media&token=a0c694ac-5d42-4074-bf86-2257e0cd1b3c"
    },
    {
        id: 8,
        favourite: false,
        songName: "Mask Off",
        artist: "Future",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-a24c8.appspot.com/o/songs%2F%D8%AF%D8%A7%D9%86%D9%84%D9%88%D8%AF%20%D8%A2%D9%87%D9%86%DA%AF%20%D8%A7%D9%85%DB%8C%D8%B1%20%D8%AE%D9%84%D9%88%D8%AA%20%D8%B1%D8%A7%D8%B3%D8%AA%DB%8C.mp3?alt=media&token=1eb7ee8d-7473-45f2-8621-ffbeab772aba",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-a24c8.appspot.com/o/images%2FBLH-Remix-NonStop-2-2023-10-03-23-38.jpg?alt=media&token=8a8be576-1236-4472-bdf3-272898c4d8b3"
    },
    {
        id: 9,
        songName: "Your Woman",
        artist: "White Town",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-a24c8.appspot.com/o/songs%2FStream%20Remix%20Raseb%20%26%20Eb%20Remix%20-%20Belataklif%20(Sorena%20%26%20Sadegh%20%26%20Naaji%20%26%20Eycin%20%26%20Hiphopologist%20%26%20Masin)%20by%20Remix%20Raseb%20-%20Listen%20online%20for%20free%20on%20SoundCloud.mp3?alt=media&token=e877430b-39fb-4ad1-8803-6baa549871fa",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-a24c8.appspot.com/o/images%2Fnirvana-reza-pishro-rail-records-2558-musicworx.jpg?alt=media&token=1fd4bfdd-6107-42c2-a30d-cdf74d503b09"
    },
    {
        id: 10,
        favourite: false,
        songName: "Joker - Rock and Roll",
        artist: "Hildur Guðnadóttir",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-a24c8.appspot.com/o/songs%2FPoori%20-%20Hala%20Chi%20(Official%20Music%20Video)%20(Shot%20On%20IPhone%20By%20%40AkioXo)%20by%20Khode%20Mmd.mp3?alt=media&token=707b165c-de9a-4832-b574-df1e09262221",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-a24c8.appspot.com/o/images%2FHo3ein%20x%20Pishro%20x%20Khalvat%20x%20Bahram%20x%20Khalse%20x%20Koorosh%20x%20Shayea%20x%20Hiphopologist%20x%20Hichkas.jpg?alt=media&token=35cc4c6e-cc6d-475a-9104-bb0abb44cd00"
    },
];

export default Songs;