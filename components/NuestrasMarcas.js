import React from "react";
import CardMarcas from "./Card/CardMarcas";

const marcas = [
	{
		id: 1,
		nombre: "AMELOW",
		description:
<<<<<<< HEAD
			"El lujo y el misticismo del color morado, el optimismo y la alegría del amarillo, se unieron para darle vida a Amelow, una marca sofisticada que te llenará de intensas emociones gracias a su amplia de esmaltes para uñas, y todo lo que necesitas para lucir una manicura y pedicura llena de glamour.",
		imagen: "/imagen/amelow.png",
	},
=======
			"Siéntete en confianza, segura y con mucha actitud en nuestro espacio exclusivo, donde nuestros profesionales te brindarán la mejor atención y calidad en cada uno de nuestros servicios.",
		imagen: "/imagen/image9.png",
	},
	// {
	// 	id: 2,
	// 	nombre: "AMELOW",
	// 	description:
	// 		"Siéntete en confianza, segura y con mucha actitud en nuestro espacio exclusivo, donde nuestros profesionales te brindarán la mejor atención y calidad en cada uno de nuestros servicios.",
	// 	imagen: "/imagen/image9.png",
	// },
>>>>>>> f558da54841eda176051b149814931bf929403ab
];

const NuestrasMarcas = () => {
    return (
        <section
            id='marcas'
            className='px-3 py-20 md:py-32  md:px-16 lg:py-36 lg:px-20  space-y-5'
        >
            <h2 className='pb-10 text-black text-center text-4xl lg:text-5xl font-bold '>
                Nuestras Marcas
            </h2>

            <div className='w-full grid grid-cols-1 gap-5 even:grid-flow-col-dense rounded-xl'>
                {marcas.map((marca) => (
                    <CardMarcas key={marca.id} marca={marca} />
                ))}
            </div>
        </section>
    );
};

export default NuestrasMarcas;
