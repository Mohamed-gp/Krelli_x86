import prisma from "../prisma/client.js";
import {v2 as cloudinary} from 'cloudinary';
import multer from 'multer';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer({ dest: "uploads/" });
// we should add the storage middleware to the route that will handle the file upload
//like this: app.post("/test",storage.array('files'), async (req, res) => {....});
// the files is the input field name





const addHome = async (req, res) => {
	const { title, wilaya, price, bathrooms, bedrooms, guests } = req.body;

	const userId = req.user.userId;

	if (!title || !wilaya || !price || !bathrooms || !bedrooms || !guests || !req.files) {
		return res.status(400).send("All fields are required");
	}
	const pictures = req.files.map((file) => {
        return file.path;
    });
    const uploadedPictures = await Promise.all(pictures.map((picture) => cloudinary.uploader.upload(picture)));
    const pictureUrls = uploadedPictures.map((picture) => picture.url);
    console.log(pictureUrls);
    const home = await prisma.home.create({
        data: {
            title,
            wilaya,
            price,
            bathrooms,
            bedrooms,
            guests,
            userId,
            description: req.body.description? req.body.description : "",
            pictures: {
                create: pictureUrls.map((url) => ({
                    url,
                })),
            },
        },
    });

    res.json(home);
};
