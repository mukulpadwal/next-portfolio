import conf from "@/conf/conf";

export const gql = async (query) => {
  const data = await fetch(`https://gql.hashnode.com`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });

  return data.json();
};

export const GET_USER_ARTICLES = `
  query Publication {
      publication(host: "${conf.hashnodeHost}") {
        posts(first:20){
          edges {
            node {
              id,
              slug,
              title,
              url,
              cuid,
              coverImage {
                url
              },
              brief,
              readTimeInMinutes,
              publishedAt
              
            }
          }
        }
      }
    }
  `;
