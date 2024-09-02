import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: "dcyqf4tzd",
  api_key: "323153255691428",
  api_secret: "aQmwczM2-Ccbq3x6zL8k8IyOspM",
});

export const cld = globalThis.cloudinary || cloudinary;

if (process.env.NODE_ENV !== "production") globalThis.cloudinary = cld;