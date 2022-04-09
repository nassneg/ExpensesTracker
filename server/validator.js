const validator = require("validator");
const Ajv = require("ajv");
ajv = new Ajv({ allErrors: true, coerceTypes: true, useDefaults: "empty" });

require("ajv-keywords")(ajv);
require("ajv-formats")(ajv);
require("ajv-errors")(ajv);

const FormValidator = (req, res, next) => {
  let schema = {
    type: "object",
    properties: {
      category: {
        enum: [
          "food",
          "clothing",
          "transportation",
          "housing",
          "utilities",
          "medical",
          "entertainment",
          "personal",
        ],
        errorMessage: {
          enum: "Please choose the appropriate category",
        },
      },
      amount: {
        type: "number",
        errorMessage: {
          type: "Please enter the number",
        },
      },

      text: {
        type: "string",
        minLength: 1,
        maxLength: 100,
        transform: ["trim"],
        errorMessage: {
          minLength: "Please enter your expense",
          maxLength: "Your expense is too long",
        },
      },
    },
    required: ["text", "amount", "category"],
    additionalProperties: true,
    errorMessage: {},
  };

  const validate = ajv.compile(schema);
  validate(req.body);
  res.locals.errors = validate.errors;
  console.log(validate.errors);
  next();
};

exports.FormValidator = FormValidator;
