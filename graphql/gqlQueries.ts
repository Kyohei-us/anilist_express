import { gql } from 'graphql-tag';

export const GetMedia = gql`
    query GetMedia($page: Int, $perPage: Int, $type: MediaType, $sort: [MediaSort]) {
        Page(page: $page, perPage: $perPage) {
            media(type: $type, sort: $sort) {
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
`