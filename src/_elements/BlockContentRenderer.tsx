import BlockContent from '@sanity/block-content-to-react'
import React from 'react'

type BlockContentProps = { blocks: any }

const BlockContentRenderer = ({ blocks }: BlockContentProps): JSX.Element => {
  const BlockRenderer = (props: any) => {
    const { style = 'normal' } = props.node

    switch (style) {
      case 'h1':
        return <h1 className="text-3xl font-bold">{props.children}</h1>
      case 'h2':
        return <h2 className="text-2xl font-bold">{props.children}</h2>
      case 'blockquote':
        return (
          <blockquote className="font-serif text-lg italic">
            {props.children}
          </blockquote>
        )
      default:
        return <p className="pb-12 text-base">{props.children}</p>
    }
  }

  return (
    <BlockContent
      blocks={blocks}
      serializers={{ types: { block: BlockRenderer } }}
    />
  )
}

export default BlockContentRenderer
