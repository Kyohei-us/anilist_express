import { gql } from 'graphql-tag';

export const GetMedia = gql`
    query GetMedia($page: Int, $perPage: Int, $type: MediaType, $sort: [MediaListSort]) {
        Page(page: $page, perPage: $perPage) {
            mediaList(type: $type, sort: $sort, userName: "k3n3n12") {
          		media {
                    title {
                        english
                        native
                        romaji
                        userPreferred
                    }
                    type
                    description
                    id
                    idMal
                    favourites
                    format
                    genres
                    hashtag                
                }
            }
        }
    }
`