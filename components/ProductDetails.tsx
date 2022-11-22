import { useEffect, useState } from 'react'
import axios from 'axios'

/* eslint-disable @next/next/no-img-element */

type ProductDetailsProps = {
  primary_image?: string | null
  title?: string | null
  sku?: string | null
}

const defaultTitle = 'RTG Frontend Technical Assessment'

export default function ProductDetails({ primary_image = null, title = null, sku = null }: ProductDetailsProps) {
  return (
    <div className="details">
      <img src={primary_image || 'no-image'} alt={title || defaultTitle} />
      <h2>{title || defaultTitle}</h2>
      <h4>SKU: {sku || '000000'}</h4>
    </div>
  )
}
