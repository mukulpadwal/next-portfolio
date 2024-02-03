import conf from "@/conf/conf";
import { Client, Databases, Query } from "appwrite";

export class DatabaseService {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectID);
    this.databases = new Databases(this.client, conf.appwriteDatabaseID);
  }

  async getProjects(
    queries = [
      Query.select([
        "type",
        "title",
        "summary",
        "thumbNailImg",
        "deployedLink",
        "githubRepoLink",
      ]),
    ]
  ) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionID,
        queries
      );
    } catch (error) {
      throw error;
    }
  }
}

const database = new DatabaseService();

export default database;
