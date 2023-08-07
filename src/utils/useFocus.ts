import { useEffect, useRef } from "react"
import { Item } from "../types"

export const useFocus = () => {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    ref.current?.focus()

    return () => {

    }
  }, [])

  return ref
}

export const findItemIndexById = <T extends Item> (items: T[], id: string) => {
  return items.findIndex((item: T) => item.id === id)
}