import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { formatTime } from "@helpers";

const Item = ({ track }) => {
    return (
        <div className="card">
            <Link to={`/artist/${track.artist.id}`}>
                <img alt={track.title} src={`${track.album.cover_big}`} />
            </Link>
            <div className="card_content">
                <div>
                    <div className="card_track_title">{track.title}</div>
                    <div className="card_track_duration">{formatTime(track.duration)}</div>
                </div>
                <div className="card_artist_name">by {track.artist.name}</div>
                <div className="card_track_album">{track.album.title}</div>
            </div>
        </div>
    );
};

const TrackItem = ({ track }) => {
    return (
        <>
            <Item track={track} />
        </>
    );
};

TrackItem.propTypes = {
    track: PropTypes.object
};

export default TrackItem;
