import 'dotenv/config.js';
import City from '../../models/City.js';
import '../../config/database.js';


const create = async (req, res) => {
    
    try {
        await City.create(req.body);
        return res.status(201).json({
            success: true,
            message: 'City created',
            body: req.body
        });
    } catch (error) {
        console.log('error', error);
        return res.status(500).json({
            success: false,
            message: 'Error creating city'
        });
    }
};

const read = async (req, res) => {
    const query = {};
    if( req.query.title ){
        query.title = { $regex : req.query.title, $options:'i' }
    }
    if( req.query.location ){
        query.location = { $regex : req.query.location, $options:'i' }
    }
    if( req.query.briefDescription ){
        query.briefDescription =  {$regex : req.query.briefDescription, $options:'i'}
    }

    try {
        const citiesData = await City.find( query );

        if (!citiesData || citiesData.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No cities found'
            });
        } else {
            return res.status(200).json(citiesData);
        }
    } catch (error) {
        console.error(`Error in getting all cities: ${error}`);
        return res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
};

const createOne = async (req, res) => {
    try {
        const newCity = await City.create(req.body);
        return res.status(201).json({
            success: true,
            message: 'City created',
            data: newCity
        });
    } catch (error) {
        console.log('error', error);
        return res.status(500).json({
            success: false,
            message: 'Error creating city'
        });
    }
};

const readOne = async (req, res) => {
    const cityId = req.params._id;

    try {
        const city = await City.findById(cityId);

        if (!city) {
            return res.status(404).json({
                success: false,
                message: 'City not found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'City retrieved successfully',
            data: city
        });
    } catch (error) {
        console.error(`Error retrieving city: ${error}`);
        return res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
};

const update = async (req, res) => {
    const cityId = req.params._id;

    try {
        const updatedCity = await City.findByIdAndUpdate(
            cityId,
            req.body,
            { new: true }
        );

        if (!updatedCity) {
            return res.status(404).json({
                success: false,
                message: 'City not found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'City updated successfully',
            data: updatedCity
        });
    } catch (error) {
        console.error(`Error updating city: ${error}`);
        return res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
};

const remove = async (req, res) => {
    const cityId = req.params._id;

    try {
        const deletedCity = await City.findByIdAndDelete(cityId);

        if (!deletedCity) {
            return res.status(404).json({
                success: false,
                message: 'City not found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'City deleted successfully',
            data: deletedCity
        });
    } catch (error) {
        console.error(`Error deleting city: ${error}`);
        return res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
};
export default { create, read, createOne, readOne, update, remove };
