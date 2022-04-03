import { useQuery } from '@apollo/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GetMedia } from '../graphql/gqlQueries'
import { useInput } from '../hooks/useInput'
import { useState } from 'react'
import { Media } from '../graphql/schema/graphql'
import { MediaResult } from '../components/mediaResult'

const Home: NextPage = () => {

  // x: y renames destructured variable x to y
  const {input: page, bind: bindPage, reset: resetPage} = useInput(1)

  const {input: perPage, bind: bindPerPage, reset: resetPerPage} = useInput(1)

  const [type, setType] = useState("ANIME");

  const {loading, error, data} = page && perPage ? useQuery(GetMedia, {
    variables: {
      page: page,
      perPage: perPage,
      type: type,
      sort: ["POPULARITY_DESC"]
    }
  }) : useQuery(GetMedia, {
    variables: {
      page: page ? page : 1,
      perPage: perPage ? perPage : 1,
      type: type,
      sort: ["POPULARITY_DESC"]
    }
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.inputFields}>
          <div className={styles.inputField}><label>Page: <input type="number" value={page} {...bindPage} /></label></div>
          <div className={styles.inputField}><label>PerPage: <input type="number" value={perPage} {...bindPerPage} /></label></div>
          <div className={styles.inputField}><label>
            Type: 
            <div className={styles.inputField}><input type="radio" onChange={() => setType("ANIME")} checked={type == "ANIME"} /> ANIME </div>
            <div className={styles.inputField}><input type="radio" onChange={() => setType("MANGA")} checked={type == "MANGA"} /> MANGA </div>
          </label></div>
        </div>

        <div className={styles.searchResult}>
          {loading ? "loading..." : 
            data.Page.media.map((m: Media) => {
              if (!m)
                return <></>
              return <MediaResult m={m} />
            })}
        </div>

      </main>
    </div>
  )
}

export default Home
