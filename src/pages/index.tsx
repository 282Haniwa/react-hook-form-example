import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { Accordion } from 'src/components/commons/Accordion'
import { Example1 } from 'src/components/Example1'
import { Example2 } from 'src/components/Example2'
import { Example3 } from 'src/components/Example3'
import { Example4 } from 'src/components/Example4'
import styles from 'src/styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>react-hook-formの布教用</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Accordion label="通常のフォーム">
          <Example1 />
        </Accordion>
        <Accordion label="バリデーション">
          <Example2 />
        </Accordion>
        <Accordion label="パフォーマンス">
          <Example3 />
        </Accordion>
        <Accordion label="フィールドのリスト">
          <Example4 />
        </Accordion>
      </main>
    </div>
  )
}

export default Home
