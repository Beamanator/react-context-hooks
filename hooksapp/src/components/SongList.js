import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";

export default function SongList() {
    const [songs, setSongs] = useState([
        { title: "almost home", id: 1 },
        { title: "memory gospel", id: 2 },
        { title: "this wild darkness", id: 3 },
    ]);
    const [age, setAge] = useState(20);

    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid() }]);
    };

    useEffect(
        () => {
            // runs every time component renders / re-renders
            console.log("useEffect hook ran", songs);
        },
        // (optional) array of data to 'watch'
        // -> callback will run ONLY when data in this array changes
        [songs]
    );

    useEffect(() => {
        console.log("useEffect hook ran", age);
    }, [age]);

    return (
        <div className="song-list">
            <ul>
                {songs.map((song) => (
                    <li key={song.id}>{song.title}</li>
                ))}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
        </div>
    );
}
