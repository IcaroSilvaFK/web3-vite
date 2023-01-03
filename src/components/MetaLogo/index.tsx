import { useEffect, useRef } from 'react'
// @ts-ignore
import ModelViewer from '@metamask/logo'

type MetaMaskPositions = {
  positions: number[][]
  chunks: {
    color: number[]
    faces: number[][]
  }[]
}

interface IMetamaskLogo {
  meshJson: MetaMaskPositions
}

export function MetamaskLogo({ meshJson }: IMetamaskLogo) {
  const metaRef = useRef<HTMLDivElement>(null)

  useEffect(
    () => {
      const widthFox = 300
      const heightFox = widthFox * 0.8
      const followMouse = true
      const viewer = ModelViewer({
        pxNotRatio: true,
        width: widthFox,
        height: heightFox,
        followMouse,
        slowDrift: false,
        meshJson,
      })
      if (metaRef && metaRef.current && metaRef.current.children.length === 0) {
        metaRef.current.appendChild(viewer.container)
      }
      return () => {
        if (metaRef && metaRef.current && metaRef.current.children.length > 0)
          metaRef.current.removeChild(metaRef.current.children[0])
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )
  return <div style={{ lineHeight: '0' }} ref={metaRef} />
}
