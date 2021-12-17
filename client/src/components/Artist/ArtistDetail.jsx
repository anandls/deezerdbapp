import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { makeRequest } from "@api";
import { artistUrl, formatTime, formatNumber } from "@helpers";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Artist.scss";

const ArtistInfo = ({ artist }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/");
    };

    return (
        <>
            {artist ? (
                <div className="artist_info">
                    <div>
                        <FontAwesomeIcon icon={faHome} onClick={handleClick} className="home" />
                        <h1>{artist.name}</h1>
                        <div className="fans">
                            <span className="fans_no">{formatNumber(artist.nb_fan)}</span>
                            <span>/fans</span>
                        </div>
                    </div>
                    <div className="right">
                        <img
                            src={artist.picture_medium}
                            alt={artist.name}
                            className="artist_picture"
                        />
                    </div>
                </div>
            ) : null}
        </>
    );
};

const ArtistTracks = ({ tracks }) => {
    return (
        <>
            {tracks ? (
                <div className="tracks">
                    {tracks?.data?.map((track, index) => {
                        const formatDuration = formatTime(track.duration);

                        return (
                            <div key={track.id} className="track">
                                <div className="track_index">{index + 1}</div>
                                <div>{track.title}</div>
                                <div className="duration">{formatDuration}</div>
                            </div>
                        );
                    })}
                </div>
            ) : null}
        </>
    );
};

const ArtistAlbums = ({ albums }) => {
    return (
        <>
            {albums ? (
                <div className="albums">
                    {albums?.data?.map((album) => {
                        return (
                            <div key={album.id} className="album">
                                <div>
                                    <img src={album.cover_medium} alt={album.title} />
                                </div>
                                <div>
                                    {album.title} -
                                    {album.explicit_lyrics ? <span>Yes</span> : <span>No</span>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : null}
        </>
    );
};

const ArtistDetail = ({ id }) => {
    const [artistData, setArtistData] = useState(null);

    useEffect(() => {
        async function getResults() {
            try {
                const result = await makeRequest(`${artistUrl}/${id}`);

                if (!result.status === 200) {
                    const message = `An error has occured: ${result.status} - ${result.statusText}`;
                    throw new Error(message);
                }
                setArtistData(result);
            } catch (err) {
                setArtistData(err.message);
            }
        }

        getResults();
    }, [id]);

    return (
        <>
            {artistData?.data?.mergedResponse ? (
                <div className="section">
                    <div className="artist__grid">
                        <div className="span-2">
                            <div className="artist">
                                <ArtistInfo artist={artistData?.data?.mergedResponse?.artist} />
                            </div>
                        </div>
                        <div className="artist_tracks">
                            <div>
                                <h2>Top Tracks</h2>
                                <ArtistTracks tracks={artistData?.data?.mergedResponse?.tracks} />
                            </div>
                        </div>
                    </div>
                    <div className="artist__grid albums">
                        <div>
                            <h2>Albums</h2>
                            <ArtistAlbums albums={artistData?.data?.mergedResponse?.albums} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="loading">Loading...</div>
            )}
        </>
    );
};

ArtistDetail.propTypes = {
    id: PropTypes.number
};

export default ArtistDetail;
