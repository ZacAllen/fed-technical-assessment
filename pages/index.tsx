import type { NextPage } from 'next'
import Head from 'next/head'
import ProductDetails from 'components/ProductDetails'
import ProductVariations from 'components/ProductVariations'
import { useEffect, useState } from 'react'

const title = 'RTG Frontend technical assessment'

const PDP: NextPage = () => {
  const [data, getData] = useState(Object)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000/api/product')
      .then((response) => {
        if (!response.ok) {
          setError(true)
          setLoading(false)
          throw new Error('Product not found!')
        }
        response.json().then((data) => {
          getData(data), setLoading(false)
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1>{title}</h1>
        <section className="product">
          {loading ? (
            <div>Loading...</div>
          ) : !error ? (
            <>
              <ProductDetails primary_image={data?.primary_image} title={data?.title} sku={data?.sku} />
              <ProductVariations sizes={data?.variations.size} finish={data?.variations.finish} />
            </>
          ) : (
            <>
              <div>Product not found, please try again...</div>
            </>
          )}
        </section>
      </main>
    </div>
  )
}

export default PDP
