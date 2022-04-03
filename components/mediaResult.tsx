import { useState } from "react";
import { Media } from "../graphql/schema/graphql"
import styles from "../styles/mediaResult.module.css"


export const MediaResult = (props: {m: Media}) => {

    const {m} = props;

    const [show, setShow] = useState(false);

    return <div key={m.id} className={styles.mediaResult}>
    <div className={styles.mediaTitle}>
      {m.title ? `${m.title.native} (${m.title.english})`: "Title not found!"}
    </div>
    <div>
      <span>💗: {m.favourites} <button onClick={() => setShow(!show)}>{show ? "close description" : "description"}</button></span>
    </div>
    <div>
      {show ? m.description : null} {show ? <button onClick={() => setShow(!show)}>close description</button> : null}
    </div>
  </div>
}