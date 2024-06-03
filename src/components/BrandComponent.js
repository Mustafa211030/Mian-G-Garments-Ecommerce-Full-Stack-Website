import React from 'react';
import './BrandComponent.css';
import Navbar from './Navbar';

const brands = [
    {
        name: 'Bonanza Satrangi',
        description: 'Quality and excellence in every piece.',
        icon: 'https://cdn.iconscout.com/icon/free/png-512/free-king-1409999-1192966.png?f=webp&w=256'
    },
    {
        name: 'Gul Ahmed',
        description: 'Innovative designs for modern living.',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAS1BMVEVHcEy50oG31H6qyGvW2c25zY+kxV37+vuqzVqQvhaRvxyXwS+/z52rzWX///+SvyGSvyOZv0Pp5umzzH+Uwx/J26Tw7fSmsYijr4QXEGlnAAAAGXRSTlMA0//GS5H5VsD///92/1D///8nwP+1T1BQL+6OcgAAALNJREFUeAHV00UCwjAQQNFfb4wh9ftfFCeB6rpvE/cMx5I0yHKeijJWVVCrQBsLOKVjzQVquUa+oVWxKNd5h85S6r0Oqsf/lg86nGMGMQP0aruDLoHGq60OoguAxunu69mhC3zBWz5O49vUEPM5X80Q5FSx8G1OjP56LhEKUlqenJL1Tcr7fxR7x3RApvcuqjm+6hP+B11Q6p0ZxDcki8BROugsNP6nQi6QuOD9OE3mooojdxjtMerUS02RAAAAAElFTkSuQmCC'
    },
    {
        name: 'Khadi',
        description: 'Craftsmanship at its finest.',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAk1BMVEVHcEz4ZjwXExgaGh71Yzv4ZDv1Yzv2Yzv4Zjz5ZTukUTP7Zzz3ZTz2Yzv2ZDv2Yzu+XzrLYjr3Yzv4ZzznYTrrYjoaHB/CVzYnHx8nHh8+IyHtZjwyGx2DQS1jOSr2Yzv8Zjz+az7ZYzuRRi6DPyxsNCfmZzxcMSb/dkOjSzByOSkSEhs9JSH/g0hSKyS7UzTubD/P70eAAAAAH3RSTlMAGCO9ku7C5EkqCdc5tfioD/tgIn/S3P7sjm771VfLwuRd0QAAATxJREFUKJHFkdduwzAMRRUvecYjtrPaUlu2vPL/X1cpfWia9LklJAjg4SXES4T+PXbx7ve8uwUuD6+owfvigDAARMkzy20WgnjvniYpyx8FpctGgYO4tXr83XyXFAAEcOZKcGZLwiaJqy8WZCEAtcdeIJQACcuMBgidPXQ5jhtVnNGRD0CYUHQzRqjrGZ1S743pcVFzXU8TJXScxCLnTWt2Qv3ZHwczCzkzXgsxMFPrRZrhJj981Pu9g3rVTJp5Ho6TmRiXAxUX/962dm1XsQo+HfnKteZacd/rkW8/xMVIlZHbsHAp2HKTfF3le+UjL0VV23UASrk52NUOojpWtxXy7oOmeRICIQ7uM+sPOcRx+uBfZEln82FrzQqenI+tb421D+dxFKTomQa5kxe/7vq+OBy9iB7kL4v+8/gEeV8kXfhmk7kAAAAASUVORK5CYII='
    },
    {
        name: 'Asim Joffa',
        description: 'Elegance and style redefined.',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABYlBMVEVHcEzElC3cqEfYnyrXqkPHli7Pmy3XpkDInD+7m02xhjCpgDHbqDK6kDSpdhaxfyfFlTHcqy7Bmj5cRBp/BgTJkyVsAADYkwtuXjYiIDPzsCrhnhKvgCfnqyrMkx+6izDhtU+ngDOXZRvRnCvJkyl2AAbux2urfirTkhTcng7ChxbKlB/76qSUWSOugCzJpD2shCu9ji6gVCfHlit2AAB4AABgShlkRxuteRWSaBTSmyqDHRj8tAq9hAy0exDoohLLx8bHDgDMkiLlrjSPAwC3mo7FAACwqqrJlzPDo5vcAADLrqXjaWCnaF+0VkbsAwCKXROUZRHvpgrKUhPRwqjyqhfV0c6UdXLJv7yzop2kdGzHiX3QNhy6sK2sqKuaAAD2Jhi1bF/TopW5hHqbDAO5AQCCAACsh4OnbxS7hibSnUTMoWXKeDr2vlSQkpXOhVrjOiS0lXmNkI/DPSPdTkDZVj5rYkkJAAAARHRSTlMAcDa8TH2pa5AhhzeSVewfZXpIKPu5W/0GGpv8cb+NxYI/WODQqSzF9uzslwpwnFkw7+L57uRCQcvE2Kf//////////q2dHnsAAAF6SURBVCiRzZFXTwJREEaXLWxhV4r03lGkhGbBrSC9g1FUmtLs3f/vIsWY4KvxPM3ck0xmvgsA/xoJ+rvDFSi+3uh3EASmEMmOfo1UJCEVKlFBrnWjpWEyFAyGyLD057vcCms0To/6SER96NS4Qat8tSNmdaHa9lVBEIROqcRr4aQUQeZOJoEwQDu9yJb55w7/nr3KaAEMQh0z5yTMmAxO9D6K5W47lyvX3rpxL4WZCbMoqYiP8OGTy2HtjM+9nuRq59WJ3EdE8orZVAXstgHq8bQ6OH3snQ6qlbEa0LgpVCZKKE3iDtAzEoaX54XSRaUijDw4hWNpi5gGCCstqpgj0c+eFYrFTCbbj8tiKgsJgvN97Shp90Yz93yrdfL0EvWiSqU9sLhTmTdgKY5+OL5l2LvjfJOmjYEbYiGNKRtjoum0jmFZRpemaY6xpZYhGrnrBsdt+TdE/NvbJlOqzjaXUr7F1vcN31EbDhqMbnPV7n2XX2zurvm2v+ETB+w81BsGb7YAAAAASUVORK5CYII='
    },
    {
        name: 'J.',
        description: 'Affordable luxury for everyone.',
        icon: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIEwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTUrOjo6IyszRD8xNy0tMC0BCgoKDQwNGg8PGjclHyU3NzU3NzU1NTU1LTUtNzc1Li0tNS01KzU1ODU3LS01ODUyNTQ1LS0zLS4uLi4tLSs1Nf/AABEIABwAHAMBEQACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAADBQYEAgH/xAArEAABAwIEAwgDAAAAAAAAAAABAAIDBBEFMTJxBiGxEjRhc3SBkdEHFRb/xAAbAQACAwADAAAAAAAAAAAAAAAEBQACAwEGB//EACMRAAIBBAEEAwEAAAAAAAAAAAABAgMEESExEhNBcQUiMgb/2gAMAwEAAhEDEQA/AJ1Idnq/sp+BqGixXEnUUtIyRjYHSB1yDcEfaKt0pPDEXy9arbxUoS8iCvdG6qkDYmxNa5zQ1t7ct1hUxnCGlr1dvMnls5h0HdUeTdoCpgsnsrfxjb+jk9JJ1ajLX9CD+gz2o+yXq+9z+Y/qhp8scW26aPYdB3VFs15AjNWwuDiclGPU/Bd8IYVPgHE7mTOjANC+QuY64aCRmUbRpunLZ1f5K6jd0F21vIixyPA/1NLPDM5+ISzEztJPIWNzbfs/KxrdCjmPIysJXffcai+iWhPDo90K3hjjjgCclytRyR7js2S4pXzRuhdVyvjI7JBOYGQPgtJVZtcgULSjGXUo7MQVJLAdwkw8Ok7qJJ7ZGj//2Q=='
    },
    {
        name: 'Lime Light',
        description: 'Timeless classics for your wardrobe.',
        icon: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLUktMTU3OjpCIzc/RDM4Qyw5OisBCgoKDQwNGg8PGjUlHyU3NzcrNzc3Ny03NTgxNzc3LTI4NTU3LzgyLS03NTc3LTc2LDY1LTUtKzY1LTc1NzU1Lf/AABEIABwAHAMBEQACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAACBQADBwb/xAArEAACAQIEAwcFAAAAAAAAAAABAgQAAwUGETESssEhNnFygZPRExQ0QWH/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIEBQP/xAAkEQACAgECBgMBAAAAAAAAAAAAAQIDEQU0BDEyQWHwISKRE//aAAwDAQACEQMRAD8AyLLkG1iONRYt8t9K4TxcJ0OgUnpVRWWZ+MulTTKceaBzBDt4fi0mJZJNu2wC8W+wPWlJYeB8La7qYzlzYtpHuSgB7krvNC8X5Gq49Ri1Laz97oDOPeOd5xyilPqHp+1gJak2EoGPcmdmZYWum78jVUH9jDqW1n73Q9x7KM/EsWky7F6Ktu6wKh2cHYD9L/KuVbbyc7hdVoppjCSeV4FE/J2IwYd6VcvRWS0vEwRm109VAqXW0smynVaLpqEU8vwc6QQag6QaMyEOjFWXtBB0Ip8mDSawy77+bp+XI91vmllk/wAa8dK/AWmSrqlLsm86ndWuEijLBVwXyoop1IoPQ//Z'
    },
    {
        name: 'Zelbury',
        description: 'Sustainability meets fashion.',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABxklEQVR4AcWXA3AtQRBF99sqfds2C9+2bdu2bTu27RRjlmLbTsqdnrg3mqfJVN2n6e5znneluqv90OUvMaDhlLXq2KuNJF/4YAfcjBEgAG37zNxI4G16Dh+IG54YEJQilNjBXgkGv0o3haaYCdxvQQFoVGDuhvMQnpANSVklTSYurRDWHX7QKOD4rc+QmFlcUdtt9Bo+gemrTvHAicTCbVebhCsk0HPcerB0C+AWwFrWQ2YcvPKOwO+81eN6C4jExce/4cqzfzX5ru+sOpxXQJ4xCw5BUHiyCnAOAbFwIiAeTgQEwzkEVIBfffZPxR8iFeBXZPBOI1bCy58WYOrky8IvgIOahe+7+KZZ+C8jVzJHMYEm4LvOvYSEjCKF4OEJOfwCk5cfh51nX7CoDT5vwwV+ARrNwamAeDgVEA+nAuLhVEA8nAqoCicC2eAdGkfyWceB1fML7DjznMDPP/wlbyTHBjzBen6Bcw9+1jSeufe9wcb1hx9AXHohF5zVYT2/AHsP2Uu+5eTTJt+/JbtusLpmg3W8nwHxYQJL8YZzC8Dj8ezouVS98M5mgXBndi4qyRdu2IoQwFd9kNTQwo0FmPsazrW6zHItH4uuArfNcgAAAABJRU5ErkJggg=='
    },
];

const BrandComponent = () => {
    return (
    <>
    <Navbar />
        <div className="brand-container">
            
            <div className="brand-list">
                {brands.map((brand, index) => (
                    <div key={index} className="brand-item">
                        <img src={brand.icon} alt={`${brand.name} icon`} className="brand-icon" />
                        <h3>{brand.name}</h3>
                        <p>{brand.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};



export default BrandComponent;
