const conf = {
  appwriteUrl: String(process.env.NEXT_PUBLIC_APP_APPWRITE_URL),
  appwriteApiKey: String(process.env.NEXT_APP_APPWRITE_API_KEY),
  appwriteProjectID: String(process.env.NEXT_PUBLIC_APP_APPWRITE_PROJECT_ID),
  appwriteDatabaseID: String(process.env.NEXT_PUBLIC_APP_APPWRITE_DATABASE_ID),
  appwriteCollectionID: String(process.env.NEXT_PUBLIC_APP_APPWRITE_COLLECTION_ID),
  hashnodeHost: String(process.env.NEXT_PUBLIC_APP_HASHNODE_HOST),
  resumeLink: String(process.env.NEXT_APP_RESUME_LINK),
  emailjsServiceID: String(process.env.NEXT_PUBLIC_APP_EMAILJS_SERVICE_ID),
  emailjsTemplateID: String(process.env.NEXT_PUBLIC_APP_EMAILJS_TEMPLATE_ID),
  emailjsPublicKey: String(process.env.NEXT_PUBLIC_APP_EMAILJS_PUBLIC_KEY),
  contactEmail: String(process.env.NEXT_PUBLIC_APP_CONTACT_EMAIL),
};

export default conf;
