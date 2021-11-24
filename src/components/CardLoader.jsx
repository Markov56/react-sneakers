import React from "react"
import ContentLoader from "react-content-loader"

const CardLoader = () => (
    <ContentLoader 
    speed={2}
    width={155}
    height={260}
    viewBox="0 0 155 240"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="155" height="90" /> 
    <rect x="0" y="120" rx="3" ry="3" width="155" height="15" /> 
    <rect x="0" y="140" rx="3" ry="3" width="93" height="15" /> 
    <rect x="0" y="180" rx="8" ry="8" width="80" height="24" /> 
    <rect x="124" y="180" rx="8" ry="8" width="32" height="32" />
  </ContentLoader>
)

export default CardLoader;

