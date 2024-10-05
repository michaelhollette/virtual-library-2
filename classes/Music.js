// import the Media class:
const Media = require('./Media.js')
// create your Music class:
class Music extends Media{
    constructor(title, year, genre,artist,length){
        super(title, year, genre)
        this.artist = artist;
        this.length = length;
    }
    summary(){
        return`Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`
    }
    static shortestAlbum(musicArray){
        let shortestAlbum = musicArray[0];
        for (let album of musicArray){
            if(shortestAlbum.length > album.length){
                shortestAlbum = album;

            }
        }
        return shortestAlbum
    }
}
const music1 = new Music('Lemonade', 2016, 'R&B', 'Beyonce', 'Lemonade', 3949);
const music2 = new Music('Renaissance', 2022, 'R&B', 'Beyonce', 'Beyonce', 3734);
Media.totalMediaCount; // 2
music2.summary(); // "Title: Renaissance, Artist: Beyonce, Year: 2022, Genre: R&B, Length: 3734 seconds"
console.log(Music.shortestAlbum([music1, music2])); // Returns music2
// don't change below
module.exports = Music;
