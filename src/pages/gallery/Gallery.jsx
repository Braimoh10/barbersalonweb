import {Image6 } from "../../assets/images"
import Header from "../../components/Header"
import { images } from "../../constant/data"

const Gallery = () => {
  return (
    <>
      <Header BackgroundImage={Image6}>
        <h1 className="text-lg md:text-4xl font-bold uppercase md:mt-16">
          gallery
        </h1>
        <p className="text-sm md:text-md mt-4 text-center capitalize">
          crafting sharp styles and confident looks with precision and care
        </p>
      </Header>
      <section className="px-8 md:px-16 xl:px-32 py-8">
        <div className="max-container">
            <h1 className="text-white text-md md:text-2xl font-semibold capitalize mb-5 ">explore our work from modern to classic cuts</h1>
            <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-5">
              {
                images.map((image)=>{
                  return(
                    <div key={image.src} className="aspect-w-1 aspect-h-1">
                      <img src={image.src} 
                      alt={image.alt}
                      className="h-72 md:h-full w-full object-cover rounded-lg border-2 border-golden-brown"/>
                    </div>
                  )
                })
              }
            </div>
        </div>
      </section>
    </>
  )
}
export default Gallery