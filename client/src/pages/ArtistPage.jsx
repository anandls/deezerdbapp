import React from 'react';
import { useParams } from 'react-router-dom';
import ArtistDetail from '@components/Artist/ArtistDetail';

const ArtistPage = () => {
    const { id } = useParams();
    const intId = parseInt(id);
    return <ArtistDetail id={intId} />;
};

export default ArtistPage;
