import { generate as generateUrlcode } from "generate-password";

import { UrlPayloadType } from "../types";
import Url from "../models/UrlModels";

// create
export const createUrl = async (payload: UrlPayloadType) => {
    if (!payload.originalLink || !payload.userId) {
        throw Error("Missing required paramaters");
    }

    try {
        let url = new Url(payload);

        //create urlcode
        const urlCode = generateUrlcode({
            length: 8,
            uppercase: true,
        });

        url.urlCode = urlCode;

        url = await url.save();
        return url;
    } catch (error) {
        Error(error);
    }
};