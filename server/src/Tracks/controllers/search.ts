import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../../constants";

interface SearchTrackResponse {
    id: number;
    title: string;
    title_short: string;
    title_version: string;
    link: string;
    duration: string;
    rank: string;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
}

const Search = async (req: Request, res: Response, next: NextFunction) => {
    const param: string = req.params.param;

    const result: AxiosResponse = await axios.get(
        `${BASE_URL}search?q=${param}`
    );

    const tracks: [SearchTrackResponse] = result.data;

    return res.status(200).json({
        message: tracks,
    });
};

export default { Search };
