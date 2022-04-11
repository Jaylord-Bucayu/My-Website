import react from 'react';


const Home = () => {

   const semi = ()=>{
       return( "{");
   }

   const semiEnd = ()=>{
    return( "}");
}
    return(
        <div className='home'>
            <div className="home-main">
                <div className="numbers">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>

                <div className='home-details'>
                <h2 className="home-title">.hi I am, <br/>
                .Jaylord-Bucayu {semi()}
                </h2>
                <div className="home-title-info">
                <p className="home-subtitle">aspiring :Full Stack Developer 100%;</p>
                <p className="home-subtitle">coding : since 2018;</p>
                <p className="home-subtitle">&:focus : var(--helping-&-learning);</p>
                </div>
                <h2 className="home-title">{semiEnd()}</h2>
                </div>
            </div>
            <div className="home-img">
                    <img src={process.env.PUBLIC_URL + '/images/pp.jpg'} alt=""/>
            </div>
        </div>
    )
}

export default Home;