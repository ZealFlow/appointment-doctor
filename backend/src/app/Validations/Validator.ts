const Joi = require('joi');

export class Validator {
    private data: any;

    constructor(data: any) {
        this.data = data;
    }

    register () {
        const rule = Joi.object({
            name: Joi.string().min(6).max(225).required(),
            email: Joi.string().min(6).max(225).required().email(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,20}$')).required(),
        });

        return rule.validate(this.data);
    };
};