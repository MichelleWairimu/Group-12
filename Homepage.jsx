import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"

export default function Home() {
  return (
    <>  
    
        <Header />
      
        <div className="home">
           
            <Sidebar className="sidebar"/>
           
            <section className='container'>
                <div className='card'>
                    <div className='card-image social-workplace' ></div>
                    <h2>Africa the heart of tourism</h2>
                    <p>While Africa certainly has some of the most extensive wildlife viewing opportunities and one of the seven summits, there are many other reasons to travel to Africa. The African continent teems with unique landscapes, ancient history, geographical wonders and active adventures.</p>
                    <a href=''>READ MORE</a>
                    <button className='share-button'>SHARE</button>
                    <button className='comment-button'>comment</button>
                    <button className='like-button' id="likeButton">
                    <span id="likeIcon">❤️</span> Like
</button>

                </div>
                <div className='card'>
                    <div className='card-image nature-walk'></div>
                    <h2>Best Tourist destinations</h2>
                    <p>With a world full of fascinating travel destinations, choosing the perfect vacation spot can present a challenge.U.S. News used expert opinions, reader votes and current trends – and evaluated sights, cultures, scenic beauty, food options and more – to compile this list of the world's best places to visit. 
                </p>
                <a href=''>READ MORE</a>
                <button className='share-button'>SHARE</button>
                    <button className='comment-button'>comment</button>
                    <button className='like-button' id="likeButton">
                    <span id="likeIcon">❤️</span> Like
</button>
                </div>
                <div className='card'>
                    <div className='card-image nature-drive'></div>
                    <h2>7 wonders of the world</h2>
                    <p>The Seven Wonders of the World are a group of places around the globe that are considered to be of great importance. These are: The Colosseum in Italy, Petra in Jordan, Chichén Itzá in Mexico, Christ the Redeemer in Brazil, Machu Picchu in Peru, Taj Mahal in India and The Great Wall of China.</p>
                    <a href=''>READ MORE</a>
                    <button className='share-button'>SHARE</button>
                    <button className='comment-button'>comment</button>
                    <button className='like-button' id="likeButton">
                    <span id="likeIcon">❤️</span> Like
</button>
                </div>
                <div className='card'>
                    <div className='card-image nature-fist'></div>
                    <h2>Best Islands</h2>
                    <p>Sprawling beaches, rich cultures and untouched pockets of wilderness are just a few alluring characteristics of the best islands in the world.experts and U.S. News readers, each of the beautiful islands listed here boasts a little something extra that keeps travelers enchanted – whether it's impressive coastlines, immersive experiences or the ease of getting there. Use this list to start planning your island getaway.</p>
                    <a href=''>READ MORE</a>
                    <button className='share-button'>SHARE</button>
                    <button className='comment-button'>comment</button>
                    <button className='like-button' id="likeButton">
                    <span id="likeIcon">❤️</span> Like
</button>
                </div>
                <div className='card'>
                    <div className='card-image nature-draw'></div>
                    <h2>Mysterious places to visit</h2>
                    <p>Planet Earth is a wondrous place that never ceases to amaze with its majestic natural wonders and jaw-dropping man-made marvels. But our planet isn't without its fair share of mysteries, either. If you're fascinated by places with mythical origins or unexplained phenomena that will give you goosebumps, you'll be intrigued by these enigmatic spots around the world.</p>
                    <a href=''>READ MORE</a>
                    <button className='share-button'>SHARE</button>
                    <button className='comment-button'>comment</button>
                    <button className='like-button' id="likeButton">
                    <span id="likeIcon">❤️</span> Like
</button>
                </div>
              
            </section>
            
            
            
        </div>
        
    </>
  )
}
