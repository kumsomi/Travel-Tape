const videoListing=({videos})=>{

    return(
        <div>
            {videos.map((video)=>(
                <videoCard key={video._id} video={video}/>
            )
            )}
        </div>
    )
}
export {videoListing}