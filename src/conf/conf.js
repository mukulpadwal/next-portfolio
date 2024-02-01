const conf = {
  appwriteUrl: String(process.env.NEXT_PUBLIC_APP_APPWRITE_URL),
  appwriteApiKey: String(process.env.NEXT_PUBLIC_APP_APPWRITE_API_KEY),
  appwriteProjectID: String(process.env.NEXT_PUBLIC_APP_APPWRITE_PROJECT_ID),
  appwriteDatabaseID: String(process.env.NEXT_PUBLIC_APP_APPWRITE_DATABASE_ID),
  appwriteCollectionID: String(
    process.env.NEXT_PUBLIC_APP_APPWRITE_COLLECTION_ID
  ),
  hashnodeHost: String(process.env.NEXT_PUBLIC_APP_HASHNODE_HOST),
  resumeLink: String(process.env.NEXT_APP_RESUME_LINK),
};

export default conf;
