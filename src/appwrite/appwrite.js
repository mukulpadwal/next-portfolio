import conf from "@/conf/conf";
import { Client, Databases, Query } from "appwrite";

const client = new Client();

client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectID);

const databases = new Databases(client, conf.appwriteDatabaseID);

export const promise = databases.listDocuments(
  conf.appwriteDatabaseID,
  conf.appwriteCollectionID,
  [
    Query.select([
      "type",
      "title",
      "summary",
      "thumbNailImg",
      "deployedLink",
      "githubRepoLink"
  ]),
  ]
);
