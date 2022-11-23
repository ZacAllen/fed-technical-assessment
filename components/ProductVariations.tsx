/* eslint-disable @next/next/no-img-element */

type ProductVariationsProps = {
  sizes?: [any] | null
  finish?: [any] | null
}

export default function ProductVariations({ sizes, finish }: ProductVariationsProps) {
  return (
    <div className="variations">
      <div className="size">Size</div>
      <hr></hr>
      <ul>
        {sizes?.map((size) => {
          return (
            <li key="{size}" className="list">
              {size?.variation_value}
            </li>
          )
        })}
      </ul>
      <div className="finish">Finish</div>
      <hr></hr>
      <ul>
        {finish?.map((finish) => {
          return (
            <li key="{finish}" className="list">
              {finish?.variation_value}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
