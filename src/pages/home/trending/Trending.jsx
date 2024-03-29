import React, { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/contentWrapper';
import '../home.scss';
import SwitchTabs from '../../../components/switchtab/switchtab.jsx';
import useFetch from '../../../hooks/useFetch.jsx';
import Carousel from '../../../components/carousel/carousel.jsx';

const Trending = () => {
    const[endPoint,setEndPoint]=useState("day");
    const {data,loading}=useFetch(`/trending/movie/${endPoint}`)
    const onTabChange = (tab) => {
     setEndPoint(tab==="day"?"day":"week")
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">
                    Trending
                </span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
          
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading}></Carousel>
        </div>
    );
};

export default Trending;
