import { Fragment, useRef } from 'react';
import Head from 'next/head'
import Blob from '../components/Blob';
import style from './index.css';
import Link from 'next/link'
import Wrench from '../components/Wrench'

function Home() {

    return (
        <Fragment>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Lora&display=swap" rel="stylesheet"></link>
                <style jsx global>{`body { margin: 0; background: #e6dbd1; overflow: hidden;}`}</style>
            </Head>
            <h1 className={style.h1}>R O S E &middot; C &middot; O R S O</h1>
            <h2 className={style.h2} >Site Under Construction</h2>
            <div className={style.wrench}>
                <Wrench />
            </div>
            {/* <ul className={style.ul}>
                <li onMouseOver={handleOnHover} className={style.li}><Link href='/poem'><a>A poem</a></Link></li>
                <li className={style.li}><Link href='/poem'><a>A Story</a></Link></li>
                <li className={style.li}><Link href='/poem'><a>Some other shit</a></Link></li>
                <li className={style.li}><Link href='/poem'><a>Testing</a></Link></li>
            </ul> */}
            <Blob fill={'#d99838'} animate={true} index={0} classes={style.blob_one} />
            <Blob fill={'#75632b'} animate={true} index={7} classes={style.blob_two} />
            <Blob fill={'#c96d27'} animate={true} index={14} classes={style.blob_three} />
            <Blob fill={'#daab8d'} animate={true} index={19} classes={style.blob_four} />
        </Fragment>
    );
};
 
export default Home;