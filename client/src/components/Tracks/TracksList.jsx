import React, { useState, useEffect } from "react";
import { makeRequest } from "@api";
import { searchUrl } from "@helpers";
//import SearchInput from "@components/common/Search/SearchInput";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TrackItem from "@components/Tracks/TrackItem";
import "./Tracks.scss";

const TracksList = () => {
    const [tracks, setTracks] = useState(null);
    const [searchParam, setSearchParam] = useState("");

    async function getResults(searchParam) {
        try {
            const result = await makeRequest(searchUrl, searchParam);

            if (!result.status === 200) {
                const message = `An error has occured: ${result.status} - ${result.statusText}`;
                throw new Error(message);
            }
            setTracks(result);
        } catch (err) {
            setTracks(err.message);
        }
    }

    useEffect(() => {
        getResults("ordinary world");
    }, [searchParam]);

    useEffect(() => {
        return () => {
            window.removeEventListener("keydown", handleKeypress);
        };
    }, []);

    const handleSearch = (value) => {
        setSearchParam(value);
    };

    const handleKeypress = (event) => {
        if (event.key === "Enter") {
            return searchParam !== "" ? getResults(searchParam) : null;
        } else {
            return false;
        }
    };

    const handleSubmit = () => {
        return searchParam !== "" ? getResults(searchParam) : null;
    };

    return (
        <>
            <div className="search_header">
                <div className="search">
                    <input
                        className="search_input"
                        type="text"
                        onChange={(e) => handleSearch(e.target.value)}
                        onKeyPress={(e) => handleKeypress(e)}
                        onClick={(e) => (e.target.value = "")}
                        placeholder="Search for tracks"
                    />
                    <span className="search_span">
                        <FontAwesomeIcon
                            icon={faSearch}
                            onClick={(e) => handleSubmit()}
                            className="search_icon"
                        />
                    </span>
                </div>
            </div>

            <div className="cards">
                {tracks?.data?.message ? (
                    <>
                        {tracks?.data?.message?.data?.map((track) => {
                            return <TrackItem track={track} key={track.id} />;
                        })}
                    </>
                ) : (
                    <div className="loading">Loading...</div>
                )}
            </div>
        </>
    );
};

export default TracksList;
