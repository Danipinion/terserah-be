import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const getReviews = async (req, res) => {
	try {
		const response = await prisma.reviews.findMany();
		res.status(200).json(response);
	} catch (error) {}
};
export const createReviews = async (req, res) => {
	const { stars, description, name, category } = req.body;
	try {
		const reviews = await prisma.reviews.create({
			data: {
				stars,
				description,
				name,
				category,
			},
		});
		res.status(201).json(reviews);
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
};
