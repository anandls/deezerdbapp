import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../../constants";

// interface ArtistDetails {
//     id: number;
//     name: string;
//     link: string;
//     share: string;
//     picture: string;
//     picture_small: string;
//     picture_medium: string;
//     picture_big: string;
//     picture_xl: string;
//     nb_album: number;
//     nb_fan: number;
//     radio: boolean;
//     TracksList: string;
//     type: string;
// }

// interface ArtistAlbum {
//     id: number;
//     title: string;
//     link: string;
//     cover: string;
//     cover_small: string;
//     cover_medium: string;
//     cover_big: string;
//     cover_xl: string;
//     md5_image: string;
//     genre_id: number;
//     fans: number;
//     release_date: string;
//     record_type: string;
//     TracksList: string;
//     explicit_lyrics: boolean;
//     type: string;
// }

// interface ArtistAlbum {
//     id: number;
//     title: string;
//     link: string;
//     cover: string;
//     cover_small: string;
//     cover_medium: string;
//     cover_big: string;
//     genre_id: number;
//     fans: number;
//     release_date: string;
//     record_type: string;
//     TracksList: string;
//     explicit_lyrics: boolean;
// }

// interface ArtistTopTracks {
//     id: number;
//     title: string;
//     title_short: string;
//     title_version: string;
//     link: string;
//     duration: number;
// }

// interface ArtistResponse {
//     artist: ArtistDetails;
//     tracks: ArtistTopTracks;
//     albums: ArtistAlbum;
// }

const getArtistDetails = async (id: number) => {
    let result: AxiosResponse = await axios
        .get(`${BASE_URL}artist/${id}`)
        .then((res) => res.data)
        .catch((err) => err);

    return result;
};

const getArtistAlbums = async (id: number) => {
    let result: AxiosResponse = await axios
        .get(`${BASE_URL}/artist/${id}/albums`)
        .then((res) => res.data)
        .catch((err) => err);

    return result;
};

const getArtistTopTracks = async (id: number) => {
    let result: AxiosResponse = await axios
        .get(`${BASE_URL}/artist/${id}/top`)
        .then((res) => res.data)
        .catch((err) => err);

    return result;
};

const Artist = async (req: Request, res: Response, next: NextFunction) => {
    const artistId: number = parseInt(req.params.id);

    const artistDetails = await getArtistDetails(artistId);
    const artistTopTracks = await getArtistTopTracks(artistId);
    const artistAlbums = await getArtistAlbums(artistId);

    const mergedResponse = Object.assign(
        {},
        { artist: artistDetails },
        { tracks: artistTopTracks },
        { albums: artistAlbums }
    );

    return res.status(200).json({
        mergedResponse,
    });
};

export default { Artist };
