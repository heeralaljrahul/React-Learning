import profilePic from "./assets/Mira.jpg";
//You need to import the image to be able to use it in the compaonents
function Card (){
    return (
        //img is used to display or add an image
        //src is used to spcify the path of where the image is, this could be online or it could be in your local files
        //all assets like images or a a video should be in the assets folder


        <div className="card">
            {/* you use the import than you named the picture in order to be able to use it */}
            <img className="card-image" src={profilePic} alt="Profile Photo of the user"></img>
            <h2>Rift</h2>
            <p>I am an IT Lecturer and I teach students from first year and the way to third year level.</p>
        </div>
    );
}

export default Card;