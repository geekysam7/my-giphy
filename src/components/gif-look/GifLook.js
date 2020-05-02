import React from 'react'

import styles from './GifLook.module.css';

function GifLook(e) {
    return (
        <div className={styles.gifBox}>
            {/* {console.log(e)} */}
            {/* <h2>{}</h2> */}
            <img src={e.url.images.fixed_height.url}alt="loading" className={styles.gifImage}/>
            {/* <a href={e.url.images.downsized.url} download
            className={styles.gifDownload}
            > Download</a> */}
        </div>
    )
}

export default GifLook
