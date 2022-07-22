const videoCard=({video})=>{

    const{
            _id:videoId,
            title:videoTitle,
            creator:videoCreator,
            description:videoDiscription,
            logo:videoLogo,
            views,
            dateAdded,
          } = video;
    
    return(
        <div>
            videos
        </div>
    );
}
export {videoCard};