import React from 'react'
import Image from 'next/image';
import CardNosotros from "./CardNosotros";

const nosotros = [
	{
		id: 1,
		titulo: "Maquillaje",
		description:
			"Crea maquillajes de impacto con efecto duradero y resalta tus ojos con colores vibrantes y brillantes ideales para el día o la noche.",
		imagen: "/imagen/image2.png",
	},
	{
		id: 2,
		titulo: "Cuidado Personal",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut leo vitae nisi cursus vestibulum in vitae augue. ",
		imagen: "/imagen/image3.png",
	},
	{
		id: 3,
		titulo: "Barbershop	",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut leo vitae nisi cursus vestibulum in vitae augue. ",
		imagen: "/imagen/image4.png",
	},
	{
		id: 4,
		titulo: "Innovacion",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut leo vitae nisi cursus vestibulum in vitae augue.",
		imagen: "/imagen/image1.png",
	},
];

const Nosotros = () => {

	return (
		<section id="nosotros" className="p-3 md:p-20 lg:py-20 pb-20">
			<div className="flex justify-center">
				<h1 className="text-primary text-4xl font-cd md:text-5xl lg:text-7xl">
					Ankara{" "}
					<span className="text-primary font-ps text-4xl lg:text-6xl font-medium">
						es..
					</span>
				</h1>
			</div>
			<div className="p-10 lg:p-14">
				<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
					{nosotros.map((item) => (
						<CardNosotros key={item.id} info={item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Nosotros;
