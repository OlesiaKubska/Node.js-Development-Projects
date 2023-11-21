import Contact from "../models/Contacts.js";
import { HttpError } from "../helpers/index.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

const listContactsById = async (req, res) => {
    const result = await Contact.find();
    res.json(result);
};

const getById = async (req, res) => {
    const result = await Contact.findById(req.params.contactId);
    if (!result) {
        throw HttpError(404, 'Not found');
    }
    res.json(result);
};

const addContactById = async (req, res) => {
    const { error } = contactAddSchema.validate(req.body);
    if (error) {
        throw HttpError(400, 'missing required name field');
    }
    const newContact = await Contact.create(req.body);
    res.status(201).json(newContact);
};

const removeContactById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndRemove(contactId);
    if (!result) {
        throw HttpError(404, 'Not found');
    }

    res.json({
        message: 'contact deleted'
    });
};

const updateContactById = async (req, res, next) => {
    const { error } = contactUpdateSchema.validate(req.body);
    if (error) {
        throw HttpError(400, 'missing fields');
    }
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body);
    if (!result) {
        throw HttpError(404, 'Not found');
    }
    res.json(result);
};

const updateFavorite = async (req, res) => {
    const { error } = contactFavoriteSchema.validate(req.body);
    if (error) {
        throw HttpError(400, 'missing field favorite');
    }
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, { favorite: req.body.favorite }, { new: true });
    if (!result) {
        throw HttpError(404, 'Not found');
    }
    res.json(result);
};

export default {
    listContactsById: ctrlWrapper(listContactsById),
    getById: ctrlWrapper(getById),
    removeContactById: ctrlWrapper(removeContactById),
    addContactById: ctrlWrapper(addContactById),
    updateContactById: ctrlWrapper(updateContactById),
    updateFavorite: ctrlWrapper(updateFavorite),
}