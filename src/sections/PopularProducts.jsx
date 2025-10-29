import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"
const PopularProducts = () => {
  return (
    <section
      id="products"
      className="max-container max-sm:mt-12"
    >
      <div className="felx flex-col justify-start gap-5">

        <h2 className="text-4xl font-palanquin font-bold">Our
          <span className="text-coral-red"> Popular </span>
          Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray"> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia officia in, ratione ea animi modi veniam et maiores cum libero eius est dicta minima unde placeat voluptate consequuntur ex repellendus?</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.id} {...product}/>
        ))}

      </div>

    </section>
  )
}

export default PopularProducts