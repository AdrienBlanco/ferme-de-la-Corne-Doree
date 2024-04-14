import TextAndImage from "../../components/TextAndImage/TextAndImage";
import Slideshow from "../../components/Slideshow/Slideshow";
import "./Home.scss"
import homeSlideshow from "../../datas/slideshow.json";

export default function Home() {

    const slideshow = homeSlideshow.homeSlideshow;

    return (
        <main className="home">

            <Slideshow
                array={slideshow}
            />

            <TextAndImage
                sectionClass="textandimage"
                title="Presentation"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dignissimos culpa quisquam corrupti voluptatibus aut tempore recusandae quas beatae sequi iure, odit officiis facere saepe ipsam ratione ut voluptas soluta.
                Exercitationem aspernatur aliquid distinctio sunt officiis architecto, voluptatum fugiat eius pariatur saepe soluta dolore asperiores fugit veniam cupiditate rerum culpa numquam inventore harum adipisci, facere minima quam. Quos, excepturi mollitia.
                Quod, consequatur natus nemo veniam explicabo quae dolorum cum ab autem ea ad quidem fugit! Aliquam neque tempore voluptates similique accusamus corrupti, ut voluptatibus officia quod expedita. Consequatur, quia sint?"
                src="./img/illustration_ferme_de_la_corne_doree.jpg"
                alt="photo de chèvre couché de soleil à la ferme de la corne dorée"
            />
        </main>
    )
};
